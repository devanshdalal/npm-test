var mongo = require('mongodb').MongoClient

var database=process.argv[2];
var collection_name=process.argv[3];
var id=process.argv[4];

var url='mongodb://localhost:27017/'+database;
mongo.connect(url, function(err, db) {
    // db gives access to the database
    if(err) throw err;
    var collection=db.collection(collection_name);
    collection.remove(
        {_id:id}
        , function(err, data) {
        if (err) throw err
        db.close()
    })
})