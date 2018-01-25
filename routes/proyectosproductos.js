const express = require('express');
const router = express.Router();
const config = require('../config/db');
const proyectoProducto = require('../models/proyectoproducto');
const producto = require('../models/producto');
const Promise = require("bluebird");
const auxiliar = require('../models/auxiliar');
const variable = require("../models/variable");

router.post('/desarrolloproducto', (req, res, next) => {
  Promise.resolve().then(function () {
      var json = req.body;
      return proyectoProducto.addProyectoProducto(json);
  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"/*, datos:rows*/});
  })
  .catch(function (err) {
    console.error(err);
    res.json({success: false, msg:"Operacion fallida"/*, datos:rows*/});
  });
});

router.post('/pagardesarrollo', (req, res, next) => {
  var idProyecto = req.body.idProyecto;
  var idProducto = req.body.idProducto;
  var numeroPeriodo = req.body.numeroPeriodo;

  var tiempoDes;
  var periodosDes
  var maxnumeroperiodo;
  var json;

  Promise.join(proyectoProducto.getMaxNumeroPeriodo(idProyecto,idProducto),
  proyectoProducto.getTiempoDes(idProducto),function (maxnumperiodo,tiempo) {

    maxnumeroperiodo = maxnumperiodo[0].maxnumperiodo;
    tiempoDes = tiempo[0].tiempoDes;
    return proyectoProducto.getPeriodosDes(idProyecto,idProducto,maxnumeroperiodo)
  })
  .then(function (periodo) {
    periodosDes = periodo[0].periodosDes;
  })
  .then(function () {
    return proyectoProducto.getProyectoProducto(idProyecto,idProducto,maxnumeroperiodo);
  })
  .then(function (proyectoproducto) {

    if (tiempoDes == periodosDes) {
      return console.log("igual");
    }else {
      periodosDes = aumentaPeriodos(periodosDes);
      json = {
        "Proyectos_idProyecto":idProyecto,
        "Productos_idProducto":idProducto,
        "numeroPeriodo":numeroPeriodo,
        "desarrollado":proyectoproducto[0].desarrollado,
        "periodoInicio":proyectoproducto[0].periodoInicio,
        "periodosDes":periodosDes
      }
      return proyectoProducto.addProyectoProducto(json);
    }
  })
//regreso datos
  // .then(function () {
  //   return proyectoProducto.getProductosEnDesarrollo(idProyecto,numeroPeriodo);
  // })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});
//NOTA:
//Ruta que se debe llamar para verl un arreglo de objetos con los productos actualizados
// a la hora de pagarlos
//Debe llamarse a la ruta exactamente después de llamar a "pagardesarrollo"
router.post('/jsonendes', (req, res, next) => {

  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
//  var idProducto = req.body.idProducto;

  Promise.join(proyectoProducto.getProductosEnDesarrollo(idProyecto,numeroPeriodo),
  proyectoProducto.getIdProductoInferiorNumPeriodo(idProyecto,numeroPeriodo), function(productosendes,idsproductos){

    return jsonProductosEnDesarrollo(productosendes,idsproductos);

  }).then(function(data){
    res.json({success: true, datos:data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

//productos que se encuentran en la tabla producto pero que no se encuentran
// en proyectoProducto, e.i , aquellos productos que no se han desarrollado
// ni estan en desarrollo
router.post('/getproductossindesarrollar/', (req, res, next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  Promise.resolve()
  .then(function () {
      return proyectoProducto.productosSinDesarrollar(idProyecto,numeroPeriodo);
  })
  .then(function (data) {
      res.json({success: true,datos:data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

//productos en vías de desarrollo, e.i, desarrollo = 0
router.post('/getproductosendesarrollo/', (req, res, next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;

  Promise.resolve()
  .then(function () {
      return proyectoProducto.getProductosEnDesarrollo(idProyecto,numeroPeriodo);
  })
  .then(function (data) {
      res.json({success: true,datos:data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

//Productos que ya están desarrollados (desarrollado = 1)
router.post('/getproductosdesarrollados/', (req, res, next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  Promise.resolve()
  .then(function () {
//      var idProyecto = req.params.idProyecto;
      return proyectoProducto.getProductosDesarrollados(idProyecto,numeroPeriodo);
  })
  .then(function (data) {
      res.json({success: true,datos:data, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

//Actualiza el valor de 0 (no desarrollado) a 1 (en desarrollado)
router.post('/endesarrollo', (req, res, next) => {
  var idProyecto = req.body.idProyecto;
  var idProducto = req.body.idProducto;
  var numeroPeriodo = req.body.numeroPeriodo;
  var desarrollado = 1;

  Promise.resolve()
  .then(function () {
    proyectoProducto.getMaxNumeroPeriodo(idProyecto,idProducto)
  })
  .then(function (maxnumperiodo) {
    proyectoProducto.getProyectoProducto(idProyecto,idProducto,maxnumperiodo[0].maxnumperiodo);
  })
  .then(function (proyectoproducto) {
    json = {
      "Proyectos_idProyecto":idProyecto,
      "Productos_idProducto":idProducto,
      "numeroPeriodo":numeroPeriodo,
      "desarrollado":desarrollado,
      "periodoInicio":proyectoproducto[0].periodoInicio,
      "periodosDes":proyectoproducto[0].periodosDes
    }
  })
  .then(function (json) {
    return proyectoProducto.addProyectoProducto(json);
  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("Log error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

//Actualiza el valor de 1 (en desarrollado) a 2 ( desarrollado)
router.post('/desarrollado', (req, res, next) => {
  var idProyecto = req.body.idProyecto;
  var idProducto = req.body.idProducto;
  var numeroPeriodo = req.body.numeroPeriodo;
  var desarrollado = 2;

  Promise.resolve()
  .then(function () {
    return proyectoProducto.getMaxNumeroPeriodo(idProyecto,idProducto)
  })
  .then(function (maxnumperiodo) {
    return proyectoProducto.getProyectoProducto(idProyecto,idProducto,maxnumperiodo[0].maxnumperiodo);
  })
  .then(function (proyectoproducto) {
    json = {
      "Proyectos_idProyecto":idProyecto,
      "Productos_idProducto":idProducto,
      "numeroPeriodo":numeroPeriodo+1,
      "desarrollado":desarrollado,
      "periodoInicio":proyectoproducto[0].periodoInicio,
      "periodosDes":proyectoproducto[0].periodosDes
    }
    return json;
  })
  .then(function (json) {
    return proyectoProducto.addProyectoProducto(json);
  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("Log error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

//Esto para qué?
router.post('/getterminados', (req, res, next) => {
  Promise.resolve().then(function () {
    var idp = req.body.idProyecto;
    var np = req.body.numeroPeriodo;
    return proyectoProducto.getTerminados(idp,np);
  }).then( function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success: false, msg:"Operacion incompleta"});
  });
});

//OPERACIONES: logica de negocio

router.post('/devolverpagardesarrollo', (req, res, next) => {

  var idProyecto = req.body.idProyecto;
  var numPeriodo = req.body.numeroPeriodo;
  var costoDesProd = req.body.costoDes;
  var idProducto = req.body.idProducto;
  Promise.join(auxiliar.getAuxiliar(numPeriodo,idProyecto,idProducto),variable.getIVA(), function(rows,variableIVA){

    var desProducto = rows[0].desarrolloProducto;
    var IVAxGtos = rows[0].IVAGastosVenta;
    var IVA = variableIVA[0].valor

    var json = {
      IVAGastosVenta: unDoIVAGastosVenta(IVAxGtos,costoDesProd,IVA),
      desarrolloProducto: unDoDesarrolloProducto(desProducto,costoDesProd)
    }

    return auxiliar.setAuxiliarVenta(numPeriodo,idProyecto,json);
  }).then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

router.post('/operacionespagardesarrollo', (req, res, next) => {

  var idProyecto = req.body.idProyecto;
  var numPeriodo = req.body.numeroPeriodo;
  var costoDesProd = req.body.costoDes;
  var idProducto = req.body.idProducto;

  Promise.join(auxiliar.getAuxiliar(numPeriodo,idProyecto,idProducto),variable.getIVA(), function(rows,variableIVA){
    var desProducto = 0;
    var IVAxGtos = 0;
    var IVA = variableIVA[0].valor

    if(rows.length > 0){
      desProducto += rows[0].desarrolloProducto;
      IVAxGtos += rows[0].IVAGastosVenta;
    }


    var json = {
      IVAGastosVenta: (IVAxGtos - IVAxGastosVenta(costoDesProd,IVA)),
      desarrolloProducto: desProducto + costoDesProd//desarrolloProducto(desProducto,costoDesProd),
    }

    if(rows.length > 0){
      return auxiliar.setAuxiliar(numPeriodo,idProyecto,idProducto,json);
    }
    else{
      var json2 = {
        Producto_idProducto:idProducto,
        Balance_numeroPeriodo:numPeriodo,
        Proyectos_idProyecto:idProyecto,
        IVAGastosVenta: (IVAxGtos - IVAxGastosVenta(costoDesProd,IVA)),
        desarrolloProducto: desProducto + costoDesProd//desarrolloProducto(desProducto,costoDesProd),
      }
      return auxiliar.addAuxiliar(json2);
    }

  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

router.post('/deshacerperiododesarrollado', (req, res, next) => {

  var idProyecto = req.body.idProyecto;
  var idProducto = req.body.idProducto;

  Promise.resolve().then(function () {
    return proyectoProducto.getPeriodosDes(idProyecto,idProducto);
  })
  .then(function (periodosdes) {
//    console.log("rows: "+periodosdes);
//    console.log("periodosDes: "+ periodosdes[0].periodosDes);

    var periodos = deshacerPeriodoDes(periodosdes[0].periodosDes);

    if (periodos!=0) {// update
      return proyectoProducto.updateDesarrolladoPeriodos(periodos,idProyecto,idProducto);
    }else {//es cero y se elimina
      return proyectoProducto.deleteProyectoProducto(idProyecto,idProducto);
    }
  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    if (err instanceof Error) {
      res.status(400).send("Error general");
      console.log(err);
    } else {
      res.status(200).json({ "code": 1000, "message": err });
    }
  });
});

//validaciones
function comparaTiempos(tiempoDes,periodosDes) {
    var desarrollado;
    var json;
//    console.log("tiempoDes: "+tiempoDes);
//    console.log("periodosDes: "+periodosDes);

    if (tiempoDes == periodosDes) {//si son iguales el desarrollado ha sido completado
        periodosDes = tiempoDes;
    }else {
        periodosDes = aumentaPeriodos(periodosDes);//de lo contrario, aumenta periodosDes en 1
      }
    return periodosDes;
}

function aumentaPeriodos(periodos) {
    var aumenta = 1;
    periodos = periodos + aumenta;
    return periodos;
}

//Operaciones: Pagar desarrollo
//2,000,000
function desarrolloProducto(desProducto,costoDesProd) {//se van sumando los desarrolloProducto de cada producto, e.i, su precio de desarrollo
  var nvoDesProducto = desProducto + costoDesProd;
  return nvoDesProducto;
}
//este
//300,000
function IVAxGastosVenta(costoDesProd,IVA) {
  return costoDesProd*IVA;
}

//POR PAGAR es promedioMensual
function promedioMensual(costoDesProd,IVA){
  var promMensual = IVAxGastosVenta(costoDesProd,IVA)/(12);
  return -(promMensual);
}

//TOTAL PAGOS
function totalPagos(costoDesProd) {
  var tPagos = (promedioMensual(costoDesProd))*(11);
  return tPagos;
}

//Operaciones: Deshacer pago de desarrollo

function unDoIVAGastosVenta(IVAxGtos,costoDesProd,IVA) {

var nvoIVAGtosVenta;

  if (IVAxGtos==0) {
    nvoIVAGtosVenta = 0;
  }else {
    nvoIVAGtosVenta = ((IVAxGtos) - (IVAxGastosVenta(costoDesProd,IVA)));
  }
  return nvoIVAGtosVenta;
}


function unDoDesarrolloProducto(desProducto,costoDesProd) {
  var nvoDesProducto;

  if (desProducto==0) {
    nvoDesProducto=0;
  }else {
    nvoDesProducto = desProducto - costoDesProd;
  }
  return nvoDesProducto;
}

function unDoIVATotal(IVATot,costoDesProd) {
  var nvoIVATotal;

  if (IVATot==0) {
    nvoIVATotal=0;
  }else {
    nvoIVATotal = ((IVATot) - (totalPagos(costoDesProd)));
  }
  return nvoIVATotal;
}

function unDoIVAPorPagar(IVAxPagar,costoDesProd) {
  var nvoIVAPorPagar;

  if (IVAxPagar==0) {
    nvoIVAPorPagar = 0;
  }else {
    nvoIVAPorPagar = ((IVAxPagar) - (promedioMensual(costoDesProd)));
  }
  return nvoIVAPorPagar;
}
//Deshacer Periodo Desarrollado

function deshacerPeriodoDes(periodosdes) {
  var nvoPeriodoDes;
  if (periodosdes > 1) {
    nvoPeriodoDes = periodosdes - 1;//regresaremos el valor que sea y este actualizará el registro en la bd
  }else {
    nvoPeriodoDes = 0;//bandera de condición, si es cero, se eliminará
  }
  return nvoPeriodoDes;
}

function jsonDesarrollados(idszonas, desarrollados) {
  var repIdProductosDes = [];//almacena las veces que se repite un idZona en desarrollados
  var i = 0;
  while (i<idszonas.length) {
    var aux = 0;
    for (var j = 0; j < desarrollados.length; j++) {
      if (idszonas[i].Zona_idZonas == desarrollados[j].Zona_idZonas) {
        aux = aux +1;
      }
    }
    repIdProductosDes.push(aux);
    i++;
  }
  // console.log(repIdProductosDes);

  var productosenzonas = [];
  for (var i = 0; i < idszonas.length; i++) {
      var json = {
        "idZona":idszonas[i].Zona_idZonas,
        "productosDes":[]
      }
      productosenzonas.push(json);
    }
//    console.log(productosenzonas);

    var aux2 = 0;
    for (var j = 0; j < repIdProductosDes.length; j++) {
      for (var k = 0; k < (repIdProductosDes[j]); k++) {
        productosenzonas[j]['productosDes'].push(desarrollados[aux2].Producto_idProducto);
       aux2 = aux2 + 1;
      }
    }
    //console.log(productosenzonas);
    return productosenzonas;
}

function jsonProductosEnDesarrollo(productosendes,idsproductos){
  var repIdProductosEnDes = [];//almacena las veces que se repite un idProducto en zonas de la tabla productozonaproyecto join producto
  var i = 0;

  while (i<idsproductos.length) {
    var aux = 0;
    for (var j = 0; j < productosendes.length; j++) {
      if (idsproductos[i].Productos_idProducto == productosendes[j].Productos_idProducto) {
        aux = aux +1;
      }
    }
    repIdProductosEnDes.push(aux);
    i++;
  }

// var i=0;
//
// while (i<repIdProductosEnDes.length) {
//
//   repIdProductosEnDes
//
// }
var counter = 0;
var arrayProductosEnDes = [];
// var json;

//console.log("productosendes",productosendes[counter]);

for (var k = 0; k < repIdProductosEnDes.length; k++) {
  for (var l = 0; l < repIdProductosEnDes[k]; l++) {
    counter = counter + 1;
  }
      console.log("counter: ", counter);
//      console.log("productosendes",productosendes[counter-1]);
  var json = {
    "Productos_idProducto":productosendes[counter-1].Productos_idProducto,
    "nombreProd":productosendes[counter-1].nombreProd,
    "costoDes":productosendes[counter-1].costoDes,
    "tiempoDes":productosendes[counter-1].tiempoDes,
    "periodosDes":productosendes[counter-1].periodosDes,
    "numeroPeriodo":productosendes[counter-1].numeroPeriodo
  }
    arrayProductosEnDes.push(json);
}
return arrayProductosEnDes;
//return console.log("arrayProductosEnDes",arrayProductosEnDes);
//  return console.log(repIdProductosEnDes);
}

module.exports = router;
