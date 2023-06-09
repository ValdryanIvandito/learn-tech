const express = require('express');
const { CustomerController } = require('./controllers/CustomerController');

const app = express();

app.set('view engine', 'ejs');

app.get('/customer', CustomerController.getAllDataCustomer);

app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`);
});