// const express = require("express");
// const express = require("express");
// // const { get } = require("http");
// const app = express();
// const port = 80;

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
/*
app.get("/eror",(req,res)=>{
    res.status(404).send("file not found Error!")
})
*/

// res.write + html
/*
app.get("/",(req,res)=>{
    res.write("<h1> welcome to the home page</h1>");
    res.write("this is not a html tag simple text");
    res.send();
})
*/
// // passing object/array into send that will convert into JSON
// /*app.get("/",(req,res)=>{
//     res.send({
//         id:1,
//         name:"Safa"
//     })
// })*/

// // res.send() == res.JSON
// /*
// app.get('/',(req,res)=>{
//     res.json({
//         id:1,
//         name:"Safa"
//     })
// })*/
// // for path
// // console.log(__dirname);
// const path = require("path");
// const staticPath = path.join(__dirname,"../public");
// // middleware
// app.use(express.static(staticPath));

// app.listen(port,()=>{
//     console.log(`your request is listening at port number ${port}` );
// })

const express = require("express");
const app = express();
const port = 80;
const path = require("path");
const staticPath = path.join(__dirname,"../public");

// express middleware
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})