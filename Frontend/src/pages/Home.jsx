import { useRef, useState } from "react";
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css';
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitForDriver";
const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const[confirmRidePanel,setConfirmRidePanel]=useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const[vehiclePanel,setVehiclePanel]=useState(false);
const vehiclePanelRef=useRef(null);
const vehicleFoundRef=useRef(null);
const confirmRidePanelRef=useRef(null);
const[vehicleFound,setVehicleFound]=useState(false);
const waitingForDriverRef=useRef(null);
const[waitingForDriver,setWaitingForDriver]=useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  }
  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
        display: "block"


      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        opacity: 0,
        height: 0,
        display: "none"
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }
  , [panelOpen])
  useGSAP(function(){
if(vehiclePanel){
  gsap.to(vehiclePanelRef.current,{
    transform:'translateY(0)'
  })
}else{
  gsap.to(vehiclePanelRef.current,{
  transform:'translateY(100%)'
})}

  },[vehiclePanel])
useGSAP(function(){
  if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(0)'
    })
  }
  else{
    gsap.to(confirmRidePanelRef.current,{
transform:'translateY(100%)'
    })
  }
},[confirmRidePanel])
useGSAP(function() {
  if(vehicleFound){
    gsap.to(vehicleFoundRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(vehicleFoundRef.current,{
      transform:'translateY(100%)'
    })
  }
},[vehicleFound])
useGSAP(function() {
  if(waitingForDriver){
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
  }
},[waitingForDriver])


  return (
    <div className="h-screen relative">
      <img src='https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png'
        alt='Uber Logo' className='w-20 left-5 top-5 absolute' />
      <div className="h-screen w-screen" >
        {/* image for temporary use */}
        <img src="https://images.pexels.com/photos/2678301/pexels-photo-2678301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 w-full h-screen justify-end flex flex-col">
        <div className="bg-white h-[30%] p-5 relative">
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false);
          }} className="absolute top-6 right-6 text-2xl">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">
            Find a Trip
          </h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }} className="flex flex-col space-y-5 mb-3">
            <div className="line absolute h-16 w-1 top-24 left-10 rounded-full bg-gray-900"></div>
            <input className="bg-[#eee] px-8 py-2 text-lg rounded-lg"
              onClick={() => setPanelOpen(true)}
              value={pickup} onChange={(e) => setPickup(e.target.value)}
              type="text" placeholder="  Enter Pickup Location" />
            <input className="bg-[#eee] px-8 py-2 text-lg rounded-lg"
              onClick={() => setPanelOpen(true)}
              value={destination} onChange={(e) => setDestination(e.target.value)}
              type="text" placeholder="  Enter Destination" />
          </form>
        </div>
        <div className="h-[70%] bg-white p-5" ref={panelRef}>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>

      </div>
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 p-3 pt-12 space-y-4 bg-white translate-y-full">
      <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
<ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
<LookingForDriver setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12">
<WaitForDriver waitingForDriver={waitingForDriver} setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  )
}

export default Home
 