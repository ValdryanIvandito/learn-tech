const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname });
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404 Page not found!</h1>');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});