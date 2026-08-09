import express from "express";
import {registerUser,loginUser,logoutUser,getOtherUsers} from "../controllers/authController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

router.get('/other-users',isAuthenticated,getOtherUsers);


export default router;