//Step 2
import UserData from "../models/users.js"; // import the UserData from the path to use it here

export const getAllUsers = async (req, res) => {
  // export the constant getAllUsers to request Handler Function
  try {
    // This try and catch will help in smooth handling of error
    const userData = await UserData.find(); // .find() will provide all UserData
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserData(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
