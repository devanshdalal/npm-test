var mongo = require('mongodb').MongoClient

var size=process.argv[2];

var url='mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db) {
    // db gives access to the database
    if(err) throw err;
    var collection=db.collection('prices');
    collection.aggregate([
      { $match: { size: size }}
    , { $group: {
        _id: 'total' // This can be an arbitrary string in this case
      , total: {
          // $sum is the operator used here
          $avg: '$price'
        }
      }}
    ]).toArray(function(err, results) {
      if(err)throw err;
      console.warn(results);
      if(results.length!=1) throw new Error(' No Results! my friend. Don\'t feel bad. there must be some problem with your aggregate query\n');
      console.log( Number(results[0].total).toFixed(2) )
      // => [
      // =>   { _id: 'total', total: 11 }
      // => ]
    })
    db.close()
})