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
  res.send("Location page comming soon")
})
// http.createServer(function(req,res){
//   res.write("mi islard")
//   res.end()	

// }).listen(3000)
app.listen(3000,()=>{
  console.log("running server")
})
