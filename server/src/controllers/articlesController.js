
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

    const { title, author, description, content } = req.body;
    let image_path = '';

    if(req.file) {
        image_path = req.file.filename;
    }

    try {
        
        const query = `INSERT INTO articles(image, title, description, author, content) VALUES ($1, $2, $3, $4, $5)`;

        dbConnection.query(query, [image_path, title, description, author, content], (err, response) => {

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
        const { title, description, author, content } = req.body;
        let image_path = '';
        const updated_at = new Date().toISOString();

        if(req.file) {
            image_path = req.file.path;
        }

        const findQuery = `SELECT * FROM articles WHERE id = $1`;
        const updateQuery = `UPDATE articles SET image = $1, title = $2, description = $3, author = $4, content = $5, updated_at = $6 WHERE id = $7`;

        dbConnection.query(findQuery, [id], (err, response) => {

            if(err) {
                console.log(err);
                return;
            }

            if(response.rows.length > 0) {

                dbConnection.query(updateQuery, [image_path, title, description, author, content, updated_at, id], (err, response) => {

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









