const express = require('express');
const router = express.Router();
const config = require('../config/db');
const productoZonaProyecto = require('../models/productozonaproyecto');
const producto = require('../models/producto');
const auxiliar = require('../models/auxiliar');
const Promise = require("bluebird");

router.post('/desarrollozona/', (req, res, next) => {
  Promise.resolve().then(function () {
      var json = req.body;
      return productoZonaProyecto.addProductoZonaProyecto(json);
  })
  .then(function () {
    var idZona = req.body.Zona_idZonas;
    var idProyecto = req.body.Proyecto_idProyecto;
    var idUsuario = req.body.Proyecto_Usuario_idUsuario;
    return productoZonaProyecto.getProductoZonaProyecto(idZona,idProyecto,idUsuario);
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

//AQUI
router.post('/pagardesarrollozona', (req, res, next) => {
  var idProducto = req.body.Producto_idProducto;
  var idZona = req.body.Zona_idZonas;
  var idProyecto = req.body.Proyecto_idProyecto;
  var idUsuario = req.body.Proyecto_Usuario_idUsuario;

  var ultimoPeriodo = req.body.ultimoPeriodoDes;

  Promise.join(productoZonaProyecto.getTiempoDesZona(idZona,idProducto),
    productoZonaProyecto.getPeriodosDesProductoZonaProyecto(idProyecto,idProducto,idUsuario,idZona),
    function(tiempo, periodo) {
      console.log("tiempodes Zona: " + tiempo[0].tiempoDes);
      console.log("periodosDes productozonaproyecto: "+ periodo[0].periodosDes);
      var tiempoDes = tiempo[0].tiempoDes;
      var periodosDes = periodo[0].periodosDes;
      return comparaTiempos(tiempoDes,periodosDes);
      //return periodosDes;
    })
  .then(function (periodosDes) {
    var idProducto = req.body.Producto_idProducto;
    var idZona = req.body.Zona_idZonas;
    var idProyecto = req.body.Proyecto_idProyecto;
    var idUsuario = req.body.Proyecto_Usuario_idUsuario;
    var ultimoPeriodo = req.body.ultimoPeriodoDes;
    var periodos = periodosDes;

    console.log("periodos aumentaPeriodos: "+periodos);
    console.log("ultimoPeriodo: "+ultimoPeriodo);
    return productoZonaProyecto.updateProductoZonaProyecto(idProducto,idZona,idProyecto,idUsuario,ultimoPeriodo,periodos);
   })
//regreso datos
  .then(function () {
    return productoZonaProyecto.getProductoZonaProyectoEnDes();
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

//Actualiza el valor de desarrollado de 0 (no desarrollado) a 1 (desarrollado)
router.post('/desarrolladoproductozonaproyecto', (req, res, next) => {
  Promise.resolve().then(function () {
      var idProducto = req.body.Producto_idProducto;
      var idZona = req.body.Zona_idZonas;
      var idProyecto = req.body.Proyecto_idProyecto;
      var idUsuario = req.body.Proyecto_Usuario_idUsuario;
      var desarrollado = 1;
      return productoZonaProyecto.desarolladoProductoZonaProyecto(idProducto,idZona,idProyecto,idUsuario,desarrollado);
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

router.post('/productossindesarrollar/', (req, res, next) => {
  var idProyecto = req.body.Proyecto_idProyecto;
  var idUsuario = req.body.Proyecto_Usuario_idUsuario;
  Promise.join(productoZonaProyecto.getProductosSinDesarrollar(idProyecto,idUsuario),
  productoZonaProyecto.getIdZonaSinDes(idProyecto,idUsuario),
  productoZonaProyecto.getZonas(),function(productozonasindes, idszonasindes,zonas) {
      return jsonProductosSinDesarrollar(productozonasindes,idszonasindes,zonas);
     })
  .then(function (rows) {
      res.json({success: true, datos:rows, msg:"Operacion exitosa"});
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
router.post('/productosendesarrollo/', (req, res, next) => {

  var idProyecto = req.body.Proyecto_idProyecto;
  var idUsuario = req.body.Proyecto_Usuario_idUsuario;

  Promise.join(productoZonaProyecto.getProductosEnDesarrollo(idProyecto,idUsuario),
  productoZonaProyecto.getIdZonasEnDes(idProyecto,idUsuario),
  productoZonaProyecto.getZonas(),productoZonaProyecto.getProductosEnDesEnZona(idProyecto,idUsuario),
  function(productosendes, idszonasdes, zonas, productosendesenzona) {
      return jsonProductosEnDesarrollo(productosendes, idszonasdes, zonas, productosendesenzona);
     })
  .then(function (rows) {
      res.json({success: true, datos:rows, msg:"Operacion exitosa"});
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

router.get('/terminados/:idProyecto', (req, res, next) => {
  Promise.resolve().then(function () {
    return productoZonaProyecto.getTerminados(req.params.idProyecto);
  }).then( function(rows) {
    res.json({success:true, msg:"Operacion exitosa", datos:rows});
  }).catch( function (err) {
    console.log(err);
    res.json({success:false, msg:"Fallo"});
  })
})

//Productos que ya están desarrollados (desarrollado = 1)
router.post('/productosdesarrollados/', (req, res, next) => {

  var idProyecto = req.body.Proyecto_idProyecto;
  var idUsuario = req.body.Proyecto_Usuario_idUsuario;

  Promise.join(productoZonaProyecto.getProductosDesarrollados(idProyecto,idUsuario),
  productoZonaProyecto.getIdZonasDes(idProyecto,idUsuario),
  productoZonaProyecto.getZonas(), productoZonaProyecto.getProductosDesEnZona(idProyecto,idUsuario),
  function(productosdes, idszonasdes, zonas, productosdesenzona) {

      return jsonProductosDesarrollados(productosdes, idszonasdes,zonas, productosdesenzona);
     })
  .then(function (rows) {
      res.json({success: true, datos:rows, msg:"Operacion exitosa"});
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

router.post('/zonasporproducto/', (req, res, next) => {
  var idProyecto = req.body.idProyecto;
  var idUsuario = req.body.idUsuario;

  Promise.join(productoZonaProyecto.getIdProductoFromProductoZonaProyecto(idProyecto,idUsuario),
  productoZonaProyecto.getProductoZonaProyectoByIdProyectoByIdUsuario(idProyecto,idUsuario),
    function(idsProductos,productozonaproyecto) {

      return zonasEnProductosArray(idsProductos,productozonaproyecto);
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

router.post('/operacionespagardesarrollo', (req, res, next) => {

  var idProyecto = req.body.idProyecto;
  var numPeriodo = req.body.numeroPeriodo;
  var costoDesProd = req.body.costoDes;
  var idProducto = req.body.idProducto;

  Promise.resolve().then(function () {
//    return productoZonaProyecto.getBalance(idProyecto,numPeriodo);
      return auxiliar.getAuxiliar(numPeriodo,idProyecto,idProducto);
  })
  .then(function (rows) {
    var desMercado = 0;
    var IVAxGtos = 0;

    if(rows.length > 0){
      desMercado += rows[0].desarrolloMercado;
      IVAxGtos += rows[0].IVAGastosVenta;
    }

    //IVA por Gatos de Venta
    var IVAxGtosVenta = IVAxGastosVenta(costoDesProd);
    //Otros gastos
    var desDeMercado = desarrolloMercado(desMercado,costoDesProd);
    //total pagos
    var tPagos = totalPagos(costoDesProd);

    var json = {
      IVAGastosVenta: (IVAxGtos - IVAxGastosVenta(costoDesProd)),
      desarrolloMercado: desMercado + costoDesProd
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
        desarrolloMercado: desMercado + costoDesProd
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

//ejemplo
router.post('/devolverpagardesarrollo', (req, res, next) => {

  var idProyecto = req.body.idProyecto;
  var numPeriodo = req.body.numeroPeriodo;
  var costoDesProd = req.body.costoDes;

  Promise.resolve().then(function () {
    return auxiliar.getAuxiliar(numPeriodo,idProyecto);
  })
  .then(function (rows) {
    var desMercado = rows[0].desarrolloMercado;
    var  IVAxPagar = rows[0].IVAPorPagar;
    var IVAxGtos = rows[0].IVAGastosVenta
    var  IVATot = rows[0].IVATotal;

    var json = {
      IVAGastosVenta: unDoIVAGastosVenta(IVAxGtos,costoDesProd),
      desarrolloMercado: unDoDesarrolloMercado(desMercado,costoDesProd)
    }

    return auxiliar.setAuxiliar(numPeriodo,idProyecto,json);
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

//productozonaproyecto y proyectoProducto
router.post('/desarrollados', (req, res, next) => {
  var idUsuario = req.body.idUsuario;
  var idProyecto = req.body.idProyecto;
  Promise.join(productoZonaProyecto.getIdsZonas(idUsuario,idProyecto), productoZonaProyecto.getDesarrollados(idUsuario,idProyecto),
   function(idszonas, desarrollados) {
      return jsonDesarrollados(idszonas, desarrollados);
    })
  .then(function(rows){
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
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

//productos desarrollados en productozonaproyecto y proyectoproducto

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

//PRODUCTOS DESARROLLADOS

function jsonProductosDesarrollados(productosdes, idszonasdes,zonas, productosdesenzona) {
  var repIdProductosDes = [];//almacena las veces que se repite un idZona en productosdes

  var i = 0;
  while (i<idszonasdes.length) {
    var aux = 0;
    for (var j = 0; j < productosdes.length; j++) {
      if (idszonasdes[i].Zona_idZonas == productosdes[j].Zona_idZonas) {
        aux = aux +1;
      }
    }
    repIdProductosDes.push(aux);
    i++;
  }

//console.log(repIdProductosDes);

var productosDes = []
var k = 0;

while (k < idszonasdes.length) {
  for (var i = 0; i < zonas.length; i++) {
    if (idszonasdes[k].Zona_idZonas == zonas[i].idZona) {
      var json = {
        "idZona":idszonasdes[k].Zona_idZonas,
        "nombreZona":zonas[i].nombreZona,
        "productosDes":[]
      }
    productosDes.push(json);
    }
  }
  k++;
}
//console.log(productosDes);

var aux2 = 0;
for (var j = 0; j < repIdProductosDes.length; j++) {
  for (var k = 0; k < (repIdProductosDes[j]); k++) {
    productosDes[j]['productosDes'].push(productosdesenzona[aux2].Producto_idProducto);
   aux2 = aux2 + 1;
   console.log("aux2: "+aux2);
  }
}
//console.log(productosDes);
return productosDes;
}


//PRODUCTOS EN DESARROLLO

function jsonProductosEnDesarrollo(productosendes, idszonasendes,zonas, productosendesenzona) {
  var repIdProductosEnDes = [];//almacena las veces que se repite un idZona en productosdes

  var i = 0;
  while (i<idszonasendes.length) {
    var aux = 0;
    for (var j = 0; j < productosendes.length; j++) {
      if (idszonasendes[i].Zona_idZonas == productosendes[j].Zona_idZonas) {
        aux = aux +1;
      }
    }
    repIdProductosEnDes.push(aux);
    i++;
  }

//console.log(repIdProductosDes);

var productosEnDes = []
var k = 0;

while (k < idszonasendes.length) {
  for (var i = 0; i < zonas.length; i++) {
    if (idszonasendes[k].Zona_idZonas == zonas[i].idZona) {
      var json = {
        "idZona":idszonasendes[k].Zona_idZonas,
        "nombreZona":zonas[i].nombreZona,
        "productosEnDes":[]
      }
    productosEnDes.push(json);
    }
  }
  k++;
}
//console.log(productosDes);

var aux2 = 0;
for (var j = 0; j < repIdProductosEnDes.length; j++) {
  for (var k = 0; k < (repIdProductosEnDes[j]); k++) {
    var json = {
      "idProducto":productosendesenzona[aux2].Producto_idProducto,
      "periodosDes":productosendesenzona[aux2].periodosDes,
      "tiempoDes":productosendesenzona[aux2].tiempoDes,
      "ultimoPeriodoDes":productosendesenzona[aux2].ultimoPeriodoDes
    }
    productosEnDes[j]['productosEnDes'].push(json);
   aux2 = aux2 + 1;
  }
}
//console.log(productosDes);
  return productosEnDes;
}


// PRODUCTOS SIN DESARROLLAR

function jsonProductosSinDesarrollar(productozonasindes,idszonasindes,zonas) {

  var repIdProductosSinDes = [];//almacena las veces que se repite un idZona en productozonasindes

  var i = 0;
  while (i<idszonasindes.length) {
    var aux = 0;
    for (var j = 0; j < productozonasindes.length; j++) {
      if (idszonasindes[i].Zona_idZona == productozonasindes[j].Zona_idZona) {
        aux = aux +1;
      }
    }
    repIdProductosSinDes.push(aux);
    i++;
  }
//console.log(repIdProductosSinDes);
var zonaArray = []
var k = 0;

while (k < idszonasindes.length) {
  for (var i = 0; i < zonas.length; i++) {
    if (idszonasindes[k].Zona_idZona == zonas[i].idZona) {
      var json = {
        "idZona":idszonasindes[k].Zona_idZona,
        "nombreZona":zonas[i].nombreZona,
        "productosSinDes":[]
      }
    zonaArray.push(json);
    }
  }
  k++;
}

var aux2 = 0;
for (var j = 0; j < repIdProductosSinDes.length; j++) {
  for (var k = 0; k < (repIdProductosSinDes[j]); k++) {
    zonaArray[j]['productosSinDes'].push(productozonasindes[aux2].Producto_idProducto);
   aux2 = aux2 + 1;
  }
}

console.log(zonaArray);

  return zonaArray;
}

//ZONAS POR PRODUCTO
function zonasEnProductosArray(idsProductos,productozonaproyecto) {
//cuenta cuantas veces se repite un idProducto de productos en productozonaproyecto
  var repIdProductos = [];
  var i = 0;
  while (i < idsProductos.length) {
    var aux = 0;
    for (var j = 0; j < productozonaproyecto.length; j++) {
      if ((idsProductos[i].Producto_idProducto)==(productozonaproyecto[j].Producto_idProducto)) {
        aux = aux + 1;
      }
    }
    repIdProductos.push(aux);
    i++;
  }

var productozonaproyectoArray = [];
for (var i = 0; i < idsProductos.length; i++) {
    var json = {
      "idProducto":idsProductos[i].Producto_idProducto,
      "zonas":[]
    }
    productozonaproyectoArray.push(json);
  }

  var aux2 = 0;
  for (var j = 0; j < repIdProductos.length; j++) {
    for (var k = 0; k < (repIdProductos[j]); k++) {
      productozonaproyectoArray[j]['zonas'].push(productozonaproyecto[aux2].Zona_idZonas);
     aux2 = aux2 + 1;
    }
  }
  console.log(productozonaproyectoArray);
return productozonaproyectoArray;
}

//Operaciones sobre auxiliarcuenta
//2,000,000
function desarrolloMercado(desMercado,costoDesProd) {//se van sumando los desarrolloMercado de cada producto, e.i, su precio de desarrollo
  var nvoDesMercado = desMercado + costoDesProd;
  return nvoDesMercado
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

//validaciones
function comparaTiempos(tiempoDes,periodosDes) {
    var desarrollado;
    var json;

    if (tiempoDes == periodosDes) {//si son iguales el desarrollado ha sido completado
      //console.log("entra 1");
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


function unDoDesarrolloMercado(desMercado,costoDesProd) {
  var nvoDesMercado;

  if (desMercado==0) {
    nvoDesMercado=0;
  }else {
    nvoDesMercado = desMercado - costoDesProd;
  }
  return nvoDesMercado;
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
