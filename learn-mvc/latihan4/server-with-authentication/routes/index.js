var express = require('express');
var router = express.Router();

const { MainController } = require('../controllers/MainController')
const { AuthorizationCheck } = require('../lib/AuthorizationCheck')

/* GET home page. */
router.get('/', AuthorizationCheck, MainController.MainPage);

/* Register Page */
router.get('/register', MainController.getRegisterPage);
router.post('/register', MainController.postRegisterPage);

/* Login Page */
router.get('/login', MainController.getLoginPage);
router.post('/login', MainController.postLoginPage);

module.exports = router;