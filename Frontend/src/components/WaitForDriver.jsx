
const WaitForDriver = ({waitingForDriver}) => {
  return (
    <div>
    <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => waitingForDriver(false)}>
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
    </h5>
    

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
    
    </div>
</div>
  )
}

export default WaitForDriver
