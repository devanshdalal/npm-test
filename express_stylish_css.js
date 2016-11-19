var express = require('express')
var stylus = require('stylus')
var bodyparser = require('body-parser')

console.warn(process.argv);

var app = express();

app.listen(process.argv[2]);

app.use(bodyparser.urlencoded({extended: false}))

app.use(express.static(process.argv[3]));
app.use(stylus.middleware( process.argv[3]+'/*.styl' ));

app.get('/main.css', function (req, res) {
    console.warn('printing to console');
    //res.end('p {\n  color: #f00;\n}\n')
})
