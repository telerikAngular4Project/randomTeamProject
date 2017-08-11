const config = require('./config');

require('./data').init(config.db.connectionString)
    .then((db) => {
        return require('./data').initData(db);
    })
    .then((data) => {
        return require('./app').init(data);
    })
    .then((app) => {
        app.listen(config.app.port, () => {
            console.log(`Server started at http://localhost:${config.app.port}`);
        });
    });
