var fs = require('fs')  



fs.readFile(process.argv[2],
	function (err,buff){
		if(err)console.log(err);
	
		console.log( buff.toString().split('\n').length - 1 );
	}
)

