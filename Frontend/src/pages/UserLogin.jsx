// import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
const UserLogin = () => {
    const[email, setEmail] =useState('');
    const[password, setPassword] =useState('');
    const[userData, setUserData] =useState({email:'', password:''});
    const submitHandler=(e)=>{
        e.preventDefault();
        setUserData({email:email,password:password});
        console.log(email, password);
        setEmail('');   
        setPassword('');
    }
    useEffect(()=>{
        console.log(userData);
    },[userData])
    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png' alt='Uber Logo' className='w-20 mb-10 pb-5'/>
            <form onSubmit={submitHandler}>
                <h3 className='text-xl font-medium mb-2'> What&apos;s your email</h3>
                <input type={email} required value={email} onChange={(e)=>setEmail(e.target.value)}
                className='w-full p-2 mb-6 border border-gray-400 bg-[#eeeeee] rounded-lg'
                 placeholder="Your Email Address" />
                <h3 className='text-xl mb-2'>Enter your password</h3>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}
                className='w-full p-2 mb-6 border bg-[#eeeeee]  border-gray-400 rounded-lg'
                required type="password" placeholder="Your Password" />
                <button className='flex items-center justify-center font-semibold text-white bg-[#111] mb-3 rounded px-4 py-2 border w-full'>Login</button>
             <p className='text-center'> New here?  <Link className='text-blue-600'to='/signup'>Create a new account</Link></p>
            </form>

            </div>
            <div>
                <Link to="/captain-login" className='flex items-center justify-center font-semibold text-white bg-[#5adbb5] mb-5 rounded px-4 py-2 border w-full'>Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin
