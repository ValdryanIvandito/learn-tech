const express = require('express');
const calculate = require('./calculate.js');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post('/persegi-panjang/hitung/luas', (req, res) => {
    const panjang = Number(req.body.panjang);
    const lebar = Number(req.body.lebar);
    const result = calculate.luas(panjang, lebar);
    res.json({ luas: result, panjang, lebar });
});

app.post('/persegi-panjang/hitung/keliling', (req, res) => {
    const panjang = Number(req.body.panjang);
    const lebar = Number(req.body.lebar);
    const result = calculate.keliling(panjang, lebar);
    res.json({ keliling: result, panjang, lebar });
});

app.listen(3000, () => {
    console.log(`Server started on port ${port}`);
});