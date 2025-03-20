import User from "../models/user.model.js";

import bcryptjs from "bcryptjs";

import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashpassword });
  try {
    await newUser.save();
    res.status(200).json({ message: "user registerd succcessfully!" });
  } catch (error) {
    next(error);
  }
}};
