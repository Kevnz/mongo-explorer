YUI.add('item-view', function (Y, NAME) {

var ItemView = Y.Base.create('itemView', Y.View, [], {
    initializer: function () {
        this.publish('render', {
            broadcast: true,
            bubbles: true,
            emitFacade: true
        });
        if(this.get('model')) {
            this.get('model').after(['load', 'change', 'reset'], this.render, this);
        }
        ItemView.superclass.constructor.apply(this, arguments);
    },
    onRender: function () {},
    render: function () {
        ItemView.superclass.render.apply(this, arguments);
        var container,
            model,
            source,
            compiledTemplate,
            html;
        container = this.get('container');
        model = this.get('model') ? this.get('model').toJSON() : {};
        Y.log('~~~');
        Y.log(model);
        source =  this.template ;
        compiledTemplate = Y.Handlebars.compile(source);
        html = compiledTemplate(model);
        Y.log(html);
        container.setHTML(html);

        if (!container.inDoc()) {
            Y.one('body').append(container);
        }
        this.fire('render');
        this.onRender();
        return this;
    }
});
Y.ItemView = ItemView;

}, '@VERSION@', {"requires": ["view", "handlebars", "node", "event"]});
