const Sequelize = require("sequelize");
const sequelize = require("../services/Connection");

const User = sequelize.define('User', {
    // Model attributes are defined here
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    email: {
        type: Sequelize.STRING
    }
}, {
    // Other model options go here
});


module.exports = User;