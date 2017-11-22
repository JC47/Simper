const express = require('express');
const router = express.Router();
const config = require('../config/db');
const proyectoProducto = require('../models/proyectoproducto');
const producto = require('../models/producto');
const Promise = require("bluebird");
const auxiliar = require('../models/auxiliar');

router.post('/desarrolloproducto', (req, res, next) => {
  Promise.resolve().then(function () {
      var json = req.body;
      return proyectoProducto.addProyectoProducto(json);
  })
  .then(function () {
    var id = req.body.Proyectos_idProyecto;
    return proyectoProducto.getProductosEnDesarrollo(id);
  })
  .then(function(rows){
    res.json({success: true, msg:"Operacion exitosa", datos:rows});
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

router.post('/pagardesarrollo', (req, res, next) => {
  Promise.resolve().then(function () {
    var idProyecto = req.body.Proyectos_idProyecto;
    var idProducto = req.body.Productos_idProducto;
    var ultimoPeriodo = req.body.ultimoPeriodoDes;
    return proyectoProducto.updateProyectoProducto(idProyecto,idProducto,ultimoPeriodo);
  })
var idProyecto = req.body.Proyectos_idProyecto;
var idProducto = req.body.Productos_idProducto;

  Promise.join(proyectoProducto.getTiempoDes(idProducto),proyectoProducto.getPeriodosDes(idProyecto,idProducto),
    function(tiempo, periodo) {
      console.log("tiempo: " + tiempo[0].tiempoDes);
      console.log("periodo: "+ periodo[0].periodosDes);
      var tiempoDes = tiempo[0].tiempoDes;
      var periodosDes = periodo[0].periodosDes;
      return comparaTiempos(tiempoDes,periodosDes);
      //return periodosDes;
    })
  .then(function (periodosDes) {
    var idProyecto = req.body.Proyectos_idProyecto;
    var idProducto = req.body.Productos_idProducto;
    //var desarrollado = data.desarrollado;
    var periodos = periodosDes;
    console.log("periodos: "+periodos);
    return proyectoProducto.updateDesarrolladoPeriodos(periodos,idProyecto,idProducto);
   })
//regreso datos
  .then(function () {
    var idProyecto = req.body.Proyectos_idProyecto;
    return proyectoProducto.getProductosEnDesarrollo(idProyecto);
  })
  .then(function(datos){
    res.json({success: true, datos:datos, msg:"Operacion exitosa"});
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
router.get('/getproductossindesarrollar/:idProyecto', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var idProyecto = req.params.idProyecto;
      return proyectoProducto.productosSinDesarrollar(idProyecto);
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
router.get('/getproductosendesarrollo/:idProyecto', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var idProyecto = req.params.idProyecto;
      return proyectoProducto.getProductosEnDesarrollo(idProyecto);
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
router.get('/getproductosdesarrollados/:idProyecto', (req, res, next) => {
  Promise.resolve()
  .then(function () {
      var idProyecto = req.params.idProyecto;
      return proyectoProducto.getProductosDesarrollados(idProyecto);
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

//Actualiza el valor de desarrollado de 0 (no desarrollado) a 1 (desarrollado)
router.post('/desarrollado', (req, res, next) => {
  Promise.resolve().then(function () {
      var idProyecto = req.body.Proyectos_idProyecto;
      var idProducto = req.body.Productos_idProducto;
      var desarrollado = 1;
      return proyectoProducto.desarollado(idProyecto, idProducto, desarrollado);
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

router.get('/getterminados/:idProyecto', (req, res, next) => {
  Promise.resolve().then(function () {
    return proyectoProducto.getTerminados(req.params.idProyecto);
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

  Promise.resolve().then(function () {
    return auxiliar.getAuxiliarVenta(numPeriodo,idProyecto,idProducto);
  })
  .then(function (rows) {
    var desProducto = rows[0].desarrolloProducto;
    var IVAxGtos = rows[0].IVAGastosVenta;

    var json = {
      IVAGastosVenta: unDoIVAGastosVenta(IVAxGtos,costoDesProd),
      desarrolloProducto: unDoDesarrolloProducto(desProducto,costoDesProd)
    }

    return auxiliar.setAuxiliarVenta(numPeriodo,idProyecto,json);
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

router.post('/operacionespagardesarrollo', (req, res, next) => {

  var idProyecto = req.body.idProyecto;
  var numPeriodo = req.body.numeroPeriodo;
  var costoDesProd = req.body.costoDes;
  var idProducto = req.body.idProducto;

  Promise.resolve().then(function () {
    return auxiliar.getAuxiliar(numPeriodo,idProyecto,idProducto);
  })
  .then(function (rows) {
    var desProducto = 0;
    var IVAxGtos = 0;

    if(rows.length > 0){
      desProducto += rows[0].desarrolloProducto;
      IVAxGtos += rows[0].IVAGastosVenta;
    }


    var json = {
      IVAGastosVenta: (IVAxGtos - IVAxGastosVenta(costoDesProd)),
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
        IVAGastosVenta: (IVAxGtos - IVAxGastosVenta(costoDesProd)),
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
function IVAxGastosVenta(costoDesProd) {
  return costoDesProd*0.15;
}

//POR PAGAR es promedioMensual
function promedioMensual(costoDesProd){
  var promMensual = IVAxGastosVenta(costoDesProd)/(12);
  return -(promMensual);
}

//TOTAL PAGOS
function totalPagos(costoDesProd) {
  var tPagos = (promedioMensual(costoDesProd))*(11);
  return tPagos;
}

//Operaciones: Deshacer pago de desarrollo

function unDoIVAGastosVenta(IVAxGtos,costoDesProd) {

var nvoIVAGtosVenta;

  if (IVAxGtos==0) {
    nvoIVAGtosVenta = 0;
  }else {
    nvoIVAGtosVenta = ((IVAxGtos) - (IVAxGastosVenta(costoDesProd)));
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

module.exports = router;
