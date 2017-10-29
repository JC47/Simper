const express = require('express');
const router = express.Router();
const auxiliar = require('../models/auxiliar');

router.post('/register', (req, res, next) => {
  Promise.resolve().then( function () {
    var json = req.body;
    return auxiliar.addAuxiliar(json);
  }).then( function () {
    res.json({success: true, msg:"Operacion exitosa"});
  }).catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/modify', (req, res, next) => {
  Promise.resolve().then( function () {
    var idProyecto = req.body.Proyectos_idProyecto;
    var numeroPeriodo = req.body.Balance_numeroPeriodo;
    var json = req.body;
    return auxiliar.setAuxiliar(numeroPeriodo,idProyecto,json);
  }).then( function () {
    res.json({success: true, msg:"Operacion exitosa"});
  }).catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/', (req, res, next) => {
  Promise.resolve().then( function () {
    var idProyecto = req.body.Proyectos_idProyecto;
    var numeroPeriodo = req.body.Balance_numeroPeriodo;
    return auxiliar.getAuxiliar(numeroPeriodo,idProyecto);
  }).then( function (rows) {
    res.json({success: true,datos:rows, msg:"Operacion exitosa"});
  }).catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});


module.exports = router;
