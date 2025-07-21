//route = URL
// defines which routes/URL go to the controller
const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");

// POST -> CREATE
router.post("/v1", blogController.create);
// GET -> READ
router.get("/v1", blogController.getBlogs);
// get by ID
// v1/3
// v1/4
// v1/2 -> :id => Request Parameter
router.get("/v1/:id", blogController.getBlogId);
// PUT -> UPDATE
router.put("/v1/:id", blogController.updateBlog);
// DELETE -> DELETE
router.delete("/v1/:id", blogController.deleteBlog);

module.exports = router;
//
