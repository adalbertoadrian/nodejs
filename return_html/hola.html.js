var http = require("http"),
    fs = require("fs"); 

http.createServer(function(req,res){
    fs.readFile("./index.html", function(err,html){
        res.writeHead(200,{"Content-Type":"txt/html"})
        res.write(html);
        res.end();
    });
}).listen(8080);
