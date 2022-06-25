import express from "express";
import { getAllBlogs,addBlog ,updateBlog,getById,deleteBlog,getByUserId} from "../controllers/blog-controller.js";


const blogRouter =express.Router();

blogRouter.get("/", getAllBlogs);
//TO create a new blog create a post request
blogRouter.post("/add", addBlog);
//put is used to update a request
//here below we are giving parameter to url which is id of blog from mongo db
// here id used is call on
blogRouter.put('/update/:id',updateBlog)
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);
//to get blog from user
blogRouter.get('/user/:id',getByUserId);

export default blogRouter;

