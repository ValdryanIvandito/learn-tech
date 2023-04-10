const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// using ejs
app.set('view engine', 'ejs');

// using express ejs layouts
app.use(expressLayouts);

app.get('/', (req, res) => {
    //const students = [];
    const students = [
        {
            name: 'Cindy Mapple',
            email: 'mapple@gmail.com',
        },
        {
            name: 'Alvin Darius',
            email: 'darius@gmail.com',
        },
        {
            name: 'Koalsky Demeter',
            email: 'koalsky@gmail.com',
        },
    ];

    res.render('index', { 
        title: 'Home Page', 
        name: 'Valdryan Ivandito',
        students,
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Page' });
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404 Page not found!</h1>');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});