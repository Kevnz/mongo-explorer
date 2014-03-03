YUI.add('collection', function (Y) {
 
    Y.namespace('data').Collection =  Y.Base.create('collection', Y.Model, [Y.ModelSync.REST], {
        root: '/api/collections',
        url : '/api/collections/{name}',
        idAttribute: 'name',
        initializer: function () {

        } 
    }, {
        ATTRS: {
            name: {
                value: ''
            }
        }
    });

}, '0.0.0', { requires:['model','model-sync-rest' ]});

 