import React, { useState } from 'react'
import { app } from '../firebase';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";

const auth = getAuth(app);
const Signup = () => {
    const [showPass, SetshowPass] = useState(false);
    const [formdata, Setformdata] = useState(
        {
            email: "",
            password: ""
        }
    )

    const [error, setError] = useState('');
    const navigate = useNavigate();
    function changeHandler(e) {
        const { name, value } = e.target;
        Setformdata((prev) => { return { ...prev, [name]: value } });
    }



    function handlesubmit(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then((data) => {
            console.log("hii")
            console.log(data.user.email)
            navigate('/login');
        }).catch((err) => {
            setError(err.message)
            setTimeout(() => {

                Seterror('')
            }, 1500)
        })
    }

    return (
        <>
            <section className='w-full h-screen flex justify-center items-center'>
                <div className='shadow-xl border-2 px-4 py-16 w-72 flex flex-col relative justify-center  rounded-xl items-center  '>
                    <h1 className='text-3xl font-semibold text-amber-600 font-serif absolute left-2 top-6 mb-3'>Signup</h1>
                    <div className='mb-4 mt-4 text-red-600'>{error}</div>
                    <input type='text' className='border-2 border-black rounded-md w-full py-1 outline-none mb-3' placeholder='Enter your email' autoComplete='off' name='email' onChange={changeHandler} />
                    <div className='relative w-full'>
                        <input type={showPass ? 'text' : 'password'} className='border-2 border-black w-full rounded-md py-1 outline-none mb-2' placeholder='Enter your password' autoComplete='off' name='password' onChange={changeHandler} />
                        {showPass ? <RiEyeLine className='absolute top-1/4 right-2 hover:cursor-pointer' onClick={() => SetshowPass(false)} />
                            : <RiEyeCloseLine className='absolute top-1/4 right-2 hover:cursor-pointer' onClick={() => SetshowPass(true)} />
                        }</div> <button onClick={handlesubmit} className='mt-6 bg-blue-500 hover:bg-blue-600 tracking-widest px-3 py-1 text-white w-3/4 rounded-lg'>Sign up</button>
                    <p className='mt-8'>Arleady have an account? <Link className='underline text-blue-500 hover:text-blue-600 ' to='/login'>Login</Link> </p>
                </div>
            </section>
        </>

    )
}

export default Signup