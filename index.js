// Starting process
import express from "express";            // import all module from dependencies and use the very name.
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./routes/user.js"; //import default route from the user.js file

const app = express(); //Creates an Express application. The express() function is a top-level function exported by the express module.

app.use(bodyParser.json({ limit: "30mb", extended: true }));  //use is the property to use data from the body or data  of the form.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); // cors helps in smooth exchange of data inside the website 

app.use("/user", userRouter); // use the user endpoint for all the specified routes from routes/user.js.

const CONNECTION_URL =
  "mongodb+srv://podheadUser:abcde@cluster0.zfkjpkm.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listning on port ${PORT}.`)))
  .catch((error) => console.log(error.message));
