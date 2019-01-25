const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

// configure Express

module.exports = function () {
    const app = express();
    if (process.env.NODE_END == 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_END == 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session(
        {
            saveUninitialized: true,
            resave: true,
            secret: config.sessionSecret
        }));

    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    var route = require('../app/routes/index.server.routes.js');

    route(app);

    //require('../app/routes/index.server.routes.js');

    app.use(express.static('./public'));

    return app;
}