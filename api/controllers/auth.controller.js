import User from "../models/user.model.js";
import { errorHandle } from "../utils/error.js";
import bcryptjs from "bcryptjs";

import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return next(errorHandle(400, "Passwords do not match!!!"));
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandle(400, "This email is already taken"));
    }

    const hashpassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashpassword });

    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    next(error);
  }
};
//////

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      console.error("User  not found");
      return next(new Error("User  not found!!"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      console.error("Wrong credentials");
      return next(new Error("Wrong credentials!!"));
    }

    // Generate a token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    // Send the response
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.error("Login error:", error);
    next(error);
  }
};
