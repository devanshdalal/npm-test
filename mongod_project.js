var mongo = require('mongodb').MongoClient

var age_ = parseInt(process.argv[2],10);

console.warn(age_);

var url='mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
    // db gives access to the database
    if(err)console.error(err);
    var parrots=db.collection('parrots');
    parrots.find(
    {
        age:{$gt:age_}
    }
    ,
    {
      name: 1,
      age: 1,
      _id: 0
    }
    ).toArray(
        function(err, documents) {
            if(err){
                console.error(err);
            }else{
                console.log(documents)
            }
        }
    )
    
    db.close();
  
})