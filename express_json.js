var express = require('express')
var fs = require('fs')

console.warn(process.argv);

var app = express();

app.listen(process.argv[2]);

app.get('/books', function(req, res){
    
    console.warn(req.query);
    
    fs.readFile(process.argv[3], function (err,data) {
        if(err){
            console.error(err);
        }else{
            try{
                res.send( JSON.parse(data) );
            }catch(e){
                console.error(e);
            }
        }
    })    
          
});

