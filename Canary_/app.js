(() => {
    "use strict";

    const includesHtml = require("./config/mainConfig");

    const express = require('express');
    const app = express();
    const path = require('path');
    const expressLayouts = require('express-ejs-layouts');

    app.set('port', (process.env.PORT || 8080));

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(expressLayouts);

    app.use(express.static(includesHtml));

    require('./app/routes.js')(app);

    module.exports = app;
})();
