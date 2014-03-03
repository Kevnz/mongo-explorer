YUI.add('mongo-collection-list-template', function (Y) {


    Y.namespace('templates').MongoCollectionListTemplate = Y.TemplateLoader('/js/app/templates/mongo-collection-list-template.html');
 
}, '0.0.1', {
    requires:['template-loader', 'handlebars']