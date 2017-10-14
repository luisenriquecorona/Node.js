request.addListener("data", function(chunk) {
    // funcion llamada cuando un nuevo trozo (chunk) 
    // de informacion (data) es recibido.
});

request.addListener("end", function() {
    // funcion llamada cuando todos los trozos (chunks) 
    // de informacion (data) han sido recibidos.
});
