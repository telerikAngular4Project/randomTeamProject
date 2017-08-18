const express = require('express');
const config = require('./../config');
const routes = require('./routes');

module.exports = (db, data) => {
    const app = express();

    config.app.config(db, app);
    routes.attachTo(app);

    return Promise.resolve(app);
};
