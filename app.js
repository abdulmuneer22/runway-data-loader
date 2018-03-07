var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var dbName = 'runway-remote-dev';

var customers = require('./mockdata/customers');

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
    var dbo = db.db(dbName);
    

    dbo.collection("customers").remove({});

	customers.forEach(function(cx) {
		dbo.collection('customers').insertOne(cx, function(err, res) {
			if (err) throw err;
			console.log('1 document inserted');
		});
	});

	db.close();
});
