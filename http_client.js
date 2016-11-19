var http = require('http');  

var addr = process.argv[2].split(':');

// var options = {
//   host: addr[0],
//   port: addr[1],
//   method: 'GET'
// };
// console.log(process.argv
console.warn(process.argv[2])

http.get(process.argv[2],function (response){
        response.on('data', function(d) {
            console.log(d.toString());
        });
        response.on('end', function() {
            
        });
        response.on('error', function(err) {
            console.log(err);
        });
	}
);

