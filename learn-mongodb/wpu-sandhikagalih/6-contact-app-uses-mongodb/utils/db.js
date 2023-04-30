const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/wpu')
//   .then(() => console.log('Connected!'));

mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// // add 1 data (for testing)
// const contact1 = new contact({
//     name: 'Valdryan Ivandito',
//     phoneNumber: '087743327777',
//     email: 'valdryan@gmail.com'
// });

// // save to collection (for testing)
// contact1.save().then((contact) => console.log(contact));