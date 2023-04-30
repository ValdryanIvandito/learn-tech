const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const { body, validationResult, check } = require('express-validator');
const methodOverride = require('method-override');

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

// setup method override
app.use(methodOverride('_method'));

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

// home page
app.get('/', (req, res) => {
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

// about page
app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About Page',
        layout: 'layouts/main-layout',
     });
});

// contact page
app.get('/contact', async (req, res) => {
    const contacts = await Contact.find();

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
    body('name').custom(async (value) => {
        const duplicate = await Contact.findOne({ name: value });
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
       
        res.render('add-contact', { 
            title: 'contact data add form',
            layout: 'layouts/main-layout',
            errors: errors.array(),
        });
    } else {
        Contact.insertMany(req.body, (error, result) => {
            // send flash message
        req.flash('msg', 'New contact data added successfully!');
        res.redirect('/contact');
        });   
    }
});

// delete contact
app.delete('/contact', (req, res) => {
    //res.send(req.body);
    Contact.deleteOne({ name: req.body.name }).then((result) => {
        req.flash('msg', 'New contact data deleted successfully!');
        res.redirect('/contact');
    }); 
});

// contact data edit form
app.get('/contact/edit/:name', async (req, res) => {
    const contact = await Contact.findOne({ name: req.params.name });

    res.render('edit-contact', { 
        title: 'contact data edit form',
        layout: 'layouts/main-layout',
        contact,
    });
});

// process data edit
app.put('/contact', [
    body('name').custom(async (value, {req}) => {
        const duplicate = await Contact.findOne({ name: value });
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
        res.render('edit-contact', { 
            title: 'contact data edit form',
            layout: 'layouts/main-layout',
            errors: errors.array(),
            contact: req.body,
        });
    } else {
        Contact.updateOne(
            { _id: req.body._id },
            {
                $set: {
                    name: req.body.name,
                    phoneNumber: req.body.phoneNumber,
                    email: req.body.email,
                },
            }
        ).then(result => {
            // send flash message
            req.flash('msg', 'Contact data changed successfully!');
            res.redirect('/contact');
        });
    }
});

// detail contact page
app.get('/contact/:name', async (req, res) => {
    const contact = await Contact.findOne({ name: req.params.name });

    res.render('detail', { 
        title: 'Detail Page',
        layout: 'layouts/main-layout',
        contact,
    });
});

app.listen(port, () => {
    console.log(`contact app uses mongodb | listening at port ${port}`);
});