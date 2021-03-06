const express = require('express');
const router = express.Router();
const balance = require('../models/balance');
const operacion = require('../models/operacion');
const auxiliar = require('../models/auxiliar');
const prestamo = require('../models/prestamo');
const variable = require("../models/variable");
const Promise = require("bluebird");

router.post('/register', (req, res, next) => {
  var json = req.body;
  Promise.resolve().then( function () {
    return balance.addBalance(json);
  }).then(function() {
    return balance.getUltimo(json.Proyectos_idProyecto);
  }).then( function (rows) {
    res.json({success: true, msg:"Operacion exitosa",datos:rows});
  }).catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/', (req,res,next) => {
  Promise.resolve().then( function () {
    var idProyecto = req.body.idProyecto;
    var numeroPeriodo = req.body.numeroPeriodo;
    return balance.getBalanceById(idProyecto, numeroPeriodo);
  }).then(function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/getactivos', (req,res,next) => {
  Promise.resolve().then( function () {
    var idProyecto = req.body.idProyecto;
    var numeroPeriodo = req.body.numeroPeriodo;
    return balance.getActivos(idProyecto, numeroPeriodo);
  }).then(function(rows){
    return jsonActivos(rows);
  }).then(function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/getpasivos', (req,res,next) => {
  Promise.resolve().then( function () {
    var idProyecto = req.body.idProyecto;
    var numeroPeriodo = req.body.numeroPeriodo;
    return balance.getPasivos(idProyecto, numeroPeriodo);
  }).then(function(rows){
    return jsonPasivos(rows);
  }).then(function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/final', (req, res, next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodoAnterior = req.body.numeroPeriodo;
  var numeroPeriodoActual = req.body.numeroPeriodo + 1;
  var depMAnterior = 0;
  var costoTransformacionMaqGlobal = 0;
  var desarrolloMercadoGlobal = 0;
  var desarrolloProductoGlobal = 0;
  var IVAGastos = 0;
  var compraM = 0;

  console.log(idProyecto,numeroPeriodoActual,numeroPeriodoAnterior);

  Promise.join(balance.getBalanceById(idProyecto,numeroPeriodoAnterior),
              prestamo.getFinanciamientos(idProyecto,numeroPeriodoActual),
              prestamo.getPagos(idProyecto,numeroPeriodoActual),
              auxiliar.getAuxiliares(numeroPeriodoActual,idProyecto),
              auxiliar.getAuxiliaresVenta(numeroPeriodoActual,idProyecto),
              variable.getPTU(),variable.getISR(),balance.getMontoRescate(idProyecto,numeroPeriodoActual),
              function(balanceBase,prestamos,pagos,auxCompleto,auxesVentas,ptu,isr,cs){

    //ISR Y PTU
    var ISR_valor = isr[0].valor;
    var PTU_valor = ptu[0].valor;
    //depreciacion del balance anterior
    depMAnterior = balanceBase[0].maqEquipo * .10;

    //Costo de transformacion de maquinaria global
    costoTransformacionMaqGlobal = depMAnterior + getTransMaq(auxCompleto);

    //Desarrollos
    desarrolloMercadoGlobal += getDesarrollosM(auxCompleto);
    desarrolloProductoGlobal += getDesarrollosP(auxCompleto);

    //Para Caja y Bancos
    IVAGastos += getGastos(auxCompleto);
    compraM += getCompraM(auxCompleto);

    //prestamos
    var cantidadPrestada = 0;
    var cantidadPrestadaAmenosAnio = 0;
    for(let key in prestamos){
      if(prestamos[key].plazo == 1){
        cantidadPrestadaAmenosAnio += prestamos[key].monto;
      }
      else{
      cantidadPrestada += prestamos[key].monto;
      }
    }

    //Intereses de Anticipo
    var interesesAnticipo = 0;
    for(let key in prestamos){
      interesesAnticipo += prestamos[key].anticipo;
    }

    //Pago de Prestamos
    var PPagar = 0;
    var PPagarAmenosAnio = 0;
    for(let key in pagos){
      if(pagos[key].tipo == 1){
        if(pagos[key].plazo == 1){
          PPagarAmenosAnio += pagos[key].pagoCapital + pagos[key].intereses;
        }
        else{
          PPagar += pagos[key].pagoCapital + pagos[key].intereses;
        }
      }
      else{
        if(pagos[key].plazo == 1){
          PPagarAmenosAnio += pagos[key].pagoCapital;
        }
        else{
          PPagar += pagos[key].pagoCapital;
        }
      }
    }

    //Intereses de Pago
    var interesesPago = 0;
    for(let key in pagos){
      if(pagos[key].tipo != 1){
      interesesPago += pagos[key].intereses;
      }
    }

    var IVAxEnterar = getIVAxEnterar(auxCompleto,auxesVentas);
    var proveedores = getProveedores(auxesVentas);
    var salidas = getSalidas(auxesVentas);
    var maq = balanceBase[0].maqEquipo + getMaquinariaBalance(auxCompleto);
    var cuentasPorCobrar = getCuentasPorCobrar(auxesVentas);
    var almacenArtTerm = getAlmacenTerm(auxesVentas);
    var utlidadAcumulada = balanceBase[0].utilidadEjercicio + balanceBase[0].utilidadAcum;
    var maqEquipo = balanceBase[0].depMaqEquipo + costoTransformacionMaqGlobal;
    //auxV,costoTransformacionMaq,desarrolloMercado,desarrolloProducto
    var utilidadEjercicio = getUtilidad(auxesVentas,costoTransformacionMaqGlobal,desarrolloMercadoGlobal,desarrolloProductoGlobal)-interesesAnticipo-interesesPago;

    //ISR y PTU
    var ISR = 0;
    var PTU = 0;
    var ISRCajaBancos = 0;
    var imptsPorPagar = 0;
    var utilidadVerdadera = 0;
    var xAmortizar = utilidadEjercicio;

    if(balanceBase[0].porAmortizar < 0){
      xAmortizar = balanceBase[0].porAmortizar + utilidadEjercicio;
    }

    if(utilidadEjercicio > 0){

      PTU = utilidadEjercicio * PTU_valor;

      if(xAmortizar > 0){
        ISR = xAmortizar * ISR_valor;
        imptsPorPagar = (ISR/12);
        ISRCajaBancos = imptsPorPagar * 11;
      }

      utilidadEjercicio = utilidadEjercicio - PTU - ISR;

    }

    var cobroPorVentasCajaBancos = getcobroPorVentas(auxesVentas);//cuentasPorCobrar * 11;
    var IVACajaBancos = IVAxEnterar * 11;
    var prestamosMasAnio = balanceBase[0].prestamosMasAnio + cantidadPrestada - PPagar;
    var prestamosMenosAnio = balanceBase[0].prestamosMenosAnio + cantidadPrestadaAmenosAnio - PPagarAmenosAnio;
    var comprasCajaBancos = getCompras(auxesVentas);//proveedores*11;
    var maqYdesarrollos = compraM + (-IVAGastos + desarrolloMercadoGlobal + desarrolloProductoGlobal);
    var depE = balanceBase[0].depEdif + (getDepEdif(auxesVentas) * .5);
    var depME = balanceBase[0].depMueblesEnseres + (getDepEdif(auxesVentas) * .5);
    var depT = balanceBase[0].depEqTrans + getDepTrans(auxesVentas);

    var cajaBancos = balanceBase[0].cajaBancos + (cantidadPrestada+cantidadPrestadaAmenosAnio-interesesAnticipo)- PPagar -PPagarAmenosAnio - interesesPago - ISRCajaBancos - balanceBase[0].PTUPorPagar - balanceBase[0].imptosPorPagar + balanceBase[0].cuentasPorCobrar - balanceBase[0].proveedores - balanceBase[0].IVAPorEnterar + cobroPorVentasCajaBancos - IVACajaBancos - comprasCajaBancos - maqYdesarrollos - salidas;
    var capitalSocial = balanceBase[0].capitalSocial;

    if(cs.length > 0){
      cajaBancos += cs[0].monto;
      capitalSocial += cs[0].monto;
    }


    var x = {
      imptosPorPagar:imptsPorPagar,
      PTUPorPagar:PTU,
      prestamosMasAnio:prestamosMasAnio,
      prestamosMenosAnio:prestamosMenosAnio,
      maqEquipo:maq,
      IVAPorEnterar:IVAxEnterar,
      proveedores:proveedores,
      cajaBancos:cajaBancos,
      cuentasPorCobrar:cuentasPorCobrar,
      depMaqEquipo:maqEquipo,
      almacenArtTerm:almacenArtTerm,
      utilidadAcum:utlidadAcumulada,
      utilidadEjercicio:utilidadEjercicio,
      depEdif:depE,
      depMueblesEnseres:depME,
      depEqTrans:depT,
      porAmortizar:xAmortizar,
      capitalSocial:capitalSocial
    }
    balance.updateBalance(numeroPeriodoActual, idProyecto, x);
  }).then( function () {
    res.json({success:true, msg:"Operacion exitosa"});
  })
  .catch(function(err) {
    console.log(err);
    res.json({success: false, msg:"Operacion incompleta"});
  })
});

router.post('/eliminarperiodos', (req,res,next) => {
  var idProyecto = req.body.idProyecto;
  var pm = req.body.periodoMenor;
  var pMas = req.body.periodoMayor;
  Promise.resolve().then(function() {
    return balance.deleteBalanceR(idProyecto,pm,pMas);
  }).then(function () {
    return balance.editTerminado(idProyecto);
  }).then(function() {
    res.json({success:true, msg:"Bien"});
  }).catch(function(err) {
    console.log(err);
    res.json({success:false, msg:"Mal"});
  });
});


router.get('/:id', (req,res,next) => {
  Promise.resolve().then( function () {
    return balance.getBalances(req.params.id);
  }).then( function (rows) {
    res.json({success: true, datos:rows, msg:"Operacion exitosa"});
  }).catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

//Rutas Rescate

router.post('/getRescate', (req,res,next) => {

  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;

  Promise.resolve()
  .then( function () {
    return balance.getMontoRescate(idProyecto,numeroPeriodo);
  })
  .then(function (data) {
    res.json({success:true, msg:"Operacion completa",datos:data});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/deleteRescate', (req,res,next) => {
  var idProyecto = req.body.idProyecto;
  var numeroPeriodo = req.body.numeroPeriodo;
  Promise.resolve()
  .then( function () {
    return balance.deleteRescate(idProyecto,numeroPeriodo);
  })
  .then(function () {
    res.json({success:true, msg:"Operacion completa"});
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

router.post('/addRescate', (req,res,next) => {

  var montoRescate = req.body.montoRescate;
  var idProyectoR = req.body.idProyecto;
  var numeroPeriodoR = req.body.numeroPeriodo;

  Promise.resolve()
  .then( function () {
    return balance.validaRescate(idProyectoR);
  })
  .then(function (balanceX) {
    if(balanceX.length == 0){
      var x = {
        numeroPeriodo:numeroPeriodoR,
        idProyecto:idProyectoR,
        monto:montoRescate
      }
      balance.addRescate(x);
      res.json({success:true, msg:"Operacion completa"});
    }
    else{
       res.json({success:false, msg:"Operacion incompleta"});;
    }
  })
  .catch(function (err) {
    console.log(err);
    res.json({success:false, msg:"Operacion incompleta"});
  });
});

function getDepEdif(auxV){
  var dep = 0;
  for (let key in auxV) {
    dep += (auxV[key].costoAdministrativo - auxV[key].costoAdminDep);
  }
  return dep;
}

function getDepTrans(auxV){
  var dep = 0;
  for (let key in auxV) {
    dep += (auxV[key].costoDistribucion - auxV[key].costoDistDep);
  }
  return dep;
}

function getSalidas(auxV){
  var salidas = 0;
  for (let key in auxV) {
    salidas += auxV[key].costoDistDep;
    salidas += auxV[key].costoAdminDep;
    salidas -= auxV[key].IVATrans;
    salidas -= auxV[key].IVADist;
    salidas -= auxV[key].IVAAdmon;
    if(auxV[key].unidadesVendidas != 0){
      salidas += auxV[key].costoTransformacionVentas;
    }
  }
  return salidas;
}

function getUtilidad(auxV,costoTransformacionMaq,desarrolloMercado,desarrolloProducto){
    var utilidad = 0;
    var transMaqVentas = 0;
    for (let key in auxV) {
      utilidad -= auxV[key].costoDistribucion;
      utilidad -= auxV[key].costoAdministrativo;
      utilidad -= auxV[key].costoVentas;
      utilidad += (auxV[key].Ventas-auxV[key].IVAxVentas);
      if(auxV[key].costoDeProduccion != 0){
          transMaqVentas += auxV[key].costoTransformacionMaq;
      }
    }
    if(transMaqVentas != costoTransformacionMaq){
      utilidad -= (costoTransformacionMaq - transMaqVentas);
    }
    return (utilidad - desarrolloProducto - desarrolloMercado);
}

function getIVAxEnterar(aux,auxV){
  var ivaV = 0;
  var ivaCom = 0;
  var ivaTrans = 0;
  var ivaDist = 0;
  var ivaMaq = 0;
  var ivaAdmin = 0;
  var ivaGV = 0;
  for(let key in aux){
    ivaMaq += aux[key].IVACompraMaq;
    ivaGV += aux[key].IVAGastosVenta;
  }
  for (let key in auxV) {
    ivaV += auxV[key].IVAxVentas;
    ivaCom += auxV[key].IVACompras;
    ivaTrans += auxV[key].IVATrans;
    ivaDist += auxV[key].IVADist;
    ivaAdmin += auxV[key].IVAAdmon;
  }
  var ivaT = ivaV +ivaCom +ivaTrans +ivaDist +ivaMaq +ivaAdmin +ivaGV;

  return ivaT/12;
}

function getCompras(auxV){
  var Comp = 0;
  for (let key in auxV) {
      Comp += auxV[key].comprasPagadas;
  }
  return Comp;
}

function getProveedores(auxV){
  var Comp = 0;
  for (let key in auxV) {
      Comp += auxV[key].ComprasPorPagar;
  }
  return Comp;
}

function getcobroPorVentas(auxV){
  var Comp = 0;
  for (let key in auxV) {
      Comp += auxV[key].VentasCobradas;
  }
  return Comp;
}

function getCuentasPorCobrar(auxV){
  var Comp = 0;
  for (let key in auxV) {
      Comp += auxV[key].VentasPorCobrar;
  }
  return Comp;
}

function getMaquinariaBalance(auxCompleto) {
  var mb = 0;
  for(let key in auxCompleto){
    mb += (auxCompleto[key].compraMaquinaria+auxCompleto[key].IVACompraMaq);
  }
  return mb;
}

function getAlmacenTerm(auxV){
  var Comp = 0;
  for (let key in auxV) {
      Comp += auxV[key].inventarioFinal;
  }
  return Comp;
}

function getTransMaq(auxCompleto){
  var transM = 0;
  for(let key in auxCompleto){
    transM += auxCompleto[key].costoTransformacionMaq;
  }
  return transM;
}

function getDesarrollosM(auxCompleto){
  var i = 0;
  for(let key in auxCompleto){
    i+=auxCompleto[key].desarrolloMercado;
  }
  return i;
}
function getDesarrollosP(auxCompleto){
  var i = 0;
  for(let key in auxCompleto){
    i+=auxCompleto[key].desarrolloProducto;
  }
  return i;
}

function getGastos(auxCompleto){
  var i = 0;
  for(let key in auxCompleto){
    i += auxCompleto[key].IVAGastosVenta;
  }
  return i;
}

function getCompraM(auxCompleto){
  var i = 0;
  for(let key in auxCompleto){
    i += auxCompleto[key].compraMaquinaria;
  }
  return i;
}

function jsonActivos(rows) {
  var activ = [];
  activ.push({name:"Caja y Bancos",value:rows[0].cajaBancos});
  activ.push({name:"Cuentas Por Cobrar",value:rows[0].cuentasPorCobrar});
  activ.push({name:"IVA Acreditable",value:rows[0].IVAAcreditable});
  activ.push({name:"Almacen de articulo terminado",value:rows[0].almacenArtTerm});
  return activ;
}

function jsonPasivos(rows) {
  var activ = [];
  activ.push({name:"IVA por enterar",value:rows[0].IVAPorEnterar});
  activ.push({name:"Impuestos por pagar",value:rows[0].imptosPorPagar});
  activ.push({name:"Proveedores",value:rows[0].proveedores});
  activ.push({name:"Prestamos a menos de un año",value:rows[0].prestamosMenosAnio});
  activ.push({name:"Prestamos a mas de un año",value:rows[0].prestamosMasAnio});
  return activ;
}

module.exports = router;
