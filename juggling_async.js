var http = require('http');  
var bl = require('bl')

// console.warn(process.argv)

var results=[];

function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
    for (var prop in results) {
        console.log(results[prop]);
    }
}

var url = process.argv.slice(2,process.argv.length);
var count=0;

function print_url(number,callback){
    console.warn(url[number]);
    http.get(url[number], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        results[number]=data.toString();
        count=count+1;
        if(count==3){
            printResults();
        }
      }));
    });
    callback();
};

print_url(0,function () {
    print_url(1, function () {
        print_url(2,function () {
            
        })
    })
});

// function func() {
//     return print_url(list[0],function () {}).then(() => print_url(list[1],function () {})).then(() => print_url(list[3],function () {}));
// };

// func();