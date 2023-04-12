const express = require('express');
const formidable = require('formidable'); // third party middleware

const router = express.Router();

// routing
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/register', (req, res) => {
    res.sendFile('/register.html', { root: './' });
});

router.post('/registration', (req, res) => {
    console.log(req.body);
    res.send(`Name: ${req.body.name} <br> Email: ${req.body.email}`);
});

router.get('/image', (req, res) => {
    res.sendFile('/image.html', { root: './' });
});

router.post('/file', (req, res) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        console.log({ fields, files });
        res.json({ fields, files });
    });
});

module.exports = router;