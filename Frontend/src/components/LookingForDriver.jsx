
const LookingForDriver = ({setVehicleFound,pickup,destination,fare,vehicleType}) => {
  return (
    <div>
    <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => setVehicleFound(false)}>
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className="text-xl font-semibold mb-5">Looking for nearby Drivers</h3>
    <div className="flex flex-col justify-between items-center gap-2">
        <img src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" width={150} alt="" />
        <div className="w-full mt-5">
            <div className="flex items-center border-b-2 gap-5 p-3">
                <i className="text-lg ri-map-pin-fill"></i>
                <div className="flex flex-col">
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600">{pickup}</p>
                </div>
            </div>
            <div className="flex items-center border-b-2 gap-5 p-3"> <i className="text-lg ri-map-pin-add-fill"></i>
                <div className="flex flex-col">
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600">{destination}</p>
                </div></div>
            <div className="flex items-center  gap-5 p-3"> <i className="text-lg ri-currency-line"></i>
                <div className="flex flex-col">
                    <h3 className="text-lg font-medium">{fare?.fare?.[vehicleType]}</h3>
                    <p className="text-sm -mt-1 text-gray-600">Cash</p>
                </div></div>
        </div>
    
    </div>
</div>
  )
}

export default LookingForDriver
