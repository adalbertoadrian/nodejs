var http = require("http"),
    fs = require("fs"),
    parser = require("./params_parser"); //Cargo modulo personalizado

var p = parser.parse; //Parseo mi modulo

http.createServer(function(req,res){
   if(req.url.indexOf("favicon.ico") > 0) { return; } //Evito que envio de nuevo archivo con la solicitud del favicon

    fs.readFile("./index2.html", function(err,html){ //Leo Archivo index regreso al navegador el contenido del archivo
        var html_string = html.toString();

        var arreglo_parametros = p(req); //Llamo mi modulo

        html_string = html_string.replace("{nombre}",arreglo_parametros["nombre"]);
        //res.writeHead(200,{"Content-Type":"txt/html"}); //Lleno la cabezera
        res.write(html_string);
        res.end();
    });
}).listen(8080);