
const express = require("express");
const path = require("path");
const fs = require("fs");


const app = express();

app.get("/",(re,res)=>{

  fs.readFile(path.join(__dirname,"build","index.html"),(e,data)=>{
    if(!e){
     res.send(data.toString())
    }
  })

})
app.get("/about",(req,res)=>{
  res.send("about page comming soon")
})

app.get("/location",(req,res)=>{
  res.send("location page comming soon.")
})


app.listen(3000,()=>{
  console.log("running server")
})
