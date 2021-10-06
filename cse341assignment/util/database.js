const mongodb = require ('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
MongoClient.connect('mongodb+srv://VirgiO:Caracas123!@cluster0.tdgxs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(client => {
    console.log('Connected');
    callback(result);
}).catch(err => {
    console.log(err);
});
};

module.exports = mongoConnect;