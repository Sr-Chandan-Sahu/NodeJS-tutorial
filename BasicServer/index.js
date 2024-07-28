const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1>Hello, Coder!</h1>")
    res.end();
}).listen(4500);