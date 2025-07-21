// To connect with our database
// commonjs
// To connect with the database
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb://localhost/blog_db");
    console.log(`Mongodb Connected`);
  } catch (error) {
    console.log(`Couldn't connect Mongodb ${error}`);
  }
};
module.exports = connectDB;
//
