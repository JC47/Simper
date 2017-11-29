import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule,NgbActiveModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, Headers,HttpModule} from '@angular/http';
import {SelectModule} from 'angular2-select';
import { AlertModule, ModalModule } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AccordionModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NvD3Module } from 'ng2-nvd3';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { AngularDraggableModule } from 'angular2-draggable';
import { NG2D3Module } from 'ng2d3';
import {NgxChartsModule} from '@swimlane/ngx-charts';

//Rutas
import {app_routing} from './app.routes'


//Servicios
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {AuxiliarService} from './services/auxiliar.service';
import {CompraMaquinariaService} from './services/compra-maquinaria.service';
import {DesarrolloZonaService} from './services/desarrollo-zona.service';
import {AdministradoresService} from './services/administradores.service';

import { UsuariosService } from './services/usuarios.service';
import {GraficasService} from './services/graficas.service';
import {ResultadosOperacionService} from './services/resultados-operacion.service';
import {UsuarioMaquinariaService} from './services/usuario-maquinaria.service';
import {UsuarioCreditoService} from './services/usuario-credito.service';
import {UsuarioProductoService} from './services/usuario-producto.service';
import {UsuarioZonaService} from './services/usuario-zona.service';
import {DesarrolloProductoService} from './services/desarrollo-producto.service';
import {MaquinariaService} from './services/maquinaria.service';
import {ProductoService} from './services/producto.service';
import {CreditosService} from './services/creditos.service';
import {ZonasService} from './services/zonas.service';
import {OperacionService} from './services/operacion.service';
import {BalanceService} from './services/balance.service';
import {ProyectosService} from './services/proyectos.service';
import {ResultadosService} from './services/resultados.service';
import {DashboardService} from './services/dashboard.service';
//Componentes
import { AppComponent } from './app.component';
import { ZonaProductoComponent } from './components/zona-producto/zona-producto.component';
import { DesarrolloMercadoComponent} from './components/usuario/proyecto-usuario/desarrollo-mercado/desarrollo-mercado.component';
import { DesarrolloProductoComponent} from './components/usuario/proyecto-usuario/desarrollo-producto/desarrollo-producto.component';
import { VentaProductosComponent} from './components/usuario/proyecto-usuario/venta-productos/venta-productos.component';
import { CompraMaquinariaComponent} from './components/usuario/proyecto-usuario/compra-maquinaria/compra-maquinaria.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BalanceComponent } from './components/usuario/proyecto-usuario/balance/balance.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MaquinariasComponent } from './components/maquinarias/maquinarias.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { DemandasComponent } from './components/demandas/demandas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent} from './components/usuario/proyectos/proyectos.component';
import { AdministradoresComponent } from './components/administradores/administradores.component';
import { FinanciamientoComponent } from './components/usuario/proyecto-usuario/financiamiento/financiamiento.component';
import { ChartModule } from 'angular2-highcharts';
import {LoginComponent} from './components/login/login.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import {NglModule} from 'ng-lightning/ng-lightning';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { NavbarUsuarioComponent } from './components/usuario/navbar-usuario/navbar-usuario.component';
import { ProyectoUsuarioComponent } from './components/usuario/proyecto-usuario/proyecto-usuario.component';
import { SidenavPComponent } from './components/usuario/proyecto-usuario/sidenav-p/sidenav-p.component';
import { BalanceInicialComponent } from './components/usuario/proyecto-usuario/balance-inicial/balance-inicial.component';
import { BalanceFinalComponent } from './components/usuario/proyecto-usuario/balance-final/balance-final.component';
import { BalanceHomeComponent } from './components/usuario/proyecto-usuario/balance-home/balance-home.component';
import { OperacionComponent } from './components/usuario/proyecto-usuario/operacion/operacion.component';
declare var require : any;
import 'd3';
import 'nvd3';
import { EstadoResultadosComponent } from './components/usuario/proyecto-usuario/estado-resultados/estado-resultados.component';
import { VariablesComponent } from './components/variables/variables.component';
import { DemandaPotencialComponent } from './components/usuario/proyecto-usuario/demanda-potencial/demanda-potencial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SidenavComponent,
    BalanceComponent,
    ZonaProductoComponent,
    ProductosComponent,
    MaquinariasComponent,
    ProyectosComponent,
    CreditosComponent,
    DemandasComponent,
    UsuariosComponent,
    DesarrolloMercadoComponent,
    DesarrolloProductoComponent,
    VentaProductosComponent,
    CompraMaquinariaComponent,
    HomeComponent,
    AdministradoresComponent,
    UsuarioComponent,
    NavbarUsuarioComponent,
    ProyectoUsuarioComponent,
    SidenavPComponent,
    BalanceInicialComponent,
    BalanceFinalComponent,
    BalanceHomeComponent,
    OperacionComponent,
    EstadoResultadosComponent,
    FinanciamientoComponent,
    VariablesComponent,
    DemandaPotencialComponent,
  ],
  imports: [
    FlashMessagesModule,
    BrowserModule,
    NvD3Module,
    NG2D3Module,
    BrowserAnimationsModule,
    AngularDraggableModule,
    NgxChartsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    app_routing,
    CurrencyMaskModule,
    NglModule.forRoot(),
    AccordionModule.forRoot(),
    NgbModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule,
    AlertModule,
    ReactiveFormsModule,
    HttpModule,
    SelectModule,
    SelectModule
  ],
  providers: [UsuariosService,
              AuthService,
              AuthGuard,
              DatePipe,
              DesarrolloProductoService,
              BalanceService,
              UsuarioCreditoService,
              DesarrolloZonaService,
              DashboardService,
              ResultadosService,
              AuxiliarService,
              CompraMaquinariaService,
              ZonasService,
              ResultadosOperacionService,
              OperacionService,
              UsuarioMaquinariaService,
              UsuarioProductoService,
              UsuarioZonaService,
              GraficasService,
              ProyectosService,
              AdministradoresService,
              MaquinariaService,
              ProductoService,
              CreditosService,
              NgbActiveModal,
              NgbModalRef

              ],
  bootstrap: [AppComponent]
})




export class AppModule { }
