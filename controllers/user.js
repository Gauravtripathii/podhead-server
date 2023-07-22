import UserData from "../models/users.js";

export const getAllUsers = async (req, res) => {
  try {
    const userData = await UserData.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
