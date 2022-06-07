var express = require('express');
var router = express.Router();
var db = require('../models/db')


router.get('/', function(req, res, next) {
    
        db.query('SELECT * FROM tweets ORDER BY id desc limit 1', [], function(erro, resultado) {
         res.render('teste', {testando : resultado})
          
       })
  });
  

  module.exports = router;