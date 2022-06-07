const Sequelize = require('sequelize')

const sequelize = new Sequelize("tweets_db","root", "123456", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function () {
    console.log('Conexão banco de dados realizada com sucesso!')
}).catch(function() {
    console.log('erro conexão banco de dados')
})

module.exports = sequelize;
