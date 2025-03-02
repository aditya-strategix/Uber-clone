import 'remixicon/fonts/remixicon.css';


const LocationSearchPanel = ({setPanelOpen,setVehiclePanel,setPickup,setDestination,suggestions,activeField
}) => {
  console.log("Suggestions are printing")
console.log(suggestions)
  return (
    <div className="flex flex-col space-y-3">
      {
        suggestions.map((suggestion, index) => (
          <div className="flex items-center space-x-3" key={index} onClick={() => {
            if (activeField === 'pickup') {
              setPickup(suggestion.description);
            } else {
              setDestination(suggestion.description);
            }
            setVehiclePanel(true);
           
            setTimeout(() => setPanelOpen(false), 100); 
          }}>
            <h2 className="bg-[#eee] flex rounded-full items-center justify-center h-7 w-10">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{suggestion.description}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default LocationSearchPanel
