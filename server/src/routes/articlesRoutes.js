const { getAllArticles, addArticle, getOneArticle, updateArticle, removeArticle } = require('../controllers/articlesController');

const articlesRouter = require('express').Router();

articlesRouter.get('/', getAllArticles);

articlesRouter.get('/:id', getOneArticle);

articlesRouter.post('/', addArticle);

articlesRouter.put('/:id', updateArticle);

articlesRouter.delete('/:id', removeArticle);

// routes Router express


module.exports = articlesRouter;