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
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
