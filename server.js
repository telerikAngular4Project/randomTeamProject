const config = require('./config');
const dbProm = require('./data').init(config.db.connectionString);

const dataProm = dbProm
    .then((db) => {
        return require('./data').initData(db);
    });

Promise.all([dbProm, dataProm])
    .then((values) => {
        return require('./app').init(values[0], values[1]);
    })
    .then((app) => {
        app.listen(config.app.port, () => {
            console.log(`Server started at http://localhost:${config.app.port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

