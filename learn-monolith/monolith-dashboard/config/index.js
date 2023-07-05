const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database
});

module.exports = { sequelize }