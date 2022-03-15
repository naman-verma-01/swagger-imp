const Sequelize = require("sequelize");


const sequelize = new Sequelize('cyberflow', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;