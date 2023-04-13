const express = require('express');
const randomCard = require('./randomcard.js');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/random', (req, res) => {
    let card = randomCard();
    res.json({ card });
});

app.listen(3000, () => {
    console.log(`Server started on port ${port}`);
});