import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { DataContext } from '../Context/AppContext';
import { FaStar } from 'react-icons/fa';
import { MdAddShoppingCart } from "react-icons/md";
import { IoNavigateOutline } from "react-icons/io5";
import {toast } from 'react-toastify';
const Singleproduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state, dispatch } = useContext(DataContext)
  async function getdata() {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({ type: 'Single_Product', payload: data })
  }

  const { singledata, itempresent, cartdata, user } = state;

  useEffect(() => {
    getdata();
  }, [])

  function addToCart() {
    if (user) {
      dispatch({ type: "Add_To_Cart", payload: singledata });
      dispatch({ type: "Item_In_Cart", payload: true });
      console.log(cartdata)
    } else { toast.error("please login first") }
  }



  return (

    <div className='mt-20'>
      <button className=' ml-3 bg-slate-600 px-3 py-1 rounded-sm hover:bg-slate-800 text-white' onClick={() => navigate(-1)}>Go Back</button>


      <section className='flex flex-col   mx-auto items-center w-4/5  gap-3 mb-10'>
        <img src={singledata.image} className='sm:w-1/5 w-2/5  pt-4' />
        <h1 className=' font-semibold text-center font-sans text-2xl w-2/4 whitespace-break-spaces'>
          {singledata.title}
          <p className='flex mt-2 font-mono text-xl font-medium justify-center items-center '>{singledata.rating?.rate} <span className='text-yellow-500'><FaStar /></span></p>
        </h1>
        <p className='text-lg'>{singledata.price} $</p>
        <button className=' bg-blue-500 px-2 py-1 rounded-lg flex items-center gap-1 text-lg font-sans hover:bg-blue-600 text-white' onClick={() => addToCart(singledata.id)}>Add to cart<MdAddShoppingCart /></button>

        {itempresent && <button onClick={() => navigate('/cart')} className=' bg-green-500 px-3 rounded-lg py-1 hover:bg-green-600 text-white flex items-center gap-1' >Go to cart <IoNavigateOutline /></button>
        }
      </section>
    </div>
  )
}

export default Singleproduct
