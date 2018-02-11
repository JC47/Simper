const express = require('express');
const router = express.Router();
const config = require('../config/db');
const operacion = require('../models/operacion');
const auxiliar = require('../models/auxiliar');
const variable = require("../models/variable");
const Promise = require("bluebird");

router.post('/register', (req, res, next) => {
  var idProducto = req.body.Producto_idProducto;
  var idZona = req.body.Zona_idZonas;
  var idProyecto = req.body.Proyecto_idProyecto;
  var idUsuario = req.body.Usuario_idUsuario;
  var numeroPeriodo = req.body.numeroPeriodo;
  var uniVendidas = req.body.unidadesVendidas;

  Promise.resolve().then(function(){
    return operacion.getOperacion(idProyecto,idUsuario,numeroPeriodo,idProducto,idZona);
  }).then(function (rows) {
    if(rows.length == 0){
      var json = req.body;
      return operacion.addOperacion(json);
    }
    else{
      return operacion.updateOperacion(idProducto,idZona,idProyecto,idUsuario,numeroPeriodo,uniVendidas);
    }
  })
  .then(function () {
    return operacion.getOperaciones(idProyecto,idUsuario,numeroPeriodo);
  })
  .then(function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false,msg:"No sirve"});
  });
});


router.post('/getAlmacen', (req,res,next) => {
  var idProyecto = req.body.Proyecto_idProyecto;
  var numeroPeriodo = req.body.Balance_numeroPeriodo;
  Promise.resolve().then(function(){
    return operacion.getAlmacenes(idProyecto,numeroPeriodo);
  })
  .then(function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false,msg:"No sirve"});
  });
});

router.post('/registerAlmacen', (req, res, next) => {
  var idProducto = req.body.Producto_idProducto;
  var idProyecto = req.body.Proyecto_idProyecto;
  var numeroPeriodo = req.body.Balance_numeroPeriodo;
  var uniA = req.body.unidadesAlmacenadas;

  Promise.resolve().then(function(){
    return operacion.getAlmacen(idProyecto,idProducto,numeroPeriodo);
  }).then(function (rows) {
    if(rows.length == 0){
      var json = req.body;
      return operacion.addAlmacen(json);
    }
    else{
      return operacion.updateAlmacen(uniA,idProducto,idProyecto,numeroPeriodo);
    }
  })
  .then(function () {
    return operacion.getAlmacenes(idProyecto,numeroPeriodo);
  })
  .then(function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error("got error: " + err);
    res.json({success:false,msg:"No sirve"});
  });
});

router.post('/getAll/', (req, res, next) => {
  Promise.resolve().then(function() {
    var idProyecto = req.body.idProyecto;
    var idUsuario = req.body.idUsuario;
    var numeroPeriodo = req.body.numeroPeriodo;
    return operacion.getOperaciones(idProyecto,idUsuario,numeroPeriodo);
  }).then(function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.error(err);
    res.json({msg:"Algo salió mal"});
  });
});

router.post('/getventas', (req,res,next) => {
  Promise.resolve().then(function () {
    var idProyecto = req.body.Proyectos_idProyecto;
    var numeroPeriodo = req.body.Balance_numeroPeriodo;
    return auxiliar.getAuxiliaresVenta(numeroPeriodo,idProyecto);
  }).then(function (rows) {
    res.json({success:true, datos:rows, msg:"Exito"});
  }).catch(function(err){
    console.log(err);
    res.json({success:false, msg:"Fail"});
  })
})

router.post('/getauxiliar', (req,res,next) => {
  Promise.resolve().then(function () {
    var idProyecto = req.body.Proyectos_idProyecto;
    var numeroPeriodo = req.body.Balance_numeroPeriodo;
    return auxiliar.getAuxiliares(numeroPeriodo,idProyecto);
  }).then(function(rows){
    res.json({success:true, datos:rows, msg:"Exito"});
  }).catch(function(err){
    console.log(err);
    res.json({success:false, msg:"Fail"});
  })
})

