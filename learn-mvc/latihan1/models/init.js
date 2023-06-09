const { Client } = require('pg');

class PostgresqlDb {
    constructor() {
        this.Client = null;
        this.#run();
    }

    #run = async () => {
        const client = new Client({
            host: process.env.PG_DATABASE_HOST,
            port: process.env.PG_DATABASE_PORT,
            database: process.env.PG_DATABASE_DATABASE,
            user: process.env.PG_DATABASE_USER,
            password: process.env.PG_DATABASE_PASSWORD
        }) 

        try {
            await client.connect();
            console.log('Connect to postgresql db');
            this.Client = client;
        } catch(error) {
            console.log(error);
        }
    }
}

const postgresqlDb = new PostgresqlDb();
module.exports = postgresqlDb;