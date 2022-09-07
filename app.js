const { createSecretKey } = require("crypto");
const express = require("express");
const app = express();
const port = 80;

//  get ----> read
/*app.get("/",(req,res)=>{
    res.send("this is home page");
});
app.get("/about",(req,res)=>{
    res.send("this is about page")
})*/
// post ----> create
/*
app.post("/",(req,res)=>{
    res.send("this is home page");
});
app.post("/about",(req,res)=>{
    res.send("this is about page")
})
*/
// status code
app.get("/eror",(req,res)=>{
    res.status(404).send("file not found Error!")
})
app.listen(port,()=>{
    console.log(`your request is listening at port number ${port}` );
})