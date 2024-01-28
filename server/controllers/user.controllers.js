import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
import {v2 as cloudinary} from "cloudinary"

//1. REGISTER USER
export const registerUser = asyncHandler(async (req, res) => {
    //1. GET DETAILS FROM CLIENT
    const { username, fullName, email, password } = req.body;
    //if any details is missing return err
    if (
      //if a field exists, but after trimming if it's "", then the field is missing
      [username, fullName, email, password].some((field) => field?.trim() === "")
    ) {
      throw new ApiError(400, "All fields are required");
    }
  
    //2. CHECK IF THE USER ALREADY EXISTS
    const existedUser = await User.findOne({
      $or: [{ username }, { email }], //checking if any of these field is already existing
    });
    if (existedUser) {
      throw new ApiError(409, "User with this username/email already exists!");
    }
  
    //3. CHECK FOR IMAGES IN LOCALPATH AND UPLOAD IN CLOUDINARY
    //just like how express provides "req.body", multer provides "req.files"
    const avatarLocalPath = req.file?.path;
    console.log(req.file)
    console.log(avatarLocalPath)
    //since avatar is required, throw error if avatar is not found
    // if (!avatarLocalPath) throw new ApiError(400, "Avatar is required!");
  
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    console.log(avatar)
    //just double checking
    // if (!avatar) throw new ApiError(400, "Avatar is required!");
  
    //4. ONCE WE HAVE ALL THE REQUIRED DETAILS SEND IT TO THE DATABASE
    const user = await User.create({
      username: username.toLowerCase(),
      fullName,
      email,
      password,
      avatar: avatar.url,
    });
  
    //5. CHECK IF THE USER IS CREATED SUCCESSFULLY
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    ); //deselect password and refreshToken
  
    if (!createdUser) throw new ApiError(500, "Failed to create the user");
  
    //6. ONCE USER IS CREATED SEND THE DETAILS AS RESPONSE
    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User registered successfully"));
  });