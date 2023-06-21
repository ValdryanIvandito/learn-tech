const { articleModel } = require('../models/ArticleModel')

class ArticleController {
    static async getArticle(req, res) {
        try {
            // 1. ambil semua article dari model
            const articles = await articleModel.getArticles();

            // 2. kirim semua data ke user
            res.json({ data: articles });
        } catch(error) {
            console.log(error);
            res.status(500).send('Internal Server Error!');
        }  
    }

    static async insertArticle(req, res) {
        try{
            // 1. Bikin skema data yang boleh dikirim oleh user
            const schemaRequestBody = joi.object({
                title: joi.string().required(),
                body: joi.string().required(),
                approved: joi.boolean()
            });
            // 2. Validasi data yang dikirim oleh user
            const validationResult = schemaRequestBody.validate(req.body);
            console.log('Hasil validasi', schemaRequestBody.validate(req.body));
            if(validationResult.error !== undefined) {
                res.status(400).send('bad request!');
            }
            // 3. Ambil data valid dari user
            const data = req.body
            // 4. Insert data ke database
            await articleModel.insertArticles(data);
            // 5. kirim data ke user
            res.json({ status: 'success' });
        } catch(error) {
            console.log(error);
            res.status(500).send('Internal Server Error!');
        }
    }
};

module.exports = { ArticleController }