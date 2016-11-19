var express = require('express')

console.warn(process.argv);

var app = express();

app.listen(process.argv[2]);

app.get('/search/', function(req, res){
    
    console.warn(req.query);
    
    var obj = req.query;
    
    res.send(obj);
          
});

