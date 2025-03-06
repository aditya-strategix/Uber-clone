const rideModel=require("../models/ride.model");
const { sendMessageToSocketId } = require("../socket");
const mapService=require("./maps.service");
const crypto = require('crypto');

async function getFare({pickup,destination}){
    // console.log("Get fare function");
    // console.log(pickup,destination);
    if(!pickup||!destination){
        throw new Error("Pickup and destination are required");
    } 

    const distanceTime=await mapService.getDistanceTime(pickup,destination);
    const fareRates = {
        auto: 10, // rate per km
        car: 15,  // rate per km
        motorcycle: 8 // rate per km
    };
console.log(distanceTime.elements[0].distance.value);
console.log(fareRates) 
    const fare = {
        auto:((distanceTime.elements[0].distance.value/1000) * fareRates.auto).toFixed(2),
        car:((distanceTime.elements[0].distance.value/1000) * fareRates.car).toFixed(2),
        motorcycle:((distanceTime.elements[0].distance.value/1000) * fareRates.motorcycle).toFixed(2)
    };  

    console.log(fare.auto);
    console.log(fare);
    return fare;
}

module.exports.getFare=getFare;

function getOtp(num){
function generateOTP(num) {
    const otp = crypto.randomInt(0, Math.pow(10, num)).toString().padStart(num, '0');
    return otp;
}
return generateOTP(num);
}


module.exports.createRide=async({user,pickup,destination,vehicleType})=>{
    // console.log(pickup);
    // console.log(destination);
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error("User, pickup, destination, and vehicle type are required");
    }
// console.log(user,pickup,destination,vehicleType);
    const fare = await getFare({pickup, destination});
// console.log(fare);
    const ride = new rideModel({
        user,
        pickup,
        destination,
        otp:getOtp(6),
        fare: fare[vehicleType]
        
    });
// console.log(ride);
    await ride.save();

    return ride;
}
module.exports.confirmRide = async ({
    rideId, captain
}) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'accepted',
        captain: captain._id
    })

    const ride = await rideModel.findOne({
        _id: rideId
    }).populate('user').populate('captain').select('otp pickup destination fare');

    if (!ride) {
        throw new Error('Ride not found');
    }

    return ride;

}

module.exports.startRide=async({rideId,otp,captain})=>{
    if(!rideId||!otp){
        throw new Error('Ride Id and OTP are required');
    }

    const ride=await rideModel.findOne({
        _id:rideId
    }).populate('user').populate('captain').select('+otp')

    if(!ride){
        throw new Error('Ride is not found');
    }
    if(ride.status!=='accepted'){
        throw new Error('Ride not accepted');
    }
    if(ride.otp!=otp){
        throw new Error('Invalid OTP');
    }
    await rideModel.findOneAndUpdate({_id:rideId},
        {
            status:'ongoing'
        }
    )

return ride;
}

module.exports.endRide=async({rideId,captain})=>{
    if(!rideId){
        throw new Error('Ride Id is required');
    }

    const ride=await rideModel.findOne({
        _id:rideId,
        captain:captain._id
    }).populate('user').populate('captain').select('+otp')

    if(!ride){
        throw new Error('Ride is not found');
    }
    if(ride.status!=='ongoing'){
        throw new Error('Ride not ongoing');
    }
    await rideModel.findOneAndUpdate({_id:rideId},
        {
            status:'completed'
        }
    )
return ride;
}
