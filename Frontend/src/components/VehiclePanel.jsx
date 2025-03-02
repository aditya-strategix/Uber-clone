import car from "../assets/car.png"

const VehiclePanel = ({ setVehiclePanel, setConfirmRidePanel, fare, setFare, vehicleType, setVehicleType }) => {
  return (
    <div>
      <h5 onClick={() => { setVehiclePanel(false); }} className="-m-2 text-center absolute top-0 w-[93%]">
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-xl font-semibold mb-5">Choose a Vehicle</h3>
      {/* 1st ride */}
      <div onClick={() => { setConfirmRidePanel(true);
        setVehicleType("car")
       }} className="flex w-full items-center justify-between border-black rounded-xl h-20 bg-gray-100 p-2 space-x-2">
        <img width={83} src={car} alt="" />
        <div className="w-full flex flex-col">
          <h4 className="font-medium text-sm">
            UberGo <span><i className="ri-user-3-fill"></i>4</span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-medium text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="font-semibold">₹{fare?.fare?.car ? fare.fare.car : "N/A"}</h2>
      </div>

      {/* 2nd ride */}
      <div onClick={() => { setConfirmRidePanel(true);
        setVehicleType("motorcycle")
       }} className="flex w-full items-center justify-between active:border-black rounded-xl bg-gray-100 p-2 space-x-2">
        <img width={83} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png" alt="" />
        <div className="w-full flex flex-col">
          <h4 className="font-medium text-sm">
            Moto <span><i className="ri-user-3-fill"></i>4</span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">Affordable, Motorcycle rides</p>
        </div>
        <h2 className="font-semibold">₹{fare?.fare?.motorcycle ? fare.fare.motorcycle : "N/A"}</h2>
      </div>

      {/* 3rd ride */}
      <div onClick={() => { setConfirmRidePanel(true);
        setVehicleType("auto")
       }} className="flex w-full items-center justify-between active:border-black rounded-xl h-20 bg-gray-100 p-2 space-x-2">
        <img width={83} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
        <div className="w-full flex flex-col">
          <h4 className="font-medium text-sm">
            UberAuto <span><i className="ri-user-3-fill"></i>4</span>
          </h4>
          <h5 className="font-medium text-sm">7 mins away</h5>
          <p className="font-medium text-xs text-gray-600">Affordable, Auto rides</p>
        </div>
        <h2 className="font-semibold">₹{fare?.fare?.auto ? fare.fare.auto : "N/A"}</h2>
      </div>
    </div>
  )
}

export default VehiclePanel