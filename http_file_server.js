var http = require('http')
var fs = require('fs')

var stream=fs.createReadStream(process.argv[3])

var server = http.createServer(function (req, res) {
    
    stream.pipe(res);
    
})  

console.warn(process.argv);

server.listen( process.argv[2] ) 

