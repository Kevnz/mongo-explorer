YUI.add('mongo-explorer', function (Y) {

Y.MongoExplorerApp = Y.App.create('mongoExApp', Y.App, [], {
    views: {
        home: {
            type: Y.views.CollectionList,
            preserve: true
        },
        login: {
            type: Y.LoginView,
            preserve: false
        }
 
    },
    initializer: function(config) {
        Y.log('in the initializer of the app...is this ever gonna get fired');
        var self = this;
        var n = new Y.Notify();
        n.render();

        Y.Global.on('broadcastMessage', function (e) {
            n.add({'message': e.message});
        });

    },


        
        listCollections: function (req, res, next) {
            var self = this;
            self.showView('home', { modelList: collections, template: '#collections-template' });
        },
        listCollectionContents: function (req, res, next) {

        }
 

 
 
 
 
    }, {
        ATTRS: {
            routes: {
                value: [
                    { path: '/', callbacks: 'listCollections' },
                    { path: '/collection/:id/', callbacks: 'listCollectionContents' }
                ]
            }
        }
    });

}, '0.0.0', { requires:['base-base']});