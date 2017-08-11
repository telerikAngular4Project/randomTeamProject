const BaseData = require('./base.data');

class UsersData extends BaseData {
    constructor(db) {
        super(db, 'users');
    }
}

module.exports = UsersData;
