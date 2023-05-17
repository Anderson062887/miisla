const http = require("http")
const express = require("express");

const app = express();

app.get("/",(re,res)=>{
  res.send("mi islard from express comming soon")
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
