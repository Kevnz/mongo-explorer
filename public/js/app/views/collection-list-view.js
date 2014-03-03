YUI.add('collection-list-view', function (Y) {
    Y.CollectionListView = Y.Base.create('collectionListView', Y.CollectionView, [], {
        initializer: function () {
            
            
        },
        events: {
            '.collections': {
                click: 'collectionSelected'
            }
        },
        onRender: function () {
            Y.log('onRender of entry');

        },
        login: function(e) {
            e.preventDefault();
            this.fire('loginChosen');
        },
        collectionSelected: function (e) {
            e.preventDefault();
            this.fire('collectionSelected', {collection: e.currentTarget.get('data-collection-name')});
        }

    });
}, '0.0.0', { requires:['collection-view']});