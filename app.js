var express = require('express'),
    exphbs  = require('express3-handlebars'),
    routes = require('./routes'),
    database = require('./routes/database'),
    collections = require('./routes/database'), //does not scale, do something about routes
    http = require('http'),
    path = require('path'),
    app = express(),
    expstate = require('express-state');

expstate.extend(app);

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views'); 
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
    app.locals.pretty = true;
});

app.get('/', routes.index);

app.get('/api/database', database.get);
app.get('/api/collections', collections.get);

app.use(function(err, req, res, next) {
    res.render('error', { title: 'Kickstarted App', error: err });
});
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port') + " in " + app.get('env') +" mode");
});

