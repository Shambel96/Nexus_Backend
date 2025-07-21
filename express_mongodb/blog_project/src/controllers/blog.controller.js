//This is our major HTTP layer
// we take request and give to service
// takes the data from  service give response
const blogService = require("../services/blog.service");

class BlogController {
  async create(request, response) {
    try {
      // where is the data => request body
      const blog = await blogService.createBlog(request.body);
      // http -> status code and http methods(GET, POST(create), PATCH , DELETE)
      response.status(201).json(blog);
      // title, content , author
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }
  // get
  async getBlogs(request, response) {
    try {
      const allblogs = await blogService.getBlogs();
      if (!allblogs || allblogs == "") {
        response
          .status(404)
          .json({ message: "I don't any blog in my database" });
        return;
      }
      response.status(200).json(allblogs);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }
  //getBlogsById
  async getBlogId(request, response) {
    try {
      const blogwithId = await blogService.getBlogsById(request.params.id);
      if (!blogwithId) {
        response.status(404).json({ message: error.message });
      }
      response.status(200).json(blogwithId);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }
  // update
  async updateBlog(request, response) {
    try {
      console.log("Request Param", request.params.id);

      const updatedBlog = await blogService.updateBlog(
        request.params.id, // URL Params
        request.body
      );
      response.status(200).json(updatedBlog);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  // delete
  async deleteBlog(request, response) {
    try {
      const deletedBlog = await blogService.deleteBlog(request.params.id);
      response
        .status(200)
        .json({ message: "Blog deleted Successfully", data: deletedBlog });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  }
}
module.exports = new BlogController();
//
