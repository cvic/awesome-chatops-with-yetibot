var vertx = require('vertx');

vertx.createHttpServer().requestHandler(function(req) {
    req.response.end("Hi there, STLJS!");
}).listen(8090, 'localhost');