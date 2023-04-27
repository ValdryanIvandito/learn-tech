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
            nama: 'Erik',
            email: 'erik@gmail.com',
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
    //             nama: 'Erika',
    //             email: 'erika@gmail.com',
    //         },
    //         {
    //             nama: 'Denny',
    //             email: 'denny@gmail.com',
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

