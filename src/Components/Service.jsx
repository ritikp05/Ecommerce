import React from 'react'
import { FaTruck } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiRefund2Fill } from "react-icons/ri";

const Service = () => {
    return (
        <>
            <section className='w-5/6 flex justify-center text-xl gap-6 mx-auto mt-9 text-center  bg-orange-300 p-4 shadow-xl shadow-slate-500'>

                <div className='bg-slate-200 my-auto px-2 py-2 rounded-lg'>
               <span ><FaTruck className='mx-auto text-3xl'/></span>     Super Fast Delivery
                </div>
                <div className='flex flex-col gap-6'>
                    <section className='bg-slate-200 px-2 py-2 rounded-lg '>
                    <span ><MdOutlineSecurity className='mx-auto text-3xl'/></span>
                        Non-contact delivery
                    </section>
                    <section className='bg-slate-200 px-2 py-2 rounded-lg'>
                    <span ><RiSecurePaymentLine className='mx-auto text-3xl'/></span>  Super Secure Payemnt System

                    </section>
                </div>
                <div className='bg-slate-200 my-auto px-2 py-2 rounded-lg'>
                <span ><RiRefund2Fill className='mx-auto text-3xl'/></span>
                 
                    Money Back Guarantee
                </div>
            </section>
        </>
    )
}

export default Service