// Step 1
import mongoose from "mongoose"; // Importing the mongoose from mongoose module

const userSchema = mongoose.Schema({  // creating the required schema for the any user
    name: String,
    email: String,
    age: Number,
    profile: String,
    liked_podcasts: [String],
    profile_photo: String,
    genre: [String],
    about: String,
    listners: {
        type: Number,
        default: 0
    },
    podcasts_created: [String],
    password: String,
    date_of_creation: {
        type: Date,
        default: new Date()
    }
});

const UserData = mongoose.model("UserData", userSchema); // store the userSchema in a constant UserData 
export default UserData; //export newly created UserData to use anywhere inside the website.
