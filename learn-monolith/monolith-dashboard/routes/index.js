var express = require('express');
var router = express.Router();

const { MainController } = require('../controllers/MainController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET dashboard page. */
router.get('/dashboard', MainController.getDashboardPage);

/* GET dashboard page. */
router.get('/login', MainController.getLoginPage);

module.exports = router;
