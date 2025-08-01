
// Repository Pattern
// centralizes our Database operations
import Blog , {BlogDocument} from "../models/blog.schema.js"
import { BlogInput } from "../types/index.js";

class BlogRepository {
  // CRUD
  // create
  // const create = () => {

  // }
  // this are our database operations
  async createBlog(data : BlogInput) : Promise<BlogDocument> {
    // {
    //     title : "About Backend",
    //     content : "Backend nnkdsknfds",
    //     author : "By someone"
    // }
    return await Blog.create(data);
  }
//   // read
//   async getBlogs() {
//     return await Blog.find();
//   }

//   async getBlogsByID(id) {
//     return await Blog.findById(id);
//   }
  // update
  async updateBlog(id : string, data : BlogInput) : Promise<BlogDocument | null> {
    return await Blog.findByIdAndUpdate(id, data);
  }
//   // delete
//   async deleteBlog(id) {
//     return await Blog.findByIdAndDelete(id);
//   }
}
export default new BlogRepository();
//
