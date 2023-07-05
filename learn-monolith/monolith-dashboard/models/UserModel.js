const { sequelize } = require('../config');
const { DataTypes } = require('sequelize');

class UserModel {
  #model = sequelize.define('user', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.TEXT
    }
  }, {
    tableName: 'user',
    underscored: true,
    updatedAt: false
  })

  // === QUERY
  async getUserData(username) {
    const data = await this.#model.findOne({ 
      where: { username }, raw: true 
    });
    return data;
  }
}

const userModel = new UserModel();
module.exports = { userModel };