const config = require('./config');

require('./data').init(config.db.connectionString)
    .then((db) => {
        return require('./data').models(db);
    })
    .then((app) => {
        app.listen(config.app.port, () => {
            console.log(`Server started at http://localhost:${config.app.port}`);
        });
    });
