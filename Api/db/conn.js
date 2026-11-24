const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loja', 'root', 'root123', {
    host: 'localhost',
    port: 3307,
    dialect: 'mariadb'
});

module.exports = sequelize;
