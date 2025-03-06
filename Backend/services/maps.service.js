const axios=require('axios');
const captainModel = require('../models/captain.model');
module.exports.getAddressCoordinate=async(address)=>{
const apiKey1=process.env.GEOCODE_API;
console.log(apiKey1)
const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey1}`
try { 
    const response=await axios.get(url);
    // console.log(response.data.results[0].geometry.lat);  
// console.log(response.data)
        const location=response.data.results[0].geometry;
        // console.log(location);
        return{
            ltd:location.lat, 
            lng:location.lng
        };   
     
} catch (error) { 
    console.log(error);
}
}
module.exports.getDistanceTime=async(origin,destination)=>{
    try { 
    //   console.log("Getting distance and time");
    //   console.log(origin,destination);
 if(!origin||!destination){
    throw new Error('Origin and destination are required');
 }   
//  console.log(process.env.GOMAPS_API)
 const apiKey2=process.env.GOMAPS_API;
 const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?destinations=${encodeURIComponent(destination)}&origins=${encodeURIComponent(origin)}&key=${apiKey2}`;
//  console.log(url);  
    const response=await axios.get(url);  
    // console.log(response.data.rows[0].elements[0]); 
    return response.data.rows[0];  
} catch (error) {     
    console.log(error.message); 
}} 
module.exports.getAutoCompleteSuggestions=async(input)=>{
   if(!input){
    throw new Error ('query is required')
   }
//    console.log(input)
   const apiKey2=process.env.GOMAPS_API;
   console.log(apiKey2)
//    console.log(apiKey2);
   const url=`https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${input}&key=${apiKey2}`
  try {
    // console.log(url);
     const response=await axios.get(url);
     console.log(response.data)
     if(response.data.status==='OK'){
        return response.data.predictions
     }else{
        throw new Error("Unable to fetch suggestions");
     }
  } catch (error) {
    console.log(error.message);
  }
}

module.exports.getCaptainsInRadius=async(ltd,lng,radius)=>{

 
   const captains=await captainModel.find({

      location:{
         $geoWithin:{
            $centerSphere:[[ltd,lng],radius/6371]
         }
      }
   })
return captains;

}