router.post('/modify', (req, res, next) => {

  Promise.resolve()
  .then(function () {
    var idProducto = req.body.Producto_idProducto;
  	var idZona = req.body.Zona_idZonas;
  	var idProyecto = req.body.Proyecto_idProyecto;
  	var idUsuario = req.body.Usuario_idUsuario;
  	var numeroPeriodo = req.body.numeroPeriodo;
    var uniVendidas = req.body.unidadesVendidas;

    return operacion.updateOperacion(idProducto,idZona,idProyecto,idUsuario,numeroPeriodo,uniAlmacenadas,uniVendidas);
  })
  .then(function () {
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

router.post('/resultados', (req,res,next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  Promise.join(operacion.getProductoCuentaVenta(idProyecto,numeroPeriodo),operacion.getProductoCuenta(idProyecto,numeroPeriodo),
  operacion.getProductoMaquinaria(idProyecto,numeroPeriodo),
              function(rows1,rows2,r3){
                return jsonProductos(rows1,rows2,r3);
              }).then(function(salida){
                return res.json({success:true,datos:salida,msg:"Bien"});
              }).catch(function(err) {
                console.log(err);
                return res.json({success:false,msg:"Algo salió mal"});
              });
});

router.post('/getproduccion', (req,res,next) => {
  Promise.resolve().then(function(){
    var idProducto = req.body.Producto_idProducto;
    var idProyecto = req.body.Proyecto_idProyecto;
    return operacion.getMaquinarias(idProducto,idProyecto);
  }).then(function(maquinas){
    var r = getProduccion(maquinas);
    return res.json({success:true,produccion:r});
  }).catch(function(err){
    console.log(err);
    return res.json({success:false,msg:"Algo salió mal"});
  })
});

router.post('/getdemanda', (req,res,next) => {
  Promise.resolve().then(function(){
    var idProducto = req.body.Producto_idProducto;
    var idZona = req.body.Zona_idZonas;
    var numeroPeriodo = req.body.numeroPeriodo;
    return operacion.getDemandaPotencial(numeroPeriodo,idProducto,idZona);
  }).then(function(demanda){
    var r = demanda[0].cantidad;
    return res.json({success:true,demanda:r});
  }).catch(function(err){
    console.log(err);
    return res.json({success:false,msg:"Algo salió mal"});
  })
});


router.post('/validateAlmacen', (req,res,next) => {
  var idProducto = req.body.Producto_idProducto;
  var idProyecto = req.body.Proyecto_idProyecto;
  var numeroPeriodo = req.body.Balance_numeroPeriodo;
  var periodoAnterior = numeroPeriodo - 1;
  var uniA = req.body.unidadesAlmacenadas;

  Promise.join(operacion.getMaquinarias(idProducto,idProyecto), operacion.getAlmacen(idProyecto,idProducto,periodoAnterior),
              operacion.getUnidadesVendidas(idProyecto,idProducto,numeroPeriodo),
              function(maquinas,almacenAnterior,ventasTotales){

                var uniVendidas = getVentasAnteriores(ventasTotales);
                var uniAlmacenadas = 0
                if(almacenAnterior.length != 0){
                  uniAlmacenadas = almacenAnterior[0].unidadesAlmacenadas;
                }
                var produccionA = getProduccion(maquinas);

                var uniProd = uniVendidas + uniA;
                var uniDisponibles = produccionA + uniAlmacenadas;
                console.log(uniDisponibles,uniProd);
                if(uniProd > uniDisponibles){
                  res.json({success:false,msg:"Maquinaria Insuficiente, reduce la cantidad a almacenar o compra más maquinaria"});
                }
                else{
                  res.json({success:true,msg:"Puedes almacenar"});
                }
  }).catch(function(err) {
    console.log(err);
    return res.json({success:false,msg:"Algo salio mal"});
  })
});

router.post('/validate', (req,res,next) => {
  var idProducto = req.body.Producto_idProducto;
  var idProyecto = req.body.Proyecto_idProyecto;
  var idZona = req.body.Zona_idZonas;
  var numeroPeriodo = req.body.numeroPeriodo;
  var uniVendidas = req.body.unidadesVendidas;
  var idUsuario = req.body.Usuario_idUsuario;
  var periodoAnterior = numeroPeriodo - 1;

  Promise.join(operacion.getMaquinarias(idProducto,idProyecto),operacion.getDemandaPotencial(numeroPeriodo,idProducto,idZona),
              operacion.getAlmacen(idProyecto,idProducto,periodoAnterior),operacion.getAlmacen(idProyecto,idProducto,numeroPeriodo),
              operacion.getOperacionProducto(idProyecto,idProducto,numeroPeriodo,idUsuario,idZona),
              function(maquinas,demanda,opAnterior,almacenActual,ventasTotales){

                var uniVendidasAnteriores = getVentasAnteriores(ventasTotales);

                var uniAlmacenadas = 0
                if(almacenActual.length != 0){
                  uniAlmacenadas = almacenActual[0].unidadesAlmacenadas;
                }

                var inventarioInicial = getInventarioInicial(opAnterior);
                console.log("Inventario Inicial",inventarioInicial);
                var produccionA = getProduccion(maquinas);
                var demandaP = demanda[0].cantidad;
                var uniProd = uniVendidas + uniAlmacenadas - inventarioInicial + uniVendidasAnteriores;

                if(uniProd > produccionA){
                  res.json({success:false,msg:"Maquinaria Insuficiente, reduce la cantidad a vender o compra más maquinaria",m:true});
                }
                else if(uniVendidas > demandaP){
                  res.json({success:false,msg:"Demanda Superada, reduce la cantidad a vender",m:false});
                }
                else{
                  res.json({success:true,msg:"Puedes vender"});
                }
  }).catch(function(err) {
    console.log(err);
    return res.json({success:false,msg:"Algo salio mal"});
  })
});

router.post('/productosventa', (req,res,next) => {
  Promise.resolve().then(function() {
    var idU = req.body.idUsuario;
    var idP = req.body.idProyecto;
    var numeroPeriodo = req.body.numeroPeriodo;
    return operacion.getOperaciones(idP,idU,numeroPeriodo);
  }).then(function(rows){
    var hash = {};
    var array = rows.filter(function(current) {
      var exists = !hash[current.Producto_idProducto] || false;
      hash[current.Producto_idProducto] = true;
      return exists;
    });
    return operacionesBien(rows,array);
  }).then(function(arrglo){
    res.json({success:true,msg:"Bien",datos:arrglo});
  }).catch(function(err){
    console.log(err);
    res.json({success:false,msg:"Mal"});
  })
})

router.post('/selling', (req,res,next) => {
  var idProducto = req.body.Producto_idProducto;
  var idProyecto = req.body.Proyecto_idProyecto;
  var idUsuario = req.body.Usuario_idUsuario;
  var numeroPeriodo = req.body.numeroPeriodo;
  var uniVendidas = req.body.unidadesVendidas;
  var periodoAnterior = numeroPeriodo - 1;

  Promise.join(operacion.getProductoVendido(idProducto), auxiliar.getAuxiliarVenta(periodoAnterior,idProyecto,idProducto),
              operacion.getAlmacen(idProyecto,idProducto,numeroPeriodo),
              auxiliar.getAuxiliarVenta(numeroPeriodo,idProyecto,idProducto),operacion.getMaquinarias(idProducto,idProyecto),
              variable.getIVA(),variable.getClientes(),variable.getProveedores(),
              function(producto,opAnterior,almacenActual,auxVenta,maquinas,iva,clientes,proveedores){
    //Variables
    var IVA = iva[0].valor
    var Proveedores = proveedores[0].valor;
    var Clientes = clientes[0].valor;
    //Se obtienen los datos necesarios
    var uniAlmacenadas = 0
    if(almacenActual.length != 0){
      uniAlmacenadas = almacenActual[0].unidadesAlmacenadas;
    }
    //Depreciacion de maquinaria correspondiente
    var cTransMaq = getTM(maquinas);
    //CMPP
    var cUMP = producto[0].costosMPPUniProd;
    //Inventario Inicial
    var inventarioInicial = getInventarioInicial(opAnterior);
    //Efectivo del inventarioInicial
    var cashInventarioInicial = getCashInventarioInicial(opAnterior);
    //Ventas en efectivo
    var ventasCash = uniVendidas * producto[0].precioVenta;
    //IVA de las ventasz
    var ivaVentas = ventas = ventasCash * IVA;
    //Unidades a producir
    var uniProd = uniVendidas + uniAlmacenadas - inventarioInicial;
    //Consumo de materias Primas
    var cMP = uniProd * producto[0].uniMP;
    //Consumo en efectivo --Materia Prima Cosumida de la tabla de Costo de Produccion y Ventas
    var cashMP = cMP * producto[0].costoUni;
    //IVA del consumo en efectivo
    var IVAMP = (cashMP * IVA)*(-1);
    //Costo de transformación unitario
    var cTransUnitario = (producto[0].costosFijosFabri + cTransMaq + (uniProd * producto[0].costoVarUniFabri))/uniProd;
    //Costo de transformacion Total
    var cTransTotal = (cTransUnitario * uniProd) - cTransMaq;
    //IVA de transformacion
    var IVATrans = (cTransTotal * IVA)*(-1);
    //Costo de Distribucion unitario
    var cDistribucionUnitario = (producto[0].gastosFijosDist/uniVendidas) + producto[0].costoVarUniDist;
    //Costo de Distribucion Total
    var cDistribucionTotal = (cDistribucionUnitario*uniVendidas);
    //Costo de Distribucion despues de Depreciaciones
    var cDistribucionTotalDep = cDistribucionTotal - producto[0].depDistribucion;
    //IVA de Distribucion
    var IVADistribucion = (cDistribucionTotalDep * IVA)*(-1);
    //Costo de Administracion Total
    var cAdminTotal = (producto[0].gastosFijosAdmon / uniVendidas)*uniVendidas;
    //Costo de Administracion despues de Depreciaciones
    var cAdminTotalDep = cAdminTotal - producto[0].depAdmon;
    //IVA de Administracion
    var IVAAdmin = (cAdminTotalDep * IVA)*(-1);
    //Costo de Produccion
    var cProduccion = cashMP + (cTransUnitario * uniProd);
    //Inventario Final de Articulo Terminado
    var inventarioFinal = 0;
    if(uniAlmacenadas > 0){
      inventarioFinal = ((cashInventarioInicial + cProduccion) / (inventarioInicial + uniProd)) * uniAlmacenadas;
    }
    //Costo de ventas
    var cVentas = cProduccion + cashInventarioInicial - inventarioFinal;
    //Ganancia de ventas
    var ventas = ventasCash + ivaVentas;
    //Ventas por cobrar
    var ventasXCobrar = (ventas/360)*Clientes;
    //Ventas cobradas
    var ventasOff = ventas - ventasXCobrar;
    //Compras
    var compras = cashMP - IVAMP;
    //Compras por Pagar
    var comprasXPagar = (compras/360)*Proveedores;
    //Compras pagadas
    var comprasOff = compras - comprasXPagar;

    //Validación de 0's
    if(uniAlmacenadas == 0 && uniVendidas == 0){
      ivaVentas = 0;
      IVAMP = 0;
      IVATrans = 0;
      IVADistribucion = 0;
      IVAAdmin = 0;
      ventas = 0;
      ventasXCobrar = 0;
      ventasOff = 0;
      compras = 0;
      comprasXPagar = 0;
      comprasOff = 0;
      cTransTotal = 0;
      cDistribucionTotal = 0;
      cAdminTotal = 0;
      cDistribucionTotalDep = 0;
      cAdminTotalDep = 0;
      cashMP = 0;
      cProduccion = 0;
      inventarioInicial = 0;
      inventarioFinal = 0;
      cVentas = 0;
      cTransMaq = 0;
    }

    //Damos de alta a la base
    if(auxVenta.length == 0){
        var x = {
          Producto_idProducto:idProducto,
          Balance_numeroPeriodo:numeroPeriodo,
          Proyectos_idProyecto:idProyecto,
          unidadesVendidas:uniVendidas,
          unidadesAlmacenadas:uniAlmacenadas,
          unidadesProducidas:uniProd,
          IVAxVentas:ivaVentas,
          IVACompras:IVAMP,
          IVATrans:IVATrans,
          IVADist:IVADistribucion,
          IVAAdmon:IVAAdmin,
        	Ventas:ventas,
          VentasPorCobrar:ventasXCobrar,
          VentasCobradas:ventasOff,
          Compras:compras,
          ComprasPorPagar:comprasXPagar,
          comprasPagadas:comprasOff,
          costoTransformacionVentas:cTransTotal,
          costoDistribucion:cDistribucionTotal,
          costoAdministrativo:cAdminTotal,
          costoDistDep:cDistribucionTotalDep,
          costoAdminDep:cAdminTotalDep,
          materiaCosumida:cashMP,
          costoDeProduccion:cProduccion,
          inventarioInicial:inventarioInicial,
          inventarioFinal:inventarioFinal,
          costoVentas:cVentas,
          costoTransformacionMaq:cTransMaq
        }
        auxiliar.AddAuxiliarVenta(x);
      }
      else{
        var y = {
          unidadesVendidas:uniVendidas,
          unidadesAlmacenadas:uniAlmacenadas,
          unidadesProducidas:uniProd,
          IVAxVentas:ivaVentas,
          IVACompras:IVAMP,
          IVATrans:IVATrans,
          IVADist:IVADistribucion,
          IVAAdmon:IVAAdmin,
        	Ventas:ventas,
          VentasPorCobrar:ventasXCobrar,
          VentasCobradas:ventasOff,
          Compras:compras,
          ComprasPorPagar:comprasXPagar,
          comprasPagadas:comprasOff,
          costoTransformacionVentas:cTransTotal,
          costoDistribucion:cDistribucionTotal,
          costoAdministrativo:cAdminTotal,
          costoDistDep:cDistribucionTotalDep,
          costoAdminDep:cAdminTotalDep,
          materiaCosumida:cashMP,
          costoDeProduccion:cProduccion,
          inventarioInicial:inventarioInicial,
          inventarioFinal:inventarioFinal,
          costoVentas:cVentas,
          costoTransformacionMaq:cTransMaq
        }
        auxiliar.setAuxiliarVenta(numeroPeriodo,idProyecto,idProducto,y);
      }
  }).then( function () {
    res.json({success:true, msg:"Operacion exitosa"});
  })
  .catch(function(err) {
    console.log(err);
    res.json({success: false, msg:"Operacion incompleta"});
  })
});
function getInventarioInicial(opAnterior){
  var i = 0;
  if(opAnterior.length != 0){
    i = opAnterior[0].unidadesAlmacenadas;
  }
  return i;
}

function getCashInventarioInicial(opAnterior){
  var i = 0;
  if(opAnterior.length != 0){
    i = opAnterior[0].inventarioFinal;
  }
  return i;
}

function getProductosV(rows){
  var r = [];
  for(let producto in rows){

  }
  return r;
}

function getTM(maquinas){
  var transM = 0;
  for (let key$ in maquinas) {
    transM += (maquinas[key$].costo * (maquinas[key$].depAcum/100))*maquinas[key$].Cantidad;
  }
  return transM;
}

function getProduccion(maquinas){
  var P = 0;
  for(let key$ in maquinas){
    P += (maquinas[key$].cantidadProd * maquinas[key$].Cantidad);
  }
  return P;
}

function operacionesBien(rows,array){
  if(rows.length == array.length){
    return array;
  }
  else{
    for(let key1 in array){
      for(let key2 in rows){
        if(array[key1].Producto_idProducto == rows[key2].Producto_idProducto){
          if(array[key1].Zona_idZonas != rows[key2].Zona_idZonas){
            array[key1].unidadesVendidas += rows[key2].unidadesVendidas;
          }
        }
      }
    }
    return array;
  }
}

function getVentasAnteriores(ventasTotales){
  var uniAnterioresVendidas = 0;
  for(let key in ventasTotales){
    uniAnterioresVendidas += ventasTotales[key].unidadesVendidas;
  }
  return uniAnterioresVendidas;
}

function jsonProductos(r1,r2,r3){
  var p = [];

  for(let key1 in r1){
    p.push(r1[key1].Producto_idProducto);
  }

  for(let key2 in r2){
    p.push(r2[key2].Producto_idProducto);
  }

  for(let key3 in r3){
    p.push(r3[key3].Maquinaria_idProducto);
  }

  var hash = {};

  var array = p.filter(function(current) {
    var exists = !hash[current] || false;
    hash[current] = true;
    return exists;
  });

  return array.sort(function(a,b){return a - b;});
}


module.exports = router;
