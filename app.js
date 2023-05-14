const http = require("http")
const express = require("express");

const app = express();

http.createServer(function(req,res){
  res.write("mi islard")
  res.end()	

}).listen(3000)
