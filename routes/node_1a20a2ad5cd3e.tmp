var express = require('express');
var router = express.Router();
var db = require('../models/db')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/busca', function(req,res) {
  
  function numeroDeResultados() {
  db.query('SELECT * FROM tweets ORDER BY id desc limit 1', [], function(erro, resultado) {
    contagem = resultado
    
 })
}

  numeroDeResultados()

  db.query(`SELECT * FROM tweets WHERE text like '%${req.query.busca}%' ORDER BY createdAt DESC` ,[], function(erro,listagem){
    res.render('busca', {lista : listagem, input: req.query.busca, contagem : contagem} )
     })
  
})


module.exports = router;
