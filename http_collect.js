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
        var data="";
        response.on('data', function(d) {
            //console.log(d.toString());
            data+=d.toString();
        });
        response.on('end', function() {
            data.replace('\n','');
            console.log(data.length);
            console.log(data);
        });
        response.on('error', function(err) {
            console.log(err);
        });
	}
);

