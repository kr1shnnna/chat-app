// const express=require("express");   
import dotenv from "dotenv"; 

import express from "express";

import connectDB from "./config/db.js";


const app=express();

dotenv.config();  

const PORT=process.env.PORT || 5000;



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

