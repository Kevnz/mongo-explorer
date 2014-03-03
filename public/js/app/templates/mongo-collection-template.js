YUI.add('mongo-collection-template', function (Y) {
 
    Y.namespace('templates').MongoCollectionTemplate = Y.TemplateLoader('/js/app/templates/mongo-collection-template.html');
 
}, '0.0.1', {
    requires:['template-loader', 'handlebars']