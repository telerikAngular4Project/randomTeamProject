const express = require('express');
const config = require('./../config');
const routes = require('./routes');

module.exports = (data) => {
    const app = express();
    config.app.config(app);
    routes.attachTo(app);
    return Promise.resolve(app);
};
