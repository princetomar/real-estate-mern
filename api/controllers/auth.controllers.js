import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  // 1. get the details from the body
  const { username, email, password } = req.body;

  // 2. Hash the user password
  const hashedPass = bcryptjs.hashSync(password, 10);
  // 3. create new user
  const newUser = new User({
    username: username,
    email: email,
    password: hashedPass,
  });

  try {
    await newUser.save();
    console.log(`User created successfully !\n${newUser}`);
    res.status(200).json({
      status: 200,
      msg: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({ msg: `Error while creating user : ${err.message}` });
  }
};
