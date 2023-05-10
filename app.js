const http = require("http")

http.createServer(function(req,res){
  res.write("mi islard")
  res.end()	

}).listen(3000)
