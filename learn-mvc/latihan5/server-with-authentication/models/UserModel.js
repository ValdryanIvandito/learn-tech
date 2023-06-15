const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');

class UserModel {
    #model = sequelize.define('user', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'user',
        updatedAt: false,
        underscored: true
    })

    async insertData(username, password) {
        const insertedData = await this.#model.create({ username, password });
        return insertedData;
    }

    async getData(username) {
        const data = await this.#model.findOne({ 
            where: { 
                username
            }, 
            attributes: ['username', 'password', 'id'],
            raw: true
        });

        return data;
    }

    async getDataByPk(userId) {
        const data = await this.#model.findByPk(userId, {
            attributes: ['username', 'password', 'id'],
            raw: true
        });

        return data;
    }
}

const userModel = new UserModel();
module.exports = { userModel };