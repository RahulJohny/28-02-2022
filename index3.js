var http=require("http");
let port=10001
http.createServer((req,res)=>{
    res.end("i am  etaen apple")
}).listen(port);