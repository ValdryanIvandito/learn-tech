const CustomerModel = require('../models/CustomerModel');

class CustomerController {
    static async getAllDataCustomer(req, res) {
        try{
            // ambil data dari models
            const customerData = await CustomerModel.getDataCustomer();
            // pilih template html untuk data yang dipilih
            // POSITIVE CASE : Data tersimpan
            if(customerData.rowCount > 0) {
                res.render('customer', { customer: customerData.rows });
            } else {
                res.render('NotFound');
            }
        } catch(error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = { CustomerController }