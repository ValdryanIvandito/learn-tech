const express = require('express');
const { loadContact, findContact } = require('./utils/contacts.js')
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

// Using ejs
app.set('view engine', 'ejs');

// Third party middleware
app.use(expressLayouts);

// Build in middleware
app.use(express.static('public'));

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
    const contacts = loadContact();
    //console.log(contacts);
    res.render('contact', { 
        title: 'Contact Page',
        layout: 'layouts/main-layout',
        contacts,
    });
});

app.get('/contact/:name', (req, res) => {
    const contact = findContact(req.params.name);
    //console.log(contact);
    res.render('detail', { 
        title: 'Detail Page',
        layout: 'layouts/main-layout',
        contact,
    });
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404 Page not found!</h1>');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});