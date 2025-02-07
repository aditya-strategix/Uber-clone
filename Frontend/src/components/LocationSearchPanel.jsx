

const LocationSearchPanel = ({setPanelOpen,setVehiclePanel}) => {
  //sample location for array
  const locations=[
    "24B, Near Kappor's cafe, Shreyians Coding School, Bhopal ",
    "24B, Near Malhotra's cafe, Shreyians Coding School, Bhopal ",
    "24B, Near Kappor's cafe, Shreyians Coding School, Bhopal ",
    "24B, Near Kappor's cafe, Shreyians Coding School, Bhopal "
  ]
  return (
    <div className="flex flex-col space-y-3">
      {
       locations.map((element,index)=>
       (
        <div className="flex items-center space-x-3" key={index} onClick={()=>{setVehiclePanel(true);
          setPanelOpen(false);
        }}>
        <h2 className="bg-[#eee] flex rounded-full items-center justify-center h-7 w-10">
          <i className="ri-map-pin-fill"></i></h2>
        <h4 className="font-medium">{element}</h4>
      </div>
       )
       
       )
      
   }
    </div>
  )
}

export default LocationSearchPanel
