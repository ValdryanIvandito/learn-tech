const { MongoClient, ObjectID } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'wpu';

const client = new MongoClient(uri, {
    // userNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if (error) {
        return console.log('failed connection!');
    }

    // console.log('success connection!');

    // select database
    const db = client.db(dbName);

    // delete one data in 'mahasiswa' collection by id
    db.collection('mahasiswa')
        .deleteOne({
            _id: ObjectID('6448c5396ab28ef2b5c3fe60'),
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });

    // delete many data in 'mahasiswa' collection by name
    // db.collection('mahasiswa')
    // .deleteMany({
    //     nama: 'Sandhika Galih',
    // })
    // .then((result) => {
    //     console.log(result);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
});