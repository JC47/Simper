const express = require('express');
const router = express.Router();
const variable = require('../models/variable');

router.post('/register', (req, res, next) => {
  Promise.resolve().then(function () {
    var newVariable = req.body;
    return variable.addVariable(newVariable);
  }).then(function(){
    return variable.getVariables();
  }).
  then( function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/modify/:id', (req, res, next) => {
  Promise.resolve().then( function (){
    var newVar = req.body;
    var id = req.params.id;
    return variable.updateVariable(newVar, id);
  }).then(function(){
    return variable.getVariables();
  }).then(function(rows){
    res.json({success: true, msg:"Operacion exitosa", datos:rows});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success: false, msg:"Operacion incompleta"});
  });
});

router.get('/', (req, res, next) => {
  Promise.resolve().then(function () {
    return variable.getVariables();
  }).then(function (rows) {
    res.json({success: true, msg:"Operacion exitosa",datos:rows});
  }).catch(function (err) {
    console.log(err);
    res.json({msg:"Algo salió mal"});
  });
});
