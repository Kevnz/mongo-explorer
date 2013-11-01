var qconf = require('qconf'),
    config = qconf();

var connect = function (){
    var mongo = require('mongoskin');
    var db = mongo.db(config.get('db-connection'));
    return db;
};


exports.index = function(req, res){
    var db = connect();
    db.admin.getCollectionNames(function (err, result) {
        db.close();
        res.send(200, result);
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
 
};

exports.edit = function(req, res){
 
};

exports.update = function(req, res){
 
};

exports.destroy = function(req, res){
    var db = connect();
    var collection = req.params.collection;
    db.dropCollection(collection, function(err,result){
        db.close();
        res.send(200, result);
    });
};