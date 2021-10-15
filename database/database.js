const Sequelize = require("sequelize")

const connection = new Sequelize('guiapress', 'root', '578tyh66A!',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection