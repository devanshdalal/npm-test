var mongo = require('mongodb').MongoClient

var size=parseInt(process.argv[2],10);

var url='mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db) {
    // db gives access to the database
    if(err) throw err;
    var collection=db.collection('prices');
    collection.count(
        {age: {$gt:age} }
        , function(err, count) {
        if (err) throw err
        console.log(count);
        db.close()
    })
})