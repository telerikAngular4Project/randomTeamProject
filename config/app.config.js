/*  globals __dirname  */

const port = 8080;

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const config = (app) => {
    app.set('view engine', 'pug');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, './../public')));
    app.use(express.static(path.join(__dirname, './../public/dist')));
};

module.exports = { config, port };
