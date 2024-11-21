import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if ([name, email, password].some((field) => field?.trim() === ""))
    throw new ApiError(400, "All field are required");

  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new ApiError(409, "User already Exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const userData = {
    name,
    email,
    password: hashedPassword,
  };

  const newUser = await User.create(userData);
  const createdUser = await User.findById(newUser._id).select("-password");
  const token = jwt.sign(
    { id: createdUser._id },
    process.env.ACCESS_TOKEN_SECRET
  );

  if (!createdUser) {
    throw new ApiError(
      500,
      "Something went wrong while registering user, try again"
    );
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user: createdUser,
        token,
      },
      "User registered."
    )
  );
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Email and User needed."));
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(400, "User does not exists");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json(new ApiResponse(400, {}, "Password Incorrect"));
  }
  const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { name: user.name, email: user.email, token },
        "Logged in successfully."
      )
    );
});

const getCredits = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  console.log(userId);
  const user = await User.findById(new mongoose.Types.ObjectId(userId)).select(
    "-password"
  );
  if (!user) {
    return new ApiError(400, "User does not exists");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { credits: user.credits, name: user.name, email: user.email },
        "Credits fetched successfully."
      )
    );
});

export { registerUser, loginUser, getCredits };
