const Sequelize = require("sequelize")
const connection = require("../database/database")
const Category = require("../categories/Category")

const Article = connection.define("articles", {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false   
    }
})
//Relacionamento entre artigo e Categoria , 1 para Muitos
Category.hasMany(Article)
//Relacionamento entre artigo e Categoria , 1 para 1
Article.belongsTo(Category)


//forçando o banco a ser atualizado
// Article.sync({force: true})

module.exports = Article