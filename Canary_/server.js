/**
 * Created by chinegua on 24/3/17.
 */

"use strict";
const includesHtml = "../../tobiz/"; //Ruta de donde se encuentra los css, js, images

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 8080));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(includesHtml));




app.get('/', (req, res) => {
    res.render('index', { includes_html:includesHtml});
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
