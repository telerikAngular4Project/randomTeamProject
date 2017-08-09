/*  globals __dirname  */

const port = 8080;

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const config = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, './../public')));
};

module.exports = { config, port };
