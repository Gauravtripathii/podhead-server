//Step 2  Create all the different methods CRUD
import UserData from "../models/users.js"; // import the UserData from the path to use it here

export const getAllUsers = async (req, res) => {      // object for accessing all userData, export the constant getAllUsers to use this Handler Function
                                                      
  try {                                               // This try and catch will help in smooth handling of error or success
                                                      
    const userData = await UserData.find();           // .find() will provide all UserData stored in db
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
};

export const createUser = async (req, res) => {         //  constant to store object for creating an user 
  const user = req.body;
  const newUser = new UserData(user);

  try {
    await newUser.save();           // async stands for asynchronous function that await for the process to finish and then moves forward 
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {        //  Get a specific user using id
  const {id} = req.params;
  try {
    const userData = await UserData.findById(id);
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({error: error.message});
  }
}

export const deleteUser = async (req, res) => {   //  Delete an specific user
  const {id} = req.params;
  try {
    await UserData.findByIdAndRemove(id);
    res.status(200).json({message : "User Account successfully deleted."});
  } catch (error) {
    res.status(404).json({error : error.message});
  }
}

export const updateUser = async (req, res) => {     //   update an user data
  const {id} = req.params;                          //   Accessing  the id from parameter of the url (shorthand way)
  const { name, email, age, liked_podcasts, genre, listners,podcast_created, password, date_of_creation } = req.body;                                             //  Getting hold of on each info of the user  thru body came thru req
  const updatedUser = { name, email, age, liked_podcasts, genre, listners,podcast_created, password, date_of_creation, _id : id };                     // updating the req body data into the database basically commiting 
  try {
    await UserData.findByIdAndUpdate(id, updatedUser, {new : true} );
    res.status(200).json(updatedUser);
  } catch(error) {
    res.status(404).json({error : error.message} );
  }
}