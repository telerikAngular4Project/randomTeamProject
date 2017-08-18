/*  globals __dirname  */

const port = 8080;

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const config = (db, app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
        secret: 'chain reaction',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 36000000,
        },
        store: new MongoStore({
            db: db,
        }),
    }));
    // app.use(express.static(path.join(__dirname, './../public')));
    app.use(express.static(path.join(__dirname, './../public/dist')));
};

module.exports = { config, port };
