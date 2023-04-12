const express = require('express');
const app = express();
const port = 3000;

// application level middleware
const logger = (req, res, next) => {
    console.log('Hit API: ', req.method, req.url);
    next();
};

app.use(logger);

// built-in middleware
app.use(express.urlencoded({ extended: false }));

// routing level middleware
const router = require('./router/routing.js');
app.use(router);

// error handling middleware
app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json({ status: 'failed', message: error.message });
});

// transform to routing level middleware
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/register', (req, res) => {
//     res.sendFile('/register.html', { root: './' });
// });

// app.post('/registration', (req, res) => {
//     console.log(req.body);
//     res.send(`Name: ${req.body.name} <br> Email: ${req.body.email}`);
// });

// app.get('/image', (req, res) => {
//     res.sendFile('/image.html', { root: './' });
// });

// app.post('/file', (req, res) => {
//     const form = formidable({ multiples: true });

//     form.parse(req, (err, fields, files) => {
//         if (err) {
//             next(err);
//             return;
//         }
//         console.log({ fields, files });
//         res.json({ fields, files });
//     });
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});