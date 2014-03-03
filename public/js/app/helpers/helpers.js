YUI.add('helpers', function (Y) {
    Y.Handlebars.registerHelper('header', function (collection) {
        var item = collection[0];
        var display = [];
        for (var prop in item) {
            if( item.hasOwnProperty( prop ) ) {
                display.push('<th>' + prop + "</th>");
            }
        }
        return new Y.Handlebars.SafeString(display.join(''));
    });

    Y.Handlebars.registerHelper('row', function (collection) {
        var display = [];
        for (var prop in item) {
            if( item.hasOwnProperty( prop ) ) {
                display.push('<td>' + item[prop] + "</td>");
            }
        }
        return new Y.Handlebars.SafeString(display.join(''));
    });

}, '0.0.0', { requires:['handlebars']});