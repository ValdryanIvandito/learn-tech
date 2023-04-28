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

    // update one data in 'mahasiswa' collection by id
    // db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID('6448c5396ab28ef2b5c3fe61'),
    //     },
    //     {
    //         $set: {
    //             nama: 'Gideon Tobias',
    //         },
    //     }
    // );

    // update many data in 'mahasiswa' collection by name
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Valdryan Ivandito',
    //     },
    //     {
    //         $set: {
    //             email: 'valdryan@hotmail.com',
    //         },
    //     }
    // );

    // Using promise
    const updatePromise = db.collection('mahasiswa').updateOne(
        {
            _id: ObjectID('6448c5396ab28ef2b5c3fe61'),
        },
        {
            $set: {
                //nama: 'Gideon Tobias',
                email: 'gideon@hotmail.com',
            },
        }
    );

    updatePromise
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
});