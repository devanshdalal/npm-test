var express = require('express')
var path = require('path')

console.warn(process.argv);

var app = express();

app.listen(process.argv[2]);

app.set('views', path.join(__dirname, 'public'))

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});