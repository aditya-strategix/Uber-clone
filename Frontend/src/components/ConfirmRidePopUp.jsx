import { useState } from "react"
import axios from "axios"
import CaptainRiding from "../pages/CaptainRiding"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const ConfirmRidePopUp = ({setConfirmRidePopUpPanel,setRidePopUpPanel,ride}) => {
    const navigate=useNavigate();
    const[otp,setOtp]=useState('')
    const submitHandler=async(e)=>{
        e.preventDefault();
        if(!ride?._id||!ride){
            console.error("RIde Id is missing");
            return;
        }

        const response=await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`,{
          params:{  rideId:ride._id,
            otp:otp
          }
          ,
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        
        });
        if(response.status==200){
            setConfirmRidePopUpPanel(false);
            setRidePopUpPanel(false);
            navigate('/captain-riding',{
                state:{ride:ride}
            });
        }
    }
  return (
    <div>
    <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => setConfirmRidePopUpPanel(false)}>
            <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-xl font-semibold mb-5">Confirm this ride to Start</h3>
        <div className="flex items-center justify-between rounded-lg mt-4 bg-orange-300">
            <div className="flex items-center gap-3 p-3">
                <img className="w-20 h-20 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPTZdVhettUOgL4gulcQCozdbr2gvz4nOcQ&s" alt="" />
               <h2 className="text-2xl font-medium capitalize">{ride?.user.fullname.firstName}</h2>
            </div>
            <h5 className="pr-2 text-xl font-semibold">2.2 km</h5>
            </div>
        <div className="flex flex-col justify-between items-center gap-2">
            <div className="w-full mt-5">
                <div className="flex items-center border-b-2 gap-5 p-3">
                    <i className="text-lg ri-map-pin-fill"></i>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">{ride?.pickup}</p>
                    </div>
                </div>
                <div className="flex items-center border-b-2 gap-5 p-3"> <i className="text-lg ri-map-pin-add-fill"></i>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">{ride?.destination}</p>
                    </div></div>
                <div className="flex items-center  gap-5 p-3"> <i className="text-lg ri-currency-line"></i>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-medium">{ride?.fare}</h3>
                        <p className="text-sm -mt-1 text-gray-600">Cash</p>
                    </div></div>
            </div>
           <div className="mt-6 w-full">
           <form onSubmit={submitHandler}>
            <input value={otp} onChange={(e)=>setOtp(e.target.value)} className="w-full font-mono bg-[#eee] px-8 py-2 text-lg rounded-lg" type="text" placeholder="Enter OTP"></input>
           <button 
          
           className="w-full flex justify-center items-center mt-5 text-black p-2 rounded-lg bg-green-300 font-semibold">
                Confirm
            </button>
            <button onClick={() => {setConfirmRidePopUpPanel(false)
                setRidePopUpPanel(false)}
            } className="w-full mt-3 text-white p-2 rounded-lg bg-red-400 font-semibold">
                Cancel
            </button>
           </form>
           </div>
        </div>
</div>
  )
}

export default ConfirmRidePopUp
