var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
    // important : do not miss this check
    if (req.method !== 'GET') {
        return res.end('send me a GET! my friend \n')
    }
    var prop=url.parse(req.url,true);
    //console.warn(prop);
    var date = new Date(prop.query.iso);
    
    var obj = new Object();
    if(prop.pathname=='/api/unixtime'){
        obj.unixtime = date.getTime();
    }else{
        obj.hour = date.getHours();
        obj.minute  = date.getMinutes();
        obj.second = date.getSeconds();
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    res.end(JSON.stringify(obj) );
    
})  

console.warn(process.argv);

server.listen( process.argv[2] ) 

