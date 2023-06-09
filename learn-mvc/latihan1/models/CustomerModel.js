const postgresqlDb = require('./init');

class CustomerModel {
    static getDataCustomer() {
        const data = postgresqlDb.Client.query(`
            SELECT * 
            FROM customer
        `)

        return data;
    }
}

module.exports = CustomerModel;