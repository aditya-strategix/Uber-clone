import { Link } from "react-router-dom"
const Riding = () => {
  return (
    <div className="h-screen">
        <Link to="/home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-bold ri-home-4-fill"></i>
        </Link>
     <div className="h-1/2">
     <img src="https://images.pexels.com/photos/2678301/pexels-photo-2678301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover" />
     </div>
     <div className="h-1/2 p-4">
     
<div className="flex items-center justify-between">   
         <img src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" width={150} alt="" />
         <div className="text-right">
            <h2 className="text-lg font-medium ">Sarthak</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
         </div>
</div>       
<div className="flex flex-col justify-between items-center gap-2">
 <div className="w-full mt-5">
           
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
    
    </div>
<button className="w-full mt-5 text-black p-2 rounded-lg bg-green-300 font-semibold">Make a Payment</button>
     </div>
    </div>
  )
}

export default Riding
