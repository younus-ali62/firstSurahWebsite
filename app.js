import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { getHomeInterface } from "./src/Controller/home.js";
import path from "path";

const port=process.env.PORT || 5500;
const app=express();
const ejsFilePath=path.join(path.resolve(),"src","views");
app.set("view engine","ejs");
app.set("views", ejsFilePath);
app.use(express.static("Public"));

app.get("/",getHomeInterface);

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);

})