YUI.add('mongo-collection', function (Y) {


    var mongoCollectionList = Y.Base.create('mongoCollectionList', Y.ModelList, [Y.ModelSync.REST], {
        root: '/api/collection/',        
        url : '/api/collections/{collectionName}',
        model: Y.Model,
        initializer: function () { 
            Y.log('init of mongo-collection');
        }
    }, {
        ATTRS: {
            collectionName: {
                value: ''
            }
        }
    });

    Y.namespace('data').MongoCollectionList = mongoCollectionList;
     
    var self;
    Y.namespace('data').MongoCollection =  Y.Base.create('mongoCollection', Y.Model, [Y.ModelSync.REST], {
        root: '/api/collections',
        url : '/api/collections/{collectionName}',
        idAttribute: 'collectionName',
        initializer: function () {
            self = this; 
            Y.log('init of mongo-collection');  
        }
    }, {
        ATTRS: {
            collectionName: {
                value: ''
            },
            count: {
                value: ''
            },
            items: {
                value : []
            }
        }
    });
 

}, '0.0.0', { requires:['model','model-list','model-sync-rest' ]});

 