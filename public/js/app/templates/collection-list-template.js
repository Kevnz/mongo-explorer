YUI.add('collection-list-template', function (Y) { 

    Y.namespace('templates').CollectionsTemplate = Y.TemplateLoader('/js/app/templates/collection-list-template.html');
    Y.log(Y.templates.CollectionsTemplate)
}, '0.0.1', {
    requires:['template-loader', 'handlebars']

});