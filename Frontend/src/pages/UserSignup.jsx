import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const UserSignup = () => {
    const[firstName,setFirstName] =useState('');
    const[lastName,setLastName] =useState('');
    const[email, setEmail] =useState('');
    const[password, setPassword] =useState('');
    const[userData, setUserData] =useState({email:'', password:''});
    const submitHandler=(e)=>{
        e.preventDefault();
        setUserData({fullName:{
            firstName:firstName,
            lastName:lastName
        }, email:email,password:password});
        console.log(email, password);
        setEmail('');   
        setPassword('');
        setFirstName('');
        setLastName('');
    }
    useEffect(()=>{
        console.log(userData);
    },[userData])
    return (
        <div className='p-4 flex flex-col justify-between h-screen'>
            <div>
                <img src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png' alt='Uber Logo' className='w-20 mb-10 pb-5'/>
            <form onSubmit={submitHandler} className="-mt-5">
                <h3 className='text-xl font-medium mb-2'> What&apos;s your name</h3>
               <div className='flex justify-between flex-row space-x-3 mb-4'>
               <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}
                className='w-1/2 p-2 border border-gray-400 bg-[#eeeeee] rounded-lg'
                 placeholder="First Name" />
                  <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}
                className='w-1/2 p-2 border border-gray-400 bg-[#eeeeee] rounded-lg'
                 placeholder="Last Name" />
               </div>
                <h3 className='text-xl font-medium mb-2'> What&apos;s your email</h3>
                <input type={email} value={email} onChange={(e)=>setEmail(e.target.value)}
                className='w-full p-2 mb-4 border border-gray-400 bg-[#eeeeee] rounded-lg'
                 placeholder="Your Email Address" />
                <h3 className='text-xl mb-2'>Enter your password</h3>
                <input  value={password} onChange={(e)=>setPassword(e.target.value)}
                className='w-full p-2 mb-4 border bg-[#eeeeee]  border-gray-400 rounded-lg'
                required type="password" placeholder="Your Password"/>
                <button className='flex items-center justify-center font-semibold text-white bg-[#111] mb-3 rounded px-4 py-2 border w-full'>Sign Up</button>
             <p className='text-center'> Already have an account?  <Link className='text-blue-600'to='/login'>Login here</Link></p>
            </form>

            </div>
            <div>
            </div>
            <p className='text-[2px]'>By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means from Uber, and its affilates to the number provided.</p>
        </div>
    )
}

export default UserSignup
