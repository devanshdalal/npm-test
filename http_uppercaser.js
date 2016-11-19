var http = require('http')
var map = require('through2-map')  

var server = http.createServer(function (req, res) {
    // important : do not miss this check
    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }
    
    req.pipe(map(function (chunk) {
        chunk=chunk.toString();
        // console.warn(chunk)
        return chunk.toUpperCase();  
     })).pipe(res) ;
    
    
})  

console.warn(process.argv);

server.listen( process.argv[2] ) 

