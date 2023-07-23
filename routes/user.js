//Step 3
import { getAllUsers } from "../controllers/user.js";  // import all the getAllUsers from the defined path

import express from "express";       // import the express module

const router = express.Router();  // creating a router instance using Router() methodd belongs to express

router.get("/", getAllUsers);       // specify get method for the root /user specified in the index.js and passing getAllUser handler function.

export default router; //wxported to be used anywhere
