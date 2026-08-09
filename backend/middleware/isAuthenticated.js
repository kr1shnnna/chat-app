import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {


    try{
        const token=req.cookies.token;
       
        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }
        const decoded= jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({message:"Unauthorized"});
        }

        req.userId=decoded.userId;
        

        next(); 
    }

 catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export default isAuthenticated;