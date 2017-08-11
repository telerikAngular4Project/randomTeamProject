/* globals __dirname */

const path = require('path');

const attachTo = (app) => {
    // absolutely redundant / it serves without it
    // app.get('*', (req, res) => res.sendFile(path.join(__dirname, './../public/src/index.html')));
    // app.get('*', (req, res) => res.render('index'));
};

module.exports = { attachTo };
