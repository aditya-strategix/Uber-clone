const userModel=require("../models/user.model");

module.exports.createUser=async({
    firstName,lastName,email,password
})=>{
    if(!firstName||!email||!password){
throw new Error("All fields are required");
    }
    const user=await userModel.create({
        fullname:{
            firstName,lastName
        },
        password,
        email
    })
    return user;
}