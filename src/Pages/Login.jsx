import React, { useState, useContext } from 'react'
import { app } from '../firebase';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../Context/AppContext';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
const auth = getAuth(app);
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
const Login = () => {
    const [showPass, SetshowPass] = useState(false);
const [error,Seterror]=useState('')
    const { state, dispatch } = useContext(DataContext);
    
    const [formdata, Setformdata] = useState(
        {
            email: "",
            password: ""
        }
    )
    const navigate = useNavigate();
    function changeHandler(e) {
        const { name, value } = e.target;
        Setformdata((prev) => { return { ...prev, [name]: value } });
    }

    function handlesubmit(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, formdata.email, formdata.password).then((_UserCredentialImpl) => {
            Setformdata( {
                email: "",
                password: ""
            })
           
            dispatch({ type: 'User_Exist', payload: true })
            navigate('/')
            toast.success("Login Successful") 
            console.log(_UserCredentialImpl);
        }).catch((err) => {
            console.log(err.message)
           Seterror(err.message);
    setTimeout(()=>{

        Seterror('')
    },1500)
       
        })
         
    }

    return (

        <><section className='w-full h-screen flex justify-center items-center  '>
            <div className='shadow-xl px-4 py-16 w-72 border-2 rounded-xl flex relative flex-col justify-center items-center  '>
  <h1 className='text-3xl font-semibold text-gray-500 font-serif absolute left-2 top-6 mb-3'>Login</h1>
            <div className='mb-4 mt-4 text-red-600'>{error}</div>
  
                <input className='border-2 border-black w-full py-1 outline-none mb-4' type='text' placeholder='Enter your email' autoComplete='off' name='email' onChange={changeHandler} />

                <div className='relative w-full'>
                    <input type={showPass ? 'text' : 'password'} className='border-2 outline-none w-full py-1  border-black' placeholder='Enter your password' autoComplete='off' name='password' onChange={changeHandler} />
                    {showPass ? <RiEyeLine className='absolute top-1/4 right-2 hover:cursor-pointer' onClick={() => SetshowPass(false)} />
                        : <RiEyeCloseLine className='absolute top-1/4 right-2 hover:cursor-pointer' onClick={() => SetshowPass(true)} />
                    }
                </div>
                <button onClick={handlesubmit} className='mt-6 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-2xl text-white  w-3/4'>Login</button>
                <p className='mt-8'>Don't have an account? <Link className='underline hover:text-blue-600 text-blue-500' to='/signup'>Register</Link> </p>
            </div>

        </section>

        </>

    )
}

export default Login