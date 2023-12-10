import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
const Product = ({ allproducts ,id,loading}) => {
    return (<>

   {/* {loading?<SkeletonLoad/>: */}


        <Link to={`/singleproduct/${id}`} >
            <div className='flex flex-col w-60 sm:h-96 h-96 pt-0 p-4 border-2 justify-center shadow-md rounded-xl shadow-slate-500 items-center gap-3 m-5'>

                <img src={allproducts.image}  className=' h-3/6 w-11/12 pt-4' /><h1 className='text-center font-semibold font-mono  whitespace-break-spaces'>
                    {allproducts.title}  

                </h1>
                <p className='flex justify-center items-center gap-1'>{allproducts.rating.rate} <span className='text-yellow-500'><FaStar /></span><span className='pl-3'>({allproducts.rating.count})</span></p>
                <p>
                    {allproducts.price}$
                </p></div>
                    
        </Link> 
{/* } */}
    </>
    )
}
   
export default Product