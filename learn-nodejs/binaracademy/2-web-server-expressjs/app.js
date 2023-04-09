const fs = require('fs');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
});

app.get('/drama', (req, res) => {
    res.sendFile('./drama.txt', {root: __dirname});
});

app.post('/drama', (req, res) => {
    res.sendFile('./drama.txt', {root: __dirname});
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404 Page not found!</h1>');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});