const Sequelize = require("sequelize");
const db = require('../config/database');

const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  testcolumn: {
    type: Sequelize.INTEGER,
  },
});

User.associate = (models) => {
  User.hasMany(models.Comments, {
    foreignKey: 'comment_id',
  });
};

module.exports = User;
