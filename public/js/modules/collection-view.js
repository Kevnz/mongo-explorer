YUI.add('collection-view', function (Y, NAME) {

var CollectionView = function () {
    CollectionView.superclass.constructor.apply(this, arguments);
};

Y.extend(CollectionView, Y.View, {
    initializer: function (config) {
        Y.log(arguments); 
        var list = this.get('modelList'); 
        config.modelList.after(['add', 'remove', 'reset'], this.render, this);
    },
    render: function () {
        console.log('render');
        var container = this.get('container'),
            source = this.template,
            compiledTemplate = Y.Handlebars.compile(source),
            data = { items: this.get('modelList').toJSON() },
            html = compiledTemplate(data);
        Y.log(data);
        Y.log(html);
        Y.log(source);
        container.setHTML('');
        container.setHTML(html);

        if (!container.inDoc()) {
            Y.one('body').append(container);
        }
        this.fire('render');
        return this;
    }
});
Y.CollectionView = CollectionView;

}, '@VERSION@', {"requires": ["view", "handlebars", "node", "event"]});
