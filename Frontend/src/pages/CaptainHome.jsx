import { Link } from "react-router-dom"
import CaptainDetails from "../components/CaptainDetails"
import RidePopUp from "../components/RidePopUp"
import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import axios from "axios"
import { useContext } from "react"
import { SocketContext } from "../context/SocketContext"
import ConfirmRidePopUp from "../components/ConfirmRidePopUp"
import { CaptainDataContext } from "../context/CaptainContext"
import gsap from "gsap"
const CaptainHome = () => {
  const ridePopUpPanelRef=useRef(null);
  const confirmRidePopUpPanelRef=useRef(null);
  const[ridePopUpPanel,setRidePopUpPanel]=useState(false)
  const[confirmRidePopUpPanel,setConfirmRidePopUpPanel]=useState(false)
const[ride,setRide]=useState(null);

async function confirmRide(){
const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`,{
rideId:ride._id,
captainId:captain._id,
},{
  headers:{
    Authorization:`Bearer ${localStorage.getItem('token')}`
    }
})
setRidePopUpPanel(false);
setConfirmRidePopUpPanel(true);
}
  const{socket}=useContext(SocketContext);
  const {captain}=useContext(CaptainDataContext);

useEffect(()=>{
  socket.emit('join',{
    userId:captain._id,
    userType:'captain'
  })

  const updateLocation=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        position=>{
         
          socket.emit('update-location-captain',{
          userId:captain._id,
          location:{
          ltd:parseFloat(position.coords.latitude),
          lng:parseFloat(position.coords.longitude)
          }
        })}
      )}
  }
const locationInterval=setInterval(updateLocation,10000);
updateLocation();
  // return()=>clearInterval(locationInterval)
})
  socket.on('new-ride',(data)=>{
    console.log(data);
    setRide(data);
    setRidePopUpPanel(true);
  })

  useGSAP(function(){
    if(ridePopUpPanel){
      gsap.to(ridePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ridePopUpPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopUpPanel])
  useGSAP(function(){
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePopUpPanel])
  return (
    <div className="h-screen">
    <div className="fixed p-1 -top-4 flex items-center justify-between">
    <img src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png' className="w-36"></img>
    <Link to="/captain-home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
    <i className="text-lg font-medium ri-logout-box-r-line"></i>  
      </Link>
    </div>
 <div className="h-3/5">
 <img src="https://images.pexels.com/photos/2678301/pexels-photo-2678301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover" />
 </div>
 <div className="h-2/5 p-4">
<CaptainDetails/>
 </div>
 <div ref={ridePopUpPanelRef} className="fixed w-full z-10 bottom-0 p-3 pt-12 space-y-4 bg-white ">
<RidePopUp 
ride={ride}
confirmRide={confirmRide}
ridePopUpPanel={ridePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
      <div ref={confirmRidePopUpPanelRef} className="fixed w-full h-screen z-10 bottom-0 p-3 pt-12 space-y-4 bg-white ">
<ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
      </div>
</div>
  )
}

export default CaptainHome
