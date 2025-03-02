const mapService=require("../services/maps.service");
const{validationResult}=require("express-validator")
module.exports.getCoordinates=async(req,res,next)=>{
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
const {address}=req.query;
console.log(address);
try {
    const coordinates=await mapService.getAddressCoordinate(address)
    console.log(coordinates);  
    res.status(200).json(coordinates);
} catch (error) {
    res.status(404).json({message:'Coordinates not found'});
}
}
module.exports.getDistanceTime=async(req,res)=>{
    const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
    try {
        const{origin,destination}=req.query;
        // console.log(origin)
        const distanceTime=await mapService.getDistanceTime(origin,destination);
        // console.log(distanceTime);
        res.status(200).json(distanceTime);
         
    } catch (error) {
        console.log(error)
    }
}
module.exports.getAutoCompleteSuggestions=async(req,res,next)=>{
   try {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const{input}=req.query;
    // console.log(input)
    const suggestions=await mapService.getAutoCompleteSuggestions(input);
    // console.log(suggestions);
    res.status(200).json(suggestions);
   } catch (error) {
    console.log(error);
   }
}