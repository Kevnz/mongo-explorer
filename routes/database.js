var qconf = require('qconf'),
    config = qconf();

var connect = function (){
    var mongo = require('mongoskin');
    var db = mongo.db(config.get('db-connection'));
    return db;
};

exports.get = function(req, res){
    var db = connect();
    db.admin.listDatabases(function (err, result) {
        db.close();
        res.send(200, result);
    });
};

exports.post = function(req, res){
    var db = connect();
    var collection = req.params.db;
    db.createCollection(collection, function(err,result){
        db.close();
        res.send(200, {name : collection });
    });
};

exports.put = function(req, res){
    res.send(200);
};

exports.delete = function(req, res){

        var db = connect();
    var collection = req.params.db;
    db.dropCollection(collection, function(err,result){
        db.close();
        res.send(200, result);
    });
};
