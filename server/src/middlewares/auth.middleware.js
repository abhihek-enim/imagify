import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";

const userAuth = asyncHandler(async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json(new ApiResponse(400, {}, "Login again."));
  }

  const tokenDecode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  console.log(tokenDecode);
  const user = await User.findById(tokenDecode.id).select("-password");
  console.log(user);
  if (!user) {
    throw new ApiError(401, "Invalid Access Token");
  }

  req.user = user;
  next();
});

export { userAuth };
