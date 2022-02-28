const { readdirSync } = require("fs");
let http=require("http");
let port=1003
http.createServer((req,res)=>{
    res.end("my favorate character is shinchan")
     res.end("i am rahul")
}).listen(port);


    
  