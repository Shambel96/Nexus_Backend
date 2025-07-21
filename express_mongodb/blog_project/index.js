const express = require("express");
const connectDB = require("./src/config/database");

const blogRoutes = require("./src/router/blog.router");

const app = express();
// middleware
app.use(express.json());
app.use("/blogs", blogRoutes);
try {
  connectDB(); // it better to call in try/catch
  console.log(`Database connected successfully`);
} catch (error) {
  console.log(`Unable to connect with the database`);
}

app.listen(3000, () => {
  console.log(`Server Started at 3000 Port`);
});
//
