

// id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
// image VARCHAR(255),
// title VARCHAR(255) NOT NULL,
// description VARCHAR(255),
// author VARCHAR(100),
// content TEXT NOT NULL,
// created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

const { dbConnection } = require("../config/database");

// get all articles
const getAllArticles = (req, res) => {

    try {

        const query = `SELECT * FROM articles`;
        
        dbConnection.query(query, [], (err, response) => {

            if(err) {
                console.log(err);
                return;
            }
     
            res.send(response.rows);
        });

    } catch (error) {
        console.log('Error to receive all article in database', error);
    }

};

// get one article
const getOneArticle = (req, res) => {

    try {
        const query = `SELECT * FROM articles WHERE id = $1`;

        dbConnection.query(query, [req.params.id], (err, response) => {

            if(err) {
                console.log(err);
                return;
            }

            res.send(response.rows[0]);
        });

    } catch (error) {  
        console.log('Error for get article', error)
    }
};

// add an article
const addArticle = (req, res) => {

    const { image, title, description, author, content } = req.body;

    console.log(req.body);
    

    try {
        
        const query = `INSERT INTO articles(image, title, description, author, content) VALUES ($1, $2, $3, $4, $5)`;

        dbConnection.query(query, [image, title, description, author, content], (err, response) => {

            if(err) {
                console.log(err);
                return;
            }

            res.send(response);
        });

    } catch (error) {
        console.log('Error for adding new article', error);
    }

};

// update article using id params
const updateArticle = (req, res) => {

    try {
        
        const { id } = req.params;
        const { image, title, description, author, content } = req.body;

        const findQuery = `SELECT * FROM articles WHERE id = $1`;
        const updateQuery = `UPDATE articles SET image = $1, title = $2, description = $3, author = $4, content = $5 WHERE id = $6`;

        dbConnection.query(findQuery, [id], (err, response) => {

            if(err) {
                console.log(err);
                return;
            }

            if(response.rows.length > 0) {

                dbConnection.query(updateQuery, [image, title, description, author, content, id], (err, response) => {

                    if(err) {
                        console.log(err);
                        return;
                    }

                    res.send(response.rows);
                });
            }

        });

    } catch (error) {
        console.log('Error finding article for update', error);
    }
};


// Remove an article using id params
const removeArticle = (req, res) => {

    try {
        
        const query = `DELETE FROM articles WHERE id = $1`;

        dbConnection.query(query, [req.params.id], (err, response) => { 

            if(err) {
                console.log(err);
                return;
            }

            res.send(response.rows);
        });

    } catch (error) {
        console.log('Error for remove article', error);
    }
};

module.exports = { getAllArticles, getOneArticle, addArticle, updateArticle, removeArticle };









