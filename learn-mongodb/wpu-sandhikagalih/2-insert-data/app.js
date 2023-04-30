const { MongoClient } = require('mongodb');
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

    // add 1 data collection to mahasiswa
    db.collection('mahasiswa').insertOne(
        {
            nama: 'Valdryan Ivandito',
            email: 'valdryan@gmail.com',
        },
        (error, result) => {
            if (error) {
                return console.log('failed insert data!');
            }
            console.log(result);
        }
    );

    // add many data collection to mahasiswa
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama: 'Cindy Maple',
    //             email: 'cindy@gmail.com',
    //         },
    //         {
    //             nama: 'Gideon Vaan',
    //             email: 'gideon@gmail.com',
    //         },
    //         {
    //             nama: 'Shandika Galih',
    //             email: 'shandika@gmail.com',
    //         },
    //         {
    //             nama: 'Shandika Galih',
    //             email: 'shandika@gmail.com',
    //         },
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log('failed insert data!');
    //         }
    //         console.log(result);
    //     }
    // );
});

