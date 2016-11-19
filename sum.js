var l= process.argv;
var s=0;
for(var i=2;i<l.length;i++){
	s+=Number(l[i]);
}


console.log(s);
