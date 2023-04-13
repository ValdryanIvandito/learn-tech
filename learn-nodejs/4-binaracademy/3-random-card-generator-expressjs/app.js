const express = require('express');

const app = express();
const port = 3001;

// const randomcard = () => {
//     const card = ['JACK', 'QUEEN', 'KING', 'ACE'];
//     const randomValue = Math.floor(Math.random() * 4);
//     const randomCard = card[randomValue];
//     return randomCard;
// }

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
});

app.post('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
});

app.post('/random', (req, res) => {
    result = randomcard();
    res.send(`<h1>RESULT: ${result}</h1> <form action="/" method="post">
    <button type="submit">BACK</button></form>`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404 Page not found!</h1>');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});