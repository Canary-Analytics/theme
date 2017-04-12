const express = require('express');
const passport = require('passport');
const Strategy = require('passport-twitter').Strategy;
const Twitter = require('twitter');
const app = express();
const path = require('path');
const includesHtml = require("./config/mainConfig");

require('./config/twitterConfig.js')(Twitter);
require('./config/passportConfig.js')(passport,Strategy);

app.use(express.static(__dirname + '/public'));
app.use(express.static(includesHtml));
app.set('port', (process.env.PORT || 8080));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({
  extended: true
}));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

require('./app/routes/routes.js')(app);

module.exports = app;
