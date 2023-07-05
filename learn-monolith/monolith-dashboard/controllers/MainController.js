class MainController {
    static getDashboardPage(req, res) {
        res.render('dashboard', { title: 'Dashboard Page' });
    }
    
    static getLoginPage(req, res) {
        res.render('login', { title: 'Login Page' });
    }

    static async postLogin(req, res) {
        try {
          // 1. Ambil data user
        const data = req.body;
        const username = data.username;
        const password = data.password;
        // 2. Cari data user dari username
        const userData = await userModel.getUserData(username);
        // 3. make sure data usernya ada (tidak null)
        if(userData === null) {
          return res.render('login', { isWrong: true });
        }
        // 4. encrypt password yang user kirim
        const encryptedPassword = CryptoJS.HmacSHA256(password, 'serverku').toString();
        if(encryptedPassword !== userData.password) {
          return res.render('login', { isWrong: true });
        }
        // 5. munculkan halaman dashboard
        res.redirect('/dashboard')
        } catch(error) {
          console.log(error);
          res.status(500).send('Internal Server Error')
        }
      }
}

module.exports = { MainController }