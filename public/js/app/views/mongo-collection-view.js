YUI.add('mongo-collection-view', function (Y) {
    Y.log('mcv')
    Y.MongoCollectionView = Y.Base.create('mongoCollectionListView', Y.ItemView, [], {
        initializer: function () {
            Y.log('mongo-collection-view init');
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
}, '0.0.0', { requires:['item-view', 'handlebars', 'helpers']});