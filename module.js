var path=require("path");
var fs=require("fs");

module.exports=function (dir,exten,callback) {
		exten="."+exten;
		fs.readdir(dir, function (err,list) {
			if(err) return callback(err);
			return callback(err,list.filter(
					function (x) {
						return path.extname(x)==exten;
					}
				)
			);
		});
	}