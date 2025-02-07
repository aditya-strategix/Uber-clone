import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import {UserDataContext} from '../context/UserContext'
import axios from 'axios'
const UserSignup = () => {
    const[firstName,setFirstName] =useState('');
    const[lastName,setLastName] =useState('');
    const[email, setEmail] =useState('');
    const[password, setPassword] =useState('');
    // const[userData, setUserData] =useState({email:'', password:''});
    const navigate=useNavigate();
    const { setUser}=useContext(UserDataContext);
    const submitHandler=async(e)=>{
        e.preventDefault();
       const newUser={fullname:{
              firstName:firstName,
              lastName:lastName
         }, email:email, password:password};
        console.log(newUser)
    try {
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
        console.log(response)
       if(response.status===201){
         const data=response.data;
         console.log(data);
         setUser(data.user);
         localStorage.setItem('token',data.token);
           navigate('/home');
        setEmail('');   
        setPassword('');
        setFirstName('');
        setLastName('');
    }else{
        console.log('FAILED TO REGISTER DATA')
    }
    } catch (error) {
        alert('Failed to register user');
        console.log(error)
    }
       
}
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
                <button className='flex items-center justify-center font-semibold text-white bg-[#111] mb-3 rounded px-4 py-2 border w-full'>Create an account</button>
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
