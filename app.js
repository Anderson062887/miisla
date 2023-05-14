const http = require("http")
const express = require("express");

const app = express();

app.get("/",(re,res)=>{
  res.send("mi islard from express")
})
// http.createServer(function(req,res){
//   res.write("mi islard")
//   res.end()	

// }).listen(3000)
app.listen(3000,()=>{
  console.log("running server")
})
