const express = require('express');
const router = express.Router();
const Promise = require("bluebird");
const variable = require("../models/variable");
const maquinariaComprada = require('../models/maquinariaComprada');
const auxiliar = require('../models/auxiliar');

//Perro

router.post('/modify', (req,res,next) => {
  Promise.resolve().then(function () {
    var json = req.body;
    maquinariaComprada.updateMaquinariaComprada(json);
  }).then(function () {
    var id = req.body.Proyectos_idProyecto;
    return maquinariaComprada.getMaquinariasCompradas(id);
  }).then( function (maqList) {
    res.json({success: true, datos:maqList, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

//GET -> POST
//idProyecto
//numeroPeriodo
router.post('/', (req, res, next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;

  Promise.resolve().then(function () {
    return maquinariaComprada.getMaqMaqProyecto(idProyecto,numeroPeriodo);
  }).then( function (data) {
    res.json({success: true, datos:data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/compra', (req, res, next) => {

var idProyecto = req.body.Proyectos_idProyecto;
var idMaquinaria = req.body.Maquinaria_idMaquinaria;
var idProducto = req.body.Producto_idProducto;
var numeroPeriodo = req.body.Balance_numeroPeriodo;

 Promise.join(maquinariaComprada.getMaquinariasCompradas(idProyecto),
 maquinariaComprada.getMaquinariaComprada(idProyecto, idMaquinaria),function(maqcompradas,maqproyecto) {
      return maqEnMaqProyecto(maqcompradas, maqproyecto);
  })
  .then(function (cantidad) {
    var idProyecto = req.body.Proyectos_idProyecto;
    var idMaquinaria = req.body.Maquinaria_idMaquinaria;
    if (cantidad==0) {//agrega con un insert
      var cantidadValor = 1;
      return maquinariaComprada.addMaquinariaProyecto(idProyecto,idMaquinaria,idProducto,cantidadValor,numeroPeriodo);
    }else {//update a maquinariaproyecto con cantidad
      return maquinariaComprada.updateCantidad(idProyecto,idMaquinaria,cantidad);
    }
  })
  .then(function () {
    var idProyecto = req.body.Proyectos_idProyecto;
    return maquinariaComprada.getMaqMaqProyecto(idProyecto,numeroPeriodo);
  })
  .then( function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

//
router.post('/asignar', (req,res,next) => {
  Promise.resolve().then(function (){
    console.log(req.body);
    return maquinariaComprada.addMaquinariaComprada(req.body);
  }).then(function () {
    res.json({success:true, msg:"Sirve"});
  }).catch(function(err){
    console.log(err);
    res.json({success:false, msg:"No sirve"});
  })
});

//Se reduce o se elimina la maquinariaComprada
router.post('/vuelta', (req, res, next) => {

var idProyecto = req.body.Proyectos_idProyecto;
var idMaquinaria = req.body.Maquinaria_idMaquinaria;
var numeroPeriodo = req.body.Balance_numeroPeriodo;

Promise.resolve().then(function () {
  return maquinariaComprada.getMaquinariaComprada(idProyecto,idMaquinaria);
}).then(function (rows) {
    if(rows[0].Cantidad == 1 ){
      return maquinariaComprada.deleteMaquinariaComprada(idProyecto,idMaquinaria)
    }
    else{
      var cantidadN = rows[0].Cantidad - 1;
      return maquinariaComprada.updateCantidad(idProyecto,idMaquinaria,cantidadN);
    }
  })
  .then(function () {
    var idProyecto = req.body.Proyectos_idProyecto;
    return maquinariaComprada.getMaqMaqProyecto(idProyecto,numeroPeriodo);
  })
  .then( function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

//Se devuelve el monto
router.post('/undo', (req, res, next) => {
  var numeroPeriodo = req.body.Balance_numeroPeriodo;
  var idProyecto = req.body.Proyectos_idProyecto;
  var idMaquinaria = req.body.Maquinaria_idMaquinaria;
  var idProducto = req.body.idProducto;
  Promise.join(auxiliar.getAuxiliar(numeroPeriodo,idProyecto,idProducto), variable.getIVA(), function(rows,variableIVA){
    var costo = req.body.costo;
    var dep = req.body.dep;
    var IVA = variableIVA[0].valor
    var ivaMaq = costo*IVA;
    var depM = costo*(dep/100);
    var cm = costo + ivaMaq;
    var ivaMensual = ivaMaq/12;
    var x = {
      IVACompraMaq:rows[0].IVACompraMaq,
      compraMaquinaria:rows[0].compraMaquinaria,
      costoTransformacionMaq:rows[0].costoTransformacionMaq
    }

    if(x.compraMaquinaria > 0){
      x.compraMaquinaria = x.compraMaquinaria - cm;
      x.IVACompraMaq = x.IVACompraMaq + ivaMaq;
      x.costoTransformacionMaq = x.costoTransformacionMaq - depM;
    }
    return auxiliar.setAuxiliar(numeroPeriodo,idProyecto,idProducto,x);
  }).then(function () {
    res.json({success:true, msg:"Operacion completa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
})

router.post('/cobrar', (req, res, next) => {
  var numeroPeriodo = req.body.Balance_numeroPeriodo;
  var idProyecto = req.body.Proyectos_idProyecto;
  var idProducto = req.body.idProducto;

  Promise.join(auxiliar.getAuxiliar(numeroPeriodo,idProyecto,idProducto), variable.getIVA(), function(rows,variableIVA){
    var IVA = variableIVA[0].valor
    var costo = req.body.costo;
    var dep = req.body.dep;
    var ivaMaq = costo*IVA;
    var depM = costo*(dep/100);
    var cm = costo + ivaMaq;
    var ivaMensual = ivaMaq/12;
    var IVACompraMaq = 0;
    var compraMaquinaria = 0;
    var costoTransformacionMaq = 0;

    if(rows.length > 0){
      IVACompraMaq += rows[0].IVACompraMaq,
      compraMaquinaria += rows[0].compraMaquinaria,
      costoTransformacionMaq += rows[0].costoTransformacionMaq
    }

    compraMaquinaria += cm;
    IVACompraMaq -= ivaMaq;
    costoTransformacionMaq += depM;

    var x = {
      "compraMaquinaria":compraMaquinaria,
      "IVACompraMaq":IVACompraMaq,
      "costoTransformacionMaq":costoTransformacionMaq
    }

    if(rows.length > 0){
      return auxiliar.setAuxiliar(numeroPeriodo,idProyecto,idProducto,x);
    }
    else{
      var x2 = {
        "Balance_numeroPeriodo":numeroPeriodo,
        "Proyectos_idProyecto":idProyecto,
        "Producto_idProducto":idProducto,
        "compraMaquinaria":compraMaquinaria,
        "IVACompraMaq":IVACompraMaq,
        "costoTransformacionMaq":costoTransformacionMaq
      }
      return auxiliar.addAuxiliar(x2);
    }
  }).then(function () {
    res.json({success:true, msg:"Operacion completa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });

});

function maqEnMaqProyecto(maqcompradas, maqproyecto) {
  var cantidad = 0;
  for (var i = 0; i < maqcompradas.length; i++) {
    for (var j = 0; j < maqproyecto.length; j++) {
      if (maqcompradas[i].Maquinaria_idMaquinaria == maqproyecto[j].Maquinaria_idMaquinaria
         && maqcompradas[i].Proyectos_idProyecto == maqproyecto[j].Proyectos_idProyecto) {
           cantidad = aumentaCantidad(maqproyecto[j].Cantidad);
      }
    }
  }
return cantidad;
}

function aumentaCantidad(cantidad) {
    var aumenta = 1;
    cantidad = cantidad + aumenta;
    return cantidad;
}

module.exports = router;
