const Sequelize = require("sequelize");
const sequelize = require('../db/db');

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;
// sequelize.sync({force: true}).then(result=>{console.log(result);}).catch(err=> console.log(err));
// console.log(User === db.models.User);