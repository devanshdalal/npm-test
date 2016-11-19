var express = require('express')
var path = require('path')

console.warn(process.argv);

var app = express();

app.set('view engine', 'jade')
app.listen(process.argv[2]);

//app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.set('views', process.argv[3] || path.join(__dirname, 'templates'))

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});