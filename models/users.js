import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
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

const UserData = mongoose.model("UserData", userSchema);
export default UserData;
