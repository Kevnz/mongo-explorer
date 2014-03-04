var qconf = require('qconf'),
    config = qconf();

var connect = function (){
    var mongo = require('mongoskin');
    var db = mongo.db(config.get('db-connection'));
    return db;
};

exports.index = function(req, res){
    var db = connect();
    db.collectionNames(function (err, result) {
        db.close();
        var collections = [];
        for (var i = 0; i < result.length; i++) {
            if (result[i].name.indexOf('system')===-1) {
                collections.push({name: result[i].name.replace(config.get('db-name')+'.', '')});
            }
        }
        res.send(200, collections);
    });
};

exports.new = function(req, res){
    res.send(200);
};

exports.create = function(req, res){
    var db = connect();
    var collection = req.params.collection;
    db.createCollection(collection, function(err,result){
        db.close();
        res.send(200, {name : collection });
    });
};

exports.show = function(req, res){
    var db = connect();
    var collection = req.params.collection;
    var start = req.query.start || 
    db.collection(collection).count(function(cerr, count) {
        db.collection(collection).find().limit(200).toArray(function (err, items) {
            db.close();
            res.send(200, { collectionName: collection, count: count, items: items });
        });
    });
};


exports.destroy = function(req, res){
    var db = connect();
    var collection = req.params.collection;
    db.dropCollection(collection, function(err,result){
        db.close();
        res.send(200, result);
    });
};