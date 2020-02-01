const http = require('http');
const colors = require('colors');

const callbackCreateServer = function(req, res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1>Hola mundo</h1>');
    res.end();
}
const servidor = http.createServer(callbackCreateServer);

servidor.listen(2500, function(){
    console.log('Servidor en el puerto 2500');
});

/*const os = require('os');
console.log(os.arch());
console.log(os.release());

/*const math = require('./math.js');
console.log(math);


console.log(math.suma(3,1));
console.log(math.substract(3,1));
console.log(math.multiply(3,5));
console.log(math.divide(3,2));
*/