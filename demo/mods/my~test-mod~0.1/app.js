var container = require('vertx/container');

var webServerConf = {
    port: 8888,
    host: 'localhost',
    "web_root": "."
};

container.deployModule('io.vertx~mod-web-server~2.0.0-final', webServerConf);