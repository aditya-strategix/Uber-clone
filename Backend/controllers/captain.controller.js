const { validationResult } = require("express-validator");
const captainModel=require("../models/captain.model");
const captainService=require("../services/captain.service");

module.exports.registerCaptain=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const{fullname,password,email,vehicle}=req.body;
    const isCaptainAlreadyExist=await captainModel.findOne({email});
    if(isCaptainAlreadyExist){
        return res.status(400).json({message:"Captain already exist"});
    }
    const hashedPassword=await captainModel.hashPassword(password); 
    const captain=await captainService.createCaptain({
        firstName:fullname.firstName,
        lastName:fullname.lastName,
        email,
        password:hashedPassword,
        vehicleType:vehicle.vehicleType,
        capacity:vehicle.capacity,
        color:vehicle.color,
        plate:vehicle.plate 
    })
const token=captain.generateAuthToken();
res.status(201).json({token,captain});

}