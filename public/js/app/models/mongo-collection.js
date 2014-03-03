YUI.add('mongo-collection', function (Y) {


    var mongoDataList = Y.Base.create('mongoDataList', Y.ModelList, [Y.ModelSync.REST], {
        root: '/api/collection/',        
        url : '/api/collections/{name}',
        idAttribute: 'name'
    }, {
        ATTRS: {
            name: {
                value: ''
            }
        }
    });
    Y.namespace('data').MongoCollectionList = mongoDataList;
    var self;
    Y.namespace('data').MongoCollection =  Y.Base.create('mongoCollection', Y.Model, [Y.ModelSync.REST], {
        root: '/api/collections',
        url : '/api/collections/{name}',
        idAttribute: 'name',
        initializer: function () {
            self = this; 
            Y.log('init of mongo-collection');
            this.get('modelList').set('name', this.get('name'));
            this.on('load', this.get('modelList').load);
        }
    }, {
        ATTRS: {
            name: {
                value: ''
            },
            modelList: {
                value : new mongoDataList()
            }
        }
    });
 

}, '0.0.0', { requires:['model','model-sync-rest' ]});

 