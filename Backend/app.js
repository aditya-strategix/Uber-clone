const dotenv=require("dotenv");
dotenv.config();
const cookieParser=require("cookie-parser");
const cors=require("cors");

const express=require("express");
const app=express();
const dbConnect=require("./db/db");
const userRoutes=require("./routes/user.routes");
dbConnect();
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

 

app.use('/users',userRoutes);
app.get("/",(req,res)=>{ 
    res.send("Hello World");
});
module.exports=app;
