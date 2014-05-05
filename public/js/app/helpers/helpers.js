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
    Y.Handlebars.registerHelper('dynamicDisplay', function (collection) {
        var display = [];
        
        for (var i = 0; i < collection.length; i++) {
            display.push('<table class="pure-table pure-table-bordered pure-table-striped">');
            display.push('<thead><tr>');
            for (var prop in collection[i]) {
                if( collection[i].hasOwnProperty( prop ) ) {
                    display.push('<th>' + prop + "</th>");
                }
            }
            display.push('</tr></thead>');
            display.push('<tbody><tr>');
        
            for (var prop in collection[i]) {
                if( collection[i].hasOwnProperty( prop ) ) {
                    display.push('<td>' + collection[i][prop] + "</td>");
                }
            }
            display.push('</tr></tbody>');
            display.push('</table>');
        };
        return new Y.Handlebars.SafeString(display.join(''));
    });
    Y.Handlebars.registerHelper('pager', function(total, current, pageSize) {
        var display = [];

        var pageCount = total/pageSize;
        Y.log(pageCount)
        for (var i = 0; i < (pageCount + 1); i++) {
            display.push('<button>' + i + '</button>');
        };
        return new Y.Handlebars.SafeString(display.join('')); 
    });

}, '0.0.0', { requires:['handlebars']});