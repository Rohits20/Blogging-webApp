//password--vByjH26P9ZMpl9FS
import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";


const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog",blogRouter)

mongoose
  .connect(
    "mongodb+srv://admin:vByjH26P9ZMpl9FS@cluster0.pauzq.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to database and listening to localhost 5000")
  ).catch((err)=> console.log(err));




