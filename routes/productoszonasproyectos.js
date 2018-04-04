const express = require('express');
const router = express.Router();
const config = require('../config/db');
const productoZonaProyecto = require('../models/productozonaproyecto');
const producto = require('../models/producto');
const auxiliar = require('../models/auxiliar');
const Promise = require("bluebird");
const variable = require("../models/variable");

router.post('/desarrollozona/', (req, res, next) => {
  Promise.resolve().then(function () {
      var json = req.body;
      return productoZonaProyecto.addProductoZonaProyecto(json);
  })
  // .then(function () {
  //   return productoZonaProyecto.getProductoZonaProyecto(/*idZona,idProyecto,idUsuario*/);
  // })
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


router.post('/pagardesarrollozona/', (req, res, next) => {
  var idProducto = req.body.Producto_idProducto;
  var idZona = req.body.Zona_idZonas;
  var idProyecto = req.body.Proyecto_idProyecto;
  var idUsuario = req.body.Proyecto_Usuario_idUsuario;
  var numeroPeriodo = req.body.numeroPeriodo;

  var tiempoDes;
  var periodosDes
  var maxnumeroperiodo;
  var json;

  Promise.join(
    productoZonaProyecto.getMaxNumeroPeriodoProductoZonaProyecto(idProyecto,idProducto,idZona,idUsuario),
    productoZonaProyecto.getTiempoDesZona(idZona,idProducto),
    function (maxnumperiodo,tiempo) {

    maxnumeroperiodo = maxnumperiodo[0].maxnumperiodo;
    tiempoDes = tiempo[0].tiempoDes;
console.log("tiempoDes:: ",tiempo);
console.log("maxnumeroperiodo:: ",maxnumperiodo);
    return productoZonaProyecto.getPeriodosDesProductoZonaProyecto(idProyecto,idProducto,idUsuario,idZona,maxnumeroperiodo);
//return console.log("ok");
   })
  .then(function (periodo) {
    periodosDes = periodo[0].periodosDes;
  })
  .then(function () {
    return productoZonaProyecto.getProductoZonaProyecto(idProducto,idZona,idProyecto,idUsuario,maxnumeroperiodo);
  })
  .then(function (productozonaproyecto) {

    if (tiempoDes == periodosDes) {
      return console.log("igual");
    }else {
      periodosDes = aumentaPeriodos(periodosDes);
      json = {
        "Producto_idProducto":idProducto,
        "Zona_idZonas":idZona,
        "Proyecto_idProyecto":idProyecto,
        "Proyecto_Usuario_idUsuario":idUsuario,
        "numeroPeriodo":numeroPeriodo,
        "desarrollado":productozonaproyecto[0].desarrollado,
        "periodoInicio":productozonaproyecto[0].periodoInicio,
        "periodosDes":periodosDes
      }
      return productoZonaProyecto.addProductoZonaProyecto(json);
    }
  })
// FALTAN LAS CONSULTAS
//   .then(function () {
//     return proyectoProducto.getProductosEnDesarrollo(idProyecto,numeroPeriodo);
//   })
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

router.post('/productossindesarrollar/', (req, res, next) => {

  var idProyecto = req.body.Proyecto_idProyecto;
  var idUsuario = req.body.Proyecto_Usuario_idUsuario;
  var numeroPeriodo = req.body.numeroPeriodo;

  Promise.join(productoZonaProyecto.getProductosSinDesarrollar(idProyecto,numeroPeriodo,idUsuario),
  productoZonaProyecto.getIdZonaSinDes(idProyecto,numeroPeriodo,idUsuario),
  productoZonaProyecto.getZonas(),function(productozonasindes, idszonasindes,zonas) {
    console.log("productozonasindes:: ",productozonasindes);
    console.log("idszonasindes:: ",idszonasindes);
    console.log("zonas:: ",zonas);
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
  var numeroPeriodo = req.body.numeroPeriodo;

  Promise.join(
  productoZonaProyecto.getProductosEnDesarrollo(idProyecto,numeroPeriodo,idUsuario),
  productoZonaProyecto.getIdZonasEnDes(idProyecto,numeroPeriodo,idUsuario),
  productoZonaProyecto.getZonas(),
  productoZonaProyecto.getIdProductoIdZonasNumeroPeriodo(idProyecto,numeroPeriodo,idUsuario),
  function(productosendes, idszonasdes, zonas, idproductoidzonanumeroperiodo) {
    //console.log("productosendes",productosendes);
    //console.log("idszonasdes",idszonasdes);
    //console.log("zonas",zonas);

     return jsonProductosEnDesarrollo(productosendes, idszonasdes, zonas, idproductoidzonanumeroperiodo);
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

//Productos que ya están desarrollados (desarrollado = 1)
router.post('/productosdesarrollados/', (req, res, next) => {

  var idProyecto = req.body.Proyecto_idProyecto;
  var idUsuario = req.body.Proyecto_Usuario_idUsuario;
  var numeroPeriodo = req.body.numeroPeriodo;

  Promise.join(productoZonaProyecto.getProductosDesarrollados(idProyecto,numeroPeriodo,idUsuario),
  productoZonaProyecto.getIdZonasDes(idProyecto,numeroPeriodo,idUsuario),
  productoZonaProyecto.getZonas(),
  //productoZonaProyecto.getProductosDesEnZona(idProyecto,idUsuario),
  function(productosdes, idszonasdes, zonas/*, productosdesenzona*/) {

      return jsonProductosDesarrollados(productosdes, idszonasdes,zonas/*, productosdesenzona*/);
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

router.post('/terminados/', (req, res, next) => {
  Promise.resolve().then(function () {
    var pro = req.body.idProyecto;
    var periodo = req.body.numeroPeriodo
    return productoZonaProyecto.getTerminados(pro,periodo);
  }).then( function(rows) {
    res.json({success:true, msg:"Operacion exitosa", datos:rows});
  }).catch( function (err) {
    console.log(err);
    res.json({success:false, msg:"Fallo"});
  })
})

//Actualiza el valor de desarrollado de 0 (no desarrollado) a 1 (desarrollado)
router.post('/desarrolladoproductozonaproyecto', (req, res, next) => {
  Promise.resolve().then(function () {
    var json = req.body;
    return productoZonaProyecto.addProductoZonaProyecto(json);
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

  Promise.join(auxiliar.getAuxiliar(numPeriodo,idProyecto,idProducto),variable.getIVA(),function(rows,variableIVA){
    var desMercado = 0;
    var IVAxGtos = 0;
    var IVA = variableIVA[0].valor;

    if(rows.length > 0){
      desMercado += rows[0].desarrolloMercado;
      IVAxGtos += rows[0].IVAGastosVenta;
    }

    //IVA por Gatos de Venta
    var IVAxGtosVenta = IVAxGastosVenta(costoDesProd,IVA);
    //Otros gastos
    var desDeMercado = desarrolloMercado(desMercado,costoDesProd);
    //total pagos
    var tPagos = totalPagos(costoDesProd);

    var json = {
      IVAGastosVenta: (IVAxGtos - IVAxGastosVenta(costoDesProd,IVA)),
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
        IVAGastosVenta: (IVAxGtos - IVAxGastosVenta(costoDesProd,IVA)),
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
  var idProducto = req.body.idProducto;

  Promise.join(auxiliar.getAuxiliar(numPeriodo,idProyecto,idProducto),variable.getIVA(),function(rows,variableIVA)
  {
    var desMercado = rows[0].desarrolloMercado;
    var IVAxGtos = rows[0].IVAGastosVenta;
    var IVA = variableIVA[0].valor;

    var json = {
      IVAGastosVenta: unDoIVAGastosVenta(IVAxGtos,costoDesProd,IVA),
      desarrolloMercado: unDoDesarrolloMercado(desMercado,costoDesProd)
    }

    return auxiliar.setAuxiliar(numPeriodo,idProyecto,idProducto,json);
  })
  .then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success: false, msg:"Operacion fallida"});
  });
});

router.post('/deshacer', (req,res,next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  var idProducto = req.body.idProducto;
  var idZona = req.body.idZona;
  var idUsuario = req.body.idUsuario;

  Promise.resolve().then(function() {
    return productoZonaProyecto.deleteProductoZona(idProyecto,idProducto,idZona,numeroPeriodo,idUsuario);
  }).then(function(){
    res.json({success: true, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success: false, msg:"Operacion fallida"});
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

function jsonProductosDesarrollados(productosdes, idszonasdes,zonas/*, productosdesenzona*/) {
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
    productosDes[j]['productosDes'].push(productosdes[aux2].Producto_idProducto);
   aux2 = aux2 + 1;
  // console.log("aux2: "+aux2);
  }
}
//console.log(productosDes);
return productosDes;
}


//PRODUCTOS EN DESARROLLO

function jsonProductosEnDesarrollo(productosendes, idszonasendes,zonas, idproductoidzonanumeroperiodo/*, productosendesenzona*/) {
  var repIdZonas = [];//almacena las veces que se repite un idZona en productosdes
  var i = 0;
  var productosEnDes = []
  var k = 0;
  var productosmaxperiodo = [];
  var l=0;

  if (productosendes.length!=0) {
    while (i<idproductoidzonanumeroperiodo.length) {
      var aux = 0;
      for (var j = 0; j < productosendes.length; j++) {
        if (idproductoidzonanumeroperiodo[i].Producto_idProducto==productosendes[j].Producto_idProducto && idproductoidzonanumeroperiodo[i].Zona_idZonas == productosendes[j].Zona_idZonas) {
          aux = aux +1;
        }
      }
      productosmaxperiodo.push(aux);
      i++;
    }

  //Maximo numero de periodo de productosendes
  var nvoproductosendes = [];
   var aux2 = 0;
   for (var j = 0; j < productosmaxperiodo.length; j++) {
     for (var k = 0; k < (productosmaxperiodo[j]); k++) {
     aux2 = aux2 + 1;
     }
  //      console.log("aux2: "+(aux2-1));
        var json = {
            "Producto_idProducto":productosendes[aux2-1].Producto_idProducto,
            "Zona_idZonas":productosendes[aux2-1].Zona_idZonas,
            "periodosDes":productosendes[aux2-1].periodosDes,
            "tiempoDes":productosendes[aux2-1].tiempoDes,
            "numeroPeriodo":productosendes[aux2-1].numeroPeriodo
        }
        nvoproductosendes.push(json);
   }
  // for (var i = 0; i < idszonasendes.length; i++) {
  // console.log("idszonasendes:. "+idszonasendes[i].Zona_idZonas);
  // }


   while (l<idszonasendes.length) {
     var aux3 = 0;
     for (var j = 0; j < nvoproductosendes.length; j++) {
       if (idszonasendes[l].Zona_idZonas==nvoproductosendes[j].Zona_idZonas) {
         //console.log("idszonasendes[l].Zona_idZonas::"+idszonasendes[l].Zona_idZonas);
         aux3 = aux3 +1;
       }
     }
     repIdZonas.push(aux3);
     l++;
   }
   //console.log("repIdZonas",repIdZonas);

    var m =0;
     while (m < idszonasendes.length) {
       for (var i = 0; i < zonas.length; i++) {
         if (idszonasendes[m].Zona_idZonas == zonas[i].idZona) {
           var json = {
             "idZona":idszonasendes[m].Zona_idZonas,
             "nombreZona":zonas[i].nombreZona,
             "productosEnDes":[]
           }
         productosEnDes.push(json);
         }
       }
       m++;
     }

   var aux4 = 0;
   for (var j = 0; j < repIdZonas.length; j++) {
     for (var k = 0; k < (repIdZonas[j]); k++) {
           var json = {
             "idProducto":nvoproductosendes[aux4].Producto_idProducto,
             "periodosDes":nvoproductosendes[aux4].periodosDes,
             "tiempoDes":nvoproductosendes[aux4].tiempoDes,
             "numeroPeriodo":nvoproductosendes[aux4].numeroPeriodo
         }
       productosEnDes[j]['productosEnDes'].push(json);
      aux4 = aux4 + 1;
     }
   }
  console.log("productosEnDes: "+JSON.stringify(productosEnDes));
  return productosEnDes;
}else {
  return productosEnDes;
}
  return productosEnDes;
}



// PRODUCTOS SIN DESARROLLAR

function jsonProductosSinDesarrollar(productozonasindes,idszonasindes,zonas) {

  var repIdProductosSinDes = [];//almacena las veces que se repite un idZona en productozonasindes

  var i = 0;
  while (i<idszonasindes.length) {
    var aux = 0;
    for (var j = 0; j < productozonasindes.length; j++) {
      if (idszonasindes[i].Zona_idZonas == productozonasindes[j].Zona_idZonas) {
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
    if (idszonasindes[k].Zona_idZonas == zonas[i].idZona) {
      var json = {
        "idZona":idszonasindes[k].Zona_idZonas,
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
function IVAxGastosVenta(costoDesProd,IVA) {
  return costoDesProd*IVA;
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

function unDoIVAGastosVenta(IVAxGtos,costoDesProd,IVA) {

var nvoIVAGtosVenta;

  if (IVAxGtos==0) {
    nvoIVAGtosVenta = 0;
  }else {
    nvoIVAGtosVenta = ((IVAxGtos) + (IVAxGastosVenta(costoDesProd,IVA)));
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
