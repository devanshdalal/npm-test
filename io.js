var fs = require('fs')  



var buff=fs.readFileSync(process.argv[2]);

var s=0;

for(var i=0;i<buff.length;i++){

	
	if (  String.fromCharCode(buff[i]) =='\n' ){
		s++;
	}

}


console.log(s)
