YUI.add('mongo-collection-view', function (Y) {

    Y.MongoCollectionView = Y.Base.create('mongoCollectionListView', Y.CompositeView, [], {
        initializer: function () {
            
            
        },
        events: {
            '.collections': {
                click: 'collectionSelected'
            }
        },
        onRender: function () {
            Y.log('onRender of entry');

        }
    });
}, '0.0.0', { requires:['composite-view', 'handlebars', 'helpers']});