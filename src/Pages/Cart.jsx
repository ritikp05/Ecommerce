import React, { useContext } from 'react'
import { DataContext } from '../Context/AppContext'
import { FaStar } from 'react-icons/fa';
import { CiCircleMinus ,CiCirclePlus} from "react-icons/ci";
import { MdDelete } from 'react-icons/md';
import Emptycart from '../Components/Emptycart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
const{state,dispatch}=useContext(DataContext);
const{cartdata}=state;
const navigate=useNavigate();
function removeitem(id){
dispatch({type:"Remove_Cart_item",payload:id})
}


 const a=cartdata.reduce((acc,curval)=>{
      return acc+curval.price*curval.quantity

    },0)
 


return (
  
  <><button className='mt-20 ml-3 bg-slate-600 px-3 py-1  rounded-sm hover:bg-slate-800 text-white' onClick={()=>navigate(-1)}>Go Back</button>
  <div className='mt-10 flex sm:justify-start justify-center mb-6 sm:items-start flex-wrap sm:ml-10  items-center'>
      {cartdata.length>0?
        cartdata.map((item)=>{
return(

  <div className='flex flex-col sm:w-4/5 sm:flex-row   w-60 h-auto flex-wrap  p-2 border-2 justify-start shadow-md rounded-xl shadow-slate-500 items-center m-2' key={item.id}>

<img src={item?.image}  className=' h-44  sm:w-40 sm:h-44 w-40 pt-2' /><h1 className='sm:pl-4  sm:pr-4 text-center font-semibold font-mono sm:text-xl sm:w-52  whitespace-break-spaces'>
    {item.title.substring(0,22)}...  

   </h1>
<p className='  text:lg flex items-center  gap-2'>{item?.rating?.rate}<span className='text-yellow-400'><FaStar/></span></p>
<p className='font-semibold text-lg sm:pl-10 pt-2 sm:pt-0'>
 Price : {item.quantity*item.price}$
</p> 

 <section className='flex sm:pl-6 mt-4 sm:mt-0  justify-center  items-center '>
<div className='flex text-blue-700'><p>Quantity : </p>
<p className=''>{item.quantity}</p>
</div>
<button className='text-3xl px-2 ' onClick={()=>{
  dispatch({type:"INCR",payload:item.id})
}}><CiCirclePlus/></button>
<button className='text-3xl  px-2'  onClick={()=>{
  dispatch({type:"DECR",payload:item.id})
}}><CiCircleMinus /></button>
</section>

 <button onClick={()=>removeitem(item.id)} className='bg-red-500 sm:ml-6 px-6 py-2 sm:mt-2 mt-6  text-xl  rounded-xl text-white active:scale-95 scale-110 '><MdDelete/></button>
  </div>
)
        })
       :<div className='mt-40'><Emptycart/></div>}
    </div>

<div className='m-20'> 
  Total Price - {a}$
</div>
    </>
  )
}

export default Cart