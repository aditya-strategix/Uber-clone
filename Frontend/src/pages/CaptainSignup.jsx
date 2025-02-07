import { Link,Navigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CaptainDataContext } from '../context/captainContext';
import axios from 'axios';
const CaptainSignup = () => {
    // const navigate=useNavigate();
    const[firstName,setFirstName] =useState('');
    const[lastName,setLastName] =useState('');
    const[email, setEmail] =useState('');
    const[password, setPassword] =useState('');
    const[vehicleColor,setVehicleColor]=useState(null);
    const[vehicleType,setVehicleType]=useState('');
    const[vehiclePlate,setVehiclePlate]=useState(null);
    const[vehicleCapacity,setVehicleCapacity]=useState(null);


const {captain,setCaptain}=useContext(CaptainDataContext);

    const submitHandler=async(e)=>{
        e.preventDefault();
       const CaptainData={
        fullname:{
            firstName:firstName,
            lastName:lastName
        }, 
        email:email,
        password:password,
        vehicle:{
            color:vehicleColor,
            vehicleType:vehicleType,
            plate:vehiclePlate,
            capacity:vehicleCapacity
        }
       };

       const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,CaptainData);
       if(response.status==201){
        const data=response.data;
        setCaptain(data.captain);
        localStorage.setItem('token',data.token);
        Navigate('/captain-home');
       }
       console.log(response);
        setEmail('');   
        setPassword('');
        setFirstName('');
        setLastName('');
        setVehicleColor('');
        setVehicleType('');
        setVehiclePlate('');
        setVehicleCapacity('');
    }
   
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
                <h3 className='text-xl mb-2'>Vehicle Information</h3>
                <div className='flex gap-4 mb-5'>
                    <input type='text' value={vehicleColor} placeholder='Vehicle Color' className='w-1/2 p-2 border border-gray-400 bg-[#eeeeee] rounded-lg'
                    onChange={(e)=>setVehicleColor(e.target.value)}/>
                    <input type='text' value={vehiclePlate} placeholder='Vehicle Plate' className='w-1/2 p-2 border border-gray-400 bg-[#eeeeee] rounded-lg'
                    onChange={(e)=>setVehiclePlate(e.target.value)}/>
                </div>
                <div className='flex gap-4 mb-7 w-full'>
                <input type='text' value={vehicleCapacity} placeholder='Vehicle Capacity'  className='w-1/2 p-2 border border-gray-400 bg-[#eeeeee] rounded-lg'
                    onChange={(e)=>setVehicleCapacity(e.target.value)}/>
                    <select required value={vehicleType} onChange={(e)=>setVehicleType(e.target.value)} 
                    className='w-1/2 p-2 border border-gray-400 bg-[#eeeeee] rounded-lg'>
                    <option value='' disabled>Select Vehicle Type</option>
                    <option value='car'>Car</option>
                    <option value='bus'>Auto</option>
                    <option value='motorcycle'>Moto</option>

                    </select>
                  
                    </div>

                <button className='flex items-center justify-center font-semibold text-white bg-[#111] mb-3 rounded px-4 py-2 border w-full'>Create a captain account</button>
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
