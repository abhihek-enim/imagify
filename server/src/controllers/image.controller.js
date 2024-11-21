import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import FormData from "form-data";
import axios from "axios";

export const generateImage = asyncHandler(async (req, res) => {
  const { userId, prompt } = req.body;
  const user = await User.findById(userId);
  if (!user || !prompt) {
    return res.json(new ApiResponse(400, {}, "Missing details(prompt/userId)"));
  }
  if (user.credits === 0) {
    return res.json(new ApiResponse(400, {}, "No credits"));
  }
  const formData = new FormData();
  formData.append("prompt", prompt);

  const { data } = await axios.post(
    "https://clipdrop-api.co/text-to-image/v1",
    formData,
    {
      headers: {
        "x-api-key": process.env.CLIPDROP,
      },
      responseType: "arraybuffer",
    }
  );

  const base64Image = Buffer.from(data, "binary").toString("base64");
  const resultImage = `data:image/png;base64,${base64Image}`;
  await User.findByIdAndUpdate(user._id, { credits: user.credits - 1 });
  return res.json(
    new ApiResponse(
      200,
      { resultImage, credits: user.credits },
      "Image generated successfully"
    )
  );
});
