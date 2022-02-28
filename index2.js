var http=require("http");
let port=1030
http.createServer( (req,res)=>{
   
    res.end("I am rahul")
    }).listen(port);