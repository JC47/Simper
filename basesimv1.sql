-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-12-2017 a las 20:53:56
-- Versión del servidor: 10.1.28-MariaDB
-- Versión de PHP: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basesimv1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `idAdministrador` int(11) NOT NULL,
  `nombreAdmin` varchar(20) DEFAULT NULL,
  `apPat` varchar(20) DEFAULT NULL,
  `apMat` varchar(20) DEFAULT NULL,
  `contra` varchar(20) NOT NULL,
  `user` varchar(20) NOT NULL,
  `imgAdmin` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`idAdministrador`, `nombreAdmin`, `apPat`, `apMat`, `contra`, `user`, `imgAdmin`) VALUES
(1, 'Carlos', 'Melo', 'Garcia', '123', 'CM', NULL),
(11, 'Raul', 'Uribe', 'Escamilla', 'Raul705', 'Raul705', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `almacen`
--

CREATE TABLE `almacen` (
  `Balance_numeroPeriodo` int(11) NOT NULL,
  `Producto_idProducto` int(11) NOT NULL,
  `Proyecto_idProyecto` int(11) NOT NULL,
  `unidadesAlmacenadas` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amortizacion`
--

CREATE TABLE `amortizacion` (
  `numeroPeriodo` int(11) NOT NULL,
  `Proyecto_idProyecto` int(11) NOT NULL,
  `idCredito` int(11) NOT NULL,
  `pagoCapital` double NOT NULL,
  `intereses` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `amortizacion`
--

INSERT INTO `amortizacion` (`numeroPeriodo`, `Proyecto_idProyecto`, `idCredito`, `pagoCapital`, `intereses`) VALUES
(2, 421, 4, 12750000, 2250000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auxiliarcuenta`
--

CREATE TABLE `auxiliarcuenta` (
  `Balance_numeroPeriodo` int(11) NOT NULL,
  `Proyectos_idProyecto` int(11) NOT NULL,
  `Producto_idProducto` int(11) NOT NULL,
  `IVACompraMaq` double DEFAULT '0',
  `IVAGastosVenta` double DEFAULT '0',
  `costoTransformacionMaq` double DEFAULT '0',
  `compraMaquinaria` double DEFAULT '0',
  `desarrolloMercado` double NOT NULL DEFAULT '0',
  `desarrolloProducto` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `auxiliarcuenta`
--

INSERT INTO `auxiliarcuenta` (`Balance_numeroPeriodo`, `Proyectos_idProyecto`, `Producto_idProducto`, `IVACompraMaq`, `IVAGastosVenta`, `costoTransformacionMaq`, `compraMaquinaria`, `desarrolloMercado`, `desarrolloProducto`) VALUES
(1, 446, 5, 0, -300000, 0, 0, 2000000, 0),
(1, 446, 6, 0, -450000, 0, 0, 0, 3000000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auxiliarcuentaventa`
--

CREATE TABLE `auxiliarcuentaventa` (
  `Producto_idProducto` int(11) NOT NULL,
  `Balance_numeroPeriodo` int(11) NOT NULL,
  `Proyectos_idProyecto` int(11) NOT NULL,
  `unidadesVendidas` int(11) NOT NULL DEFAULT '0',
  `unidadesAlmacenadas` int(11) NOT NULL DEFAULT '0',
  `unidadesProducidas` int(11) NOT NULL DEFAULT '0',
  `IVAxVentas` double DEFAULT '0',
  `IVACompras` double DEFAULT '0',
  `IVATrans` double DEFAULT '0',
  `IVADist` double DEFAULT '0',
  `IVAAdmon` double DEFAULT '0',
  `Ventas` double DEFAULT '0',
  `VentasPorCobrar` double DEFAULT '0',
  `VentasCobradas` double DEFAULT '0',
  `Compras` double DEFAULT '0',
  `ComprasPorPagar` double DEFAULT '0',
  `comprasPagadas` double DEFAULT '0',
  `costoTransformacionVentas` double DEFAULT '0',
  `costoDistribucion` double DEFAULT '0',
  `costoAdministrativo` double DEFAULT '0',
  `costoDistDep` double DEFAULT '0',
  `costoAdminDep` double DEFAULT '0',
  `materiaCosumida` double DEFAULT '0',
  `costoDeProduccion` double DEFAULT '0',
  `inventarioInicial` double DEFAULT '0',
  `inventarioFinal` double DEFAULT '0',
  `costoVentas` double DEFAULT '0',
  `costoTransformacionMaq` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `auxiliarcuentaventa`
--

INSERT INTO `auxiliarcuentaventa` (`Producto_idProducto`, `Balance_numeroPeriodo`, `Proyectos_idProyecto`, `unidadesVendidas`, `unidadesAlmacenadas`, `unidadesProducidas`, `IVAxVentas`, `IVACompras`, `IVATrans`, `IVADist`, `IVAAdmon`, `Ventas`, `VentasPorCobrar`, `VentasCobradas`, `Compras`, `ComprasPorPagar`, `comprasPagadas`, `costoTransformacionVentas`, `costoDistribucion`, `costoAdministrativo`, `costoDistDep`, `costoAdminDep`, `materiaCosumida`, `costoDeProduccion`, `inventarioInicial`, `inventarioFinal`, `costoVentas`, `costoTransformacionMaq`) VALUES
(4, 1, 446, 5000, 0, 5000, 825000, -362250, -240000, -178500, -40500, 6325000, 527083.3333333334, 5797916.666666667, 2777250, 231437.5, 2545812.5, 1600000, 1200000, 300000, 1190000, 270000, 2415000, 4315000, 0, 0, 4315000, 300000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `balance`
--

CREATE TABLE `balance` (
  `numeroPeriodo` int(11) NOT NULL,
  `IVAPorEnterar` double DEFAULT NULL,
  `imptosPorPagar` double DEFAULT NULL,
  `proveedores` double DEFAULT NULL,
  `PTUPorPagar` double DEFAULT NULL,
  `prestamosMenosAnio` double DEFAULT NULL,
  `prestamosMasAnio` double DEFAULT NULL,
  `cajaBancos` double DEFAULT NULL,
  `cuentasPorCobrar` double DEFAULT NULL,
  `IVAAcreditable` double DEFAULT NULL,
  `almacenArtTerm` double DEFAULT NULL,
  `almacenMateriales` double DEFAULT NULL,
  `terreno` double DEFAULT NULL,
  `edifInsta` double DEFAULT NULL,
  `maqEquipo` double DEFAULT NULL,
  `mueblesEnseres` double DEFAULT NULL,
  `pagosAnticipado` double DEFAULT NULL,
  `gastosAmortizacion` double DEFAULT NULL,
  `capitalSocial` double DEFAULT NULL,
  `reservaLegal` double DEFAULT NULL,
  `utilidadAcum` double DEFAULT NULL,
  `utilidadEjercicio` double DEFAULT '0',
  `depEdif` double DEFAULT NULL,
  `depMueblesEnseres` double DEFAULT NULL,
  `eqTrans` double DEFAULT NULL,
  `Proyectos_idProyecto` int(11) NOT NULL,
  `depTerreno` double DEFAULT NULL,
  `depMaqEquipo` double DEFAULT NULL,
  `depEqTrans` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `balance`
--

INSERT INTO `balance` (`numeroPeriodo`, `IVAPorEnterar`, `imptosPorPagar`, `proveedores`, `PTUPorPagar`, `prestamosMenosAnio`, `prestamosMasAnio`, `cajaBancos`, `cuentasPorCobrar`, `IVAAcreditable`, `almacenArtTerm`, `almacenMateriales`, `terreno`, `edifInsta`, `maqEquipo`, `mueblesEnseres`, `pagosAnticipado`, `gastosAmortizacion`, `capitalSocial`, `reservaLegal`, `utilidadAcum`, `utilidadEjercicio`, `depEdif`, `depMueblesEnseres`, `eqTrans`, `Proyectos_idProyecto`, `depTerreno`, `depMaqEquipo`, `depEqTrans`) VALUES
(0, 0, 0, 0, 0, 0, 0, 2500000, 0, 0, 0, 0, 1000000, 2000000, 3000000, 500000, 0, 0, 10000000, 0, 0, 0, 0, 0, 1000000, 411, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 2500000, 0, 0, 0, 0, 1000000, 2000000, 3000000, 500000, 0, 0, 10000000, 0, 0, 0, 0, 0, 1000000, 421, 0, 0, 0),
(0, 0, 0, 0, 0, 0, 0, 2500000, 0, 0, 0, 0, 1000000, 2000000, 3000000, 500000, 0, 0, 10000000, 0, 0, 0, 0, 0, 1000000, 446, 0, 0, 0),
(1, 0, 0, 0, 0, 0, 0, 2500000, 0, 0, 0, 0, 1000000, 2000000, 3000000, 500000, 0, 0, 10000000, 0, 0, -300000, 0, 0, 1000000, 411, 0, 300000, 0),
(1, -142112.49999999997, 0, 1064612.5, 0, 0, 12750000, 2906000, 1897500, 0, 4132391.304347826, 0, 1000000, 2000000, 9000000, 500000, 0, 0, 10000000, 0, 0, -2176608.695652172, 15000, 15000, 1000000, 421, 0, 900000, 10000),
(1, -62187.5, 0, 231437.5, 0, 0, 0, -2832833.333333332, 527083.3333333334, 0, 0, 0, 1000000, 2000000, 3000000, 500000, 0, 0, 10000000, 0, 0, -5315000, 15000, 15000, 1000000, 446, 0, 300000, 10000),
(2, 0, 0, 0, 0, 0, 0, -8869000, 0, 0, 0, 0, 1000000, 2000000, 9000000, 500000, 0, 0, 10000000, 0, -2176608.695652172, -5032391.304347826, 15000, 15000, 1000000, 421, 0, 1800000, 10000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `credito`
--

CREATE TABLE `credito` (
  `idCredito` int(11) NOT NULL,
  `nombreCredito` varchar(45) DEFAULT NULL,
  `montoMin` int(11) DEFAULT NULL,
  `montoMax` int(11) NOT NULL,
  `pago` varchar(100) DEFAULT NULL,
  `pagoAnticipado` double NOT NULL DEFAULT '1',
  `plazo` int(11) NOT NULL DEFAULT '1',
  `tipo` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `credito`
--

INSERT INTO `credito` (`idCredito`, `nombreCredito`, `montoMin`, `montoMax`, `pago`, `pagoAnticipado`, `plazo`, `tipo`) VALUES
(1, '3MS', 5000000, 20000000, 'Tres pagos anuales equivalentes al 42%', 1, 3, 2),
(2, 'MC', 2000000, 20000000, 'Intereses al inicio por el 20%, 2 pagos anuales del 50%', 20, 2, 1),
(3, 'MCLP', 2000000, 50000000, 'Pago anticipado del 24%, primer pago del 50%, segundo pago del 25%, tercer pago del 25%', 24, 3, 1),
(4, 'MSCP', 2000000, 15000000, 'Pago anticipado del 15%, primer pago del 100%', 15, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creditoactivo`
--

CREATE TABLE `creditoactivo` (
  `idCredito` int(11) NOT NULL,
  `idProyecto` int(11) NOT NULL,
  `plazo` int(11) NOT NULL,
  `activo` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creditobalance`
--

CREATE TABLE `creditobalance` (
  `credito_idCredito` int(11) NOT NULL,
  `Proyectos_idProyecto` int(11) NOT NULL,
  `numeroPeriodo` int(11) NOT NULL,
  `monto` double NOT NULL,
  `anticipo` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `creditobalance`
--

INSERT INTO `creditobalance` (`credito_idCredito`, `Proyectos_idProyecto`, `numeroPeriodo`, `monto`, `anticipo`) VALUES
(4, 421, 1, 15000000, 2250000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `demanda`
--

CREATE TABLE `demanda` (
  `numPeriodo` int(11) NOT NULL DEFAULT '0',
  `cantidad` int(11) DEFAULT '0',
  `Zona_idZonas` int(11) NOT NULL,
  `Producto_idProducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `demanda`
--

INSERT INTO `demanda` (`numPeriodo`, `cantidad`, `Zona_idZonas`, `Producto_idProducto`) VALUES
(0, 5000, 101, 11),
(1, 18000, 84, 4),
(1, 0, 84, 5),
(1, 17000, 84, 6),
(1, 6000, 87, 4),
(1, 0, 87, 5),
(1, 0, 87, 6),
(1, 16000, 88, 4),
(1, 0, 88, 5),
(1, 0, 88, 6),
(1, 6000, 101, 11),
(2, 16000, 84, 4),
(2, 8000, 84, 5),
(2, 9000, 84, 6),
(2, 8000, 87, 4),
(2, 4000, 87, 5),
(2, 0, 87, 6),
(2, 18000, 88, 4),
(2, 2000, 88, 5),
(2, 0, 88, 6),
(2, 8000, 101, 11),
(3, 13000, 84, 4),
(3, 2000, 84, 5),
(3, 0, 84, 6),
(3, 10000, 87, 4),
(3, 0, 87, 5),
(3, 0, 87, 6),
(3, 26000, 88, 4),
(3, 0, 88, 5),
(3, 0, 88, 6),
(3, 9000, 101, 11),
(4, 10000, 84, 4),
(4, 9000, 84, 5),
(4, 0, 84, 6),
(4, 14000, 87, 4),
(4, 8000, 87, 5),
(4, 0, 87, 6),
(4, 22000, 88, 4),
(4, 5000, 88, 5),
(4, 0, 88, 6),
(4, 10000, 101, 11),
(5, 6000, 84, 4),
(5, 15000, 84, 5),
(5, 0, 84, 6),
(5, 11000, 87, 4),
(5, 10000, 87, 5),
(5, 0, 87, 6),
(5, 6000, 88, 4),
(5, 8000, 88, 5),
(5, 0, 88, 6),
(5, 12000, 101, 11),
(6, 2000, 84, 4),
(6, 12000, 84, 5),
(6, 15000, 84, 6),
(6, 8000, 87, 4),
(6, 12000, 87, 5),
(6, 2000, 87, 6),
(6, 0, 88, 4),
(6, 6000, 88, 5),
(6, 4000, 88, 6),
(6, 13000, 101, 11),
(7, 0, 84, 4),
(7, 10000, 84, 5),
(7, 16000, 84, 6),
(7, 6000, 87, 4),
(7, 14000, 87, 5),
(7, 5000, 87, 6),
(7, 0, 88, 4),
(7, 10000, 88, 5),
(7, 14000, 101, 11),
(8, 0, 84, 4),
(8, 3000, 84, 5),
(8, 20000, 84, 6),
(8, 3000, 87, 4),
(8, 20000, 87, 5),
(8, 5000, 87, 6),
(8, 0, 88, 4),
(8, 15000, 88, 5),
(8, 15000, 101, 11),
(9, 0, 84, 4),
(9, 48000, 84, 6),
(9, 0, 87, 4),
(9, 20000, 87, 5),
(9, 8000, 87, 6),
(9, 0, 88, 4),
(9, 10000, 88, 5),
(9, 20000, 101, 11),
(10, 0, 84, 4),
(10, 6000, 84, 5),
(10, 23000, 84, 6),
(10, 0, 87, 4),
(10, 2000, 87, 5),
(10, 16000, 87, 6),
(10, 0, 88, 4),
(10, 8000, 88, 5),
(10, 16000, 88, 6),
(10, 20000, 101, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encabezado`
--

CREATE TABLE `encabezado` (
  `idEncabezado` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `alias` varchar(20) DEFAULT NULL,
  `Proyecto_idProyecto` int(11) NOT NULL,
  `Proyecto_Usuario_idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maquinaria`
--

CREATE TABLE `maquinaria` (
  `idMaquinaria` int(11) NOT NULL,
  `nombreMaq` varchar(20) DEFAULT NULL,
  `costo` double DEFAULT NULL,
  `cantidadProd` double DEFAULT NULL,
  `depAcum` double DEFAULT NULL,
  `imgMaq` varchar(50) DEFAULT NULL,
  `Producto_idProducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `maquinaria`
--

INSERT INTO `maquinaria` (`idMaquinaria`, `nombreMaq`, `costo`, `cantidadProd`, `depAcum`, `imgMaq`, `Producto_idProducto`) VALUES
(1, 'MaqX', 2000000, 5000, 10, NULL, 4),
(2, 'MaqY2', 3000000, 7000, 10, NULL, 5),
(3, 'MaqZ1', 3000000, 3000, 10, NULL, 6),
(6, 'MaqY1', 2500000, 5000, 10, NULL, 5),
(7, 'MaqZ2', 4000000, 5000, 10, NULL, 6),
(8, 'Maq1', 1500000, 4000, 10, NULL, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maquinariaproyecto`
--

CREATE TABLE `maquinariaproyecto` (
  `Balance_numeroPeriodo` int(11) NOT NULL,
  `Maquinaria_idMaquinaria` int(11) NOT NULL,
  `Maquinaria_idProducto` int(11) NOT NULL,
  `Proyectos_idProyecto` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `maquinariaproyecto`
--

INSERT INTO `maquinariaproyecto` (`Balance_numeroPeriodo`, `Maquinaria_idMaquinaria`, `Maquinaria_idProducto`, `Proyectos_idProyecto`, `Cantidad`) VALUES
(0, 8, 4, 446, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operacion`
--

CREATE TABLE `operacion` (
  `Producto_idProducto` int(11) NOT NULL,
  `Zona_idZonas` int(11) NOT NULL,
  `Proyecto_idProyecto` int(11) NOT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  `numeroPeriodo` int(11) NOT NULL,
  `unidadesVendidas` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `operacion`
--

INSERT INTO `operacion` (`Producto_idProducto`, `Zona_idZonas`, `Proyecto_idProyecto`, `Usuario_idUsuario`, `numeroPeriodo`, `unidadesVendidas`) VALUES
(4, 84, 446, 1, 1, 5000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagocredito`
--

CREATE TABLE `pagocredito` (
  `idPagoCredito` int(11) NOT NULL,
  `idCredito` int(11) NOT NULL,
  `pagosCredito` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pagocredito`
--

INSERT INTO `pagocredito` (`idPagoCredito`, `idCredito`, `pagosCredito`) VALUES
(1, 1, 42),
(11, 1, 42),
(21, 1, 42),
(31, 2, 50),
(41, 2, 50),
(51, 3, 50),
(61, 3, 25),
(71, 3, 25),
(81, 4, 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idProducto` int(11) NOT NULL,
  `nombreProd` varchar(20) DEFAULT NULL,
  `costoDes` double DEFAULT NULL,
  `tiempoDes` int(11) DEFAULT NULL,
  `precioVenta` double DEFAULT NULL,
  `costosFijosFabri` double DEFAULT NULL,
  `costoVarUniFabri` double DEFAULT NULL,
  `gastosFijosDist` double DEFAULT '0',
  `depDistribucion` double DEFAULT '0',
  `costoVarUniDist` double DEFAULT NULL,
  `gastosFijosAdmon` double DEFAULT NULL,
  `depAdmon` double DEFAULT '0',
  `costosMPPUniProd` double DEFAULT NULL,
  `uniMP` int(11) DEFAULT NULL,
  `costoUni` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idProducto`, `nombreProd`, `costoDes`, `tiempoDes`, `precioVenta`, `costosFijosFabri`, `costoVarUniFabri`, `gastosFijosDist`, `depDistribucion`, `costoVarUniDist`, `gastosFijosAdmon`, `depAdmon`, `costosMPPUniProd`, `uniMP`, `costoUni`) VALUES
(4, 'ProductoX', 2000000, 2, 1100, 100000, 300, 200000, 10000, 200, 300000, 30000, 483, 7, 69),
(5, 'ProductoY', 2000000, 2, 2000, 100000, 400, 200000, 10000, 210, 300000, 30000, 690, 10, 69),
(6, 'ProductoZ', 3000000, 2, 2500, 100000, 500, 200000, 10000, 220, 300000, 30000, 828, 12, 69),
(11, 'ProductoW', 3000000, 2, 2500, 100000, 500, 200000, 10000, 220, 300000, 30000, 828, 12, 69);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productoadministrador`
--

CREATE TABLE `productoadministrador` (
  `Productos_idProducto` int(11) NOT NULL,
  `Administrador_idAdministrador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productozona`
--

CREATE TABLE `productozona` (
  `Zona_idZona` int(11) NOT NULL,
  `Producto_idProducto` int(11) NOT NULL,
  `costoDes` double DEFAULT NULL,
  `tiempoDes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productozona`
--

INSERT INTO `productozona` (`Zona_idZona`, `Producto_idProducto`, `costoDes`, `tiempoDes`) VALUES
(84, 4, 200000, 2),
(84, 5, 2000000, 2),
(84, 6, 3000000, 2),
(87, 4, 500000, 1),
(87, 5, 2000000, 2),
(87, 6, 3000000, 2),
(88, 4, 500000, 1),
(88, 5, 2000000, 2),
(88, 6, 3000000, 2),
(91, 6, 3500000, 2),
(91, 11, 3500000, 2),
(101, 11, 3500000, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productozonaproyecto`
--

CREATE TABLE `productozonaproyecto` (
  `Producto_idProducto` int(11) NOT NULL,
  `Zona_idZonas` int(11) NOT NULL,
  `Proyecto_idProyecto` int(11) NOT NULL,
  `Proyecto_Usuario_idUsuario` int(11) NOT NULL,
  `desarrollado` int(11) NOT NULL DEFAULT '0',
  `periodoInicio` int(11) DEFAULT NULL,
  `ultimoPeriodoDes` int(11) DEFAULT NULL,
  `periodosDes` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productozonaproyecto`
--

INSERT INTO `productozonaproyecto` (`Producto_idProducto`, `Zona_idZonas`, `Proyecto_idProyecto`, `Proyecto_Usuario_idUsuario`, `desarrollado`, `periodoInicio`, `ultimoPeriodoDes`, `periodosDes`) VALUES
(4, 84, 421, 31, 1, 0, 0, 0),
(4, 84, 446, 1, 1, 0, 0, 0),
(4, 87, 421, 31, 1, 1, 1, 1),
(4, 87, 446, 1, 1, 0, 0, 0),
(4, 88, 421, 31, 1, 1, 1, 1),
(5, 84, 446, 1, 1, 0, 0, 0),
(5, 87, 446, 1, 1, 0, 0, 0),
(5, 88, 446, 1, 0, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `idProyecto` int(11) NOT NULL,
  `nombreProyecto` varchar(45) DEFAULT NULL,
  `fechaCreacion` varchar(20) DEFAULT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  `numProyecto` int(2) DEFAULT NULL,
  `cantMaxRes` double DEFAULT NULL,
  `cantMinRes` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`idProyecto`, `nombreProyecto`, `fechaCreacion`, `Usuario_idUsuario`, `numProyecto`, `cantMaxRes`, `cantMinRes`) VALUES
(49, 'Manzanas', 'Aug 21, 2017', 5, NULL, NULL, NULL),
(50, 'PR1', 'Aug 22, 2017', 5, NULL, NULL, NULL),
(411, '06nov2017hora19:51', 'Nov 6, 2017', 21, NULL, NULL, NULL),
(421, '06nov2017hora11:52', 'Nov 6, 2017', 31, NULL, NULL, NULL),
(446, 'Perro', 'Dec 6, 2017', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectoprestamos`
--

CREATE TABLE `proyectoprestamos` (
  `Proyectos_idProyecto` int(11) NOT NULL,
  `Proyectos_Usuario_idUsuario` int(11) NOT NULL,
  `Prestamos_idPrestamos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectoproducto`
--

CREATE TABLE `proyectoproducto` (
  `Proyectos_idProyecto` int(11) NOT NULL,
  `Productos_idProducto` int(11) NOT NULL,
  `desarrollado` int(11) DEFAULT '0',
  `periodoInicio` int(11) DEFAULT NULL,
  `ultimoPeriodoDes` int(11) DEFAULT NULL,
  `periodosDes` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proyectoproducto`
--

INSERT INTO `proyectoproducto` (`Proyectos_idProyecto`, `Productos_idProducto`, `desarrollado`, `periodoInicio`, `ultimoPeriodoDes`, `periodosDes`) VALUES
(411, 4, 1, 0, 0, 0),
(421, 4, 1, 0, 0, 0),
(421, 5, 0, 1, 1, 1),
(446, 4, 1, 0, 0, 0),
(446, 5, 1, 0, 0, 0),
(446, 6, 0, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(20) DEFAULT NULL,
  `apPat` varchar(20) DEFAULT NULL,
  `apMat` varchar(20) DEFAULT NULL,
  `Administrador_idAdministrador` int(11) NOT NULL,
  `contra` varchar(20) DEFAULT NULL,
  `user` varchar(20) DEFAULT NULL,
  `imgUsuario` varchar(50) DEFAULT NULL,
  `cajaBancos` double DEFAULT NULL,
  `cuentasPorCobrar` double DEFAULT NULL,
  `IVAAcreditable` double DEFAULT NULL,
  `almacenArtTerm` double DEFAULT NULL,
  `almacenMateriales` double DEFAULT NULL,
  `terreno` double DEFAULT NULL,
  `edifInsta` double DEFAULT NULL,
  `maqEquipo` double DEFAULT NULL,
  `mueblesEnseres` double DEFAULT NULL,
  `eqTrans` double DEFAULT NULL,
  `pagosAnticipado` double DEFAULT NULL,
  `gastosAmortizacion` double DEFAULT NULL,
  `IVAPorEnterar` double DEFAULT NULL,
  `imptosPorPagar` double DEFAULT NULL,
  `proveedores` double DEFAULT NULL,
  `PTUPorPagar` double DEFAULT NULL,
  `capitalSocial` double DEFAULT NULL,
  `reservaLegal` double DEFAULT NULL,
  `utilidadEjercicio` double DEFAULT '0',
  `utilidadAcum` double DEFAULT NULL,
  `prestamosMenosAnio` double DEFAULT NULL,
  `prestamosMasAnio` double DEFAULT NULL,
  `periodos` int(11) NOT NULL DEFAULT '10',
  `proyectos` int(11) NOT NULL DEFAULT '10',
  `regresion` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nombreUsuario`, `apPat`, `apMat`, `Administrador_idAdministrador`, `contra`, `user`, `imgUsuario`, `cajaBancos`, `cuentasPorCobrar`, `IVAAcreditable`, `almacenArtTerm`, `almacenMateriales`, `terreno`, `edifInsta`, `maqEquipo`, `mueblesEnseres`, `eqTrans`, `pagosAnticipado`, `gastosAmortizacion`, `IVAPorEnterar`, `imptosPorPagar`, `proveedores`, `PTUPorPagar`, `capitalSocial`, `reservaLegal`, `utilidadEjercicio`, `utilidadAcum`, `prestamosMenosAnio`, `prestamosMasAnio`, `periodos`, `proyectos`, `regresion`) VALUES
(1, 'Juan', 'Calette', 'Jimenez', 1, '123', 'JC', NULL, 2500000, 0, 0, 0, 0, 1000000, 2000000, 3000000, 500000, 1000000, 0, 0, 0, 0, 0, 0, 10000000, 0, 0, 0, 0, 0, 10, 10, 0),
(2, 'Pedro', 'Fernandez', 'Zepeda', 1, '123', 'PFZ', NULL, 2500000, 0, 0, 0, 0, 1000000, 2000000, 3000000, 500000, 1000000, 0, 0, 0, 0, 0, 0, 10000000, 0, 0, 0, 0, 0, 10, 10, 0),
(31, 'raul', 'u', 'e', 11, '123', 'raul', NULL, 2500000, 0, 0, 0, 0, 1000000, 2000000, 3000000, 500000, 1000000, 0, 0, 0, 0, 0, 0, 10000000, 0, 0, 0, 0, 0, 10, 10, 0),
(32, 'David', 'Basilio', 'N', 1, '123', 'DB', NULL, 2500000, 0, 0, 0, 0, 1000000, 2000000, 3000000, 500000, 1000000, 0, 0, 0, 0, 0, 0, 10000000, 0, 0, 0, 0, 0, 8, 12, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariocredito`
--

CREATE TABLE `usuariocredito` (
  `idCredito` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idAdministrador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuariocredito`
--

INSERT INTO `usuariocredito` (`idCredito`, `idUsuario`, `idAdministrador`) VALUES
(1, 1, 1),
(1, 31, 11),
(2, 1, 1),
(2, 31, 11),
(3, 1, 1),
(3, 31, 11),
(4, 1, 1),
(4, 31, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariomaquinaria`
--

CREATE TABLE `usuariomaquinaria` (
  `idMaquinaria` int(11) NOT NULL,
  `Producto_idProducto` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `Administrador_idAdministrador` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuariomaquinaria`
--

INSERT INTO `usuariomaquinaria` (`idMaquinaria`, `Producto_idProducto`, `idUsuario`, `Administrador_idAdministrador`, `cantidad`) VALUES
(1, 4, 2, 1, 2),
(1, 4, 5, 1, 1),
(1, 4, 11, 11, 1),
(8, 4, 1, 1, 2),
(8, 4, 21, 11, 2),
(8, 4, 31, 11, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarioproducto`
--

CREATE TABLE `usuarioproducto` (
  `idProducto` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idAdministrador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarioproducto`
--

INSERT INTO `usuarioproducto` (`idProducto`, `idUsuario`, `idAdministrador`) VALUES
(4, 1, 1),
(4, 5, 1),
(4, 21, 11),
(4, 31, 11),
(5, 1, 1),
(5, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarioproductozona`
--

CREATE TABLE `usuarioproductozona` (
  `idUsuario` int(11) NOT NULL,
  `idAdministrador` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `idZona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarioproductozona`
--

INSERT INTO `usuarioproductozona` (`idUsuario`, `idAdministrador`, `idProducto`, `idZona`) VALUES
(1, 1, 4, 84),
(1, 1, 4, 87),
(1, 1, 5, 84),
(1, 1, 5, 87),
(2, 1, 5, 84),
(5, 1, 4, 87),
(21, 11, 4, 84),
(31, 11, 4, 84);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `variable`
--

CREATE TABLE `variable` (
  `idVariable` int(11) NOT NULL,
  `concepto` varchar(50) NOT NULL,
  `valor` double NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `variable`
--

INSERT INTO `variable` (`idVariable`, `concepto`, `valor`) VALUES
(1, 'Clientes', 30),
(11, 'Proveedores', 30),
(21, 'IVA', 0.15),
(31, 'ISR', 0.34),
(41, 'PTU', 0.1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zona`
--

CREATE TABLE `zona` (
  `idZona` int(11) NOT NULL,
  `nombreZona` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `zona`
--

INSERT INTO `zona` (`idZona`, `nombreZona`) VALUES
(84, 'Queretaro'),
(87, 'CDMX'),
(88, 'Tijuana'),
(101, 'ZonaW');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`idAdministrador`);

--
-- Indices de la tabla `almacen`
--
ALTER TABLE `almacen`
  ADD PRIMARY KEY (`Proyecto_idProyecto`,`Producto_idProducto`,`Balance_numeroPeriodo`),
  ADD KEY `fk_1` (`Proyecto_idProyecto`),
  ADD KEY `fk_2` (`Producto_idProducto`),
  ADD KEY `fk_3` (`Balance_numeroPeriodo`);

--
-- Indices de la tabla `amortizacion`
--
ALTER TABLE `amortizacion`
  ADD PRIMARY KEY (`numeroPeriodo`,`Proyecto_idProyecto`,`idCredito`),
  ADD KEY `fk_amortizacion_Proyecto1_idx` (`Proyecto_idProyecto`),
  ADD KEY `fk_amortizacion_Credito1_dx` (`idCredito`);

--
-- Indices de la tabla `auxiliarcuenta`
--
ALTER TABLE `auxiliarcuenta`
  ADD PRIMARY KEY (`Balance_numeroPeriodo`,`Proyectos_idProyecto`,`Producto_idProducto`),
  ADD KEY `fk_Producto` (`Producto_idProducto`);

--
-- Indices de la tabla `auxiliarcuentaventa`
--
ALTER TABLE `auxiliarcuentaventa`
  ADD PRIMARY KEY (`Balance_numeroPeriodo`,`Proyectos_idProyecto`,`Producto_idProducto`),
  ADD KEY `fk_Operacion` (`Producto_idProducto`);

--
-- Indices de la tabla `balance`
--
ALTER TABLE `balance`
  ADD PRIMARY KEY (`numeroPeriodo`,`Proyectos_idProyecto`),
  ADD KEY `fk_Balance_Proyectos1_idx` (`Proyectos_idProyecto`);

--
-- Indices de la tabla `credito`
--
ALTER TABLE `credito`
  ADD PRIMARY KEY (`idCredito`);

--
-- Indices de la tabla `creditoactivo`
--
ALTER TABLE `creditoactivo`
  ADD PRIMARY KEY (`idCredito`,`idProyecto`),
  ADD KEY `fk_creditoactivoCredito` (`idCredito`),
  ADD KEY `fk_creditoactivoProyecto` (`idProyecto`);

--
-- Indices de la tabla `creditobalance`
--
ALTER TABLE `creditobalance`
  ADD PRIMARY KEY (`credito_idCredito`,`numeroPeriodo`,`Proyectos_idProyecto`),
  ADD KEY `fk_creditobalanceBalance` (`numeroPeriodo`,`Proyectos_idProyecto`),
  ADD KEY `fk_creditobalanceCredito` (`credito_idCredito`);

--
-- Indices de la tabla `demanda`
--
ALTER TABLE `demanda`
  ADD PRIMARY KEY (`numPeriodo`,`Zona_idZonas`,`Producto_idProducto`),
  ADD KEY `fk_Demanda_Zona1_idx` (`Zona_idZonas`),
  ADD KEY `fk_Demanda_Producto1_idx` (`Producto_idProducto`);

--
-- Indices de la tabla `encabezado`
--
ALTER TABLE `encabezado`
  ADD PRIMARY KEY (`idEncabezado`,`Proyecto_idProyecto`,`Proyecto_Usuario_idUsuario`),
  ADD KEY `fk_Encabezado_Proyecto1_idx` (`Proyecto_idProyecto`,`Proyecto_Usuario_idUsuario`);

--
-- Indices de la tabla `maquinaria`
--
ALTER TABLE `maquinaria`
  ADD PRIMARY KEY (`idMaquinaria`,`Producto_idProducto`),
  ADD KEY `fk_Maquinaria_Producto1_idx` (`Producto_idProducto`);

--
-- Indices de la tabla `maquinariaproyecto`
--
ALTER TABLE `maquinariaproyecto`
  ADD PRIMARY KEY (`Maquinaria_idMaquinaria`,`Proyectos_idProyecto`,`Maquinaria_idProducto`,`Balance_numeroPeriodo`),
  ADD KEY `fk_Maquinaria_has_Proyectos_Proyectos1_idx` (`Proyectos_idProyecto`),
  ADD KEY `fk_Maquinaria_Producto1` (`Maquinaria_idProducto`),
  ADD KEY `fk_Maquinaria_has_Proyectos_Maquinaria1_idx` (`Maquinaria_idMaquinaria`),
  ADD KEY `fk_Maquinaria_has_Proyectos_Maquinaria1` (`Maquinaria_idMaquinaria`,`Maquinaria_idProducto`),
  ADD KEY `FK_Maquinaria_has_Balance` (`Balance_numeroPeriodo`);

--
-- Indices de la tabla `operacion`
--
ALTER TABLE `operacion`
  ADD PRIMARY KEY (`Producto_idProducto`,`Zona_idZonas`,`Proyecto_idProyecto`,`numeroPeriodo`),
  ADD KEY `fk2` (`Zona_idZonas`),
  ADD KEY `fk3` (`Proyecto_idProyecto`),
  ADD KEY `fk4` (`numeroPeriodo`);

--
-- Indices de la tabla `pagocredito`
--
ALTER TABLE `pagocredito`
  ADD PRIMARY KEY (`idPagoCredito`,`idCredito`),
  ADD KEY `kt` (`idCredito`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `productoadministrador`
--
ALTER TABLE `productoadministrador`
  ADD PRIMARY KEY (`Productos_idProducto`,`Administrador_idAdministrador`),
  ADD KEY `fk_Productos_has_Administrador_Administrador1_idx` (`Administrador_idAdministrador`),
  ADD KEY `fk_Productos_has_Administrador_Productos1_idx` (`Productos_idProducto`);

--
-- Indices de la tabla `productozona`
--
ALTER TABLE `productozona`
  ADD PRIMARY KEY (`Zona_idZona`,`Producto_idProducto`),
  ADD KEY `fk_table1_Producto2_idx` (`Producto_idProducto`);

--
-- Indices de la tabla `productozonaproyecto`
--
ALTER TABLE `productozonaproyecto`
  ADD PRIMARY KEY (`Producto_idProducto`,`Zona_idZonas`,`Proyecto_idProyecto`,`Proyecto_Usuario_idUsuario`),
  ADD KEY `fk_table1_Zona1_idx` (`Zona_idZonas`),
  ADD KEY `fk_table1_Proyecto1_idx` (`Proyecto_idProyecto`,`Proyecto_Usuario_idUsuario`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`idProyecto`,`Usuario_idUsuario`),
  ADD KEY `fk_Proyectos_Usuario1_idx` (`Usuario_idUsuario`);

--
-- Indices de la tabla `proyectoprestamos`
--
ALTER TABLE `proyectoprestamos`
  ADD PRIMARY KEY (`Proyectos_idProyecto`,`Proyectos_Usuario_idUsuario`,`Prestamos_idPrestamos`),
  ADD KEY `fk_Proyectos_has_Prestamos_Prestamos1_idx` (`Prestamos_idPrestamos`),
  ADD KEY `fk_Proyectos_has_Prestamos_Proyectos1_idx` (`Proyectos_idProyecto`,`Proyectos_Usuario_idUsuario`);

--
-- Indices de la tabla `proyectoproducto`
--
ALTER TABLE `proyectoproducto`
  ADD PRIMARY KEY (`Proyectos_idProyecto`,`Productos_idProducto`),
  ADD KEY `fk_Proyectos_has_Productos_Productos1_idx` (`Productos_idProducto`),
  ADD KEY `fk_Proyectos_has_Productos_Proyectos1_idx` (`Proyectos_idProyecto`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`,`Administrador_idAdministrador`),
  ADD KEY `fk_Usuario_Administrador1_idx` (`Administrador_idAdministrador`);

--
-- Indices de la tabla `usuariocredito`
--
ALTER TABLE `usuariocredito`
  ADD PRIMARY KEY (`idCredito`,`idUsuario`,`idAdministrador`),
  ADD KEY `fk_table1_Usuario2_idx` (`idUsuario`,`idAdministrador`);

--
-- Indices de la tabla `usuariomaquinaria`
--
ALTER TABLE `usuariomaquinaria`
  ADD PRIMARY KEY (`idMaquinaria`,`Producto_idProducto`,`idUsuario`,`Administrador_idAdministrador`),
  ADD KEY `fk_table1_Usuario1_idx` (`idUsuario`,`Administrador_idAdministrador`);

--
-- Indices de la tabla `usuarioproducto`
--
ALTER TABLE `usuarioproducto`
  ADD PRIMARY KEY (`idProducto`,`idUsuario`,`idAdministrador`),
  ADD KEY `fk_table1_Usuario2_idx` (`idUsuario`,`idAdministrador`);

--
-- Indices de la tabla `usuarioproductozona`
--
ALTER TABLE `usuarioproductozona`
  ADD PRIMARY KEY (`idUsuario`,`idAdministrador`,`idProducto`,`idZona`),
  ADD KEY `fk_usuarioproductozona_Producto1_idx` (`idProducto`),
  ADD KEY `fk_usuarioproductozona_Zona1_idx` (`idZona`);

--
-- Indices de la tabla `variable`
--
ALTER TABLE `variable`
  ADD PRIMARY KEY (`idVariable`);

--
-- Indices de la tabla `zona`
--
ALTER TABLE `zona`
  ADD PRIMARY KEY (`idZona`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `idAdministrador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `credito`
--
ALTER TABLE `credito`
  MODIFY `idCredito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `maquinaria`
--
ALTER TABLE `maquinaria`
  MODIFY `idMaquinaria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `pagocredito`
--
ALTER TABLE `pagocredito`
  MODIFY `idPagoCredito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `idProyecto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=447;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `variable`
--
ALTER TABLE `variable`
  MODIFY `idVariable` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `zona`
--
ALTER TABLE `zona`
  MODIFY `idZona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `almacen`
--
ALTER TABLE `almacen`
  ADD CONSTRAINT `fk_1` FOREIGN KEY (`Proyecto_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_2` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_3` FOREIGN KEY (`Balance_numeroPeriodo`) REFERENCES `balance` (`numeroPeriodo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `amortizacion`
--
ALTER TABLE `amortizacion`
  ADD CONSTRAINT `fk_amortizacion_Credito1` FOREIGN KEY (`idCredito`) REFERENCES `credito` (`idCredito`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_amortizacion_Proyecto1` FOREIGN KEY (`Proyecto_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `auxiliarcuenta`
--
ALTER TABLE `auxiliarcuenta`
  ADD CONSTRAINT `fk_Producto` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_auxiliarcuenta_Balance1` FOREIGN KEY (`Balance_numeroPeriodo`,`Proyectos_idProyecto`) REFERENCES `balance` (`numeroPeriodo`, `Proyectos_idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `auxiliarcuentaventa`
--
ALTER TABLE `auxiliarcuentaventa`
  ADD CONSTRAINT `fk_Balance` FOREIGN KEY (`Balance_numeroPeriodo`,`Proyectos_idProyecto`) REFERENCES `balance` (`numeroPeriodo`, `Proyectos_idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fx_Operacion` FOREIGN KEY (`Producto_idProducto`) REFERENCES `operacion` (`Producto_idProducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `balance`
--
ALTER TABLE `balance`
  ADD CONSTRAINT `fk_Balance_Proyectos1` FOREIGN KEY (`Proyectos_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `creditoactivo`
--
ALTER TABLE `creditoactivo`
  ADD CONSTRAINT `fk_creditoactivo_Credito1` FOREIGN KEY (`idCredito`) REFERENCES `credito` (`idCredito`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_creditoactivo_Proyecto1` FOREIGN KEY (`idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `creditobalance`
--
ALTER TABLE `creditobalance`
  ADD CONSTRAINT `fk_creditobalanceBalance1` FOREIGN KEY (`numeroPeriodo`,`Proyectos_idProyecto`) REFERENCES `balance` (`numeroPeriodo`, `Proyectos_idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_creditobalanceCredito1` FOREIGN KEY (`credito_idCredito`) REFERENCES `credito` (`idCredito`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `demanda`
--
ALTER TABLE `demanda`
  ADD CONSTRAINT `fk_Demanda_Producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Demanda_Zona1` FOREIGN KEY (`Zona_idZonas`) REFERENCES `zona` (`idZona`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `encabezado`
--
ALTER TABLE `encabezado`
  ADD CONSTRAINT `fk_Encabezado_Proyecto1` FOREIGN KEY (`Proyecto_idProyecto`,`Proyecto_Usuario_idUsuario`) REFERENCES `proyecto` (`idProyecto`, `Usuario_idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `maquinaria`
--
ALTER TABLE `maquinaria`
  ADD CONSTRAINT `fk_Maquinaria_Producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `maquinariaproyecto`
--
ALTER TABLE `maquinariaproyecto`
  ADD CONSTRAINT `FK_Maquinaria_has_Balance` FOREIGN KEY (`Balance_numeroPeriodo`) REFERENCES `balance` (`numeroPeriodo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Maquinaria_has_Proyectos_Maquinaria1` FOREIGN KEY (`Maquinaria_idMaquinaria`,`Maquinaria_idProducto`) REFERENCES `maquinaria` (`idMaquinaria`, `Producto_idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Maquinaria_has_Proyectos_Proyectos1` FOREIGN KEY (`Proyectos_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `operacion`
--
ALTER TABLE `operacion`
  ADD CONSTRAINT `fk1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `productozonaproyecto` (`Producto_idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk2` FOREIGN KEY (`Zona_idZonas`) REFERENCES `productozonaproyecto` (`Zona_idZonas`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk3` FOREIGN KEY (`Proyecto_idProyecto`) REFERENCES `productozonaproyecto` (`Proyecto_idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk4` FOREIGN KEY (`numeroPeriodo`) REFERENCES `balance` (`numeroPeriodo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pagocredito`
--
ALTER TABLE `pagocredito`
  ADD CONSTRAINT `kt` FOREIGN KEY (`idCredito`) REFERENCES `credito` (`idCredito`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productozonaproyecto`
--
ALTER TABLE `productozonaproyecto`
  ADD CONSTRAINT `fk11` FOREIGN KEY (`Proyecto_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk12` FOREIGN KEY (`Zona_idZonas`) REFERENCES `zona` (`idZona`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk13` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `proyectoproducto`
--
ALTER TABLE `proyectoproducto`
  ADD CONSTRAINT `fk21` FOREIGN KEY (`Proyectos_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk22` FOREIGN KEY (`Productos_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuariocredito`
--
ALTER TABLE `usuariocredito`
  ADD CONSTRAINT `p` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `p2` FOREIGN KEY (`idCredito`) REFERENCES `credito` (`idCredito`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
