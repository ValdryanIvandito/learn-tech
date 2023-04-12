const express = require('express');
const app = express();

// built-in middleware
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', (req, res) => {
    //console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    res.render('profile', { name, email });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});