const { dbConnection } = require("../config/database");

const createTables = async () => {

    const checkArticleTable = `SELECT EXISTS (
        SELECT 1 from information_schema.tables
        where table_name = 'articles'
    );`;

    const ArticleTable = `CREATE TABLE IF NOT EXISTS articles(
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        image VARCHAR(255),
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255),
        author VARCHAR(100),
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    );`;

    const autoUpdateTimestamp = `
        CREATE OR REPLACE FUNCTION set_updated_at()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.updated_at = CURRENT_TIMESTAMP;
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;

        CREATE TRIGGER update_timestamp
        BEFORE UPDATE ON example
        FOR EACH ROW
        EXECUTE FUNCTION set_updated_at();
    `;

    try {

        const checkTable = await dbConnection.query(checkArticleTable); 

        if(checkTable.rows[0].exists) {

            console.log('Articles table already exist !'); 
        } else {

            // enable pgcrypto for uuid random function
            await dbConnection.query(`CREATE EXTENSION IF NOT EXISTS pgcrypto;`);
            // create table in database
            await dbConnection.query(ArticleTable);
            console.log('Articles table created successfully !');
            // make auto update_at field for autofield
            await dbConnection.query(autoUpdateTimestamp);
        }

    } catch (error) {
        console.error('Error creating table: ', error);
        throw error; // stop app if it continue running
    }
};

module.exports = { createTables };