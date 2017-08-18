const config = require('./config');
const dbProm = require('./data').init(config.db.connectionString);

const dataProm = dbProm
    .then((db) => {
        return require('./data').initData(db);
    });

Promise.all([dbProm, dataProm])
    .then((db, data) => {
        return require('./app').init(db, data);
    })
    .then((app) => {
        app.listen(config.app.port, () => {
            console.log(`Server started at http://localhost:${config.app.port}`);
        });
    });
