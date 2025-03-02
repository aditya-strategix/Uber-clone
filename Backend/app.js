const dotenv=require("dotenv");
dotenv.config();
const cookieParser=require("cookie-parser");
const cors=require("cors");
const mapsRoutes=require("./routes/maps.routes");
const express=require("express");
const app=express();
const dbConnect=require("./db/db");
const userRoutes=require("./routes/user.routes");
const captainRoutes=require("./routes/captain.routes");
const rideRoutes=require("./routes/ride.routes");

app.use(express.json()); 
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
dbConnect();

 

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);
app.use('/maps',mapsRoutes);
app.use('/rides',rideRoutes);


app.get("/",(req,res)=>{ 
    res.send("Hello World");
});
module.exports=app;  
