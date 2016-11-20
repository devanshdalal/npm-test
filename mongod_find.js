var mongo = require('mongodb').MongoClient

var age_ = parseInt(process.argv[2],10);

console.warn(process.argv[2]);
console.warn(age_);

var url='mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
    // db gives access to the database
    if(err)console.error(err);
    var collection=db.collection('parrots')
    collection.find(
    {
        age:{$gt:age_}
    }
    ).toArray(
        function(err, documents) {
            if(err){
                console.error(err);
            }else{
                console.log(documents)
                // for (var prop in documents) {
                //     console.log(documents[prop])
                // }
            }
        }
    )
    
    db.close();
  
})