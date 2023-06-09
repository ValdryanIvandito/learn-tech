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

    // read all data in 'mahasiswa' collection
    console.log(
        db
            .collection('mahasiswa')
            .find()
            .toArray((error, result) => {
                console.log(result);
            })
    );

    // read data in 'mahasiswa' collection with specific name
    console.log(
        db
            .collection('mahasiswa')
            .find({ nama: 'Valdryan Ivandito' })
            .toArray((error, result) => {
                console.log(result);
            })
    );

    // read data in 'mahasiswa' collection with specific id
    console.log(
        db
            .collection('mahasiswa')
            .find({ _id: ObjectID('6448c3fe6ab28ef2b5c3fe5f') })
            .toArray((error, result) => {
                console.log(result);
            })
    );
});

