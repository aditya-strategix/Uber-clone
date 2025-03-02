const rideService=require("../services/ride.service");
const{validationResult}=require("express-validator");
const mapService=require("../services/maps.service")
const rideModel=require("../models/ride.model");
const {sendMessageToSocketId} =require("../socket");
exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
const{pickup,destination,vehicleType}=req.body;
    try {
        const ride = await rideService.createRide({user:req.user._id,pickup,destination,vehicleType});
        res.status(201).json(ride);

        const pickupCoordinates=await mapService.getAddressCoordinate(pickup);
        console.log(pickupCoordinates);
        const captainsInRadius=await mapService.getCaptainsInRadius(pickupCoordinates.ltd,pickupCoordinates.lng,2);
        ride.otp="";
        const rideWithUser= await rideModel.findById(ride._id).populate('user')
        captainsInRadius.map(captain=>{
            sendMessageToSocketId(captain.socketId,{
                event:'new-ride',
                data:rideWithUser
            })
        })

    } catch (error) {  
       console.log(error.message)
    }
};

exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
        return res.status(400).json({ errors: errors.array() });
    }  
    const{pickup,destination}=req.query;
    try {    
      console.log(pickup,destination);
        const fare = await rideService.getFare({ pickup, destination});
        res.status(200).json({ fare });
    } catch (error) {
        console.log("Error found in GET FARE");
        res.status(500).json({ message: error.message });
    }   
}; 

module.exports.confirmRide=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {rideId}=req.body;

    try {
        const ride=await rideService.confirmRide({rideId,capain:req.captain});
        sendMessageToSocketId(ride.user.socketId,{
            event:'ride-confirmed',
            data:ride
        })

        return res.status(200).json(ride);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }

}