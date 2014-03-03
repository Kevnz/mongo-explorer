YUI.add('loading-view', function (Y) {
    Y.LoadingView = Y.Base.create('loadingView', Y.View, [], {
        initializer: function () {
            
            
        },
        render: function () {
            var container = this.get('container');  
            container.setHTML(Y.templates.Spinner);
            if (!container.inDoc()) {
                Y.one('body').append(container);
            }
            return this;
        }

    });
}, '0.0.0', { requires:['view', 'spinner-template']});