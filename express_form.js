var express = require('express')
var bodyparser = require('body-parser')

console.warn(process.argv);

var app = express();

app.listen(process.argv[2]);

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form',
    function(req, res){

        res.send(req.body.str.split('').reverse().join(''));
         
    }
);
