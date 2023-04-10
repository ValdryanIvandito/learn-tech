const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// Using ejs
app.set('view engine', 'ejs');

// Using express ejs layouts
app.use(expressLayouts);

// Build in middleware
app.use(express.static('public'));

// Application level middleware
app.use((req, res, next) => {
    console.log(`Time (1st Middleware): ${Date.now()}`);
    next();
});

app.use((req, res, next) => {
    console.log(`This is 2nd Middleware`);
    next();
});

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
        layout: 'layouts/main-layout',
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About Page',
        layout: 'layouts/main-layout',
     });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'Contact Page',
        layout: 'layouts/main-layout',
    });
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404 Page not found!</h1>');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});