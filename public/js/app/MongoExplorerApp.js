YUI.add('mongo-explorer', function (Y) {

Y.MongoExplorerApp = Y.App.create('mongoExApp', Y.App, [], {
    views: {
        home: {
            type: Y.CollectionListView,
            preserve: false
        },
        collection: {
            type: Y.MongoCollectionView,
            preserve: false
        },
        loading: {
            type: Y.LoadingView,
            preserve: false
        }
 
    },
    initializer: function(config) {
        Y.log('in the initializer of the app...is this ever gonna get fired');
        var self = this;
        //var n = new Y.Notify();
        //n.render();

        Y.Global.on('broadcastMessage', function (e) {
            n.add({'message': e.message});
        });

    },


        
    listCollections: function (req, res, next) {
        Y.log('/ route');
        this.showView('loading');
        var self = this;
        var collections = new Y.data.CollectionList();
        collections.load(function () {
            Y.log('test');
            Y.log(collections);
            self.showView('home', { modelList: collections, template: Y.templates.CollectionsTemplate }); 
        })
        
    },
    listCollectionContents: function (req, res, next) {
        Y.log('listCollectionContents');
        this.showView('loading');
        Y.log(Y.data);
        var collectionFromDB = new Y.data.MongoCollection({collectionName:req.params.id});
        var self = this;
        collectionFromDB.load(function () {
            Y.log('collLoad')
            Y.log(collectionFromDB.get('modelList')); 
            Y.log(Y.templates.MongoCollectionListTemplate);
            Y.log(collectionFromDB.toJSON());
            Y.log(Y.MongoCollectionView);
            self.showView('collection', { model:collectionFromDB, 
                template:Y.templates.MongoCollectionListTemplate
            }); 
        } );
    }
 

 
 
 
 
    }, {
        ATTRS: {
            routes: {
                value: [
                    { path: '/', callbacks: 'listCollections' },
                    { path: '/collection/:id', callbacks: 'listCollectionContents' }
                ]
            }
        }
    });

}, '0.0.0', { requires:[
    'base-base', 
    'app',
    'app-create',
    'collection', 
    'collection-list',
    'collection-list-view',
    'collection-list-template',
    'loading-view', 
    'mongo-collection-view', 
    'mongo-collection',
    'mongo-collection-list-template'
]});