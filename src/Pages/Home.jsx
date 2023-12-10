import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context/AppContext'
import axios from 'axios'
import SearchProduct from '../Components/SearchProduct';
import Product from '../Components/Product';
import SkeletonLoad from './SkeletonLoad';
const Home = () => {
  const [loading, Setloading] = useState(true);
  const { state, dispatch } = useContext(DataContext);
  const [sortdata, setsortdata] = useState("")
  const [error, setError] = useState(false);
  async function getdata() {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setTimeout(() => {
        Setloading(false);
      }, 1000)
      dispatch({ type: 'Add_Product', payload: data })

    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  useEffect(() => {
    getdata();
  }, [])

  const newdata = state.data.filter((alldata) => {
    return alldata.title.toLowerCase().includes(state.query.toLowerCase())
  })

  function changehandler(e) {
    const { value } = e.target;
    setsortdata(value)
  }
  switch (sortdata) {
    case "High to low": newdata.sort((a, b) => b.price - a.price)
      break;
    case "Low to High": newdata.sort((a, b) => a.price - b.price)
      break;
    case "Most Rated":
      newdata.sort((a, b) => b.rating.rate - a.rating.rate)
      break;
  }






  return (<>

    <div className='mt-20 flex sm:flex-row flex-col justify-center w-full sm:gap-10 gap-2'>
      <SearchProduct />
      <select onChange={changehandler} className='focus:outline-none border-2 rounded-lg border-separate  sm:mx-0 px-2 h-9 mx-auto border-gray-400'>
        <option hidden>Sort by</option>
        <option value="High to low">Price -- High to low</option>
        <option value="Low to High">Price -- Low to High</option>
        <option value="Most Rated">Most Rated</option>
      </select>
    </div>

    {loading ?
      <SkeletonLoad    error={error} />

      : <section className='flex flex-wrap justify-center pl-4 pr-4 mt-8  gap-6 w-full'>

        {newdata.map((item) => { return (<Product allproducts={item} loading={loading} key={item.id} id={item.id} />) })}
      </section>
    }
  </>
  )
}

export default Home








