import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const CaptainSignup = () => {
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
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoJcsV2aZSkAm3nmwtyjuiekrT3H5U7pvjQ&s' alt='Uber Logo' className='w-20 mb-10 pb-5'/>
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
             <p className='text-center'> Already have an account?  <Link className='text-blue-600'to='/captain-login'>Login here</Link></p>
            </form>

            </div>
            <div>
            </div>
            <p className='text-[2px]'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy </span> 
            and <span className='underline'>Terms of Service apply</span></p>
        </div>
    )
}

export default CaptainSignup
