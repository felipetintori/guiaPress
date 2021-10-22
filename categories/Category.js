const Sequelize = require("sequelize")
const connection = require("../database/database")

const Category = connection.define("categories", {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

//forçando o banco a ser atualizado
// Category.sync({force: true})

module.exports = Category