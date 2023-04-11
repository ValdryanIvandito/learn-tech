const express = require('express');
const { loadContacts, findContact, addContact, checkDuplicate, deleteContact, updateContacts } = require('./utils/contacts.js')
const expressLayouts = require('express-ejs-layouts');
const { body, validationResult, check } = require('express-validator');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require('connect-flash');

const app = express();
const port = 3000;

// Using ejs
app.set('view engine', 'ejs');

// Third party middleware
app.use(expressLayouts);

// Build in middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Config flash
app.use(cookieParser('secret'));
app.use(
    session({
        cookie: { maxAge: 6000 },
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
);
app.use(flash());

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
    const contacts = loadContacts();
    //console.log(contacts);
    res.render('contact', { 
        title: 'Contact Page',
        layout: 'layouts/main-layout',
        contacts,
        msg: req.flash('msg'),
    });
});

// contact data add form
app.get('/contact/add', (req, res) => {
    res.render('add-contact', { 
        title: 'contact data add form',
        layout: 'layouts/main-layout',
    });
});

// process add contact data
app.post('/contact', [
    body('name').custom((value) => {
        const duplicate = checkDuplicate(value);
        if (duplicate) {
            throw new Error('Name already exists!')
        }
        return true;
    }),
    check('email', 'Email format is not valid!').isEmail(),
    check('phoneNumber', 'Phone number format is not valid!').isMobilePhone('id-ID')
    ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //return res.status(400).json({ errors: errors.array() });
        res.render('add-contact', { 
            title: 'contact data add form',
            layout: 'layouts/main-layout',
            errors: errors.array(),
        });
    } else {
        addContact(req.body);
        // send flash message
        req.flash('msg', 'New contact data added successfully!');
        res.redirect('/contact');
    }
});

// delete contact
app.get('/contact/delete/:name', (req, res) => {
    const contact = findContact(req.params.name);
    
    if (!contact) {
        res.status(404);
        res.send('<h1>404-delete-contact</h1');
    } else {
        deleteContact(req.params.name);
        req.flash('msg', 'New contact data deleted successfully!');
        res.redirect('/contact');
    }
});

// contact data edit form
app.get('/contact/edit/:name', (req, res) => {
    const contact = findContact(req.params.name);

    res.render('edit-contact', { 
        title: 'contact data edit form',
        layout: 'layouts/main-layout',
        contact,
    });
});

// process data edit
app.post('/contact/update', [
    body('name').custom((value, {req}) => {
        const duplicate = checkDuplicate(value);
        if (value !== req.body.oldName && duplicate) {
            throw new Error('Name already exists!')
        }
        return true;
    }),
    check('email', 'Email format is not valid!').isEmail(),
    check('phoneNumber', 'Phone number format is not valid!').isMobilePhone('id-ID')
    ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //return res.status(400).json({ errors: errors.array() });
        res.render('edit-contact', { 
            title: 'contact data edit form',
            layout: 'layouts/main-layout',
            errors: errors.array(),
            contact: req.body,
        });
    } else {
        updateContacts(req.body);
        // send flash message
        req.flash('msg', 'Contact data changed successfully!');
        res.redirect('/contact');
    }
});

app.get('/contact/:name', (req, res) => {
    const contact = findContact(req.params.name);
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