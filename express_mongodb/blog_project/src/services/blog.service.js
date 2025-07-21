//Business Logic
const blogRepo = require("../repository/blog.repository"); // new

class BlogService {
  // create
  async createBlog(data) {
    return await blogRepo.createBlog(data);
  }
  // get
  async getBlogs() {
    return await blogRepo.getBlogs();
  }
  // by Id
  async getBlogsById(id) {
    return await blogRepo.getBlogsByID(id);
  }
  // update
  async updateBlog(id, data) {
    return await blogRepo.updateBlog(id, data);
  }
  // delete
  async deleteBlog(id) {
    return await blogRepo.deleteBlog(id);
  }
}
module.exports = new BlogService();
//
