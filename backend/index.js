import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";

import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());

const connectDB =async()=>{
    try{
       const conn= await mongoose.connect(process.env.MONGO_URL);
       console.log(`connected to database ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error is ${error}`)
    }
}
mongoose.set('strictQuery', true);

connectDB();




app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use(( err,req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
    //console.log("i am midlleware")
  });

app.listen(8800, () => {
   
    console.log("Server is running on port.");
  });