var express = require('express')
var crypto = require('crypto');

console.warn(process.argv);

var app = express();

app.listen(process.argv[2]);

app.put('/message/:NAME', function(req, res){
    
    res.send( crypto.createHash('sha1').update(new Date().toDateString() + req.params.NAME ).digest('hex') );
          
});

