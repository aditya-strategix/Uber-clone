import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react';
import { CaptainDataContext } from '../context/captainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CaptainLogin = () => {
    const{setCaptain}=useContext(CaptainDataContext);
    const navigate=useNavigate();
    const[email, setEmail] =useState('');
    const[password, setPassword] =useState('');
    const submitHandler=async(e)=>{
        e.preventDefault();
        const captainData={email:email,password:password};
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData);
        const data=response.data;
        const token=data.token;
        if(response.status===200){
            setCaptain(data.captain);
            localStorage.setItem('token',token);
            navigate('/captain-home');
        }
        setEmail('');   
        setPassword('');
    }
 
    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoJcsV2aZSkAm3nmwtyjuiekrT3H5U7pvjQ&s' alt='Uber Logo' className='w-20 mb-10 pb-5'/>
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
             <p className='text-center'> Join a Fleet?  <Link className='text-blue-600'to='/captain-signup'>Register a Captain</Link></p>
            </form>

            </div>
            <div>
                <Link to="/login" className='flex items-center justify-center font-semibold text-white bg-[#906652] mb-5 rounded px-4 py-2 border w-full'>Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin