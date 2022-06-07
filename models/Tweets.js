const Sequelize = require('sequelize')
const db = require('./db');

const Tweets = db.define('tweets', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profileImgUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_str: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

//Criar tabela se a tabela não existir no banco de dados 
//Tweets.sync();

module.exports = Tweets;