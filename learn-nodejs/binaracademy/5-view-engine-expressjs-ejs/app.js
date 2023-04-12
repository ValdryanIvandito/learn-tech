const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const name = 'Valdryan';
    res.render('index', { name });
});

// http://localhost:3000/hobby?name=valdryan&hobby=coding
app.get('/hobby', (req, res) => {
    // take querystring
    console.log(req.query);
    const queryName = req.query.name;
    const queryHobby = req.query.hobby;
    res.render('hobby', { queryName, queryHobby });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});