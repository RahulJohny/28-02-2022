// var http=require("http");
// let port=1003
// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type':'text/html'})
//     res.write('<h1><center>this is home page</center></h1>')
//     res.end()
// }).listen(port);
var http=require("http");
let port=4000
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    res.write('<h1>This is rahul</h1><li><a href="/kannan/">kannan</a></li><li><a href="/ajay/">ajay</a></li><li><a href="/rahul/">rahul</a></li>')
    res.end()

}).listen(port);