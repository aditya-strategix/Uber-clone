import { useRef, useState } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useLocation } from "react-router-dom"
import FinishRide from "../components/FinishRide";
const CaptainRiding = () => {
    const[finishRidePanel,setFinishRidePanel]=useState(false);
    const finishRidePanelRef=useRef(null);
    const location=useLocation();
    const rideData=location.state?.ride
    useGSAP(function(){
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[finishRidePanel])
  return (
    <div className="h-screen relative">
    <div className="fixed p-1 -top-4 flex items-center justify-between">
    <img src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png' className="w-36"></img>
    <Link to="/captain-home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
    <i className="text-lg font-medium ri-logout-box-r-line"></i>  
      </Link>
    </div>
 <div className="h-4/5">
 <img src="https://images.pexels.com/photos/2678301/pexels-photo-2678301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover" />
 </div>
 <div className="h-1/5 p-6 flex  items-center justify-between relative bg-yellow-400"
 onClick={()=>{setFinishRidePanel(true)}}>
 <h5 className="p-1 mt-3 text-center w-[93%] absolute -top-5">
                <i className="text-3xl text-black ri-arrow-down-wide-line"></i>
            </h5>
<h4 className="text-xl font-semibold">4 km away</h4>
<button className=" w-3/5 text-black p-2 rounded-lg bg-green-300 font-semibold">Complete Ride</button>
 </div>
 <div ref={finishRidePanelRef} className="fixed w-full h-screen z-10 bottom-0 p-3 pt-12 space-y-4 bg-white ">
<FinishRide setFinishRidePanel={setFinishRidePanel}
ride={rideData}
/>
      </div>
</div>
  )
}

export default CaptainRiding
