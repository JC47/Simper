-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: basesimv1
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administrador` (
  `idAdministrador` int(11) NOT NULL AUTO_INCREMENT,
  `nombreAdmin` varchar(20) DEFAULT NULL,
  `apPat` varchar(20) DEFAULT NULL,
  `apMat` varchar(20) DEFAULT NULL,
  `contra` varchar(20) NOT NULL,
  `user` varchar(20) NOT NULL,
  `imgAdmin` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idAdministrador`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'Carlos','Melo','Garcia','123','CM',NULL),(11,'Raul','Uribe','Escamilla','Raul705','Raul705',NULL);
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `almacen`
--

DROP TABLE IF EXISTS `almacen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `almacen` (
  `Balance_numeroPeriodo` int(11) NOT NULL,
  `Producto_idProducto` int(11) NOT NULL,
  `Proyecto_idProyecto` int(11) NOT NULL,
  `unidadesAlmacenadas` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Proyecto_idProyecto`,`Producto_idProducto`,`Balance_numeroPeriodo`),
  KEY `fk_1` (`Proyecto_idProyecto`),
  KEY `fk_2` (`Producto_idProducto`),
  KEY `fk_3` (`Balance_numeroPeriodo`),
  CONSTRAINT `fk_1` FOREIGN KEY (`Proyecto_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_2` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_3` FOREIGN KEY (`Balance_numeroPeriodo`) REFERENCES `balance` (`numeroPeriodo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `almacen`
--

LOCK TABLES `almacen` WRITE;
/*!40000 ALTER TABLE `almacen` DISABLE KEYS */;
/*!40000 ALTER TABLE `almacen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amortizacion`
--

DROP TABLE IF EXISTS `amortizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amortizacion` (
  `numeroPeriodo` int(11) NOT NULL,
  `Proyecto_idProyecto` int(11) NOT NULL,
  `idCredito` int(11) NOT NULL,
  `pagoCapital` double NOT NULL,
  `intereses` double NOT NULL,
  PRIMARY KEY (`numeroPeriodo`,`Proyecto_idProyecto`,`idCredito`),
  KEY `fk_amortizacion_Proyecto1_idx` (`Proyecto_idProyecto`),
  KEY `fk_amortizacion_Credito1_dx` (`idCredito`),
  CONSTRAINT `fk_amortizacion_Credito1` FOREIGN KEY (`idCredito`) REFERENCES `credito` (`idCredito`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_amortizacion_Proyecto1` FOREIGN KEY (`Proyecto_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amortizacion`
--

LOCK TABLES `amortizacion` WRITE;
/*!40000 ALTER TABLE `amortizacion` DISABLE KEYS */;
INSERT INTO `amortizacion` VALUES (2,441,1,4423555,1876445),(2,441,2,5548897,1951103),(3,441,1,4976925,1323075),(3,441,2,6451103,1048897),(4,441,1,5599520,700480);
/*!40000 ALTER TABLE `amortizacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auxiliarcuenta`
--

DROP TABLE IF EXISTS `auxiliarcuenta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auxiliarcuenta` (
  `Balance_numeroPeriodo` int(11) NOT NULL,
  `Proyectos_idProyecto` int(11) NOT NULL,
  `Producto_idProducto` int(11) NOT NULL,
  `IVACompraMaq` double DEFAULT '0',
  `IVAGastosVenta` double DEFAULT '0',
  `costoTransformacionMaq` double DEFAULT '0',
  `compraMaquinaria` double DEFAULT '0',
  `desarrolloMercado` double NOT NULL DEFAULT '0',
  `desarrolloProducto` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`Balance_numeroPeriodo`,`Proyectos_idProyecto`,`Producto_idProducto`),
  KEY `fk_Producto` (`Producto_idProducto`),
  CONSTRAINT `fk_Producto` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_auxiliarcuenta_Balance1` FOREIGN KEY (`Balance_numeroPeriodo`, `Proyectos_idProyecto`) REFERENCES `balance` (`numeroPeriodo`, `Proyectos_idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auxiliarcuenta`
--

LOCK TABLES `auxiliarcuenta` WRITE;
/*!40000 ALTER TABLE `auxiliarcuenta` DISABLE KEYS */;
INSERT INTO `auxiliarcuenta` VALUES (6,441,5,-450000,0,300000,3450000,0,0);
/*!40000 ALTER TABLE `auxiliarcuenta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auxiliarcuentaventa`
--

DROP TABLE IF EXISTS `auxiliarcuentaventa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  `costoTransformacionMaq` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`Balance_numeroPeriodo`,`Proyectos_idProyecto`,`Producto_idProducto`),
  KEY `fk_Operacion` (`Producto_idProducto`),
  CONSTRAINT `fk_Balance` FOREIGN KEY (`Balance_numeroPeriodo`, `Proyectos_idProyecto`) REFERENCES `balance` (`numeroPeriodo`, `Proyectos_idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fx_Operacion` FOREIGN KEY (`Producto_idProducto`) REFERENCES `operacion` (`Producto_idProducto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auxiliarcuentaventa`
--

LOCK TABLES `auxiliarcuentaventa` WRITE;
/*!40000 ALTER TABLE `auxiliarcuentaventa` DISABLE KEYS */;
/*!40000 ALTER TABLE `auxiliarcuentaventa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `balance`
--

DROP TABLE IF EXISTS `balance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  `depEqTrans` double DEFAULT NULL,
  PRIMARY KEY (`numeroPeriodo`,`Proyectos_idProyecto`),
  KEY `fk_Balance_Proyectos1_idx` (`Proyectos_idProyecto`),
  CONSTRAINT `fk_Balance_Proyectos1` FOREIGN KEY (`Proyectos_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `balance`
--

LOCK TABLES `balance` WRITE;
/*!40000 ALTER TABLE `balance` DISABLE KEYS */;
INSERT INTO `balance` VALUES (0,0,0,0,0,0,0,2500000,0,0,0,0,1000000,2000000,3000000,500000,0,0,10000000,0,0,0,0,0,1000000,411,0,0,0),(0,0,0,0,0,0,0,2500000,0,0,0,0,1000000,2000000,3000000,500000,0,0,10000000,0,0,0,0,0,1000000,421,0,0,0),(0,0,0,0,0,0,0,2500000,0,0,0,0,1000000,2000000,3000000,500000,0,0,10000000,0,0,0,0,0,1000000,441,0,0,0),(1,0,0,0,0,0,0,2500000,0,0,0,0,1000000,2000000,3000000,500000,0,0,10000000,0,0,-300000,0,0,1000000,411,0,300000,0),(1,-142112.49999999997,0,1064612.5,0,0,12750000,2906000,1897500,0,4132391.304347826,0,1000000,2000000,9000000,500000,0,0,10000000,0,0,-2176608.695652172,15000,15000,1000000,421,0,900000,10000),(1,0,0,0,0,0,20000000,22250000,0,0,0,0,1000000,2000000,3000000,500000,0,0,10000000,0,0,-550000,0,0,1000000,441,0,300000,0),(2,0,0,0,0,0,0,-8869000,0,0,0,0,1000000,2000000,9000000,500000,0,0,10000000,0,-2176608.695652172,-5032391.304347826,15000,15000,1000000,421,0,1800000,10000),(2,0,0,0,0,0,13229757,12950000,0,0,0,0,1000000,2000000,3000000,500000,0,0,10000000,0,-550000,-2829757,0,0,1000000,441,0,600000,0),(3,0,0,0,0,0,5599520,3650000,0,0,0,0,1000000,2000000,3000000,500000,0,0,10000000,0,-3379757,-1969763,0,0,1000000,441,0,900000,0),(4,0,0,0,0,0,20000000,13500000,0,0,0,0,1000000,2000000,3000000,500000,0,0,10000000,0,-5349520,-4850480,0,0,1000000,441,0,1200000,0),(5,0,0,0,0,0,10153312,3000000,0,0,0,0,1000000,2000000,3000000,500000,0,0,10000000,0,-10200000,-953312,0,0,1000000,441,0,1500000,0),(6,0,0,0,0,0,3750000,-3750000,0,0,0,0,1000000,2000000,3000000,500000,0,0,10000000,0,-11153312,-646688,0,0,1000000,441,0,1800000,0);
/*!40000 ALTER TABLE `balance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credito`
--

DROP TABLE IF EXISTS `credito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `credito` (
  `idCredito` int(11) NOT NULL AUTO_INCREMENT,
  `nombreCredito` varchar(45) DEFAULT NULL,
  `montoMin` int(11) DEFAULT NULL,
  `montoMax` int(11) NOT NULL,
  `pago` varchar(100) DEFAULT NULL,
  `pagoAnticipado` double NOT NULL DEFAULT '1',
  `plazo` int(11) NOT NULL DEFAULT '1',
  `tipo` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idCredito`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credito`
--

LOCK TABLES `credito` WRITE;
/*!40000 ALTER TABLE `credito` DISABLE KEYS */;
INSERT INTO `credito` VALUES (1,'3MS',5000000,20000000,'Tres pagos anuales equivalentes al 42%',1,3,2),(2,'MC',2000000,20000000,'Intereses al inicio por el 20%, 2 pagos anuales del 50%',20,2,1),(3,'MCLP',2000000,50000000,'Pago anticipado del 24%, primer pago del 50%, segundo pago del 25%, tercer pago del 25%',24,3,1),(4,'MSCP',2000000,15000000,'Pago anticipado del 15%, primer pago del 100%',15,1,1),(5,'Perro',1000000,5000000,'Tipo 3',5,2,3);
/*!40000 ALTER TABLE `credito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditoactivo`
--

DROP TABLE IF EXISTS `creditoactivo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creditoactivo` (
  `idCredito` int(11) NOT NULL,
  `idProyecto` int(11) NOT NULL,
  `plazo` int(11) NOT NULL,
  `activo` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idCredito`,`idProyecto`),
  KEY `fk_creditoactivoCredito` (`idCredito`),
  KEY `fk_creditoactivoProyecto` (`idProyecto`),
  CONSTRAINT `fk_creditoactivo_Credito1` FOREIGN KEY (`idCredito`) REFERENCES `Credito` (`idCredito`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_creditoactivo_Proyecto1` FOREIGN KEY (`idProyecto`) REFERENCES `Proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditoactivo`
--

LOCK TABLES `creditoactivo` WRITE;
/*!40000 ALTER TABLE `creditoactivo` DISABLE KEYS */;
INSERT INTO `creditoactivo` VALUES (1,441,2,1),(2,441,1,1);
/*!40000 ALTER TABLE `creditoactivo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditobalance`
--

DROP TABLE IF EXISTS `creditobalance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creditobalance` (
  `credito_idCredito` int(11) NOT NULL,
  `Proyectos_idProyecto` int(11) NOT NULL,
  `numeroPeriodo` int(11) NOT NULL,
  `monto` double NOT NULL,
  `anticipo` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`credito_idCredito`,`numeroPeriodo`,`Proyectos_idProyecto`),
  KEY `fk_creditobalanceBalance` (`numeroPeriodo`,`Proyectos_idProyecto`),
  KEY `fk_creditobalanceCredito` (`credito_idCredito`),
  CONSTRAINT `fk_creditobalanceBalance1` FOREIGN KEY (`numeroPeriodo`, `Proyectos_idProyecto`) REFERENCES `balance` (`numeroPeriodo`, `Proyectos_idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_creditobalanceCredito1` FOREIGN KEY (`credito_idCredito`) REFERENCES `credito` (`idCredito`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditobalance`
--

LOCK TABLES `creditobalance` WRITE;
/*!40000 ALTER TABLE `creditobalance` DISABLE KEYS */;
INSERT INTO `creditobalance` VALUES (1,441,1,15000000,0),(2,441,1,15000000,3000000);
/*!40000 ALTER TABLE `creditobalance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `demanda`
--

DROP TABLE IF EXISTS `demanda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `demanda` (
  `numPeriodo` int(11) NOT NULL DEFAULT '0',
  `cantidad` int(11) DEFAULT '0',
  `Zona_idZonas` int(11) NOT NULL,
  `Producto_idProducto` int(11) NOT NULL,
  PRIMARY KEY (`numPeriodo`,`Zona_idZonas`,`Producto_idProducto`),
  KEY `fk_Demanda_Zona1_idx` (`Zona_idZonas`),
  KEY `fk_Demanda_Producto1_idx` (`Producto_idProducto`),
  CONSTRAINT `fk_Demanda_Producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Demanda_Zona1` FOREIGN KEY (`Zona_idZonas`) REFERENCES `zona` (`idZona`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `demanda`
--

LOCK TABLES `demanda` WRITE;
/*!40000 ALTER TABLE `demanda` DISABLE KEYS */;
INSERT INTO `demanda` VALUES (0,5000,101,11),(1,18000,84,4),(1,0,84,5),(1,17000,84,6),(1,6000,87,4),(1,0,87,5),(1,0,87,6),(1,16000,88,4),(1,0,88,5),(1,0,88,6),(1,6000,101,11),(2,16000,84,4),(2,8000,84,5),(2,9000,84,6),(2,8000,87,4),(2,4000,87,5),(2,0,87,6),(2,18000,88,4),(2,2000,88,5),(2,0,88,6),(2,8000,101,11),(3,13000,84,4),(3,2000,84,5),(3,0,84,6),(3,10000,87,4),(3,0,87,5),(3,0,87,6),(3,26000,88,4),(3,0,88,5),(3,0,88,6),(3,9000,101,11),(4,10000,84,4),(4,9000,84,5),(4,0,84,6),(4,14000,87,4),(4,8000,87,5),(4,0,87,6),(4,22000,88,4),(4,5000,88,5),(4,0,88,6),(4,10000,101,11),(5,6000,84,4),(5,15000,84,5),(5,0,84,6),(5,11000,87,4),(5,10000,87,5),(5,0,87,6),(5,6000,88,4),(5,8000,88,5),(5,0,88,6),(5,12000,101,11),(6,2000,84,4),(6,12000,84,5),(6,15000,84,6),(6,8000,87,4),(6,12000,87,5),(6,2000,87,6),(6,0,88,4),(6,6000,88,5),(6,4000,88,6),(6,13000,101,11),(7,0,84,4),(7,10000,84,5),(7,16000,84,6),(7,6000,87,4),(7,14000,87,5),(7,5000,87,6),(7,0,88,4),(7,10000,88,5),(7,14000,101,11),(8,0,84,4),(8,3000,84,5),(8,20000,84,6),(8,3000,87,4),(8,20000,87,5),(8,5000,87,6),(8,0,88,4),(8,15000,88,5),(8,15000,101,11),(9,0,84,4),(9,48000,84,6),(9,0,87,4),(9,20000,87,5),(9,8000,87,6),(9,0,88,4),(9,10000,88,5),(9,20000,101,11),(10,0,84,4),(10,6000,84,5),(10,23000,84,6),(10,0,87,4),(10,2000,87,5),(10,16000,87,6),(10,0,88,4),(10,8000,88,5),(10,16000,88,6),(10,20000,101,11);
/*!40000 ALTER TABLE `demanda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encabezado`
--

DROP TABLE IF EXISTS `encabezado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `encabezado` (
  `idEncabezado` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `alias` varchar(20) DEFAULT NULL,
  `Proyecto_idProyecto` int(11) NOT NULL,
  `Proyecto_Usuario_idUsuario` int(11) NOT NULL,
  PRIMARY KEY (`idEncabezado`,`Proyecto_idProyecto`,`Proyecto_Usuario_idUsuario`),
  KEY `fk_Encabezado_Proyecto1_idx` (`Proyecto_idProyecto`,`Proyecto_Usuario_idUsuario`),
  CONSTRAINT `fk_Encabezado_Proyecto1` FOREIGN KEY (`Proyecto_idProyecto`, `Proyecto_Usuario_idUsuario`) REFERENCES `proyecto` (`idProyecto`, `Usuario_idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encabezado`
--

LOCK TABLES `encabezado` WRITE;
/*!40000 ALTER TABLE `encabezado` DISABLE KEYS */;
/*!40000 ALTER TABLE `encabezado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maquinaria`
--

DROP TABLE IF EXISTS `maquinaria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `maquinaria` (
  `idMaquinaria` int(11) NOT NULL AUTO_INCREMENT,
  `nombreMaq` varchar(20) DEFAULT NULL,
  `costo` double DEFAULT NULL,
  `cantidadProd` double DEFAULT NULL,
  `depAcum` double DEFAULT NULL,
  `imgMaq` varchar(50) DEFAULT NULL,
  `Producto_idProducto` int(11) NOT NULL,
  PRIMARY KEY (`idMaquinaria`,`Producto_idProducto`),
  KEY `fk_Maquinaria_Producto1_idx` (`Producto_idProducto`),
  CONSTRAINT `fk_Maquinaria_Producto1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maquinaria`
--

LOCK TABLES `maquinaria` WRITE;
/*!40000 ALTER TABLE `maquinaria` DISABLE KEYS */;
INSERT INTO `maquinaria` VALUES (1,'MaqX',2000000,5000,10,NULL,4),(2,'MaqY2',3000000,7000,10,NULL,5),(3,'MaqZ1',3000000,3000,10,NULL,6),(6,'MaqY1',2500000,5000,10,NULL,5),(7,'MaqZ2',4000000,5000,10,NULL,6),(8,'Maq1',1500000,4000,10,NULL,4);
/*!40000 ALTER TABLE `maquinaria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maquinariaproyecto`
--

DROP TABLE IF EXISTS `maquinariaproyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `maquinariaproyecto` (
  `Balance_numeroPeriodo` int(11) NOT NULL,
  `Maquinaria_idMaquinaria` int(11) NOT NULL,
  `Maquinaria_idProducto` int(11) NOT NULL,
  `Proyectos_idProyecto` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`Maquinaria_idMaquinaria`,`Proyectos_idProyecto`,`Maquinaria_idProducto`,`Balance_numeroPeriodo`),
  KEY `fk_Maquinaria_has_Proyectos_Proyectos1_idx` (`Proyectos_idProyecto`),
  KEY `fk_Maquinaria_Producto1` (`Maquinaria_idProducto`),
  KEY `fk_Maquinaria_has_Proyectos_Maquinaria1_idx` (`Maquinaria_idMaquinaria`),
  KEY `fk_Maquinaria_has_Proyectos_Maquinaria1` (`Maquinaria_idMaquinaria`,`Maquinaria_idProducto`),
  KEY `FK_Maquinaria_has_Balance` (`Balance_numeroPeriodo`),
  CONSTRAINT `FK_Maquinaria_has_Balance` FOREIGN KEY (`Balance_numeroPeriodo`) REFERENCES `balance` (`numeroPeriodo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Maquinaria_has_Proyectos_Maquinaria1` FOREIGN KEY (`Maquinaria_idMaquinaria`, `Maquinaria_idProducto`) REFERENCES `maquinaria` (`idMaquinaria`, `Producto_idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Maquinaria_has_Proyectos_Proyectos1` FOREIGN KEY (`Proyectos_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maquinariaproyecto`
--

LOCK TABLES `maquinariaproyecto` WRITE;
/*!40000 ALTER TABLE `maquinariaproyecto` DISABLE KEYS */;
INSERT INTO `maquinariaproyecto` VALUES (6,2,5,441,1),(0,8,4,441,2);
/*!40000 ALTER TABLE `maquinariaproyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operacion`
--

DROP TABLE IF EXISTS `operacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `operacion` (
  `Producto_idProducto` int(11) NOT NULL,
  `Zona_idZonas` int(11) NOT NULL,
  `Proyecto_idProyecto` int(11) NOT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  `numeroPeriodo` int(11) NOT NULL,
  `unidadesVendidas` int(11) DEFAULT '0',
  PRIMARY KEY (`Producto_idProducto`,`Zona_idZonas`,`Proyecto_idProyecto`,`numeroPeriodo`),
  KEY `fk2` (`Zona_idZonas`),
  KEY `fk3` (`Proyecto_idProyecto`),
  KEY `fk4` (`numeroPeriodo`),
  CONSTRAINT `fk1` FOREIGN KEY (`Producto_idProducto`) REFERENCES `productozonaproyecto` (`Producto_idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk2` FOREIGN KEY (`Zona_idZonas`) REFERENCES `productozonaproyecto` (`Zona_idZonas`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk3` FOREIGN KEY (`Proyecto_idProyecto`) REFERENCES `productozonaproyecto` (`Proyecto_idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk4` FOREIGN KEY (`numeroPeriodo`) REFERENCES `balance` (`numeroPeriodo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operacion`
--

LOCK TABLES `operacion` WRITE;
/*!40000 ALTER TABLE `operacion` DISABLE KEYS */;
INSERT INTO `operacion` VALUES (4,84,441,1,6,2000);
/*!40000 ALTER TABLE `operacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagocredito`
--

DROP TABLE IF EXISTS `pagocredito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagocredito` (
  `idPagoCredito` int(11) NOT NULL AUTO_INCREMENT,
  `idCredito` int(11) NOT NULL,
  `pagosCredito` double NOT NULL,
  PRIMARY KEY (`idPagoCredito`,`idCredito`),
  KEY `kt` (`idCredito`),
  CONSTRAINT `kt` FOREIGN KEY (`idCredito`) REFERENCES `credito` (`idCredito`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagocredito`
--

LOCK TABLES `pagocredito` WRITE;
/*!40000 ALTER TABLE `pagocredito` DISABLE KEYS */;
INSERT INTO `pagocredito` VALUES (1,1,42),(11,1,42),(21,1,42),(31,2,50),(41,2,50),(51,3,50),(61,3,25),(71,3,25),(81,4,100),(82,5,60),(83,5,60);
/*!40000 ALTER TABLE `pagocredito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `idProducto` int(11) NOT NULL AUTO_INCREMENT,
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
  `costoUni` double DEFAULT NULL,
  PRIMARY KEY (`idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (4,'ProductoX',2000000,2,1100,100000,300,200000,10000,200,300000,30000,483,7,69),(5,'ProductoY',2000000,2,2000,100000,400,200000,10000,210,300000,30000,690,10,69),(6,'ProductoZ',3000000,2,2500,100000,500,200000,10000,220,300000,30000,828,12,69),(11,'ProductoW',3000000,2,2500,100000,500,200000,10000,220,300000,30000,828,12,69);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productoadministrador`
--

DROP TABLE IF EXISTS `productoadministrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productoadministrador` (
  `Productos_idProducto` int(11) NOT NULL,
  `Administrador_idAdministrador` int(11) NOT NULL,
  PRIMARY KEY (`Productos_idProducto`,`Administrador_idAdministrador`),
  KEY `fk_Productos_has_Administrador_Administrador1_idx` (`Administrador_idAdministrador`),
  KEY `fk_Productos_has_Administrador_Productos1_idx` (`Productos_idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productoadministrador`
--

LOCK TABLES `productoadministrador` WRITE;
/*!40000 ALTER TABLE `productoadministrador` DISABLE KEYS */;
/*!40000 ALTER TABLE `productoadministrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productozona`
--

DROP TABLE IF EXISTS `productozona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productozona` (
  `Zona_idZona` int(11) NOT NULL,
  `Producto_idProducto` int(11) NOT NULL,
  `costoDes` double DEFAULT NULL,
  `tiempoDes` int(11) DEFAULT NULL,
  PRIMARY KEY (`Zona_idZona`,`Producto_idProducto`),
  KEY `fk_table1_Producto2_idx` (`Producto_idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productozona`
--

LOCK TABLES `productozona` WRITE;
/*!40000 ALTER TABLE `productozona` DISABLE KEYS */;
INSERT INTO `productozona` VALUES (84,4,200000,2),(84,5,2000000,2),(84,6,3000000,2),(87,4,500000,1),(87,5,2000000,2),(87,6,3000000,2),(88,4,500000,1),(88,5,2000000,2),(88,6,3000000,2),(91,6,3500000,2),(91,11,3500000,2),(101,11,3500000,2);
/*!40000 ALTER TABLE `productozona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productozonaproyecto`
--

DROP TABLE IF EXISTS `productozonaproyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productozonaproyecto` (
  `Producto_idProducto` int(11) NOT NULL,
  `Zona_idZonas` int(11) NOT NULL,
  `Proyecto_idProyecto` int(11) NOT NULL,
  `Proyecto_Usuario_idUsuario` int(11) NOT NULL,
  `desarrollado` int(11) NOT NULL DEFAULT '0',
  `periodoInicio` int(11) DEFAULT NULL,
  `ultimoPeriodoDes` int(11) DEFAULT NULL,
  `periodosDes` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`Producto_idProducto`,`Zona_idZonas`,`Proyecto_idProyecto`,`Proyecto_Usuario_idUsuario`),
  KEY `fk_table1_Zona1_idx` (`Zona_idZonas`),
  KEY `fk_table1_Proyecto1_idx` (`Proyecto_idProyecto`,`Proyecto_Usuario_idUsuario`),
  CONSTRAINT `fk11` FOREIGN KEY (`Proyecto_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk12` FOREIGN KEY (`Zona_idZonas`) REFERENCES `zona` (`idZona`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk13` FOREIGN KEY (`Producto_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productozonaproyecto`
--

LOCK TABLES `productozonaproyecto` WRITE;
/*!40000 ALTER TABLE `productozonaproyecto` DISABLE KEYS */;
INSERT INTO `productozonaproyecto` VALUES (4,84,421,31,1,0,0,0),(4,84,441,1,1,0,0,0),(4,87,421,31,1,1,1,1),(4,87,441,1,1,0,0,0),(4,88,421,31,1,1,1,1),(5,84,441,1,1,0,0,0),(5,87,441,1,1,0,0,0);
/*!40000 ALTER TABLE `productozonaproyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyecto` (
  `idProyecto` int(11) NOT NULL AUTO_INCREMENT,
  `nombreProyecto` varchar(45) DEFAULT NULL,
  `fechaCreacion` varchar(20) DEFAULT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  `numProyecto` int(2) DEFAULT NULL,
  `cantMaxRes` double DEFAULT NULL,
  `cantMinRes` double DEFAULT NULL,
  PRIMARY KEY (`idProyecto`,`Usuario_idUsuario`),
  KEY `fk_Proyectos_Usuario1_idx` (`Usuario_idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=442 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyecto`
--

LOCK TABLES `proyecto` WRITE;
/*!40000 ALTER TABLE `proyecto` DISABLE KEYS */;
INSERT INTO `proyecto` VALUES (49,'Manzanas','Aug 21, 2017',5,NULL,NULL,NULL),(50,'PR1','Aug 22, 2017',5,NULL,NULL,NULL),(411,'06nov2017hora19:51','Nov 6, 2017',21,NULL,NULL,NULL),(421,'06nov2017hora11:52','Nov 6, 2017',31,NULL,NULL,NULL),(441,'p','Nov 29, 2017',1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `proyecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectoprestamos`
--

DROP TABLE IF EXISTS `proyectoprestamos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyectoprestamos` (
  `Proyectos_idProyecto` int(11) NOT NULL,
  `Proyectos_Usuario_idUsuario` int(11) NOT NULL,
  `Prestamos_idPrestamos` int(11) NOT NULL,
  PRIMARY KEY (`Proyectos_idProyecto`,`Proyectos_Usuario_idUsuario`,`Prestamos_idPrestamos`),
  KEY `fk_Proyectos_has_Prestamos_Prestamos1_idx` (`Prestamos_idPrestamos`),
  KEY `fk_Proyectos_has_Prestamos_Proyectos1_idx` (`Proyectos_idProyecto`,`Proyectos_Usuario_idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectoprestamos`
--

LOCK TABLES `proyectoprestamos` WRITE;
/*!40000 ALTER TABLE `proyectoprestamos` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyectoprestamos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectoproducto`
--

DROP TABLE IF EXISTS `proyectoproducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyectoproducto` (
  `Proyectos_idProyecto` int(11) NOT NULL,
  `Productos_idProducto` int(11) NOT NULL,
  `desarrollado` int(11) DEFAULT '0',
  `periodoInicio` int(11) DEFAULT NULL,
  `ultimoPeriodoDes` int(11) DEFAULT NULL,
  `periodosDes` int(11) DEFAULT '1',
  PRIMARY KEY (`Proyectos_idProyecto`,`Productos_idProducto`),
  KEY `fk_Proyectos_has_Productos_Productos1_idx` (`Productos_idProducto`),
  KEY `fk_Proyectos_has_Productos_Proyectos1_idx` (`Proyectos_idProyecto`),
  CONSTRAINT `fk21` FOREIGN KEY (`Proyectos_idProyecto`) REFERENCES `proyecto` (`idProyecto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk22` FOREIGN KEY (`Productos_idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectoproducto`
--

LOCK TABLES `proyectoproducto` WRITE;
/*!40000 ALTER TABLE `proyectoproducto` DISABLE KEYS */;
INSERT INTO `proyectoproducto` VALUES (411,4,1,0,0,0),(421,4,1,0,0,0),(421,5,0,1,1,1),(441,4,1,0,0,0),(441,5,1,0,0,0);
/*!40000 ALTER TABLE `proyectoproducto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY (`idUsuario`,`Administrador_idAdministrador`),
  KEY `fk_Usuario_Administrador1_idx` (`Administrador_idAdministrador`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Juan','Calette','Jimenez',1,'123','JC',NULL,2500000,0,0,0,0,1000000,2000000,3000000,500000,1000000,0,0,0,0,0,0,10000000,0,0,0,0,0,10),(2,'Pedro','Fernandez','Zepeda',1,'123','PFZ',NULL,2500000,0,0,0,0,1000000,2000000,3000000,500000,1000000,0,0,0,0,0,0,10000000,0,0,0,0,0,10),(31,'raul','u','e',11,'123','raul',NULL,2500000,0,0,0,0,1000000,2000000,3000000,500000,1000000,0,0,0,0,0,0,10000000,0,0,0,0,0,10);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariocredito`
--

DROP TABLE IF EXISTS `usuariocredito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuariocredito` (
  `idCredito` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idAdministrador` int(11) NOT NULL,
  PRIMARY KEY (`idCredito`,`idUsuario`,`idAdministrador`),
  KEY `fk_table1_Usuario2_idx` (`idUsuario`,`idAdministrador`),
  CONSTRAINT `p` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `p2` FOREIGN KEY (`idCredito`) REFERENCES `credito` (`idCredito`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariocredito`
--

LOCK TABLES `usuariocredito` WRITE;
/*!40000 ALTER TABLE `usuariocredito` DISABLE KEYS */;
INSERT INTO `usuariocredito` VALUES (1,1,1),(3,1,1),(5,1,1),(1,31,11),(2,31,11),(3,31,11),(4,31,11);
/*!40000 ALTER TABLE `usuariocredito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariomaquinaria`
--

DROP TABLE IF EXISTS `usuariomaquinaria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuariomaquinaria` (
  `idMaquinaria` int(11) NOT NULL,
  `Producto_idProducto` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `Administrador_idAdministrador` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT '1',
  PRIMARY KEY (`idMaquinaria`,`Producto_idProducto`,`idUsuario`,`Administrador_idAdministrador`),
  KEY `fk_table1_Usuario1_idx` (`idUsuario`,`Administrador_idAdministrador`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariomaquinaria`
--

LOCK TABLES `usuariomaquinaria` WRITE;
/*!40000 ALTER TABLE `usuariomaquinaria` DISABLE KEYS */;
INSERT INTO `usuariomaquinaria` VALUES (1,4,2,1,2),(1,4,5,1,1),(1,4,11,11,1),(8,4,1,1,2),(8,4,21,11,2),(8,4,31,11,2);
/*!40000 ALTER TABLE `usuariomaquinaria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarioproducto`
--

DROP TABLE IF EXISTS `usuarioproducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarioproducto` (
  `idProducto` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idAdministrador` int(11) NOT NULL,
  PRIMARY KEY (`idProducto`,`idUsuario`,`idAdministrador`),
  KEY `fk_table1_Usuario2_idx` (`idUsuario`,`idAdministrador`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarioproducto`
--

LOCK TABLES `usuarioproducto` WRITE;
/*!40000 ALTER TABLE `usuarioproducto` DISABLE KEYS */;
INSERT INTO `usuarioproducto` VALUES (4,1,1),(5,1,1),(5,2,1),(4,5,1),(4,21,11),(4,31,11);
/*!40000 ALTER TABLE `usuarioproducto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarioproductozona`
--

DROP TABLE IF EXISTS `usuarioproductozona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarioproductozona` (
  `idUsuario` int(11) NOT NULL,
  `idAdministrador` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `idZona` int(11) NOT NULL,
  PRIMARY KEY (`idUsuario`,`idAdministrador`,`idProducto`,`idZona`),
  KEY `fk_usuarioproductozona_Producto1_idx` (`idProducto`),
  KEY `fk_usuarioproductozona_Zona1_idx` (`idZona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarioproductozona`
--

LOCK TABLES `usuarioproductozona` WRITE;
/*!40000 ALTER TABLE `usuarioproductozona` DISABLE KEYS */;
INSERT INTO `usuarioproductozona` VALUES (1,1,4,84),(1,1,4,87),(5,1,4,87),(21,11,4,84),(31,11,4,84),(1,1,5,84),(1,1,5,87),(2,1,5,84);
/*!40000 ALTER TABLE `usuarioproductozona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variable`
--

DROP TABLE IF EXISTS `variable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `variable` (
  `idVariable` int(11) NOT NULL AUTO_INCREMENT,
  `concepto` varchar(50) NOT NULL,
  `valor` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`idVariable`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variable`
--

LOCK TABLES `variable` WRITE;
/*!40000 ALTER TABLE `variable` DISABLE KEYS */;
INSERT INTO `variable` VALUES (1,'Clientes',30),(11,'Proveedores',30),(21,'IVA',0.15),(31,'ISR',0.34),(41,'PTU',0.1);
/*!40000 ALTER TABLE `variable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zona`
--

DROP TABLE IF EXISTS `zona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zona` (
  `idZona` int(11) NOT NULL AUTO_INCREMENT,
  `nombreZona` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idZona`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zona`
--

LOCK TABLES `zona` WRITE;
/*!40000 ALTER TABLE `zona` DISABLE KEYS */;
INSERT INTO `zona` VALUES (84,'Queretaro'),(87,'CDMX'),(88,'Tijuana'),(101,'ZonaW');
/*!40000 ALTER TABLE `zona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'basesimv1'
--

--
-- Dumping routines for database 'basesimv1'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-05 18:44:30
