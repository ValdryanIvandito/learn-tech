const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>This is home page</h1>');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.get('/contact', (req, res) => {
    res.send('This is contact page');
});

app.get('/json', (req, res) => {
    res.json({
        name: 'Valdryan Ivandito',
        phoneNumber: '087732754634',
        email: 'valdryan@hotmail.com'
    });
});

// app.get('/product/:id', (req, res) => {
//     res.send(`Product-ID ${req.params.id}`);
// });

// app.get('/product/:id/category/:idcat', (req, res) => {
//     res.send(`Product-ID: ${req.params.id} <br> Category-ID: ${req.params.idcat}`);
// });

// http://localhost:3000/product/777?category=shoes
app.get('/product/:id', (req, res) => {
    res.send(`Product-ID: ${req.params.id} <br> Category-ID: ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404 Page not found!</h1>');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});