YUI.add('collection-list-view', function (Y) {
    Y.CollectionListView = Y.Base.create('collectionListView', Y.CollectionView, [], {
        initializer: function () {
            
            
        },
        events: {
            '#login-button': {
                click: 'login'
            }
        },
        onRender: function () {
            Y.log('onRender of entry');

        },
        login: function(e) {
            e.preventDefault();
            this.fire('loginChosen');
        },
        register: function (e) {
            e.preventDefault();
            this.fire('registerChosen');
        }

    });
}, '0.0.0', { requires:['item-view' ]});