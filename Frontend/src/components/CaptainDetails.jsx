import React, { useContext } from "react"
import { CaptainDataContext } from "../context/CaptainContext"
const CaptainDetails = () => {
  const {captain}=useContext(CaptainDataContext);
  return (
    <div>
      <div className="flex items-center justify-between">
  <div className="flex items-center justify-start space-x-3">
    <img className="h-20 w-24 rounded-full justify-between" src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
    <h4 className="text-lg font-medium capitalize">{captain?.fullname?.firstName}</h4>
  </div>
  <div>
  <h4 className="text-xl font-semibold">₹295.20</h4>
  <p className="text-sm font-medium text-gray-600">Earned</p>
  </div>
</div>
<div className="flex flex-row justify-center items-start p-3 mt-7 bg-gray-100 rounded-xl space-x-5">
  <div className="text-center">
  <i className="text-3xl mb-2 font-extralight ri-timer-2-line"></i>
<h5 className="text-lg font-medium">10.2</h5>
<p className="text-sm text-gray-600">Hours Online</p>
  </div>
  <div className="text-center">
  <i className="text-3xl mb-2 font-extralight ri-speed-up-line"></i>
  <h5 className="text-lg font-medium">10.2</h5>
  <p className="text-sm text-gray-600">Hours Online</p>

  </div>
  <div className="text-center">
  <i className="text-3xl mb-2 font-extralight ri-booklet-line"></i>
  <h5 className="text-lg font-medium">10.2</h5>
<p className="text-sm text-gray-600">Hours Online</p>
  </div>
</div>
    </div>
  )
}

export default CaptainDetails
