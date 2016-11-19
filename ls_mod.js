
var mymodule= require("./module");

mymodule(process.argv[2],process.argv[3],function cb(err,data) {
	if(err)console.log(err);
	for (var prop in data) {
		console.log( data[prop] );
	}
});