// const express=require("express");   
import dotenv from "dotenv"; 

import express from "express";

import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.route.js";

import messageRoutes from "./routes/message.route.js";

import cookieParser from "cookie-parser";


const app=express();

app.use(cookieParser());

app.use(express.json()); // to parse incoming JSON requests
app.use(express.static("public"));

app.use('/api/auth',authRoutes);

app.use('/api/message',messageRoutes);



dotenv.config();  

const PORT=process.env.PORT || 5000;



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

