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
        for (var i = 0; i < collection.length; i++) {
            display.push('<tr>');
        
            for (var prop in collection[i]) {
                if( collection[i].hasOwnProperty( prop ) ) {
                    display.push('<td>' + collection[i][prop] + "</td>");
                }
            }
            display.push('</tr>');
        };
        return new Y.Handlebars.SafeString(display.join(''));
    });

}, '0.0.0', { requires:['handlebars']});