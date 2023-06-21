var express = require('express');
var router = express.Router();

// import controller
const { ArticleController } = require('../controllers/ArticleController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* ARTICLE API */
router.get('/article/get', ArticleController.getArticle);
router.post('/article/insert', ArticleController.insertArticle);

module.exports = router;
