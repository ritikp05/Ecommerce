import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { DataContext } from '../Context/AppContext';
import { signOut, getAuth } from 'firebase/auth';
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { app } from '../firebase';
const Navbar = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cartdata, user } = state;
  const [open, Setopen] = useState(false);
  const auth = getAuth(app);
  const navigate = useNavigate();
  function logout() {
    signOut(auth).then((dd) => {
      console.log("signout sucessfull")
      dispatch({ type: 'User_Exist', payload: false });
      Setopen(false)
      navigate('/')
    }).catch((dd) => {
      console.log(dd);

    })
  }

  return (<>

    <section className='bg-slate-700 w-full h-12 text-xl fixed top-0 z-50  text-white flex items-center justify-between '>
      <div className='pl-6  '>
        <h1>E-Store</h1>
      </div>
      <section>

        <div className=' gap-4 pr-8 items-center hidden sm:flex'>
          <NavLink to='/' >
            Home
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
          {
            user ?
              <button onClick={logout} title='Logout'><FiLogOut className='text-2xl' /></button>
              :
              <NavLink to='/login'><FiLogIn  title='Login'  className='text-2xl'/></NavLink>
          }



          <NavLink to='/cart'>
            <div className='flex pt-1 animate-bounce hover:animate-none'>

              <BsCart4 className=' sm:text-2xl text-3xl ' />
              <span className='pt-1 text-base'>{cartdata.length}</span>
            </div>
          </NavLink>


        </div>
        <button className='sm:hidden pr-3 text-white text-2xl' onClick={() => Setopen(true)}>
          <HiOutlineMenuAlt3 />
        </button>
      </section>


    </section>
    <section className={`${open ? "translate-y-0 duration-500" : "-translate-y-full duration-500 "} bg-white fixed top-0 sm:hidden w-full h-screen z-50`}>
      <div className='mt-16 flex flex-col justify-center items-center gap-8  '>


        <NavLink to='/' className='text-2xl' onClick={() => Setopen(false)}>
          Home
        </NavLink>
        <NavLink to='/contact' className='text-2xl' onClick={() => Setopen(false)}>
          Contact
        </NavLink>
        {
          user ?
            <button onClick={logout} className='text-3xl'><FiLogOut /></button>
            :
            <NavLink to='/login' onClick={() => Setopen(false)} className='text-3xl'><FiLogIn /></NavLink>
        }



        <NavLink to='/cart' className='text-2xl' onClick={() => Setopen(false)}>

          <div className='flex text-green-700 animate-bounce hover:animate-none'>
            <BsCart4 className='text-blue-700 text-3xl hover:text-blue-800' />
            <span className='text-base mt-2'>{cartdata.length}</span>


          </div>
        </NavLink>

        <button className='sm:hidden ' onClick={() => Setopen(false)} >
          <RiCloseFill className='text-3xl' />
        </button>
      </div>
    </section>

  </>
  )
}

export default Navbar