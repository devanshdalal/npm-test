var net = require('net')

function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    var hh = date.getHours();
    var mm = date.getMinutes();
    return  y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + ' ' +
        (hh <= 9 ? '0' + hh : hh) + ':' + (mm <= 9 ? '0' + mm : mm) + '\n';
}

var server = net.createServer(function (socket) {
    var date = dateToYMD(new Date());
    console.warn(date);
    socket.write(date);
    socket.end();
    socket.on('data', function (data) {
        console.warn(socket.name + "> " + data, socket);
    });
    
    // Remove the client from the list when it leaves
    socket.on('end', function () {
        console.warn(socket.name + " left just now");
    });
    
});

console.warn(process.argv);

server.listen( process.argv[2] ) 

