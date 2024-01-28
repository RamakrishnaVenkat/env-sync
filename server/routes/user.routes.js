import { Router } from "express";
import { verifyJWT } from "../controllers/auth.controllers.js";
import { registerUser } from "../controllers/user.controllers.js";
import {upload} from "../middleware/multer.middleware.js"
const router = Router();

//1. REGISTER USER
router.post(
    "/register",
    //injecting the multer middleware to upload file, if the file name "avatar" or "coverImage" exsits in the request, then this middleware runs
    upload.single("avatar"),
    registerUser
);

export default router