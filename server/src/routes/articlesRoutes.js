const { getAllArticles, addArticle, getOneArticle, updateArticle, removeArticle } = require('../controllers/articlesController');

const articlesRouter = require('express').Router();

articlesRouter.get('/articles', getAllArticles);

articlesRouter.get('/articles/:id', getOneArticle);

articlesRouter.post('/articles/', addArticle);

articlesRouter.put('/articles/:id', updateArticle);

articlesRouter.delete('/articles/:id', removeArticle);

module.exports = articlesRouter;