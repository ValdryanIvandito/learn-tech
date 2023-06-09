const CryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');
const { userModel } = require('../models/UserModel');

class MainController {
    static getRegisterPage(req, res) {
        res.render('register', { isWrong: "hidden" });
    }

    static getLoginPage(req, res) {
        res.render('login', { isWrong: "hidden" });
    }

    static async postRegisterPage(req, res) {
        try {
            const data = req.body;
            const username = data.username;
            const password = data.password;
            const confirm_password = data.confirm_password;

            // Validasi Input User 
            if(password !== confirm_password) {
                return res.render('register', { isWrong: "" });
            }
            // Hash Password 
            const hashedPassword =  CryptoJS.HmacSHA256(password, process.env.SECRET_LOGIN).toString();
            // insert username & password to database
            await userModel.insertData(username, hashedPassword);

            res.send('OK !');
        } catch(error) {
            console.log(error);
            res.render('error', { error, message: 'Database Error' });
        }
    }

    static async postLoginPage(req, res) {
        const data = req.body;
        const username = data.username;
        const password = data.password;
        // Ambil data user
        const userData = await userModel.getData(username);
        // handle data user yang tidak ada
        if(userData === null) {
            return res.render('login', { isWrong: "" })
        }
        // bandingin passwordnya
        const hashedPassword =  CryptoJS.HmacSHA256(password, process.env.SECRET_LOGIN).toString();
        if(hashedPassword !== userData.password) {
            return res.render('login', { isWrong: "" });
        }
        // Bikin token untuk otorisasi user
        const token = JWT.sign({ username, id: userData.id }, process.env.JWT_SECRET, { expiresIn: 5 });
        // console.log('token JWT: ', token);
        res.cookie('token', token, { maxAge: 10000 });
        res.redirect('/');
    }

    static async MainPage(req, res) {
        res.render('index', { title: 'Express' });
    }
};

module.exports = { MainController };