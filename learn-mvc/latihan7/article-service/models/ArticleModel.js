const { sequelize } = require('../config');
const { DataTypes } = require('sequelize');

class ArticleModel {
    #model = sequelize.define('Article', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING
        },
        body: {
            type: DataTypes.TEXT
        },
        approved: {
            type: DataTypes.BOOLEAN
        }
    }, {
        tableName: 'Articles'
    })

    // === QUERY
    async getArticles() {
        const data = await this.#model.findAll({ raw: true });
        return data;
    }

    async insertArticles() {
        const data = await this.#model.create(data);
        return data;
    }
};

const articleModel = new ArticleModel();
module.exports = { articleModel }