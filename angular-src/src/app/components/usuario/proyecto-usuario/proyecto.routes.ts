import { Routes } from '@angular/router';
import { DesarrolloMercadoComponent} from './desarrollo-mercado/desarrollo-mercado.component';
import { DesarrolloProductoComponent} from './desarrollo-producto/desarrollo-producto.component';
import { VentaProductosComponent} from './venta-productos/venta-productos.component';
import { CompraMaquinariaComponent} from './compra-maquinaria/compra-maquinaria.component';
import { BalanceInicialComponent } from './balance-inicial/balance-inicial.component';
import { BalanceFinalComponent } from './balance-final/balance-final.component';
import { BalanceHomeComponent } from './balance-home/balance-home.component';
import { OperacionComponent } from './operacion/operacion.component';
import { EstadoResultadosComponent} from './estado-resultados/estado-resultados.component';
import { FinanciamientoComponent } from './financiamiento/financiamiento.component';
import {DemandaPotencialComponent} from './demanda-potencial/demanda-potencial.component'
import {PruebaComponent} from './prueba/prueba.component';
import {FlujoComponent} from './flujo/flujo.component';
import {AnalisisComponent} from "./analisis/analisis.component";
import {PuntoEquilibrioComponent} from "./punto-equilibrio/punto-equilibrio.component";
import {IntegralesComponent} from './integrales/integrales.component';
import {RazonesComponent} from './razones/razones.component';
import {TendenciasComponent} from './tendencias/tendencias.component';

export const PROYECTO_ROUTES: Routes = [
  { path: 'compraMaquinaria', component: CompraMaquinariaComponent },
  { path: 'estadoResultados', component: EstadoResultadosComponent},
  { path: 'desarrolloProducto', component: DesarrolloProductoComponent },
  { path: 'desarrolloMercado', component: DesarrolloMercadoComponent },
  { path: 'produccion', component: VentaProductosComponent },
  { path: 'operacion', component: OperacionComponent },
  { path: 'demandaPotencial', component: DemandaPotencialComponent },
  { path: 'financiamiento', component: FinanciamientoComponent },
  { path: 'home', component: BalanceHomeComponent},
  { path: 'balance_inicial', component: BalanceInicialComponent },
  { path: 'balance_final', component: BalanceFinalComponent },
  { path: 'comparativa', component: PruebaComponent },
  { path: 'flujo', component: FlujoComponent },
  { path: 'analisis', component:AnalisisComponent },
  { path: 'puntoEquilibrio', component:PuntoEquilibrioComponent },
  { path: 'integrales', component:IntegralesComponent },
  { path: 'razones', component:RazonesComponent },
  { path: 'tendencias', component:TendenciasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
