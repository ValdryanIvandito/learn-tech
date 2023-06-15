const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { userModel } = require('../models/UserModel');

async function authenticate(username, password, done) {
    try {
        // Ambil data user
        const userData = await userModel.getData(username);
        // handle data user yang tidak ada
        if(userData === null) {
            return done(null, false, { message: 'No user data' });
        }
        // bandingin passwordnya
        const hashedPassword =  CryptoJS.HmacSHA256(password, process.env.SECRET_LOGIN).toString();
        if(hashedPassword !== userData.password) {
            return done(null, false, { message: 'wrong password '});
        }
        // masukan data user ke passport
        delete userData.password;
        return done(null, userData);
    } catch(error) {
        console.log(error);
        return done(error, false, { message: err.message });
    }
}

passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password' }, authenticate));

passport.serializeUser(
    (user, done) => done(null, user.id)
);

passport.deserializeUser(
    async (user, done) => done(null, await userModel.getDataByPk(id))
);