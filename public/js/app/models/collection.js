YUI.add('collection', function (Y) {

    Y.namespace('data').Collection =  Y.Base.create('collection', Y.Model, [Y.ModelSync.REST], {
        root: '/api/collections',
        idAttribute: 'collection_name',
        initializer: function () {

        }
    }, {
        ATTRS: {
            collection_name: {
                value: ''
            }
        }
    });
}, '0.0.0', { requires:['model','model-sync-rest' ]});