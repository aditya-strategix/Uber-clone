const { validationResult } = require("express-validator");
const captainModel=require("../models/captain.model");
const captainService=require("../services/captain.service");
const blacklistTokenModel = require("../models/blacklistToken.model");

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

module.exports.loginCaptain=async(req,res,next)=>{
    const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
const {email,password}=req.body;
const captain=await captainModel.findOne({email}).select('+password');
if(!captain){
    return res.status(401).json({message:'Invalid email or password'})
}
const isMatch=await captain.comparePassword(password);
if(!isMatch){
    return res.status(401).json({message:'Invalid email or password'});
}
const token=captain.generateAuthToken();
res.cookie('token',token);
res.status(200).json({token,captain});
}

module.exports.getCaptainProfile=async(req,res,next)=>{
    return res.status(200).json(req.captain);
}
module.exports.logoutCaptain=async(req,res,next)=>{
    const token=req.cookies.token||req.headers.authorization?.split(" ")[2];
    await blacklistTokenModel.create({token});
    res.clearCookie('token');//clear cookie from browser
    res.status(200).json({message:'Logged out'})    
}