const { Sequelize } = require('sequelize');

module.exports = new Sequelize('main', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});
