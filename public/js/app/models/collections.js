YUI.add('collection-list', function (Y) {

    Y.namespace('data').CollectionList = Y.Base.create('collectionList', Y.ModelList, [Y.ModelSync.REST], {
        root: '/api/collections',
        url: '/api/collections',
        model: Y.data.Collection
    }, {
    });
},
	'0.1.0',
	{ requires: ['model-list', 'model-sync-rest', 'collection'] }
);