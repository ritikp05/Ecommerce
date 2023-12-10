import React from 'react'
import TextField from '@mui/material/TextField';
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  return (
    <div className='  w-full flex flex-col items-center mt-28  shadow-slate-400'>
<h1 className='sm:text-3xl text-2xl italic  bg-blue-700 text-white rounded-t-3xl w-5/6 text-center border-b-8 border-gray-400 sm:p-4 p-3 sm:w-1/2 tracking-widest'>Contact Us</h1>

      <form action='https://formspree.io/f/xdorraaz' className='flex   sm:w-1/2 w-5/6 rounded-b-3xl shadow-lg border-2 sm:p-4 p-2 flex-col justify-center items-center gap-5' method='POST'>
        <TextField type='text' required  placeholder='Enter your name' 
          autoComplete='off' name='Name'  variant="standard"  className='sm:w-1/2 w-11/12 '/>
        <TextField type='email' required  placeholder='Enter your email' 
          autoComplete='off' name='Email' variant="standard" className='sm:w-1/2  w-11/12'/>
        <TextField
          placeholder='Enter your Message'
          rows={4}
          cols={4}
          multiline
           variant='outlined'
          autoComplete='off'
          required
          className='sm:w-1/2  w-11/12'
        />
        <button type="submit" className='px-4 bg-red-500 text-white py-1 hover:bg-red-600 active:scale-x-90 rounded-xl  text-xl tracking-widest flex gap-2 items-center mb-4'>Send <IoMdSend /></button>
          </form>
    </div>
  )
}

export default Contact