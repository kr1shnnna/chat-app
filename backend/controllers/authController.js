import {User}from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser=async(req,res)=>{
    try{
        const {fullName,userName,password,confirmPassword,gender}=req.body;

        if(!fullName || !userName || !password || !gender || !confirmPassword){
            return res.status(400).json({message:"All fields are required"});
        }


        if(password !== confirmPassword){
            return res.status(400).json({message:"Password and confirm password do not match"});
        }

        const existingUser=await User.findOne({userName});
        if(existingUser){
            return res.status(400).json({message:"Username already exists"});
        }

        const hashedPassword=await bcrypt.hash(password,10);


        //profile pic

        const maleProfilePic='/profile/male-profile.jpg';
        const femaleProfilePic='/profile/female-profile.jpg';

        await User.create({
            fullName,
            userName,
            password:hashedPassword,    
            gender,
            profilePic: gender==='male'? maleProfilePic:femaleProfilePic
        })

        res.status(201).json({message:"User registered successfully"});

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});

    }
}


export const loginUser=async (req,res)=>{

    try{

    const {userName,password}=req.body;

    if(!userName || !password){
        return res.status(400).json({message:"Username and password are required"});
    }

    const user=await User.findOne({userName});
    if(!user){
        return res.status(400).json({message:"Invalid username or password"});
    }

      const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(400).json({message:"Invalid username or password"});
    }

    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});

    return res.status(200).cookie('token',token,{maxAge:24*60*60*1000,httpOnly:true,sameSite:'strict'}).json({
        message:"Login successful",
        user:{
            _id:user._id,
            fullName:user.fullName,
            userName:user.userName,
            profilePic:user.profilePic
    }});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
   

}


export const logoutUser = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "strict"
        });

        return res.status(200).json({
            message: "Logged out successfully"
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


export const getOtherUsers=async(req,res)=>{

    try{
        const loggedInUserId=req.userId;

        const otherUsers=await User.find({
            _id:{$ne:loggedInUserId}
        }).select('-password');

        return res.status(200).json({users:otherUsers});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
    }

}