// Repository Pattern
// centralizes our Database operations
const Blog = require("../models/blog.schema");

class BlogRepository {
  // CRUD
  // create
  // const create = () => {

  // }
  // this are our database operations
  async createBlog(data) {
    // {
    //     title : "About Backend",
    //     content : "Backend nnkdsknfds",
    //     author : "By someone"
    // }
    return await Blog.create(data);
  }
  // read
  async getBlogs() {
    return await Blog.find();
  }

  async getBlogsByID(id) {
    return await Blog.findById(id);
  }
  // update
  async updateBlog(id, data) {
    return await Blog.findByIdAndUpdate(id, data);
  }
  // delete
  async deleteBlog(id) {
    return await Blog.findByIdAndDelete(id);
  }
}
module.exports = new BlogRepository();
//
