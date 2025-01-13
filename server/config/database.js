const { Client } = require('pg');
const dotenv = require('dotenv').config();

const dbConnection = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

(async () => {
    try {
        await dbConnection.connect();
        console.log('Database is successfully connected !');
    } catch (error) {
        console.error('Database connection failed !', error);
        process.exit(1); // stop application
    }
})();

module.exports = { dbConnection };