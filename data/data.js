const UsersData= require('./models').users;

const init = (db) => {
    return Promise.resolve({
        users: new UsersData(db),
    });
};

module.exports = init;
