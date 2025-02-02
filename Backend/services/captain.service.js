const captainModel=require("../models/captain.model");

module.exports.createCaptain=async({firstName,lastName,email,password,vehicleType,capacity,color,plate})=>{
    if(!firstName||!lastName||!email||!password||!vehicleType||!capacity||!color||!plate){
        throw new Error("All fields are required");
    }
    const captain=captainModel.create({
        fullname:{
            firstName,
            lastName
        },
        email,
        password,
        vehicle:{
            color,capacity,plate,vehicleType
        }
    })
    return captain;
}