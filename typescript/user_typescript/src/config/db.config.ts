// To connect with our database
// commonjs => ES6 Import
// To connect with the database
// const mongoose = require("mongoose");
import mongoose from "mongoose" 

const connectDB = async (): Promise<void> => {
  try {
    const connect = await mongoose.connect("mongodb://localhost/blog_db");
    console.log(`Mongodb Connected`);
  } catch (error) {
    console.log(`Couldn't connect Mongodb ${error}`);
  }
};
export default connectDB;
//
