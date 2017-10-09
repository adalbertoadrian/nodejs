function parse(req) {
    arreglo_parametros = [];
    if(req.url.indexOf("?") > 0) { 
        var url_data = req.url.split("?"); //Separo la url de las parametros de la url
        var parametros = url_data[1].split("&"); //Separo si son multi parametros

        for(i=0;i < parametros.length; i++) { // Guardo los parametros de la url en un arreglo
            var parametro = parametros[i];
            var param_data = parametro.split("=");
            arreglo_parametros[param_data[0]] = param_data[1];
        }
   }

   return arreglo_parametros;
}

module.exports.parse = parse;