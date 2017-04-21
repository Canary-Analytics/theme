'use strict'

const express = require('express');
const api = express.Router();

const Controllers = require('../app/controllers/controllers')

api.get('/', Controllers.index);

module.exports = api;


    /*
    app.get('/', (req, res) => {
        res.render('home', {
            user: req.user
        });
    });

    app.get('/login', (req, res) => {
        res.render('login', {
            user: req.user
        });
    });

    app.get('/login/twitter', passport.authenticate('twitter'));

    app.get('/login/twitter/return', passport.authenticate('twitter', {
        failureRedirect: '/login'
    }), (req, res) => {
        res.redirect('/profile');
    });

    app.get('/profile', require('connect-ensure-login').ensureLoggedIn(), (req, res) => {
        res.render('profile', {
            user: req.user._json
        });
    });

    app.get('/busqueda', require('connect-ensure-login').ensureLoggedIn(), (req, res) => {
        res.render('busqueda', {
            user: req.user
        });
    });

    app.get('/wordcloud', require('connect-ensure-login').ensureLoggedIn(), (req, res) => {
        res.render('wordcloud', {
            user: req.user
        });
    });

    app.post('/search', require('connect-ensure-login').ensureLoggedIn(), (req, res) => {
        client.get('search/tweets', {
            q: req.body.valor.v1
        }, (error, tweets, response) => {
            console.log(utils.resultados(tweets.statuses)[11]);
            res.render('resultados', {
                estadisticas: utils.resultados(tweets.statuses),
                resultado: tweets.statuses,
                user: req.user
            });
        });
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    */
