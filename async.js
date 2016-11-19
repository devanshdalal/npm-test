var fs = require('fs')  

var file_type = process.argv[3];

fs.readdir(process.argv[2],
	function (err,list){
		if(err)console.log(err);
		list.forEach(
			function (x) {
				l=x.split('.');
				if( (l.length>1) && (l[l.length-1]==file_type) ){
					console.log(x);
				}
			}
		)
		
	}
)