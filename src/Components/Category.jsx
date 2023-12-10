
import React, { useContext } from 'react'
import { DataContext } from '../Context/AppContext';
const Category = ({newdata}) => {
    const {state, dispatch}=useContext(DataContext)
   
  
    // const category=["electronics","jewelery","men's clothing","women's clothing"];
//     function handlefilter(item){
//       const filteredData=copy.filter((data)=>{
//    return data.category===item;
// })
// dispatch({ type: 'Add_Product', payload: data })

// dispatch({type:"Add_Product",payload:filteredData})
//    }

function btn1(){
   const up= newdata.filter((item)=>{
        return item.category==="electronics";
    })
    dispatch({type:'Sort_Product',payload:up})

}


function btn2(){
 const newdata1=newdd.filter((item)=>{
         return item.category==="jewelery"
    })
    dispatch({type:'Sort_Product',payload:newdata1})
}
    return (
    <div>
 {
console.log(newdd)}
      <button onClick={btn1} className='block'>q1111</button>
      <button onClick={btn2}>22222</button>
     
        {/* {category.map((item)=>{return<button key={item} className='bg-red mr' onClick={()=>handlefilter(item)}>{item}</button>})} */}
    </div>
  )
}

export default Category

