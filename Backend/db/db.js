const mongoose=require("mongoose");

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{console.log("DB connection success")})
    .catch((error)=>{console.log(error)
        console.log("DB connection failure");
    })
}

module.exports=connectToDb