var mongo = require('mongodb').MongoClient

var database=process.argv[2];

var url='mongodb://localhost:27017/'+database;
mongo.connect(url, function(err, db) {
    // db gives access to the database
    if(err) throw err;
    var collection=db.collection('users');
    collection.update(
        {username:'tinatime'}
        , {$set:{age:40}} , function(err, data) {
        if (err) throw err
        db.close()
    })
})