// Impor nilai-nilai global
const {
    mongo_Db
} = require('../controllers/settings');

// Memeriksa apakah nilai `mongo_Db` telah terdefinisi
if (mongo_Db) {
    // Jika terdefinisi, lanjutkan dengan menghubungkan ke MongoDB
    const mongoose = require('mongoose');

    function connectToMongoDb() {
        mongoose.connect(mongo_Db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Connection error:'));
        db.once('open', () => {
            console.log('</> Success connect to MongoDb √');
        });
    }

    module.exports.connectToMongoDb = connectToMongoDb;

} else {
    // Jika tidak terdefinisi, tampilkan pesan kesalahan
    console.error('MongoDB connection string is not defined.');
}
