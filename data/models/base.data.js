class BaseMongoDbData {
    constructor(db, collectionName) {
        this.db = db;
        this.collectionName = collectionName;
        this.collection = this.db.collection(this.collectionName);
    }

    filterBy(props) {
        return this.collection.find(props).toArray();
    }

    getAll() {
        return this.collection.find().toArray();
    }

    create(item) {
        return this.collection.insert(item)
            .then(() => {
                return item;
            });
    }

    findOne(props) {
        return this.collection.findOne(props);
    }

    updateOne(filter, value) {
        return this.collection.updateOne(filter, value);
    }
}

module.exports = BaseMongoDbData;
