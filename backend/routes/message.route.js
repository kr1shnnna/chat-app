import express from "express";
import { sendMessage,getMessages } from "../controllers/messageController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";


const router = express.Router();


router.post("/send/:id",isAuthenticated,sendMessage);

router.get('/get-messages/:id',isAuthenticated,getMessages);




export default router;
