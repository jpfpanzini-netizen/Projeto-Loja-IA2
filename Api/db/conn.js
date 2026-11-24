const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loja', 'root123', 'root123', {
    host: 'localhost',
    port: 3307,
    dialect: 'mariadb'
});

module.exports = sequelize;
