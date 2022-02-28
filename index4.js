const http=require("http");
let port=10002
http.createServer(( req,res)=>{
    res.end("my favorate sub :java")
}).listen(port);
