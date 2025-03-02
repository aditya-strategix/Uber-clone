import { Link } from "react-router-dom"
const FinishRide = ({setFinishRidePanel}) => {
  return (
    <div>
    <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => setFinishRidePanel(false)}>
            <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-xl font-semibold mb-5">Finish this ride</h3>
        <div className="flex items-center justify-between rounded-lg mt-4 border-4 border-orange-800">
            <div className="flex items-center gap-3 p-3">
                <img className="w-20 h-20 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPTZdVhettUOgL4gulcQCozdbr2gvz4nOcQ&s" alt="" />
               <h2 className="text-2xl font-medium">Anamika</h2>
            </div>
            <h5 className="pr-2 text-xl font-semibold">2.2 km</h5>
            </div>
        <div className="flex flex-col justify-between items-center gap-2">
            <div className="w-full mt-5">
                <div className="flex items-center border-b-2 gap-5 p-3">
                    <i className="text-lg ri-map-pin-fill"></i>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Ahemdabad</p>
                    </div>
                </div>
                <div className="flex items-center border-b-2 gap-5 p-3"> <i className="text-lg ri-map-pin-add-fill"></i>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Ahemdabad</p>
                    </div></div>
                <div className="flex items-center  gap-5 p-3"> <i className="text-lg ri-currency-line"></i>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-medium">₹193.90</h3>
                        <p className="text-sm -mt-1 text-gray-600">Cash</p>
                    </div></div>
            </div>
           <div className="mt-6 w-full">
           
           <Link to="/captain-home" className="w-full flex justify-center items-center mt-5 text-black p-2 rounded-lg bg-green-300 font-semibold">
               Finish Ride
            </Link>
           <p className="text-red-500 mt-6 text-sm ml-1">Click on Finish Ride if you have completed the payment </p>
           </div>
        </div>
</div>
  )
}

export default FinishRide
