var http = require("http");

var manejador = function(solicitud, respuesta) {
    //console.log("Recibido"); //Respuesta por consola
    respuesta.end("Hola Mundo"); //Respuesta por navegador
};

var servidor = http.createServer(manejador);

servidor.listen(8080);