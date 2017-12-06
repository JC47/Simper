webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, ".meanPage{\r\noverflow: hidden;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!-- <app-navbar></app-navbar> -->\r\n<div class=\"meanPage\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<!-- <app-sidenav></app-sidenav> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_select__ = __webpack_require__("../../../../angular2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_nvd3__ = __webpack_require__("../../../../ng2-nvd3/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_currency_mask__ = __webpack_require__("../../../../ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_draggable__ = __webpack_require__("../../../../angular2-draggable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2d3__ = __webpack_require__("../../../../ng2d3/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auxiliar_service__ = __webpack_require__("../../../../../src/app/services/auxiliar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_compra_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/compra-maquinaria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_desarrollo_zona_service__ = __webpack_require__("../../../../../src/app/services/desarrollo-zona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_administradores_service__ = __webpack_require__("../../../../../src/app/services/administradores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_graficas_service__ = __webpack_require__("../../../../../src/app/services/graficas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_resultados_operacion_service__ = __webpack_require__("../../../../../src/app/services/resultados-operacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_usuario_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/usuario-maquinaria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_usuario_credito_service__ = __webpack_require__("../../../../../src/app/services/usuario-credito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_usuario_producto_service__ = __webpack_require__("../../../../../src/app/services/usuario-producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_usuario_zona_service__ = __webpack_require__("../../../../../src/app/services/usuario-zona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_desarrollo_producto_service__ = __webpack_require__("../../../../../src/app/services/desarrollo-producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/maquinaria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_variables_service__ = __webpack_require__("../../../../../src/app/services/variables.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_creditos_service__ = __webpack_require__("../../../../../src/app/services/creditos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_zonas_service__ = __webpack_require__("../../../../../src/app/services/zonas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_operacion_service__ = __webpack_require__("../../../../../src/app/services/operacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_proyectos_service__ = __webpack_require__("../../../../../src/app/services/proyectos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_resultados_service__ = __webpack_require__("../../../../../src/app/services/resultados.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_dashboard_service__ = __webpack_require__("../../../../../src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_zona_producto_zona_producto_component__ = __webpack_require__("../../../../../src/app/components/zona-producto/zona-producto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_usuario_proyecto_usuario_desarrollo_mercado_desarrollo_mercado_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-mercado/desarrollo-mercado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_usuario_proyecto_usuario_desarrollo_producto_desarrollo_producto_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-producto/desarrollo-producto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_usuario_proyecto_usuario_venta_productos_venta_productos_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/venta-productos/venta-productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_usuario_proyecto_usuario_compra_maquinaria_compra_maquinaria_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/compra-maquinaria/compra-maquinaria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_usuario_proyecto_usuario_balance_balance_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance/balance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_productos_productos_component__ = __webpack_require__("../../../../../src/app/components/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_maquinarias_maquinarias_component__ = __webpack_require__("../../../../../src/app/components/maquinarias/maquinarias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_creditos_creditos_component__ = __webpack_require__("../../../../../src/app/components/creditos/creditos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_demandas_demandas_component__ = __webpack_require__("../../../../../src/app/components/demandas/demandas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_usuarios_usuarios_component__ = __webpack_require__("../../../../../src/app/components/usuarios/usuarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_usuario_proyectos_proyectos_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyectos/proyectos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_administradores_administradores_component__ = __webpack_require__("../../../../../src/app/components/administradores/administradores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_usuario_proyecto_usuario_financiamiento_financiamiento_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/financiamiento/financiamiento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_usuario_usuario_component__ = __webpack_require__("../../../../../src/app/components/usuario/usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_usuario_navbar_usuario_navbar_usuario_component__ = __webpack_require__("../../../../../src/app/components/usuario/navbar-usuario/navbar-usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_usuario_proyecto_usuario_proyecto_usuario_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/proyecto-usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__components_usuario_proyecto_usuario_sidenav_p_sidenav_p_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/sidenav-p/sidenav-p.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__components_usuario_proyecto_usuario_balance_inicial_balance_inicial_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-inicial/balance-inicial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__components_usuario_proyecto_usuario_balance_final_balance_final_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-final/balance-final.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__components_usuario_proyecto_usuario_balance_home_balance_home_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-home/balance-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__components_usuario_proyecto_usuario_operacion_operacion_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/operacion/operacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_70_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_usuario_proyecto_usuario_estado_resultados_estado_resultados_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/estado-resultados/estado-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__components_variables_variables_component__ = __webpack_require__("../../../../../src/app/components/variables/variables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__components_usuario_proyecto_usuario_demanda_potencial_demanda_potencial_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/demanda-potencial/demanda-potencial.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//Rutas

//Servicios
























//Componentes

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_41__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_59__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_48__components_usuario_proyecto_usuario_balance_balance_component__["a" /* BalanceComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_zona_producto_zona_producto_component__["a" /* ZonaProductoComponent */],
            __WEBPACK_IMPORTED_MODULE_50__components_productos_productos_component__["a" /* ProductosComponent */],
            __WEBPACK_IMPORTED_MODULE_51__components_maquinarias_maquinarias_component__["a" /* MaquinariasComponent */],
            __WEBPACK_IMPORTED_MODULE_56__components_usuario_proyectos_proyectos_component__["a" /* ProyectosComponent */],
            __WEBPACK_IMPORTED_MODULE_52__components_creditos_creditos_component__["a" /* CreditosComponent */],
            __WEBPACK_IMPORTED_MODULE_53__components_demandas_demandas_component__["a" /* DemandasComponent */],
            __WEBPACK_IMPORTED_MODULE_54__components_usuarios_usuarios_component__["a" /* UsuariosComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_usuario_proyecto_usuario_desarrollo_mercado_desarrollo_mercado_component__["a" /* DesarrolloMercadoComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_usuario_proyecto_usuario_desarrollo_producto_desarrollo_producto_component__["a" /* DesarrolloProductoComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_usuario_proyecto_usuario_venta_productos_venta_productos_component__["a" /* VentaProductosComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_usuario_proyecto_usuario_compra_maquinaria_compra_maquinaria_component__["a" /* CompraMaquinariaComponent */],
            __WEBPACK_IMPORTED_MODULE_55__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_57__components_administradores_administradores_component__["a" /* AdministradoresComponent */],
            __WEBPACK_IMPORTED_MODULE_61__components_usuario_usuario_component__["a" /* UsuarioComponent */],
            __WEBPACK_IMPORTED_MODULE_62__components_usuario_navbar_usuario_navbar_usuario_component__["a" /* NavbarUsuarioComponent */],
            __WEBPACK_IMPORTED_MODULE_63__components_usuario_proyecto_usuario_proyecto_usuario_component__["a" /* ProyectoUsuarioComponent */],
            __WEBPACK_IMPORTED_MODULE_64__components_usuario_proyecto_usuario_sidenav_p_sidenav_p_component__["a" /* SidenavPComponent */],
            __WEBPACK_IMPORTED_MODULE_65__components_usuario_proyecto_usuario_balance_inicial_balance_inicial_component__["a" /* BalanceInicialComponent */],
            __WEBPACK_IMPORTED_MODULE_66__components_usuario_proyecto_usuario_balance_final_balance_final_component__["a" /* BalanceFinalComponent */],
            __WEBPACK_IMPORTED_MODULE_67__components_usuario_proyecto_usuario_balance_home_balance_home_component__["a" /* BalanceHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_68__components_usuario_proyecto_usuario_operacion_operacion_component__["a" /* OperacionComponent */],
            __WEBPACK_IMPORTED_MODULE_71__components_usuario_proyecto_usuario_estado_resultados_estado_resultados_component__["a" /* EstadoResultadosComponent */],
            __WEBPACK_IMPORTED_MODULE_58__components_usuario_proyecto_usuario_financiamiento_financiamiento_component__["a" /* FinanciamientoComponent */],
            __WEBPACK_IMPORTED_MODULE_72__components_variables_variables_component__["a" /* VariablesComponent */],
            __WEBPACK_IMPORTED_MODULE_73__components_usuario_proyecto_usuario_demanda_potencial_demanda_potencial_component__["a" /* DemandaPotencialComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_10_ng2_nvd3__["NvD3Module"],
            __WEBPACK_IMPORTED_MODULE_14_ng2d3__["NG2D3Module"],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_draggable__["a" /* AngularDraggableModule */],
            __WEBPACK_IMPORTED_MODULE_15__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["b" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16__app_routes__["a" /* app_routing */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_currency_mask__["CurrencyMaskModule"],
            __WEBPACK_IMPORTED_MODULE_60_ng_lightning_ng_lightning__["a" /* NglModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["c" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["d" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["b" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_select__["SelectModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_23__services_usuarios_service__["a" /* UsuariosService */],
            __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["CurrencyPipe"],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_30__services_desarrollo_producto_service__["a" /* DesarrolloProductoService */],
            __WEBPACK_IMPORTED_MODULE_37__services_balance_service__["a" /* BalanceService */],
            __WEBPACK_IMPORTED_MODULE_27__services_usuario_credito_service__["a" /* UsuarioCreditoService */],
            __WEBPACK_IMPORTED_MODULE_21__services_desarrollo_zona_service__["a" /* DesarrolloZonaService */],
            __WEBPACK_IMPORTED_MODULE_40__services_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_39__services_resultados_service__["a" /* ResultadosService */],
            __WEBPACK_IMPORTED_MODULE_19__services_auxiliar_service__["a" /* AuxiliarService */],
            __WEBPACK_IMPORTED_MODULE_33__services_variables_service__["a" /* VariablesService */],
            __WEBPACK_IMPORTED_MODULE_20__services_compra_maquinaria_service__["a" /* CompraMaquinariaService */],
            __WEBPACK_IMPORTED_MODULE_35__services_zonas_service__["a" /* ZonasService */],
            __WEBPACK_IMPORTED_MODULE_25__services_resultados_operacion_service__["a" /* ResultadosOperacionService */],
            __WEBPACK_IMPORTED_MODULE_36__services_operacion_service__["a" /* OperacionService */],
            __WEBPACK_IMPORTED_MODULE_26__services_usuario_maquinaria_service__["a" /* UsuarioMaquinariaService */],
            __WEBPACK_IMPORTED_MODULE_28__services_usuario_producto_service__["a" /* UsuarioProductoService */],
            __WEBPACK_IMPORTED_MODULE_29__services_usuario_zona_service__["a" /* UsuarioZonaService */],
            __WEBPACK_IMPORTED_MODULE_24__services_graficas_service__["a" /* GraficasService */],
            __WEBPACK_IMPORTED_MODULE_38__services_proyectos_service__["a" /* ProyectosService */],
            __WEBPACK_IMPORTED_MODULE_22__services_administradores_service__["a" /* AdministradoresService */],
            __WEBPACK_IMPORTED_MODULE_31__services_maquinaria_service__["a" /* MaquinariaService */],
            __WEBPACK_IMPORTED_MODULE_32__services_producto_service__["a" /* ProductoService */],
            __WEBPACK_IMPORTED_MODULE_34__services_creditos_service__["a" /* CreditosService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModalRef */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_41__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_usuario_usuario_component__ = __webpack_require__("../../../../../src/app/components/usuario/usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_administrador_routes__ = __webpack_require__("../../../../../src/app/components/home/administrador.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_usuario_usuario_routes__ = __webpack_require__("../../../../../src/app/components/usuario/usuario.routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app_routing; });







var APP_ROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'Administrador', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]],
        children: __WEBPACK_IMPORTED_MODULE_5__components_home_administrador_routes__["a" /* ADMIN_ROUTES */]
    },
    { path: 'Usuario', component: __WEBPACK_IMPORTED_MODULE_3__components_usuario_usuario_component__["a" /* UsuarioComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]],
        children: __WEBPACK_IMPORTED_MODULE_6__components_usuario_usuario_routes__["a" /* USUARIO_ROUTES */]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
var app_routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//Calette was here
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/administradores/administradores.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/administradores/administradores.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h2 class=\"text-center col-2 offset-5 \">Administradores</h2>\r\n    <button type=\"button\" (click)=\"openNew()\" class=\"btn btn-warning col-1 offset-4\">Agregar</button>\r\n\r\n  </div>\r\n\r\n  <hr>\r\n  <div class=\"text-center\" *ngFor=\"let alert of alerts\" style=\"z-index:10000;width:100%; \">\r\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\"><h3>{{ alert.msg }}</h3></alert>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" style=\"height:1000px;overflow-y:scroll \">\r\n\r\n\r\n<!--++++++++++++++++++++++++++++++   Tarjeta de Administrador    +++++++++++++++++++++++++++++++++++-->\r\n\r\n\r\n<div class=\"card-columns\" >\r\n  <div class=\"card\" *ngFor=\"let admin of administradores\">\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <img class=\"\" src=\"assets/img/user.png\" alt=\"Card image cap\" style=\"height:100px\">\r\n        <div class=\"col-8\">\r\n          <h4 class=\"card-title\">{{admin.nombreAdmin}} {{admin.apPat}}</h4>\r\n          Usuario: {{admin.user}} <br>\r\n          Contraseña:{{admin.contra}}\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <div  class=\"btn btn-primary offset-1 col-4\" (click)=\"openEdit(admin)\">Editar</div>\r\n      <button type=\"button\" class=\"btn btn-danger offset-1 col-4\" (click)=\"confDelete(admin)\" >Eliminar</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!--- +++++++++++++++++++++++++++ Formulario para agregar +++++++++++++++++++++++++++++++++++++++++ -->\r\n<div ngDraggable bsModal  #modalNew=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title col-12 text-center\">Agregar Administrador</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"newForm\" (ngSubmit)=\"guarda(newForm.value)\"  >\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Nombre</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !newForm.get('nombreAdmin').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"nombreAdmin\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!newForm.controls['nombreAdmin'].valid\">\r\n                         El nombre es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Apellido Paterno</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !newForm.get('apPat').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"apPat\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!newForm.controls['apPat'].valid\">\r\n                         El apellido es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Apellido Materno</label>\r\n            <div class=\"col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('apMat').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"apMat\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!newForm.controls['apMat'].valid\">\r\n                       El apellido es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Nombre de usuario</label>\r\n            <div class=\"col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('user').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"user\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!newForm.controls['user'].valid\">\r\n                       El nombre es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Contraseña</label>\r\n            <div class=\"col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('contra').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"contra\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!newForm.controls['contra'].valid\">\r\n                       La contraseña es requerida\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n              <div class=\"modal-footer\">\r\n\r\n                  <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalNew.hide()\">\r\n                  Cancelar\r\n                  </button>\r\n                <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!newForm.valid\" >\r\n                  Guardar\r\n                </button>\r\n\r\n\r\n              </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--- Boton de Acción de Formulario de Edición--->\r\n\r\n\r\n\r\n<!--- Modal de edición +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\r\n\r\n<div bsModal #modalEdit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title text-center col-12\">Editar Administrador</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"editaAdmin(editForm.value)\"  >\r\n\r\n\r\n\r\n              <div class=\"form-group row\" hidden>\r\n                <label class=\"col-6 col-form-label\">id</label>\r\n                <div class=\"col-8\">\r\n\r\n                  <input class=\"form-control\"\r\n                         type=\"text\"\r\n                         placeholder=\"Nombre de Usuario\"\r\n                         formControlName=\"idAdministrador\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row text-center\" >\r\n                <label class=\"col-5 col-form-label\">Nombre</label>\r\n                <div class=\"col-6 has-success\"\r\n                [ngClass]=\"{'has-danger': !editForm.get('nombreAdmin').valid}\">\r\n\r\n\r\n                  <input class=\"form-control\"\r\n                         type=\"text\"\r\n                         formControlName=\"nombreAdmin\" >\r\n                         <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                         *ngIf=\"!editForm.controls['nombreAdmin'].valid\">\r\n                           El nombre es requerido\r\n                         </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"form-group row text-center\" >\r\n                <label class=\"col-5 col-form-label\">Apellido Paterno</label>\r\n                <div class=\"col-6 has-success\"\r\n                [ngClass]=\"{'has-danger': !editForm.get('apPat').valid}\">\r\n\r\n\r\n                  <input class=\"form-control\"\r\n                         type=\"text\"\r\n                         formControlName=\"apPat\" >\r\n                         <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                         *ngIf=\"!editForm.controls['apPat'].valid\">\r\n                           El apellido es requerido\r\n                         </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Apellido Materno</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('apMat').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"apMat\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!editForm.controls['apMat'].valid\">\r\n                         El apellido es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Nombre de usuario</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('user').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"user\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!editForm.controls['user'].valid\">\r\n                         El nombre es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Contraseña</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('contra').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"contra\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!editForm.controls['contra'].valid\">\r\n                         La contraseña es requerida\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n              <div class=\"modal-footer\">\r\n                <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalEdit.hide()\">\r\n                Cancelar\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!editForm.valid\" >\r\n                  Guardar\r\n                </button>\r\n\r\n\r\n              </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div bsModal #modalConfDelete=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center \">Confirmación</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n\r\n        <div class=\"row text-center\">\r\n          ¿Estas seguro que deseas eliminar el administrador \"{{adminDelete.nombreAdmin}}\" ?\r\n          <br>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <button type=\"button\" class=\"btn btn-danger offset-2 col-3\"  (click)=\"eliminaAdmin(adminDelete.idAdministrador)\">Si</button>\r\n          <button type=\"button\" class=\"btn btn-primary offset-2 col-3\" (click)=\"modalConfDelete.hide()\">No</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/administradores/administradores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_administradores_service__ = __webpack_require__("../../../../../src/app/services/administradores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministradoresComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdministradoresComponent = (function () {
    function AdministradoresComponent(_administradoresService, modalService) {
        this._administradoresService = _administradoresService;
        this.modalService = modalService;
        this.alerts = [];
        this.administradores = new Array();
        this.adminDelete = {
            idAdministrador: 0,
            nombreAdmin: "",
            apPat: "",
            apMat: "",
            contra: "",
            user: ""
        };
        this.newForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            'nombreAdmin': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'apPat': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'apMat': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'user': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'contra': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
        this.editForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            'idAdministrador': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'nombreAdmin': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'apPat': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'apMat': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'user': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'contra': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
        this.administradores = this._administradoresService.returnAdministradores();
    }
    AdministradoresComponent.prototype.ngOnInit = function () {
    };
    AdministradoresComponent.prototype.guarda = function (admin) {
        if (!this.buscaRepetidos(admin)) {
            this._administradoresService.guardarAdministrador(admin);
            this.modalNew.hide();
            this.alerts.push({
                type: 'success',
                msg: "Administrador \"" + (admin.nombreAdmin) + "\" agregado",
                timeout: 2000
            });
        }
        else {
            alert("repetidos");
        }
    };
    AdministradoresComponent.prototype.buscaRepetidos = function (admin) {
        for (var _i = 0, _a = this.administradores; _i < _a.length; _i++) {
            var admiS = _a[_i];
            if (admin.nombreAdmin + " " + admin.apPat + " " + admin.apMat == admiS.nombreAdmin + " " + admiS.apPat + " " + admiS.apMat) {
                return true;
            }
        }
    };
    AdministradoresComponent.prototype.editaAdmin = function (admin) {
        this._administradoresService.setAdministrador(admin).subscribe();
        this.modalEdit.hide();
        this.alerts.push({
            type: 'success',
            msg: "Administrador Editado",
            timeout: 2000
        });
    };
    AdministradoresComponent.prototype.eliminaAdmin = function (idAdministrador) {
        this._administradoresService.deleteAdministrador(idAdministrador).subscribe();
        console.log("Eliminado", idAdministrador);
        this.modalConfDelete.hide();
        this.alerts.push({
            type: 'danger',
            msg: "Administrador Eliminado",
            timeout: 2000
        });
    };
    AdministradoresComponent.prototype.openNew = function () {
        this.modalNew.show();
        this.newForm.reset();
    };
    //Abre formulario para editar un item
    AdministradoresComponent.prototype.openEdit = function (admin) {
        this.modalEdit.show();
        console.log(admin);
        this.editForm.setValue(admin);
    };
    AdministradoresComponent.prototype.confDelete = function (admin) {
        this.adminDelete = admin;
        console.log(this.adminDelete);
        this.modalConfDelete.show();
    };
    return AdministradoresComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalEdit'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], AdministradoresComponent.prototype, "modalEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalNew'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _b || Object)
], AdministradoresComponent.prototype, "modalNew", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConfDelete'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _c || Object)
], AdministradoresComponent.prototype, "modalConfDelete", void 0);
AdministradoresComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-administradores',
        template: __webpack_require__("../../../../../src/app/components/administradores/administradores.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/administradores/administradores.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_administradores_service__["a" /* AdministradoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_administradores_service__["a" /* AdministradoresService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */]) === "function" && _e || Object])
], AdministradoresComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=administradores.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/creditos/creditos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/creditos/creditos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"text-center\">Creditos</h2>\r\n  <hr>\r\n  <div class=\"text-center\" *ngFor=\"let alert of alerts\" style=\"z-index:10000;width:100%; \">\r\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\"><h3>{{ alert.msg }}</h3></alert>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"container\" style=\"overflow:scroll; height:1000px;\">\r\n\r\n  <div class=\"card-columns\" >\r\n    <div class=\"card\" *ngFor=\"let credito of creditos\">\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"row\">\r\n          <img  src=\"assets/img/credit.png\"  style=\"height:100px;margin-left:30px\">\r\n\r\n          <div class=\"col-7\">\r\n            <h4 class=\"card-title\">{{credito.nombreCredito}}</h4>\r\n            <p class=\"card-text\">\r\n              Monto minimo: {{credito.montoMax}}<br>\r\n              Monto máximo: {{credito.montoMin}}<br>\r\n              Plazo: {{credito.plazo}} años\r\n            </p>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"card-footer\">\r\n          <div  class=\"btn btn-primary  offset-1 col-4\" (click)=\"openEdit(credito)\" >Editar</div>\r\n          <button type=\"button\" class=\"btn btn-danger col-5 offset-1\" (click)=\"confDelete(credito)\" >Eliminar</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div bsModal #modalNew=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title col-12 text-center\">Agregar Credito</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form [formGroup]=\"newForm\" (ngSubmit)=\"agregaCredito(newForm.value)\"  >\r\n\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Nombre Prestamo</label>\r\n              <div class=\"col-6 has-success\"  [ngClass]=\"{'has-danger': !newForm.get('nombreCredito').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"nombreCredito\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!newForm.controls['nombreCredito'].valid\">\r\n                         El nombre es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center \">\r\n            <label class=\"col-5 col-form-label\">Monto Minimo</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('montoMin').valid}\">\r\n              <span class=\"input-group-addon\">P</span>\r\n              <input type=\"number\" class=\"form-control\"\r\n              formControlName=\"montoMin\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-7 text-center col-4 has-success\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('montoMin').valid}\"\r\n            *ngIf=\"!newForm.controls['montoMin'].valid\">\r\n              El interes es reuqerido\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"form-group row text-center \">\r\n            <label class=\"col-5 col-form-label\">Monto Máximo</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('montoMax').valid}\">\r\n              <span class=\"input-group-addon\">P</span>\r\n              <input type=\"number\" class=\"form-control\"\r\n              formControlName=\"montoMax\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-7 text-center col-4 has-success\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('montoMax').valid}\"\r\n            *ngIf=\"!newForm.controls['montoMax'].valid\">\r\n              El interes es reuqerido\r\n            </div>\r\n          </div>\r\n\r\n          <fieldset class=\"form-group row\">\r\n     <label class=\"col-form-legend col-5 text-center\">Tipo de Credito:</label>\r\n     <div class=\"col-12 row\">\r\n       <div class=\"form-check col-6\">\r\n         <label class=\"form-check-label\">\r\n           <input class=\"form-check-input text-center\" type=\"radio\" name=\"tipo\"  value=\"1\" checked formControlName=\"tipo\">\r\n           Intereses Inicial\r\n         </label>\r\n       </div>\r\n       <div class=\"form-check col-6 \">\r\n         <label class=\"form-check-label text-center\">\r\n           <input class=\"form-check-input\" type=\"radio\" name=\"tipo\" value=\"2\" formControlName=\"tipo\">\r\n           Intereses en Periodos\r\n         </label>\r\n       </div>\r\n       <div class=\"form-check col-6 \">\r\n         <label class=\"form-check-label text-center\">\r\n           <input class=\"form-check-input\" type=\"radio\" name=\"tipo\" value=\"3\" formControlName=\"tipo\">\r\n           Intereses inicial y en Periodos\r\n         </label>\r\n       </div>\r\n     </div>\r\n   </fieldset>\r\n\r\n\r\n            <div class=\"form-group row text-center \">\r\n            <label class=\"col-5 col-form-label\">Pago Anticipado</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('pagoAnticipado').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input type=\"number\" class=\"form-control\"\r\n              formControlName=\"pagoAnticipado\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-7 text-center col-4 has-success\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('pagoAnticipado').valid}\"\r\n            *ngIf=\"!newForm.controls['pagoAnticipado'].valid\">\r\n              El interes es reuqerido\r\n            </div>\r\n          </div>\r\n\r\n\r\n            <div class=\"form-group row text-center \">\r\n            <label class=\"col-5 col-form-label\">Descripción</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('pago').valid}\">\r\n              <span class=\"input-group-addon\">D</span>\r\n              <input type=\"text\" class=\"form-control\"\r\n              formControlName=\"pago\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-7 text-center col-4 has-success\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('pago').valid}\"\r\n            *ngIf=\"!newForm.controls['pago'].valid\">\r\n              El interes es reuqerido\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"container row\" style=\"margin-top:20px\">\r\n            <div class=\"col-12\">\r\n                <h6 class=\"col-12 text-left\">Pagos de Credito:</h6>\r\n                <div formArrayName=\"pagosCredito\">\r\n                  <div *ngFor=\"let pago of newForm.controls.pagosCredito.controls; let i=index\">\r\n                    <div [formGroupName]=\"i\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-9\">\r\n                        <div class=\"form-group row text-center \">\r\n                        <label class=\"col-3 col-form-label\">Pago {{i}}</label>\r\n\r\n                        <div class=\"input-group col-8 has-success\"\r\n                        [ngClass]=\"{'has-danger': validaCampo(i,'pago')}\">\r\n                          <span class=\"input-group-addon\">P</span>\r\n                          <input type=\"number\" class=\"form-control\"\r\n                          formControlName=\"pago\">\r\n\r\n                        </div>\r\n\r\n                        <div class=\"form-control-feedback offset-7 text-center col-4 has-success\"\r\n                        style=\"font-size:10px;\"\r\n                        [ngClass]=\"{'has-danger': validaCampo(i,'pago')}\"\r\n                        *ngIf=\"validaCampo(i,'pago')\">\r\n                          El interes es reuqerido\r\n                        </div>\r\n                      </div>\r\n                      </div>\r\n                      <div class=\"col-2\">\r\n                          <button type=\"button\" class=\"btn btn-danger\" (click)=\"eliminaPagoNew(i)\">Eliminar</button>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"inputPago(editForm,0)\">Agregar</button>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n            <div class=\"modal-footer\">\r\n              <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalNew.hide()\">\r\n              Cancelar\r\n              </button>\r\n\r\n              <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!newForm.valid\" >\r\n                Guardar\r\n              </button>\r\n\r\n\r\n\r\n            </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div bsModal #modalEdit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title col-12 text-center\">Editar Prestamos</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"editaCredito(editForm.value)\"  >\r\n\r\n            <input type=\"number\" formControlName=\"idCredito\" hidden=\"true\">\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-7 col-form-label\">Nombre Prestamo</label>\r\n              <div class=\"col-4 has-success\"  [ngClass]=\"{'has-danger': !editForm.get('nombreCredito').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"nombreCredito\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!editForm.controls['nombreCredito'].valid\">\r\n                         El nombre es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center \">\r\n            <label class=\"col-7 col-form-label\">Monto Minimo</label>\r\n\r\n            <div class=\"input-group col-4 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('montoMin').valid}\">\r\n              <span class=\"input-group-addon\">P</span>\r\n              <input type=\"number\" class=\"form-control\"\r\n              formControlName=\"montoMin\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-7 text-center col-4 has-success\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('montoMin').valid}\"\r\n            *ngIf=\"!editForm.controls['montoMin'].valid\">\r\n              El interes es reuqerido\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n\r\n            <div class=\"form-group row text-center \">\r\n            <label class=\"col-7 col-form-label\">Monto Máximo</label>\r\n\r\n            <div class=\"input-group col-4 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('montoMax').valid}\">\r\n              <span class=\"input-group-addon\">P</span>\r\n              <input type=\"number\" class=\"form-control\"\r\n              formControlName=\"montoMax\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-7 text-center col-4 has-success\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('montoMax').valid}\"\r\n            *ngIf=\"!editForm.controls['montoMax'].valid\">\r\n              El interes es reuqerido\r\n            </div>\r\n          </div>\r\n\r\n            <div class=\"form-group row text-center \">\r\n            <label class=\"col-7 col-form-label\">Pago Anticipado</label>\r\n\r\n            <div class=\"input-group col-4 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('pagoAnticipado').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input type=\"number\" class=\"form-control\"\r\n              formControlName=\"pagoAnticipado\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-7 text-center col-4 has-success\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('pagoAnticipado').valid}\"\r\n            *ngIf=\"!editForm.controls['pagoAnticipado'].valid\">\r\n              El interes es reuqerido\r\n            </div>\r\n          </div>\r\n\r\n\r\n            <div class=\"form-group row text-center \">\r\n            <label class=\"col-7 col-form-label\">Descripción</label>\r\n\r\n            <div class=\"input-group col-4 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('pago').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input type=\"text\" class=\"form-control\"\r\n              formControlName=\"pago\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-7 text-center col-4 has-success\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('pago').valid}\"\r\n            *ngIf=\"!editForm.controls['pago'].valid\">\r\n              El interes es reuqerido\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <h5 class=\"text-left\">Pagos:</h5>\r\n            <div formArrayName=\"pagosCredito\">\r\n              <div *ngFor=\"let pago of editForm.controls.pagosCredito.controls; let i=index\">\r\n\r\n                <div [formGroupName]=\"i\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-9\">\r\n                      <div class=\"form-group row text-center \">\r\n                      <label class=\"col-3 col-form-label\">Pago {{i}}</label>\r\n\r\n                      <div class=\"input-group col-8 has-success\"\r\n                      [ngClass]=\"{'has-danger': validaCampoEdit(i)}\">\r\n                        <span class=\"input-group-addon\">P</span>\r\n                        <input type=\"number\" class=\"form-control\"\r\n                        formControlName=\"pago\">\r\n\r\n                      </div>\r\n\r\n                      <div class=\"form-control-feedback offset-7 text-center col-4 has-success\"\r\n                      style=\"font-size:10px;\"\r\n                      [ngClass]=\"{'has-danger': validaCampoEdit(i)}\"\r\n                      *ngIf=\"validaCampoEdit(i)\">\r\n                        El interes es reuqerido\r\n                      </div>\r\n                    </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-2\">\r\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"eliminaPagoEdit(i)\">Eliminar</button>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"inputPagoEdit()\">Agregar</button>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"modal-footer\">\r\n              <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalEdit.hide()\">\r\n              Cancelar\r\n              </button>\r\n              <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!editForm.valid\" >\r\n                Guardar\r\n              </button>\r\n\r\n\r\n\r\n            </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div bsModal #modalConfDelete=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\" col-12 text-center\">Confirmación</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n\r\n        <div class=\"row text-center\">\r\n          ¿Estas seguro que deseas eliminar el credito \"{{creditoDelete.nombreCredito}}\" ?\r\n          <br>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <button type=\"button\" class=\"btn btn-danger offset-2 col-3\"  (click)=\"eliminaCredito(creditoDelete)\">Si</button>\r\n          <button type=\"button\" class=\"btn btn-primary offset-2 col-3\" (click)=\"modalConfDelete.hide()\">No</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<button type=\"button\" (click)=\"openNew()\" class=\"btn btn-warning btn-floating\">Agregar</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/creditos/creditos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_creditos_service__ = __webpack_require__("../../../../../src/app/services/creditos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreditosComponent = (function () {
    function CreditosComponent(_creditosService, modalService, _fb) {
        this._creditosService = _creditosService;
        this.modalService = modalService;
        this._fb = _fb;
        this.creditos = [];
        this.alerts = [];
        this.creditoDelete = {
            idCredito: null,
            nombreCredito: null,
            montoMinimo: null,
            montoMaximo: null,
            pagoAnticipado: null,
            pago: null,
            pagosCredito: [],
            plazo: null
        };
        this.newForm = this._fb.group({
            nombreCredito: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            montoMin: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            montoMax: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            tipo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            pagoAnticipado: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            pago: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            pagosCredito: this._fb.array([])
        });
        this.editForm = this._fb.group({
            idCredito: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            nombreCredito: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            montoMin: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            montoMax: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            pagoAnticipado: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            pago: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            pagosCredito: this._fb.array([])
        });
        this.creditos = this._creditosService.establecerValores();
        console.log(this.creditos);
    }
    CreditosComponent.prototype.ngOnInit = function () {
    };
    CreditosComponent.prototype.validaCampo = function (i) {
        if (this.newForm.controls.pagosCredito.get(i + "").get('pago').valid)
            return false;
        else
            return true;
    };
    CreditosComponent.prototype.validaCampoEdit = function (i) {
        if (this.editForm.controls.pagosCredito.get(i + "").get('pago').valid)
            return false;
        else
            return true;
    };
    CreditosComponent.prototype.initProductoOfNew = function (pago) {
        return this._fb.group({
            pago: [pago, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    };
    CreditosComponent.prototype.initPagoOfEdit = function (pago, idPago) {
        return this._fb.group({
            pago: [pago, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            idPago: [idPago, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    };
    CreditosComponent.prototype.eliminaPagoNew = function (i) {
        this.newForm.controls['pagosCredito'].removeAt(i);
    };
    CreditosComponent.prototype.eliminaPagoEdit = function (i) {
        this.editForm.controls['pagosCredito'].removeAt(i);
    };
    CreditosComponent.prototype.agregaCredito = function (credito) {
        console.log(credito);
        //this._creditosService.guardarCredito(credito);
        this.modalNew.hide();
        this.alerts.push({
            type: 'success',
            msg: "Usuario \"" + (credito.nombreCredito) + "\" agregado",
            timeout: 2000
        });
        console.log(credito);
        this.creditos = this._creditosService.guardarCredito(credito);
    };
    CreditosComponent.prototype.editaCredito = function (credito) {
        console.log(credito);
        this._creditosService.setCreditos(credito).subscribe();
        this.modalEdit.hide();
        this.alerts.push({
            type: 'success',
            msg: "Usuario \"" + (credito.nombreCredito) + "\" agregado",
            timeout: 2000
        });
        this.editForm.controls['pagosCredito'] = this._fb.array([]);
    };
    CreditosComponent.prototype.eliminaCredito = function (id) {
        this._creditosService.deleteCredito(id.idCredito).subscribe(function (data) {
            console.log("Data", data);
        });
        this.modalConfDelete.hide();
        this.alerts.push({
            type: 'danger',
            msg: "Credito eliminado",
            timeout: 2000
        });
    };
    CreditosComponent.prototype.openEdit = function (credito) {
        this.editForm.controls['montoMax'].setValue(credito.montoMax);
        this.editForm.controls['montoMin'].setValue(credito.montoMin);
        this.editForm.controls['nombreCredito'].setValue(credito.nombreCredito);
        this.editForm.controls['pagoAnticipado'].setValue(credito.pagoAnticipado);
        this.editForm.controls['pago'].setValue(credito.pago);
        this.editForm.controls['idCredito'].setValue(credito.idCredito);
        for (var _i = 0, _a = credito.pagosTotales; _i < _a.length; _i++) {
            var pago = _a[_i];
            this.inputPagoEdit(pago.pagosCredito);
        }
        this.modalEdit.show();
        //this.editForm.setValue(credito);
    };
    CreditosComponent.prototype.openNew = function () {
        var cantidadpagosCredito = this.newForm.controls['pagosCredito'].value.length;
        for (var i = 0; i < cantidadpagosCredito; i++) {
            this.newForm.controls['pagosCredito'].removeAt(0);
        }
        this.newForm.reset();
        this.modalNew.show();
    };
    CreditosComponent.prototype.inputPago = function (form, pago) {
        this.newForm.controls['pagosCredito'].push(this.initProductoOfNew(pago));
        console.log(this.newForm.controls.pagosCredito);
    };
    CreditosComponent.prototype.inputPagoEdit = function (pago) {
        this.editForm.controls['pagosCredito'].push(this.initProductoOfNew(pago));
    };
    CreditosComponent.prototype.confDelete = function (credito) {
        this.creditoDelete = credito;
        console.log(this.creditoDelete);
        this.modalConfDelete.show();
    };
    return CreditosComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalEdit'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], CreditosComponent.prototype, "modalEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalNew'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _b || Object)
], CreditosComponent.prototype, "modalNew", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConfDelete'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _c || Object)
], CreditosComponent.prototype, "modalConfDelete", void 0);
CreditosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-creditos',
        template: __webpack_require__("../../../../../src/app/components/creditos/creditos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/creditos/creditos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_creditos_service__["a" /* CreditosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_creditos_service__["a" /* CreditosService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _f || Object])
], CreditosComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=creditos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/demandas/demandas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/demandas/demandas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"text-center\">Zonas</h2>\r\n  <hr>\r\n  <div class=\"text-center\" *ngFor=\"let alert of alerts\" style=\"z-index:10000;width:100%; \">\r\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\"><h3>{{ alert.msg }}</h3></alert>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"card-columns\" >\r\n    <div class=\"card\" *ngFor=\"let zona of zonas \">\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"row\">\r\n          <img src=\"assets/img/zone.png\" style=\"height:80px;margin-left:30px;margin-bottom:20px;\" >\r\n          <div class=\"col-7\">\r\n            <h4 class=\"card-title\">{{zona.nombreZona}}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div  class=\"btn btn-primary offset-1 col-4\" (click)=\"openEdit(zona)\">Editar</div>\r\n          <button type=\"button\" class=\"btn btn-danger col-5 offset-1\" (click)=\"confDelete(zona)\">Eliminar</button>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div bsModal #modalConfDelete=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center \">Confirmación</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n\r\n        <div class=\"row text-center\">\r\n          ¿Estas seguro que deseas eliminar la Zona ?\r\n          <br>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <button type=\"button\" class=\"btn btn-danger offset-2 col-3\"  (click)=\"eliminaZona(zonaDelete.idZona)\">Si</button>\r\n          <button type=\"button\" class=\"btn btn-primary offset-2 col-3\" (click)=\"modalConfDelete.hide()\">No</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!--- Boton para abrir formulario par agregar nueva maquinaria -->\r\n\r\n<button type=\"button\" (click)=\"openNew()\" class=\"btn btn-success btn-floating\">Agregar</button>\r\n<p>\r\n  <!-- <div [routerLink]=\"['zonas','demandas']\">\r\n    <button type=\"button\" class=\"btn btn-warning btn-floating\">Editar Zonas</button>\r\n  </div>\r\n -->\r\n\r\n<!-- Formulario para agregar un nuevo producto -->\r\n\r\n<!-- <ng-template #newModal let-c=\"close\" let-d=\"dismiss\"  >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Agregar Maquinaria</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n</ng-template> -->\r\n\r\n\r\n<div ngDraggable bsModal #modalNew=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center\">Agrega Zona de Demanda</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"newForm\" (ngSubmit)=\"guardaZona(newForm.value)\" class=\"offset-1\"  >\r\n\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-12 col-form-label text-center\">Nombre</label>\r\n            <div class=\"col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('nombreZona').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"nombreZona\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!newForm.controls['nombreZona'].valid\">\r\n                       El nombre es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n            <!-- <div class=\"form-group row\">\r\n              <label class=\"col-7 col-form-label text-center\">Nombre Zona</label>\r\n              <div class=\"col-4\">\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       placeholder=\"Nombre\"\r\n                       formControlName=\"nombreZona\">\r\n              </div>\r\n            </div> -->\r\n\r\n          <div class=\"col-11\">\r\n            <b>Productos Demandados:</b>\r\n              <hr>\r\n            <div formArrayName=\"productos\">\r\n              <div *ngFor=\"let producto of newForm.controls.productos.controls; let i=index\" class=\"form-control\" style=\"margin-top:15px\">\r\n\r\n                  <div class=\"\" [formGroupName]=\"i\">\r\n\r\n\r\n\r\n                    <div class=\"form-group row\">\r\n                        <button type=\"button\" class=\"btn btn-danger row\" (click)=\"deleteProducto(i,newForm)\">X</button>\r\n                      <hr>\r\n                      <label class=\"col-4 col-form-label text-center offset-1\">Producto: {{i+1}}</label>\r\n                      <div class=\"col-6\" >\r\n                        <select formControlName=\"Producto_idProducto\" class=\"form-control\" valueChanges=\"evento()\">\r\n                          <option *ngFor=\"let producto of productos\" value={{producto.idProducto}}>{{producto.nombreProd}}</option>\r\n                        </select>\r\n\r\n                        <div class=\"form-control-feedback text-center \" style=\"font-size:10px;\"\r\n                        [ngClass]=\"{'has-danger': validaCampo(i,'Producto_idProducto')}\"\r\n                        *ngIf=\"validaCampo(i,'Producto_idProducto')\">\r\n                          Debes seleccionar un producto\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group row text-center\">\r\n                      <label class=\"col-5 col-form-label\">Costo Desarrollo</label>\r\n\r\n                      <div class=\"input-group col-6 has-success\"\r\n                      [ngClass]=\"{'has-danger': validaCampo(i,'costoDes')}\">\r\n                        <span class=\"input-group-addon\">$</span>\r\n                        <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\"\r\n                        class=\"form-control\"\r\n                        formControlName=\"costoDes\">\r\n\r\n                      </div>\r\n\r\n                      <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n                      style=\"font-size:10px;\" [ngClass]=\"{'has-danger': validaCampo(i,'costoDes')}\"\r\n                      *ngIf=\"validaCampo(i,'costoDes')\">\r\n                        El costo es requerido\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group row text-center\">\r\n                      <label class=\"col-5 col-form-label\">Tiempo de Desarrollo</label>\r\n\r\n                      <div class=\"input-group col-6 has-success\"\r\n                      [ngClass]=\"{'has-danger': validaCampo(i,'tiempoDes')}\">\r\n                        <span class=\"input-group-addon\">$</span>\r\n                        <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\"\r\n                        class=\"form-control\"\r\n                        formControlName=\"tiempoDes\">\r\n\r\n                      </div>\r\n\r\n                      <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n                      style=\"font-size:10px;\" [ngClass]=\"{'has-danger': validaCampo(i,'tiempoDes')}\"\r\n                      *ngIf=\"validaCampo(i,'tiempoDes')\">\r\n                        El costo es requerido\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n\r\n\r\n<!--\r\n                      <div class=\"form-group row\">\r\n                        <label class=\"col-5 col-form-label offset-1 text-center\">Tiempo Desarrollo</label>\r\n                        <div class=\"input-group  col-5\">\r\n                          <span class=\"input-group-addon\">$</span>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"tiempoDes\">\r\n                        </div>\r\n                      </div> -->\r\n\r\n\r\n                      <!-- <input type=\"text\" formControlName=\"tiempoDes\"> -->\r\n\r\n\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\"  *ngIf=\"repetido\" style=\"margin-top:20px;\">\r\n                <div class=\"col-12 text-center\" style=\"color:red\">\r\n                  No puedes agregar productos repetidos\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top:20px; margin-bottom:20px;\">\r\n              <button type=\"button\" class=\" btn btn-primary\" (click)=\"inputProducto(newForm)\">Agregar</button>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"modal-footer\">\r\n                <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalNew.hide()\">\r\n                Cancelar\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!newForm.valid\"   >\r\n                  Guardar\r\n                </button>\r\n\r\n\r\n\r\n              </div>\r\n        </form>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ng-template #editModal let-c=\"close\" let-d=\"dismiss\"  >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Agregar Maquinaria</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n</ng-template> -->\r\n\r\n\r\n\r\n<div ngDraggable bsModal #modalEdit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center\">Edita Zona de Demanda</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"editaZona(editForm.value)\"  >\r\n\r\n\r\n            <div class=\"form-group row\" hidden=\"\">\r\n              <label class=\"col-5 col-form-label offset-1\" >Id:</label>\r\n              <div class=\"col-5\">\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       placeholder=\"id\"\r\n                       formControlName=\"idZona\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-5 col-form-label offset-1\">Nombre Zona</label>\r\n              <div class=\"col-5\">\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       placeholder=\"Nombre\"\r\n                       formControlName=\"nombreZona\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"form-control\"><b>Productos Demandados:</b>\r\n          <hr>\r\n          <div formArrayName=\"productos\">\r\n            <div *ngFor=\"let producto of editForm.controls.productos.controls; let i=index\" >\r\n\r\n\r\n                <div class=\"form-group row\" [formGroupName]=\"i\">\r\n                  <label class=\"col-3 col-form-label text-center\">\r\n                    <h6>\r\n                      {{getNameById(producto.controls['Producto_idProducto'].value)}}\r\n                    </h6>\r\n                  </label>\r\n                  <button type=\"button\" class=\"btn btn-primary col-3 offset-1\" (click)=\"openEditProd(producto,editForm.controls['idZona'].value)\">Editar</button>\r\n                    <button type=\"button\" class=\"btn btn-danger col-3 offset-1\" (click)=\"eliminaProducto(producto.controls['Producto_idProducto'].value, editForm.controls['idZona'].value,i)\" >Eliminar</button>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <br>\r\n\r\n          <div class=\"form-group row\">\r\n              <!-- <div class=\"offset-1 col-6\">\r\n                <select class=\"form-control\" [(ngModel)]=\"preSelected\" [ngModelOptions]=\"{standalone: true}\">\r\n                  <option *ngFor=\"let producto of productos\" [value]=\"producto.idProducto\">{{producto.nombreProd}}</option>\r\n                </select>\r\n          </div> -->\r\n\r\n          <div class=\"col-6 offset-1\" >\r\n            <select  class=\"form-control\" [(ngModel)]=\"preSelected\" [ngModelOptions]=\"{standalone: true}\">\r\n              <option *ngFor=\"let producto of productos\" [value]=\"producto.idProducto\">{{producto.nombreProd}}</option>\r\n            </select>\r\n\r\n            <div class=\"form-control-feedback text-center \" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': preSelected==null}\"\r\n            *ngIf=\"preSelected==null\">\r\n              Debes seleccionar un producto\r\n            </div>\r\n          </div>\r\n          <button type=\"button\" class=\" btn btn-primary col-3\" (click)=\"agregaProd(editForm.get('idZona').value,preSelected,0,0)\" [disabled]=\"preSelected==null\">Agregar</button>\r\n          </div>\r\n\r\n\r\n\r\n\r\n              <div class=\"modal-footer\">\r\n                <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cerrarEdit()\">\r\n                Cancelar\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-outline-success\" >\r\n                  Guardar\r\n                </button>\r\n\r\n\r\n\r\n              </div>\r\n        </form>\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!--///////////////////////////////////////// Modal para editar un producto/////////////////////////////////////////7 -->\r\n\r\n<div bsModal #modalEditProd=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center\">Edita Producto de Zona</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form [formGroup]=\"productoZona\" (ngSubmit)=\"guardaProductoZona(productoZona.value)\" class=\"offset-1\"  >\r\n\r\n          <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n          formControlName=\"idZona\" hidden>\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-7 col-form-label\">Costo de Desarrollo</label>\r\n\r\n            <div class=\"input-group col-4 has-success \" [ngClass]=\"{'has-danger': !productoZona.get('costoDes').valid}\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input type=\"number\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n                formControlName=\"costoDes\">\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-7 text-center col-4\" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !productoZona.get('costoDes').valid}\"\r\n            *ngIf=\"!productoZona.controls['costoDes'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-7 col-form-label\">Tiempo Desarrollo</label>\r\n\r\n            <div class=\"input-group col-4 has-success \" [ngClass]=\"{'has-danger': !productoZona.get('tiempoDes').valid}\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input type=\"number\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n                formControlName=\"tiempoDes\">\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-7 text-center col-4\" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !productoZona.get('costoDes').valid}\"\r\n            *ngIf=\"!productoZona.controls['tiempoDes'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"modal-footer\">\r\n            <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalEditProd.hide()\">\r\n            Cancelar\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!productoZona.valid\">\r\n              Guardar\r\n            </button>\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n        </form>\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/demandas/demandas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_zonas_service__ = __webpack_require__("../../../../../src/app/services/zonas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemandasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DemandasComponent = (function () {
    function DemandasComponent(modalService, _demandaService, _fb, _productosService, router) {
        this.modalService = modalService;
        this._demandaService = _demandaService;
        this._fb = _fb;
        this._productosService = _productosService;
        this.router = router;
        this.zonas = new Array();
        this.productosSelected = [0];
        this.selecEdit = [
            {
                value: 0,
                label: ""
            }
        ];
        this.repetidoEdit = false;
        this.repetido = false;
        this.productos = [];
        this.selectedValue = [
            {
                value: 0,
                label: ""
            }
        ];
        this.select = [
            {
                value: 0,
                label: ""
            }
        ];
        this.alerts = [];
    }
    DemandasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zonas = this._demandaService.returnZonasNormales();
        console.log(this.zonas);
        this.productos = this._productosService.returnProductos();
        this.newForm = this._fb.group({
            nombreZona: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            productos: this._fb.array([
                this.initProductoOfNew(0, 0, 0),
            ])
        });
        this.productoZona = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            'idZona': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
            'idProducto': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
            'costoDes': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
            'tiempoDes': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
        });
        this.editForm = this._fb.group({
            idZona: [''],
            nombreZona: [''],
            productos: this._fb.array([])
        });
        this.newForm.controls.productos.valueChanges.subscribe(function (data) {
            var control = _this.newForm.controls['productos'];
            console.log("entrando evento");
            for (var i = 0; i < data.length; i++) {
                for (var j = i + 1; j < data.length; j++) {
                    //console.log(data[j].Producto_idProducto,data[i].Producto_idProducto)
                    if (data[j].Producto_idProducto == data[i].Producto_idProducto) {
                        control.removeAt(j);
                        _this.repetido = true;
                    }
                    //console.log(this.newForm.controls.productos.get(j.toString()).get("Producto_idProducto"))
                    if (!data[i] == data.length) {
                        //control.removeAt(data.lenght-1);
                    }
                }
            }
        });
    };
    DemandasComponent.prototype.noRepeat = function () {
        var productos = this.newForm.controls.productos.value;
        var repeat = 0;
        for (var i = 0; i < productos.length; i++)
            for (var j = i + 1; j < productos.length; j++)
                if (productos[i].Producto_idProducto == productos[j].Producto_idProducto)
                    return false;
                else
                    return true;
        return null;
    };
    DemandasComponent.prototype.validaNew = function () {
        console.log(this.newForm.valid && this.noRepeat());
        return "Hola";
    };
    DemandasComponent.prototype.initProductoOfNew = function (id, costo, tiempo) {
        return this._fb.group({
            Producto_idProducto: [id, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            costoDes: [costo, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            tiempoDes: [tiempo, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    };
    DemandasComponent.prototype.initPeriodoOfNew = function () {
        return this._fb.group({
            numPerido: [0],
            demanda: [0]
        });
    };
    DemandasComponent.prototype.inputProducto = function (form, id, costo, tiempo) {
        this.repetido = false;
        var control = form.controls['productos'];
        if (form.controls.productos.valid) {
            control.push(this.initProductoOfNew(id, costo, tiempo));
        }
        else
            alert("Completa campos del producto anterior para agregar uno nuevo");
    };
    DemandasComponent.prototype.agregaProd = function (idZona, idProducto, costo, tiempo) {
        for (var _i = 0, _a = this.editForm.controls.productos.value; _i < _a.length; _i++) {
            var prod = _a[_i];
            if (prod.Producto_idProducto == this.preSelected) {
                alert("producto repetido");
                return;
            }
        }
        this._demandaService.addProducto(idZona, idProducto, costo, tiempo);
        this.inputProducto(this.editForm, idProducto, 0, 0);
    };
    DemandasComponent.prototype.guardaProductoZona = function (productoZona) {
        console.log(productoZona);
        this.modalEditProd.hide();
        this._demandaService.editProductoZona(productoZona).subscribe();
        this.editForm.controls.productos = this._fb.array([]);
        this.modalEdit.hide();
    };
    DemandasComponent.prototype.evento = function () {
        console.log("Evento de Selecr Producto");
    };
    DemandasComponent.prototype.deleteProducto = function (i, form) {
        var control = form.controls['productos'];
        console.log(i);
        control.removeAt(i);
    };
    DemandasComponent.prototype.openEditAgrega = function (idZona, idProducto) {
        this.modalEditProd.show();
        this.productoZona.controls['idZona'].setValue(idZona);
        this.productoZona.controls['idProducto'].setValue(idProducto);
    };
    DemandasComponent.prototype.openEditProd = function (producto, idZona) {
        this.modalEditProd.show();
        this.productoZona.controls['idZona'].setValue(idZona);
        this.productoZona.controls['idProducto'].setValue(producto.controls['Producto_idProducto'].value);
        this.productoZona.controls['costoDes'].setValue(producto.controls['costoDes'].value);
        this.productoZona.controls['tiempoDes'].setValue(producto.controls['tiempoDes'].value);
    };
    DemandasComponent.prototype.eliminaProducto = function (idProducto, idZona, i) {
        var x = {
            idZona: idZona,
            idProducto: idProducto
        };
        this._demandaService.deleteProducto(x).subscribe();
        this.deleteProducto(i, this.editForm);
        //this.modalEdit.hide();
    };
    DemandasComponent.prototype.objetoEnvio = function (zona) {
        var ids = [];
        for (var _i = 0, _a = zona.productos; _i < _a.length; _i++) {
            var producto_1 = _a[_i];
            ids.push(producto_1.idProducto);
        }
        return {
            nombreZona: zona.nombreZona,
            tiempoDes: zona.tiempoDes,
            costoDes: zona.costoDes,
            productos: ids
        };
    };
    DemandasComponent.prototype.guardaZona = function (zona) {
        if (!this.buscaRepetidos(zona)) {
            this._demandaService.guardarZona(zona);
            this.modalNew.hide();
            this.alerts.push({
                type: 'success',
                msg: "Zona \"" + (zona.nombreZona) + "\" agregada",
                timeout: 2000
            });
        }
        else {
            alert("Repetido");
        }
    };
    DemandasComponent.prototype.buscaRepetidos = function (zonaS) {
        for (var _i = 0, _a = this.zonas; _i < _a.length; _i++) {
            var zona_1 = _a[_i];
            if (zona_1.nombreZona == zonaS.nombreZona) {
                return true;
            }
        }
    };
    DemandasComponent.prototype.editaZona = function (zona) {
        console.log(this.editForm.controls.productos.value);
        console.log(this.editForm.controls.productos.value.length);
        this._demandaService.setZona(zona).subscribe();
        this.modalEdit.hide();
        this.editForm.controls.productos = this._fb.array([]);
        this.alerts.push({
            type: 'success',
            msg: "Zona \"" + (zona.nombreZona) + "\" editada",
            timeout: 2000
        });
    };
    DemandasComponent.prototype.validaCampo = function (i, campo) {
        if (this.newForm.controls.productos.get(i + "").get(campo).valid)
            return false;
        else
            return true;
    };
    DemandasComponent.prototype.cerrarEdit = function () {
        this.modalEdit.hide();
        this.editForm.controls.productos = this._fb.array([]);
    };
    DemandasComponent.prototype.eliminaZona = function (id) {
        this._demandaService.deleteZona(id).subscribe();
        this.modalConfDelete.hide();
        this.alerts.push({
            type: 'danger',
            msg: "Zona Eliminada",
            timeout: 2000
        });
    };
    //Abre formulario para agrear nuevo item
    DemandasComponent.prototype.openNew = function (content) {
        this.newForm.reset();
        this.modalNew.show();
    };
    //Abre formulario para editar un item
    DemandasComponent.prototype.openEdit = function (zona) {
        var select = {
            value: 0,
            label: ""
        };
        this.modalEdit.show();
        console.log("openEdit", zona.productos);
        this.editForm.controls['idZona'].setValue(zona.idZona);
        this.editForm.controls['nombreZona'].setValue(zona.nombreZona);
        //this.editForm.controls['productos'].setValue(zona.productos);
        for (var _i = 0, _a = zona.productos; _i < _a.length; _i++) {
            var producto_2 = _a[_i];
            //console.log(producto.Producto_idProducto,producto.costoDes,producto.tiempoDes);
            this.inputProducto(this.editForm, producto_2.Producto_idProducto, producto_2.costoDes, producto_2.tiempoDes);
        }
        console.log("Controls Value", this.editForm.controls.productos.value);
    };
    DemandasComponent.prototype.itemSelcted = function (idRequired, idselect, index) {
        if (idRequired == idselect)
            return "0";
        else
            return "1";
    };
    DemandasComponent.prototype.getNameById = function (id) {
        //console.log("name of: ",id);
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto_3 = _a[_i];
            //console.log(producto.idProducto,id);
            if (producto_3.idProducto == id)
                return producto_3.nombreProd;
        }
        return "no encontrado";
    };
    DemandasComponent.prototype.confDelete = function (zona) {
        this.zonaDelete = zona;
        this.modalConfDelete.show();
    };
    return DemandasComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalEdit'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], DemandasComponent.prototype, "modalEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalNew'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _b || Object)
], DemandasComponent.prototype, "modalNew", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConfDelete'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _c || Object)
], DemandasComponent.prototype, "modalConfDelete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalEditProd'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _d || Object)
], DemandasComponent.prototype, "modalEditProd", void 0);
DemandasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-demandas',
        template: __webpack_require__("../../../../../src/app/components/demandas/demandas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/demandas/demandas.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services_zonas_service__["a" /* ZonasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_zonas_service__["a" /* ZonasService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _j || Object])
], DemandasComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=demandas.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/administrador.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__productos_productos_component__ = __webpack_require__("../../../../../src/app/components/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maquinarias_maquinarias_component__ = __webpack_require__("../../../../../src/app/components/maquinarias/maquinarias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demandas_demandas_component__ = __webpack_require__("../../../../../src/app/components/demandas/demandas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuarios_usuarios_component__ = __webpack_require__("../../../../../src/app/components/usuarios/usuarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__creditos_creditos_component__ = __webpack_require__("../../../../../src/app/components/creditos/creditos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zona_producto_zona_producto_component__ = __webpack_require__("../../../../../src/app/components/zona-producto/zona-producto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__administradores_administradores_component__ = __webpack_require__("../../../../../src/app/components/administradores/administradores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__variables_variables_component__ = __webpack_require__("../../../../../src/app/components/variables/variables.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMIN_ROUTES; });








var ADMIN_ROUTES = [
    { path: 'variables', component: __WEBPACK_IMPORTED_MODULE_7__variables_variables_component__["a" /* VariablesComponent */] },
    { path: 'productos', component: __WEBPACK_IMPORTED_MODULE_0__productos_productos_component__["a" /* ProductosComponent */] },
    { path: 'maquinarias', component: __WEBPACK_IMPORTED_MODULE_1__maquinarias_maquinarias_component__["a" /* MaquinariasComponent */] },
    { path: 'usuarios', component: __WEBPACK_IMPORTED_MODULE_3__usuarios_usuarios_component__["a" /* UsuariosComponent */] },
    { path: 'creditos', component: __WEBPACK_IMPORTED_MODULE_4__creditos_creditos_component__["a" /* CreditosComponent */] },
    { path: 'administradores', component: __WEBPACK_IMPORTED_MODULE_6__administradores_administradores_component__["a" /* AdministradoresComponent */] },
    { path: 'zonas', component: __WEBPACK_IMPORTED_MODULE_2__demandas_demandas_component__["a" /* DemandasComponent */] },
    { path: 'demandas', component: __WEBPACK_IMPORTED_MODULE_5__zona_producto_zona_producto_component__["a" /* ZonaProductoComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'usuarios' }
];
//# sourceMappingURL=administrador.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainPage{\r\n  padding-left: 20%;\r\n  padding-top: 120px;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n<app-navbar></app-navbar>\r\n  <div class=\"mainPage\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfileAdmin().subscribe(function (data) {
            _this.admin = data.admin;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\n\r\n/*\r\n\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n}\r\n\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    cursor: default;\r\n}\r\n\r\n\r\n.card {\r\n    background-color: #F7F7F7;\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    -moz-border-radius: 2px;\r\n    -webkit-border-radius: 2px;\r\n    border-radius: 2px;\r\n    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    -moz-border-radius: 50%;\r\n    -webkit-border-radius: 50%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n}\r\n\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n}\r\n\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n\r\n.btn.btn-signin {\r\n    background-color: rgb(104, 145, 162);\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    -moz-border-radius: 3px;\r\n    -webkit-border-radius: 3px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    -o-transition: all 0.218s;\r\n    -moz-transition: all 0.218s;\r\n    -webkit-transition: all 0.218s;\r\n    transition: all 0.218s;\r\n}\r\n\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n}\r\n\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n}\r\n\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n}*/\r\n\r\n\r\n*{\r\n  box-sizing:border-box;\r\n  -moz-box-sizing:border-box;\r\n  -webkit-box-sizing:border-box;\r\n  font-family:arial;\r\n}\r\nbody{background:url(\"http://www.galaxiastudio.com/wp-content/uploads/2014/03/2252.jpg\")#FF9000}\r\nh1{\r\n  color:#AAA173;\r\n  text-align:center;\r\n  font-size: 45px;\r\n  font-faimly:icon;\r\n}\r\n\r\n.login-form{\r\n  width:350px;\r\n  padding:20px 30px;\r\n  background-color:#FF895D;\r\n  opacity: 0.7;\r\n  border-radius:4px;\r\n  -moz-border-radius:4px;\r\n  -webkit-border-radius:10px;\r\n  margin:50px auto;\r\n  margin-top: 45px;\r\n  box-shadow: 11px -4px 70px -1px rgba(0,0,0,0.54);\r\n\r\n}\r\n\r\n.img-log{\r\n  height: 120px;\r\n  border-radius: 50%;\r\n  margin-left: 85px;\r\n  margin-bottom:20px;\r\n}\r\n.form-group{\r\n  position: relative;\r\n  margin-bottom:15px;\r\n}\r\n.form-control{\r\n  width:100%;\r\n  height:50px;\r\n  border:none;\r\n  padding:5px 7px 5px 15px;\r\n  background:#fff;\r\n  color:#666;\r\n  border:2px solid #E0D68F;\r\n  border-radius:4px;\r\n  -moz-border-radius:4px;\r\n  -webkit-border-radius:4px;\r\n}\r\n.form-control:focus, .form-control:focus + .fa{\r\n  border-color:#007CB9;\r\n  color:#007CB9;\r\n}\r\n.form-group .fa{\r\n  position: absolute;\r\n  right:15px;\r\n  top:17px;\r\n  color:#999;\r\n}\r\n.log-status.wrong-entry {\r\n  -webkit-animation: wrong-log 0.3s;\r\n  animation: wrong-log 0.3s;\r\n}\r\n.wrong-entry{\r\n  border-color: #ed1c24;\r\n  color: #ed1c24;\r\n}\r\n@keyframes wrong-log {\r\n  0% { left: 0px;}\r\n  20% {left: 15px;}\r\n  40% {left: -15px;}\r\n  60% {left: 15px;}\r\n  80% {left: -15px;}\r\n  100% {left: 0px;}\r\n}\r\n@-webkit-keyframes wrong-log {\r\n  0% { left: 0px;}\r\n  20% {left: 15px;}\r\n  40% {left: -15px;}\r\n  60% {left: 15px;}\r\n  80% {left: -15px;}\r\n  100% {left: 0px;}\r\n}\r\n.log-btn{\r\n  background:#005689;\r\n  dispaly:inline-block;\r\n  width:100%;\r\n  font-size:20px;\r\n  height:50px;\r\n  color:#fff;\r\n  border-radius:4px;\r\n  -moz-border-radius:4px;\r\n  -webkit-border-radius:4px;\r\n}\r\n\r\n.link{\r\n  text-decoration:none;\r\n  color:#9D8E79;\r\n  display:block;\r\n  text-align:right;\r\n  font-size:12px;\r\n  margin-bottom:15px;\r\n}\r\n.link:hover{\r\n  text-decoration:underline;\r\n  color:#8C918F;\r\n}\r\n.alert{\r\n  font-size:18px;\r\n  color:#f00;\r\n  float:left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image:url('assets/img/fondo1.jpeg');background-attachment: fixed;background-size:cover;\r\noverflow:hidden; margin-top:80px;height:600px\">\r\n  <!-- <div class=\"container\" style=\"margin-top:120px;\"> -->\r\n          <!-- <div class=\"card card-container\">\r\n              <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\r\n              <p id=\"profile-name\" class=\"profile-name-card\"></p>\r\n              <form class=\"form-signin\" [formGroup]=\"login\" (ngSubmit)=\"onLoginSubmit()\">\r\n                  <span id=\"reauth-email\" class=\"reauth-email\"></span>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Nombre de Usuario\" formControlName=\"username\" required autofocus>\r\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña\" formControlName=\"password\" required>\r\n                    <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Entrar</button>\r\n              </form>\r\n          </div> -->\r\n\r\n          <h1 style=\"margin-top:60px;color:#005689\">Vision y Sensibilidad en los Negocios</h1>\r\n          <div class=\"login-form\" >\r\n     <img src=\"assets/img/perfil.jpg\" class=\"img-log\" alt=\"\">\r\n     <form [formGroup]=\"login\" (ngSubmit)=\"onLoginSubmit()\">\r\n       <div class=\"form-group \">\r\n         <input type=\"text\" class=\"form-control\" placeholder=\"Usuario \" formControlName=\"username\"\r\n         [ngClass]=\"{'wrong-entry':!validUser}\">\r\n\r\n       </div>\r\n       <div class=\"form-group log-status\">\r\n         <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña\" formControlName=\"password\"\r\n         [ngClass]=\"{'wrong-entry':!validPass}\">\r\n       </div>\r\n        <span *ngIf=\"!validPass\" class=\"alert\">Contraseña Incorrecta</span>\r\n        <span *ngIf=\"!validUser\" class=\"alert\">Usuario Incorrecto</span>\r\n       <button type=\"submit\" class=\"log-btn\" >Entrar</button>\r\n     </form>\r\n\r\n\r\n\r\n   </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.validUser = true;
        this.validPass = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
        this.login = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            'username': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            'password': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var datos = {
            username: this.login.controls['username'].value,
            password: this.login.controls['password'].value
        };
        this.authService.authenticateAdmin(datos).subscribe(function (data) {
            if (data.success) {
                // alert("Logeado como administrador");
                _this.validPass = true;
                _this.validUser = true;
                _this.authService.storeAdminData(data.token, data.admin);
                _this.router.navigate(['/Administrador']);
            }
            else {
                if (data.msg == 'Usuario No Encontrado') {
                    _this.validUser = true;
                    _this.validPass = true;
                    _this.authService.authenticateUsuario(datos).subscribe(function (data) {
                        if (data.success) {
                            // alert("Logeado como usuario");
                            _this.validPass = true;
                            _this.validUser = true;
                            _this.authService.storeUsuarioData(data.token, data.usuario);
                            _this.router.navigate(['/Usuario']);
                        }
                        else {
                            if (data.msg == "Usuario No Encontrado") {
                                _this.validPass = true;
                                _this.validUser = false;
                            }
                            else {
                                _this.validPass = false;
                                _this.validUser = true;
                            }
                        }
                    });
                }
                else {
                    _this.validPass = false;
                    _this.validUser = true;
                }
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/maquinarias/maquinarias.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/maquinarias/maquinarias.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h2 class=\"col-4 offset-4 text-center\">Maquinarias</h2>\r\n    <button type=\"button\" (click)=\"openNew()\" class=\"btn btn-warning col-1 offset-3\">Agregar</button>\r\n\r\n  </div>\r\n\r\n  <hr>\r\n  <div class=\"text-center\" *ngFor=\"let alert of alerts\" style=\"z-index:10000;width:100%; \">\r\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\"><h3>{{ alert.msg }}</h3></alert>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"container\" style=\"overflow:scroll; height:1000px;\">\r\n\r\n\r\n\r\n<!-- Card para Maquinarias -->\r\n<div class=\"card-columns\">\r\n  <div class=\"card\" *ngFor=\"let maquina of maquinas\">\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <img src=\"assets/img/machine.png\" alt=\"Card image cap\" style=\"height:70px;margin-top:20px; margin-left:20px;margin-bottom:20px;\">\r\n\r\n        <div class=\"col-8\">\r\n          <h4 class=\"card-title\">{{maquina.nombreMaq}}</h4>\r\n\r\n          <h6 class=\"card-subtitle \" style=\"margin-bottom:15px\"><b>Costo:</b> {{maquina.costo | currency:'USD':true }}</h6>\r\n          <h6 class=\"card-subtitle \" style=\"margin-bottom:15px\"><b>Producción:</b> {{maquina.cantidadProd}}u</h6>\r\n          <h6 class=\"card-subtitle \" style=\"margin-bottom:15px\"><b>Producto:</b> {{getNameById(maquina.Producto_idProducto)}}</h6>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-footer\">\r\n        <div  class=\"btn btn-primary offset-1 col-4\" (click)=\"openEdit(maquina)\">Editar</div>\r\n        <button type=\"button\" class=\"btn btn-danger  col-5 offset-1\" (click)=\"confDelete(maquina)\" >Eliminar</button>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--         Formulario de Edicion------------------------------->\r\n\r\n<!-- <ng-template #editModal let-c=\"close\" let-d=\"dismiss\"  >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Editar Maquinaria</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <\r\n\r\n\r\n      </div>\r\n\r\n</ng-template> -->\r\n\r\n<div ngDraggable bsModal #modalEdit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center\">Edita Maquinaria</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"editaMaquina(editForm.value)\" class=\"offset-1\"  >\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Nombre</label>\r\n            <div class=\"col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('nombreMaq').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"nombreMaq\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!editForm.controls['nombreMaq'].valid\">\r\n                       El nombre es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Costo</label>\r\n\r\n            <div class=\"input-group col-6 has-success \" [ngClass]=\"{'has-danger': !editForm.get('costo').valid}\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input type=\"number\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n                formControlName=\"costo\">\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-6 text-center col-4\" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costo').valid}\"\r\n            *ngIf=\"!editForm.controls['costo'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        <div class=\"form-group row text-center\" >\r\n          <label class=\"col-5 col-form-label\">Depreciación</label>\r\n\r\n          <div class=\"input-group col-6 has-success \" [ngClass]=\"{'has-danger': !editForm.get('depAcum').valid}\">\r\n              <span class=\"input-group-addon\">%</span>\r\n              <input type=\"number\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n              formControlName=\"depAcum\">\r\n\r\n\r\n\r\n          </div>\r\n          <div class=\"form-control-feedback offset-6 text-center col-4\" style=\"font-size:10px;\"\r\n          [ngClass]=\"{'has-danger': !editForm.get('depAcum').valid}\"\r\n          *ngIf=\"!editForm.controls['depAcum'].valid\">\r\n            El porcentaje es requerido\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-group row text-center\" >\r\n          <label class=\"col-5 col-form-label\">Capacidad en Unidades</label>\r\n\r\n          <div class=\"input-group col-6 has-success \" [ngClass]=\"{'has-danger': !editForm.get('cantidadProd').valid}\">\r\n              <span class=\"input-group-addon\">%</span>\r\n              <input type=\"number\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n              formControlName=\"cantidadProd\">\r\n\r\n\r\n\r\n          </div>\r\n          <div class=\"form-control-feedback offset-6 text-center col-4\" style=\"font-size:10px;\"\r\n          [ngClass]=\"{'has-danger': !editForm.get('cantidadProd').valid}\"\r\n          *ngIf=\"!editForm.controls['cantidadProd'].valid\">\r\n            La cantidad es requerida\r\n          </div>\r\n        </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-5 col-form-label text-center\">Producto: </label>\r\n            <!-- <div class=\"col-6\">\r\n              <select formControlName=\"Producto_idProducto\">\r\n                <option *ngFor=\"let option of selectValue\" [selected]=\"option.value==selected.value\" value={{option.value}}>{{option.label}}</option>\r\n              </select>\r\n            </div> -->\r\n\r\n            <div class=\"col-6 \" >\r\n              <select formControlName=\"Producto_idProducto\" class=\"form-control\" >\r\n                <option *ngFor=\"let option of selectValue\" [selected]=\"option.value==selected.value\" value={{option.value}}>{{option.label}}</option>\r\n              </select>\r\n              <div class=\"form-control-feedback text-center \" style=\"font-size:10px;\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('Producto_idProducto').valid}\"\r\n              *ngIf=\"!editForm.controls['Producto_idProducto'].valid\">\r\n                Debes seleccionar un producto\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n              <div class=\"modal-footer\">\r\n\r\n                <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalEdit.hide()\">\r\n                Cancelar\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!editForm.valid\" >\r\n                  Guardar\r\n                </button>\r\n\r\n\r\n\r\n              </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!--- Boton para abrir formulario par agregar nueva maquinaria -->\r\n\r\n\r\n\r\n<!-- Formulario para agregar un nuevo producto -->\r\n\r\n<!-- <ng-template #newModal let-c=\"close\" let-d=\"dismiss\"  >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Agregar Maquinaria</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n</ng-template> -->\r\n\r\n\r\n<div ngDraggable bsModal #modalNew=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center\">Agrega Maquinaria</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form [formGroup]=\"newForm\" (ngSubmit)=\"guarda(newForm.value)\" class=\"offset-1\" >\r\n\r\n\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Nombre</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !newForm.get('nombreMaq').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"nombreMaq\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!newForm.controls['nombreMaq'].valid\">\r\n                         El nombre es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Costo</label>\r\n\r\n              <div class=\"input-group col-6 has-success \" [ngClass]=\"{'has-danger': !newForm.get('costo').valid}\">\r\n                  <span class=\"input-group-addon\">$</span>\r\n                  <input type=\"number\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n                  formControlName=\"costo\">\r\n\r\n\r\n\r\n              </div>\r\n              <div class=\"form-control-feedback offset-6 text-center col-4\" style=\"font-size:10px;\"\r\n              [ngClass]=\"{'has-danger': !newForm.get('costo').valid}\"\r\n              *ngIf=\"!newForm.controls['costo'].valid\">\r\n                El costo es requerido\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Depreciación</label>\r\n\r\n            <div class=\"input-group col-6 has-success \" [ngClass]=\"{'has-danger': !newForm.get('depAcum').valid}\">\r\n                <span class=\"input-group-addon\">%</span>\r\n                <input type=\"number\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n                formControlName=\"depAcum\">\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-6 text-center col-4\" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('depAcum').valid}\"\r\n            *ngIf=\"!newForm.controls['depAcum'].valid\">\r\n              El porcentaje es requerido\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Capacidad en Unidades</label>\r\n\r\n            <div class=\"input-group col-6 has-success \" [ngClass]=\"{'has-danger': !newForm.get('cantidadProd').valid}\">\r\n                <span class=\"input-group-addon\">%</span>\r\n                <input type=\"number\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n                formControlName=\"cantidadProd\">\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-6 text-center col-4\" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('cantidadProd').valid}\"\r\n            *ngIf=\"!newForm.controls['cantidadProd'].valid\">\r\n              La cantidad es requerida\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-5 col-form-label text-center\">Producto</label>\r\n            <div class=\"col-6 \" >\r\n              <select formControlName=\"Producto_idProducto\" class=\"form-control\" >\r\n                <option *ngFor=\"let option of selectValue\" value={{option.value}}>{{option.label}}</option>\r\n              </select>\r\n              <div class=\"form-control-feedback text-center \" style=\"font-size:10px;\"\r\n              [ngClass]=\"{'has-danger': !newForm.get('Producto_idProducto').valid}\"\r\n              *ngIf=\"!newForm.controls['Producto_idProducto'].valid\">\r\n                Debes seleccionar un producto\r\n              </div>\r\n            </div>\r\n          </div>\r\n                <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!newForm.valid\">\r\n                  Guardar\r\n                </button>\r\n\r\n                <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalNew.hide()\">\r\n                Cancelar\r\n                </button>\r\n\r\n              </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div bsModal #modalConfDelete=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center \">Confirmación</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n\r\n        <div class=\"row text-center\">\r\n          ¿Estas seguro que deseas eliminar la maquinaria \"{{maquinaDelete.nombreMaq}}\" ?\r\n          <br>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <button type=\"button\" class=\"btn btn-danger offset-2 col-3\"  (click)=\"borraMaquina(maquinaDelete.idMaquinaria)\">Si</button>\r\n          <button type=\"button\" class=\"btn btn-primary offset-2 col-3\" (click)=\"modalConfDelete.hide()\">No</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/maquinarias/maquinarias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/maquinaria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaquinariasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MaquinariasComponent = (function () {
    //Contructor Incializació de los Servicios de Maquinaria y de Modales
    function MaquinariasComponent(_maquinariasService, modalService, _productosService, ngbactivemodal, _flashMessagesService) {
        this._maquinariasService = _maquinariasService;
        this.modalService = modalService;
        this._productosService = _productosService;
        this.ngbactivemodal = ngbactivemodal;
        this._flashMessagesService = _flashMessagesService;
        this.alerts = [];
        this.maquinas = new Array();
        this.productos = new Array();
        this.selectValue = new Array();
        this.maquinaDelete = {
            idMaquinaria: 0,
            nombreMaq: "",
            costo: 0,
            cantidadProd: 0,
            depAcum: 0,
            Producto_idProducto: 0
        };
        this.selectValue = [
            {
                value: 0,
                label: ""
            }
        ];
        this.maquinas = this._maquinariasService.returnMaquinas();
        this.productos = this._productosService.returnProductos();
        this.iniciaSelect();
        this.selectValue.splice(0, 1);
    }
    MaquinariasComponent.prototype.ngOnInit = function () {
        //Obteneiendo las maquinarias de base de dato
        this.selected = { value: 0, label: "" };
        this.editForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            'idMaquinaria': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'nombreMaq': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'costo': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'cantidadProd': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'depAcum': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'Producto_idProducto': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])
        });
        this.newForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            'nombreMaq': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'costo': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'cantidadProd': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'depAcum': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'Producto_idProducto': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required)
        });
    };
    MaquinariasComponent.prototype.iniciaSelect = function () {
        var _this = this;
        this._productosService.getProductos().subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.selectValue.push({ value: data.datos[key$].idProducto, label: data.datos[key$].nombreProd });
            }
        });
    };
    //Abre formulario para agrear nuevo item
    MaquinariasComponent.prototype.openNew = function () {
        this.modalNew.show();
        this.newForm.reset();
    };
    //Abre formulario para editar un item
    MaquinariasComponent.prototype.openEdit = function (maquina) {
        this.modalEdit.show();
        this.editForm.controls['idMaquinaria'].setValue(maquina.idMaquinaria);
        this.editForm.controls['nombreMaq'].setValue(maquina.nombreMaq);
        this.editForm.controls['costo'].setValue(maquina.costo);
        this.editForm.controls['cantidadProd'].setValue(maquina.cantidadProd);
        this.editForm.controls['depAcum'].setValue(maquina.depAcum);
        this.editForm.controls['Producto_idProducto'].setValue(maquina.Producto_idProducto);
        this.initSelected(maquina.Producto_idProducto);
        console.log("Id Prodcuto: ", maquina.Producto_idProducto, this.selected);
    };
    MaquinariasComponent.prototype.initSelected = function (id) {
        for (var _i = 0, _a = this.selectValue; _i < _a.length; _i++) {
            var select_1 = _a[_i];
            if (id == select_1.value)
                this.selected = select_1;
        }
    };
    MaquinariasComponent.prototype.guarda = function (maquina) {
        if (!this.buscaRepetidos(maquina)) {
            this._maquinariasService.guardarMaquina(maquina);
            this.modalNew.hide();
            this.alerts.push({
                type: 'success',
                msg: "Maquina \"" + (maquina.nombreMaq) + "\" agregada",
                timeout: 2000
            });
        }
        else {
            alert("Repetidos");
        }
    };
    MaquinariasComponent.prototype.buscaRepetidos = function (maquinaS) {
        console.log("Bus");
        for (var _i = 0, _a = this.maquinas; _i < _a.length; _i++) {
            var maquina = _a[_i];
            if (maquina.nombreMaq == maquinaS.nombreMaq) {
                console.log(true);
                return true;
            }
            else {
                console.log(false);
            }
        }
    };
    MaquinariasComponent.prototype.editaMaquina = function (maquina) {
        console.log(maquina.Producto_idProducto);
        this._maquinariasService.setMaquina(maquina).subscribe();
        this.modalEdit.hide();
        this.alerts.push({
            type: 'success',
            msg: "Maquina \"" + (maquina.nombreMaq) + "\" editada",
            timeout: 2000
        });
    };
    MaquinariasComponent.prototype.noCero = function (control) {
        if (control.value == 0) {
            return {
                nocero: false
            };
        }
        return null;
    };
    MaquinariasComponent.prototype.getNameById = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto_1 = _a[_i];
            if (producto_1.idProducto == id)
                return producto_1.nombreProd;
        }
        return "id no encontrado";
    };
    MaquinariasComponent.prototype.onSelected = function ($event) {
        this.selected.label = this.getNameById(this.editForm.controls['Producto_idProducto'].value);
        this.selected.value = this.editForm.controls['Producto_idProducto'].value;
        console.log(this.selected);
    };
    MaquinariasComponent.prototype.borraMaquina = function (id) {
        console.log(id);
        this._maquinariasService.deleteMauqina(id).subscribe();
        this.modalConfDelete.hide();
        this.alerts.push({
            type: 'danger',
            msg: "Maquina eliminada",
            timeout: 2000
        });
    };
    MaquinariasComponent.prototype.confDelete = function (maquina) {
        this.maquinaDelete = maquina;
        console.log(this.maquinaDelete);
        this.modalConfDelete.show();
    };
    return MaquinariasComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalEdit'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], MaquinariasComponent.prototype, "modalEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalNew'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _b || Object)
], MaquinariasComponent.prototype, "modalNew", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConfDelete'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _c || Object)
], MaquinariasComponent.prototype, "modalConfDelete", void 0);
MaquinariasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-maquinarias',
        template: __webpack_require__("../../../../../src/app/components/maquinarias/maquinarias.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/maquinarias/maquinarias.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_maquinaria_service__["a" /* MaquinariaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_maquinaria_service__["a" /* MaquinariaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_producto_service__["a" /* ProductoService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _h || Object])
], MaquinariasComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=maquinarias.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/nav.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav{\r\n  height: 90px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"admin\">\r\n<!-- <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded fixed-top navbar-inverse\" style=\"background-color:#113F67;\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <span class=\"navbar-brand\">\r\n       <img class=\"img-fluid rounded-circle\" style=\"width:10%;\"\r\n       src=\"assets/img/user.png\"> {{admin.nombreAdmin}} {{admin.apPat}}\r\n  </span>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n\r\n      <form class=\"form-inline  my-lg-0\" style=\"margin-right:40px\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Hola\">\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form>\r\n      <li class=\"nav-item active \" style=\"margin-right:10px;\">\r\n        <button class=\"btn btn-outline-primary my-2 rounded-circle navbar-link\"><i class=\"fa fa-bell fa-lg\"></i></button>\r\n      </li>\r\n\r\n      <li class=\"nav-item active  \">\r\n        <button class=\"btn btn-outline-secondary my-2 rounded-circle navbar-link\" (click)=\"logOut()\"><i class=\"fa fa-sign-out fa-lg\"></i></button>\r\n      </li>\r\n\r\n\r\n    </ul>\r\n\r\n  </div>\r\n</nav> -->\r\n\r\n<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded fixed-top navbar-inverse\" style=\"background-color:#005689;height:110px;\">\r\n\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\r\n\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <span class=\"navbar-brand\" style=\"margin-left:50px;\">\r\n       <img class=\"img-fluid rounded-circle\" style=\"width:10%;\"\r\n       src=\"assets/img/user.png\"> {{admin.nombreAdmin}} {{admin.apPat}}\r\n  </span>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <button style=\"margin-left:60%;\" class=\"navbar-right btn btn-danger my-2 \"><i class=\"fa fa-bell fa-lg\"></i></button>\r\n      <button style=\"margin-left:30px;\" class=\"btn btn-success my-2 \" (click)=\"logOut()\"><i class=\"fa fa-sign-out fa-lg\"></i></button>\r\n    <!-- <ul class=\"navbar-nav  pull-right\">\r\n\r\n      <li class=\"nav-item active \" style=\"margin-right:10px;\">\r\n\r\n      </li>\r\n\r\n      <li class=\"nav-item active  \">\r\n\r\n      </li>\r\n\r\n\r\n\r\n\r\n    </ul> -->\r\n\r\n  </div>\r\n</nav>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, _balanceService) {
        this.authService = authService;
        this.router = router;
        this._balanceService = _balanceService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfileAdmin().subscribe(function (data) {
            _this.admin = data.admin;
        });
    };
    NavbarComponent.prototype.logOut = function () {
        this.authService.logoutAdmin();
        this.router.navigate(['login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/nav.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_balance_service__["a" /* BalanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_balance_service__["a" /* BalanceService */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/productos/productos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/productos/productos.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h2 class=\"text-center offset-4 col-4\">Productos</h2>\r\n    <button type=\"button\" (click)=\"openNew(newModal)\" class=\"btn btn-warning offset-3 col-1\">Agregar</button>\r\n  </div>\r\n\r\n  <hr>\r\n  <div class=\"text-center\" *ngFor=\"let alert of alerts\" style=\"z-index:10000;width:100%; \">\r\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\"><h3>{{ alert.msg }}</h3></alert>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container\" style=\"overflow:scroll; height:1000px;\">\r\n\r\n\r\n\r\n\r\n<!--++++++++++++++++++++++++++++++   Tarjeta de Producto    +++++++++++++++++++++++++++++++++++-->\r\n\r\n<div class=\"card-columns\" >\r\n  <div class=\"card \" *ngFor=\"let producto of productos\">\r\n\r\n\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-4 \" style=\"margin-top:60px\">\r\n          <img src=\"assets/img/box.png\" class=\"img-fluid\" style=\"margin-left:15px\"  >\r\n        </div>\r\n      <div class=\"col-8\">\r\n        <h4 class=\"card-title \">{{producto.nombreProd}}</h4>\r\n\r\n        <h6 class=\"card-subtitle \" style=\"margin-bottom:15px\"><b>Precio de Venta:</b> {{producto.precioVenta | currency:'USD':true }}</h6>\r\n\r\n        <h6 class=\"card-subtitle \" style=\"margin-bottom:15px\"><b>Costo de Desarrollo:</b> {{producto.costoDes | currency:'USD':true }}</h6>\r\n        <h6 class=\"card-subtitle \" style=\"margin-bottom:15px\"><b>Periodos de Desarrollo:</b> {{producto.tiempoDes}}</h6>\r\n        <h6 class=\"card-subtitle \" style=\"margin-bottom:15px\"><b>Suma de Costos Fijos:</b> {{producto.costosFijosFabri | currency:'USD':true}}</h6>\r\n        <h6 class=\"card-subtitle \" style=\"margin-bottom:15px\"><b>Suma de Costos Variables Unitarios:</b> {{producto.costoVarUniDist + producto.costoVarUniFabri + producto.costosMPPUniProd| currency:'USD':true}}</h6>\r\n\r\n\r\n      </div>\r\n\r\n\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div  class=\"btn btn-primary offset-1 col-4\" (click)=\"openEdit(producto)\">Editar</div>\r\n        <button type=\"button\" class=\"btn btn-danger col-5 offset-1\" (click)=\"confDelete(producto)\">Eliminar</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n</div>\r\n<!--- +++++++++++++++++++++++++++ Formulario para agregar +++++++++++++++++++++++++++++++++++++++++ -->\r\n<div ngDraggable bsModal #modalNew=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center\">Agrega Producto</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"newForm\" (ngSubmit)=\"guarda(newForm.value)\" class=\"offset-1\" >\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Nombre</label>\r\n            <div class=\"col-6 has-success\"  [ngClass]=\"{'has-danger': !newForm.get('nombreProd').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"nombreProd\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!newForm.controls['nombreProd'].valid\">\r\n                       El nombre es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Costo de Desarrollo</label>\r\n\r\n            <div class=\"input-group col-6 has-success \" [ngClass]=\"{'has-danger': !newForm.get('costoDes').valid}\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n                formControlName=\"costoDes\">\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costoDes').valid}\" *ngIf=\"!newForm.controls['costoDes'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"form-group row text-center \">\r\n            <label class=\"col-5 col-form-label\">Tiempo de Desarrollo</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('tiempoDes').valid}\">\r\n              <span class=\"input-group-addon\">P</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"tiempoDes\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-5 text-center col-6 has-success\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('tiempoDes').valid}\"\r\n            *ngIf=\"!newForm.controls['tiempoDes'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"container\">\r\n            <hr>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Precio de Venta</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('precioVenta').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\"\r\n              class=\"form-control\"\r\n              formControlName=\"precioVenta\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\" [ngClass]=\"{'has-danger': !newForm.get('precioVenta').valid}\"\r\n            *ngIf=\"!newForm.controls['precioVenta'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Costos Fijos de Fabricación</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costosFijosFabri').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"costosFijosFabri\">\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costosFijosFabri').valid}\"\r\n            *ngIf=\"!newForm.controls['costosFijosFabri'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Costo Variable Unitario de Fabricación</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costoVarUniFabri').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"costoVarUniFabri\">\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costoVarUniFabri').valid}\"\r\n            *ngIf=\"!newForm.controls['costoVarUniFabri'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Gastos Fijos de Distribución</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costosFijosFabri').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"gastosFijosDist\">\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costosFijosFabri').valid}\"\r\n            *ngIf=\"!newForm.controls['costosFijosFabri'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Depreciación por Distribución </label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('depDistribucion').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"depDistribucion\">\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('depDistribucion').valid}\"\r\n            *ngIf=\"!newForm.controls['depDistribucion'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Costo Variable Unitario de Distribución</label>\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costoVarUniDist').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"costoVarUniDist\">\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costoVarUniDist').valid}\"\r\n            *ngIf=\"!newForm.controls['costoVarUniDist'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Gastos Fijos de Administración</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('gastosFijosAdmon').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"gastosFijosAdmon\">\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('gastosFijosAdmon').valid}\"\r\n            *ngIf=\"!newForm.controls['gastosFijosAdmon'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Depreciación por Administración </label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('depAdmon').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"depAdmon\">\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('depAdmon').valid}\"\r\n            *ngIf=\"!newForm.controls['depAdmon'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Costo MP por Unidad</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costosMPPUniProd').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"costosMPPUniProd\">\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costosMPPUniProd').valid}\"\r\n            *ngIf=\"!newForm.controls['costosMPPUniProd'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Unidades de MP por unidad producida</label>\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('uniMP').valid}\">\r\n              <span class=\"input-group-addon\">U</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"  formControlName=\"uniMP\">\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('uniMP').valid}\"\r\n            *ngIf=\"!newForm.controls['uniMP'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Costo Unitario</label>\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costoUni').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" formControlName=\"costoUni\">\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !newForm.get('costoUni').valid}\"\r\n            *ngIf=\"!newForm.controls['costoUni'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"modal-footer\">\r\n\r\n                <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalNew.hide()\">\r\n                Cancelar\r\n                </button>\r\n\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"modalCopia.show()\">Copias Variables</button>\r\n\r\n                <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!newForm.valid\">\r\n                  Guardar\r\n                </button>\r\n\r\n\r\n\r\n\r\n\r\n              </div>\r\n        </form>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--- Boton de Acción de Formulario de Edición--->\r\n\r\n\r\n\r\n<!--- Modal de edición +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->\r\n<div ngDraggable bsModal #modalEdit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center\">Edita Producto</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"editaProducto(editForm.value)\"  >\r\n\r\n          <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" hidden formControlName=\"idProducto\">\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Nombre</label>\r\n            <div class=\"col-6 has-success\"  [ngClass]=\"{'has-danger': !editForm.get('nombreProd').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"nombreProd\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!editForm.controls['nombreProd'].valid\">\r\n                       El nombre es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Costo de Desarrollo</label>\r\n\r\n            <div class=\"input-group col-6 has-success \" [ngClass]=\"{'has-danger': !editForm.get('costoDes').valid}\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n                formControlName=\"costoDes\">\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costoDes').valid}\" *ngIf=\"!editForm.controls['costoDes'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"form-group row text-center \">\r\n            <label class=\"col-5 col-form-label\">Tiempo de Desarrollo</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('tiempoDes').valid}\">\r\n              <span class=\"input-group-addon\">P</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"tiempoDes\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-5 text-center col-6 has-success\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('tiempoDes').valid}\"\r\n            *ngIf=\"!editForm.controls['tiempoDes'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Precio de Venta</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('precioVenta').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\"\r\n              class=\"form-control\"\r\n              formControlName=\"precioVenta\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\" [ngClass]=\"{'has-danger': !editForm.get('precioVenta').valid}\"\r\n            *ngIf=\"!editForm.controls['precioVenta'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Costo Fijo</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costosFijosFabri').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"costosFijosFabri\">\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costosFijosFabri').valid}\"\r\n            *ngIf=\"!editForm.controls['costosFijosFabri'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n            <!-- <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Gastos Fijos de Distribución</label>\r\n\r\n              <div class=\"input-group col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('gastosFijosDist').valid}\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n                formControlName=\"gastosFijosDist\">\r\n              </div>\r\n\r\n              <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n              style=\"font-size:10px;\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('gastosFijosDist').valid}\"\r\n              *ngIf=\"!editForm.controls['gastosFijosDist'].valid\">\r\n                El costo es requerido\r\n              </div>\r\n\r\n            </div> -->\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Depreciación por Administración </label>\r\n\r\n              <div class=\"input-group col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('depAdmon').valid}\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n                formControlName=\"depAdmon\">\r\n              </div>\r\n\r\n              <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n              style=\"font-size:10px;\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('depAdmon').valid}\"\r\n              *ngIf=\"!editForm.controls['depAdmon'].valid\">\r\n                El costo es requerido\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Depreciación por Distribución </label>\r\n\r\n              <div class=\"input-group col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('depDistribucion').valid}\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n                formControlName=\"depDistribucion\">\r\n              </div>\r\n\r\n              <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n              style=\"font-size:10px;\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('depDistribucion').valid}\"\r\n              *ngIf=\"!editForm.controls['depDistribucion'].valid\">\r\n                El costo es requerido\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Gastos Fijo de Distribución</label>\r\n\r\n              <div class=\"input-group col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('costosFijosFabri').valid}\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n                formControlName=\"gastosFijosDist\">\r\n              </div>\r\n              <div class=\"form-control-feedback offset-5 text-center col-6\" style=\"font-size:10px;\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('costosFijosFabri').valid}\"\r\n              *ngIf=\"!editForm.controls['costosFijosFabri'].valid\">\r\n                El costo es requerido\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Costo Variable Unitario de Fabricación</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costoVarUniFabri').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"costoVarUniFabri\">\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costoVarUniFabri').valid}\"\r\n            *ngIf=\"!editForm.controls['costoVarUniFabri'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Costo Variable Unitario de Distribución</label>\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costoVarUniDist').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"costoVarUniDist\">\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costoVarUniDist').valid}\"\r\n            *ngIf=\"!editForm.controls['costoVarUniDist'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Gastos Fijos de Administración</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('gastosFijosAdmon').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"gastosFijosAdmon\">\r\n            </div>\r\n\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('gastosFijosAdmon').valid}\"\r\n            *ngIf=\"!editForm.controls['gastosFijosAdmon'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Costo MP por Unidad Producida</label>\r\n\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costosMPPUniProd').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"\r\n              formControlName=\"costosMPPUniProd\">\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costosMPPUniProd').valid}\"\r\n            *ngIf=\"!editForm.controls['costosMPPUniProd'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Unidades de MP</label>\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('uniMP').valid}\">\r\n              <span class=\"input-group-addon\">U</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\"  formControlName=\"uniMP\">\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('uniMP').valid}\"\r\n            *ngIf=\"!editForm.controls['uniMP'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\">\r\n            <label class=\"col-5 col-form-label\">Costo Unitario</label>\r\n            <div class=\"input-group col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costoUni').valid}\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" formControlName=\"costoUni\">\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\"\r\n            style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('costoUni').valid}\"\r\n            *ngIf=\"!editForm.controls['costoUni'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n          </div>\r\n\r\n\r\n              <div class=\"modal-footer\">\r\n                <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalEdit.hide()\">\r\n                Cancelar\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!editForm.valid\">\r\n                  Guardar\r\n                </button>\r\n\r\n\r\n\r\n              </div>\r\n        </form>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div bsModal #modalConfDelete=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center \">Confirmación</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n\r\n        <div class=\"row text-center\">\r\n          ¿Estas seguro que deseas eliminar el producto \"{{productoDelete.nombreProd}}\" ?\r\n          <br>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <button type=\"button\" class=\"btn btn-danger offset-2 col-3\" (click)=\"eliminaProducto(productoDelete.idProducto)\" >Si</button>\r\n          <button type=\"button\" class=\"btn btn-primary offset-2 col-3\" (click)=\"modalConfDelete.hide()\">No</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div bsModal #modalCopia=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center\">Copia de Valores</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n      <accordion *ngFor=\"let producto of productos\" [closeOthers]=\"1\">\r\n        <accordion-group #group >\r\n          <div accordion-heading>\r\n            <div class=\"row\">\r\n              <h4 class=\"col-6\">{{producto.nombreProd}}</h4>\r\n              <button class=\"col-5 btn btn-primary\" type=\"button\" (click)=\"copiaVariables(producto)\" >Copiar a Formulario</button>\r\n            </div>\r\n\r\n            <i class=\"pull-right float-xs-right glyphicon\"\r\n            [ngClass]=\"{'glyphicon-chevron-down': group?.isOpen, 'glyphicon-chevron-right': !group?.isOpen}\"></i>\r\n          </div>\r\n\r\n              <table class=\"table table-hover text-center\">\r\n                <thead class=\"text-center\">\r\n                  <tr>\r\n                    <th>Campo</th>\r\n                    <th>Cantidad</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>Costo de Desarrollo</td>\r\n                    <td>{{producto.costoDes}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Tiempo de Desarrollo</td>\r\n                    <td>{{producto.tiempoDes}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Precio de Venta</td>\r\n                    <td>{{producto.precioVenta}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Costo Fijo</td>\r\n                    <td>{{producto.costosFijosFabri}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Depreciación por Administración</td>\r\n                    <td>{{producto.depAdmon}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Deprecicación por Distribución</td>\r\n                    <td>{{producto.depDistribucion}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Gastos Fijos de Distribución</td>\r\n                    <td>{{producto.gastosFijosDist}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Costo Variable de Fabricación</td>\r\n                    <td>{{producto.costoVarUniFabri}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Costo Variable Unitario de Distribución</td>\r\n                    <td>{{producto.costoVarUniDist}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Gastos Fijos de Administración</td>\r\n                    <td>{{producto.gastosFijosAdmon}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Costo MP por unidad</td>\r\n                    <td>{{producto.costosMPPUniProd}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Unidades MP por unidad producida</td>\r\n                    <td>{{producto.uniMP}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Costo Unitario</td>\r\n                    <td>{{producto.costoUni}}</td>\r\n                  </tr>\r\n                </tbody>\r\n\r\n              </table>\r\n  </accordion-group>\r\n</accordion>\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalCopia.hide()\">\r\n        Cancelar\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/productos/productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductosComponent = (function () {
    /// Propuedades de Select
    function ProductosComponent(_productoService, modalService, _flashMessagesService) {
        this._productoService = _productoService;
        this.modalService = modalService;
        this._flashMessagesService = _flashMessagesService;
        this.alerts = [];
        this.productos = new Array();
        this.productoDelete = {
            idProducto: 0,
            nombreProd: "",
            costoDes: 0,
            tiempoDes: 0,
            precioVenta: 0,
            costoFijoFabri: 0,
            costosVarFabri: 0,
            costosVarUniDist: 0,
            gastosFijosAdim: 0,
            costosMPPUniProd: 0,
            uniMP: 0,
            costoUni: 0
        };
        this.newForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            'nombreProd': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costoDes': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'tiempoDes': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'precioVenta': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costosFijosFabri': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costoVarUniFabri': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'gastosFijosDist': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'depDistribucion': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costoVarUniDist': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'depAdmon': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'gastosFijosAdmon': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costosMPPUniProd': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'uniMP': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costoUni': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.editForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            'idProducto': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'nombreProd': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costoDes': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'tiempoDes': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'precioVenta': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costosFijosFabri': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costoVarUniFabri': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'gastosFijosDist': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'depDistribucion': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costoVarUniDist': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'depAdmon': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'gastosFijosAdmon': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costosMPPUniProd': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'uniMP': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'costoUni': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.productos = this._productoService.returnProductos();
    }
    ProductosComponent.prototype.ngOnInit = function () {
    };
    ProductosComponent.prototype.guarda = function (producto) {
        if (!this.buscaRepetidos(producto)) {
            this._productoService.guardarProducto(producto);
            this.alerts.push({
                type: 'success',
                msg: "Producto \"" + (producto.nombreProd) + "\" agregado",
                timeout: 2000
            });
        }
        else {
            alert("Rpetido");
        }
        this.modalNew.hide();
    };
    ProductosComponent.prototype.editaProducto = function (producto) {
        this._productoService.setProducto(producto).subscribe();
        this.modalEdit.hide();
        this.alerts.push({
            type: 'success',
            msg: "Producto \"" + (producto.nombreProd) + "\" editado",
            timeout: 2000
        });
    };
    ProductosComponent.prototype.eliminaProducto = function (idProducto) {
        this._productoService.deleteProducto(idProducto).subscribe();
        this.modalConfDelete.hide();
        this.alerts.push({
            type: 'danger',
            msg: "Producto Eliminado",
            timeout: 2000
        });
    };
    ProductosComponent.prototype.copiaVariables = function (producto) {
        this.newForm.get('costoDes').setValue(producto.costoDes);
        this.newForm.get('tiempoDes').setValue(producto.tiempoDes);
        this.newForm.get('precioVenta').setValue(producto.precioVenta);
        this.newForm.get('costosFijosFabri').setValue(producto.costosFijosFabri);
        this.newForm.get('costoVarUniFabri').setValue(producto.costoVarUniFabri);
        this.newForm.get('gastosFijosDist').setValue(producto.gastosFijosDist);
        this.newForm.get('depDistribucion').setValue(producto.depDistribucion);
        this.newForm.get('costoVarUniDist').setValue(producto.costoVarUniDist);
        this.newForm.get('depAdmon').setValue(producto.depAdmon);
        this.newForm.get('gastosFijosAdmon').setValue(producto.gastosFijosAdmon);
        this.newForm.get('costosMPPUniProd').setValue(producto.costosMPPUniProd);
        this.newForm.get('uniMP').setValue(producto.uniMP);
        this.newForm.get('costoUni').setValue(producto.costoUni);
        this.modalCopia.hide();
    };
    ProductosComponent.prototype.openNew = function () {
        this.newForm.reset();
        this.modalNew.show();
    };
    //Abre formulario para editar un item
    ProductosComponent.prototype.openEdit = function (producto) {
        this.modalEdit.show();
        this.editForm.setValue(producto);
    };
    ProductosComponent.prototype.confDelete = function (producto) {
        this.productoDelete = producto;
        console.log(this.productoDelete);
        this.modalConfDelete.show();
    };
    ProductosComponent.prototype.buscaRepetidos = function (producto) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var prod = _a[_i];
            if (prod.nombreProd == producto.nombreProd) {
                return true;
            }
        }
    };
    return ProductosComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalEdit'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], ProductosComponent.prototype, "modalEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalNew'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _b || Object)
], ProductosComponent.prototype, "modalNew", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConfDelete'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _c || Object)
], ProductosComponent.prototype, "modalConfDelete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalCopia'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _d || Object)
], ProductosComponent.prototype, "modalCopia", void 0);
ProductosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-productos',
        template: __webpack_require__("../../../../../src/app/components/productos/productos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/productos/productos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _g || Object])
], ProductosComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=productos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-side-menu {\r\n  overflow: auto;\r\n  font-family: verdana;\r\n  font-size: 15px;\r\n  font-weight: 200;\r\n  background-color: #408AB4 ;\r\n  position: fixed;\r\n  top: 0px;\r\n  width: 20%;\r\n  height: 100%;\r\n  color: #e1ffff;\r\n  margin-top: 110px;\r\n}\r\n.nav-side-menu .brand {\r\n  background-color: #34699A;\r\n  line-height: 50px;\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n.nav-side-menu .toggle-btn {\r\n  display: none;\r\n}\r\n.nav-side-menu ul,\r\n.nav-side-menu li {\r\n  list-style: none;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  line-height: 70px;\r\n  cursor: pointer;\r\n  /*\r\n    .collapsed{\r\n       .arrow:before{\r\n                 font-family: FontAwesome;\r\n                 content: \"\\f053\";\r\n                 display: inline-block;\r\n                 padding-left:10px;\r\n                 padding-right: 10px;\r\n                 vertical-align: middle;\r\n                 float:right;\r\n            }\r\n     }\r\n*/\r\n}\r\n.nav-side-menu ul :not(collapsed) .arrow:before,\r\n.nav-side-menu li :not(collapsed) .arrow:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\F078\";\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  vertical-align: middle;\r\n  float: right;\r\n}\r\n.nav-side-menu ul .active,\r\n.nav-side-menu li .active {\r\n  border-left: 3px solid #d19b3d;\r\n  background-color: #4f5b69;\r\n}\r\n.nav-side-menu ul .sub-menu li.active,\r\n.nav-side-menu li .sub-menu li.active {\r\n  color: #d19b3d;\r\n}\r\n.nav-side-menu ul .sub-menu li.active a,\r\n.nav-side-menu li .sub-menu li.active a {\r\n  color: #d19b3d;\r\n}\r\n\r\n.active{\r\n  background-color: gray;\r\n}\r\n\r\n.nav-side-menu ul .sub-menu li,\r\n.nav-side-menu li .sub-menu li {\r\n  background-color: #181c20;\r\n  border: none;\r\n  line-height: 28px;\r\n  border-bottom: 1px solid #23282e;\r\n  margin-left: 0px;\r\n}\r\n.nav-side-menu ul .sub-menu li:hover,\r\n.nav-side-menu li .sub-menu li:hover {\r\n  background-color:#65C6C4;\r\n}\r\n.nav-side-menu ul .sub-menu li:before,\r\n.nav-side-menu li .sub-menu li:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\F105\";\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  vertical-align: middle;\r\n}\r\n.nav-side-menu li {\r\n  padding-left: 0px;\r\n  border-left: 3px solid #2e353d;\r\n  border-bottom: 1px solid #23282e;\r\n}\r\n.nav-side-menu li a {\r\n  text-decoration: none;\r\n  color: #e1ffff;\r\n}\r\n.nav-side-menu li a i {\r\n  padding-left: 10px;\r\n  width: 20px;\r\n  padding-right: 20px;\r\n}\r\n.nav-side-menu li:hover {\r\n  border-left: 3px solid #77ABB7;\r\n  background-color: #4f5b69;\r\n  transition: all 1s ease;\r\n}\r\n@media (max-width: 767px) {\r\n  .nav-side-menu {\r\n    position: relative;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n  }\r\n  .nav-side-menu .toggle-btn {\r\n    display: block;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    z-index: 9000 !important;\r\n    padding: 3px;\r\n    background-color: #ffffff;\r\n    color: #000;\r\n    width: 40px;\r\n    text-align: center;\r\n  }\r\n  .brand {\r\n    text-align: left !important;\r\n    font-size: 22px;\r\n    padding-left: 20px;\r\n    line-height: 50px !important;\r\n  }\r\n}\r\n@media (min-width: 767px) {\r\n  .nav-side-menu .menu-list .menu-content {\r\n    display: block;\r\n  }\r\n}\r\nbody {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-side-menu\">\r\n    <div class=\"brand\">Panel de Administración</div>\r\n    <i class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\"#menu-content\"></i>\r\n\r\n        <div class=\"menu-list\">\r\n\r\n            <ul id=\"menu-content\" class=\"menu-content collapse out\">\r\n              <!-- <li [routerLink]=\"['home']\">\r\n                 <a >\r\n                 <i class=\"fa fa-home fa-lg\"></i>Home\r\n                 </a>\r\n               </li>\r\n -->\r\n\r\n\r\n\r\n\r\n                <li data-toggle=\"collapse\" data-target=\"#users\" class=\"collapsed\">\r\n                  <a href=\"#\"><i class=\"fa fa-navicon fa-lg\" routerLinkActive=\"active\"></i>Administración de Usuarios<span class=\"arrow\"></span></a>\r\n                </li>\r\n                <ul class=\"sub-menu collapse\" id=\"users\">\r\n                  <li [routerLink]=\"['administradores']\" >Administradores</li>\r\n                  <li [routerLink]=\"['usuarios']\">Usuarios</li>\r\n\r\n                </ul>\r\n\r\n\r\n                <li [routerLink]=\"['variables']\" routerLinkActive=\"active\">\r\n                   <a >\r\n                   <i class=\"fa fa-calendar fa-lg\"></i> Variables\r\n                   </a>\r\n                 </li>\r\n\r\n                <li [routerLink]=\"['productos']\" routerLinkActive=\"active\">\r\n                   <a >\r\n                   <i class=\"fa fa-cube fa-lg\"></i> Productos\r\n                   </a>\r\n                 </li>\r\n\r\n                 <li [routerLink]=\"['maquinarias']\">\r\n                    <a >\r\n                    <i class=\"fa fa-cogs fa-lg\"></i> Maquinarias\r\n                    </a>\r\n                  </li>\r\n\r\n\r\n                   <li [routerLink]=\"['creditos']\">\r\n                      <a >\r\n                      <i class=\"fa fa-credit-card fa-lg\"></i> Creditos\r\n                      </a>\r\n                    </li>\r\n\r\n                    <li data-toggle=\"collapse\" data-target=\"#service\" class=\"collapsed\">\r\n                      <a href=\"#\"><i class=\"fa fa-globe fa-lg\"></i>Mercado<span class=\"arrow\"></span></a>\r\n                    </li>\r\n                    <ul class=\"sub-menu collapse\" id=\"service\">\r\n                      <li [routerLink]=\"['zonas']\" ><i class=\"fa fa-map-marker fa-lg\"></i> Zonas de Demanda</li>\r\n                      <li [routerLink]=\"['demandas']\"><i class=\"fa fa-area-chart fa-lg\"></i> Demanda potencial por Zona</li>\r\n\r\n                    </ul>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </ul>\r\n     </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidenavComponent);

//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/navbar-usuario/navbar-usuario.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav{\r\n  height: 90px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/navbar-usuario/navbar-usuario.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuario\">\r\n<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded fixed-top navbar-inverse\" style=\"background-color:#007CB9;height:110px;\">\r\n\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\r\n\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <span class=\"navbar-brand\" style=\"margin-left:50px;\">\r\n       <img class=\"img-fluid rounded-circle\" style=\"width:10%;\"\r\n       src=\"assets/img/user.png\"> {{usuario.nombreUsuario}} {{usuario.apPat}}\r\n  </span>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <button style=\"margin-left:60%;\" class=\"navbar-right btn btn-danger my-2 \"><i class=\"fa fa-bell fa-lg\"></i></button>\r\n      <button style=\"margin-left:30px;\" class=\"btn btn-success my-2 \" (click)=\"logOut()\"><i class=\"fa fa-sign-out fa-lg\"></i></button>\r\n\r\n\r\n  </div>\r\n</nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/navbar-usuario/navbar-usuario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarUsuarioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarUsuarioComponent = (function () {
    function NavbarUsuarioComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfileUsuario().subscribe(function (data) {
            _this.usuario = data.admin;
            _this.balance = localStorage.getItem('idBalance');
        });
    };
    NavbarUsuarioComponent.prototype.logOut = function () {
        this.authService.logoutUsuario();
        this.router.navigate(['login']);
    };
    return NavbarUsuarioComponent;
}());
NavbarUsuarioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar-usuario',
        template: __webpack_require__("../../../../../src/app/components/usuario/navbar-usuario/navbar-usuario.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/navbar-usuario/navbar-usuario.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NavbarUsuarioComponent);

var _a, _b;
//# sourceMappingURL=navbar-usuario.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/balance-final/balance-final.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/balance-final/balance-final.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"col-12 text-center\">Balance General Final</h3>\r\n<div class=\"col-10 offset-1\" >\r\n  <table class=\"table table-hover  table-responsive\" *ngFor=\"let balance of balanceFinal\">\r\n\r\n    <tbody>\r\n      <tr class=\"thead-inverse\">\r\n        <th colspan=\"4\" class=\"text-center bg-primary \">A menos de un año</th>\r\n        <th colspan=\"2\" class=\"text-center bg-warning\">A menos de un año</th>\r\n      </tr>\r\n      <tr>\r\n        <td>Caja Bancos</td>\r\n        <td colspan=\"3\" class=\"text-right\">{{balance.cajaBancos |currency:'USD':true:'1.0-0'}}</td>\r\n        <td>IVA por enterar</td>\r\n        <td class=\"text-right\">{{balance.IVAPorEnterar|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>Cuentas por Cobrar</td>\r\n        <td colspan=\"3\" class=\"text-right\">{{balance.cuentasPorCobrar|currency:'USD':true:'1.0-0'}}</td>\r\n        <td>Impuestos por Pagar</td>\r\n        <td class=\"text-right\">{{balance.imptosPorPagar|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>IVA Acreditable</td>\r\n        <td colspan=\"3\" class=\"text-right\">{{balance.IVAAcreditable|currency:'USD':true:'1.0-0'}}</td>\r\n        <td>Proveedores</td>\r\n        <td class=\"text-right\">{{balance.proveedores|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>Almacen de Articulo Terminado</td>\r\n        <td colspan=\"3\" class=\"text-right\">{{balance.almacenArtTerm|currency:'USD':true:'1.0-0'}}</td>\r\n        <td>PTU por Pagar</td>\r\n        <td class=\"text-right\">{{balance.PTUPorPagar|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>Alamacén de Materiales</td>\r\n        <td colspan=\"3\" class=\"text-right\">{{balance.almacenMateriales|currency:'USD':true:'1.0-0'}}</td>\r\n        <td>Préstamos Bancarios</td>\r\n        <td class=\"text-right\">{{balance.prestamosMenosAnio|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <th class=\"text-center\">TOTAL</th>\r\n        <td colspan=\"3\" class=\"text-right\">{{balance.cajaBancos + balance.cuentasPorCobrar + balance.IVAAcreditable\r\n            + balance.almacenArtTerm + balance.almacenMateriales|currency:'USD':true:'1.0-0'}}</td>\r\n        <th class=\"text-center\">TOTAL</th>\r\n        <td class=\"text-right\">{{balance.IVAPorEnterar + balance.imptosPorPagar + balance.proveedores + balance.PTUPorPagar + balance.prestamosMenosAnio|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr class=\"thead-inverse\">\r\n        <th class=\"text-center bg-primary\" colspan=\"4\">A más de un año</th>\r\n        <th class=\"text-center bg-warning\" colspan=\"2\">A más de un año</th>\r\n      </tr>\r\n\r\n      <tr>\r\n        <th class=\"text-center\"></th>\r\n        <td>I.O.</td>\r\n        <td>Dep. Acum</td>\r\n        <td>Neto</td>\r\n      </tr>\r\n\r\n\r\n      <tr>\r\n        <td>Terrenos</td>\r\n        <td class=\"text-right\">{{balance.terreno|currency:'USD':true:'1.0-0'}}</td>\r\n        <td class=\"text-right\">{{balance.depTerreno|currency:'USD':true:'1.0-0'}}</td>\r\n        <td class=\"text-right\">{{balance.terreno - balance.depTerreno|currency:'USD':true:'1.0-0'}}</td>\r\n        <td>Prestamos Totales</td>\r\n        <td class=\"text-right\">{{balance.prestamosMasAnio|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>Edificios e Instalaciones</td>\r\n        <td class=\"text-right\">{{balance.edifInsta|currency:'USD':true:'1.0-0'}}</td>\r\n        <td class=\"text-right\">{{balance.depEdif|currency:'USD':true:'1.0-0'}}</td>\r\n        <td class=\"text-right\">{{balance.edifInsta - balance.depEdif|currency:'USD':true:'1.0-0'}}</td>\r\n        <td colspan=\"2\"></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>Maquinaria y Equipo</td>\r\n        <td class=\"text-right\">{{balance.maqEquipo|currency:'USD':true:'1.0-0'}}</td>\r\n        <td class=\"text-right\">{{balance.depMaqEquipo|currency:'USD':true:'1.0-0'}}</td>\r\n        <td class=\"text-right\">{{balance.maqEquipo - balance.depMaqEquipo|currency:'USD':true:'1.0-0'}}</td>\r\n        <td colspan=\"2\"></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>Muebles y Enseres</td>\r\n        <td class=\"text-right\">{{balance.mueblesEnseres|currency:'USD':true:'1.0-0'}}</td>\r\n        <td class=\"text-right\">{{balance.depMueblesEnseres|currency:'USD':true:'1.0-0'}}</td>\r\n        <td class=\"text-right\">{{balance.mueblesEnseres - balance.depMueblesEnseres|currency:'USD':true:'1.0-0'}}</td>\r\n        <td colspan=\"2\"></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>Equipo de Transporte</td>\r\n        <td class=\"text-right\">{{balance.eqTrans|currency:'USD':true:'1.0-0'}}</td>\r\n        <td class=\"text-right\">{{balance.depEqTrans|currency:'USD':true:'1.0-0'}}</td>\r\n        <td class=\"text-right\">{{balance.eqTrans - balance.depEqTrans|currency:'USD':true:'1.0-0'}}</td>\r\n        <td colspan=\"2\"></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <th class=\"text-center\">TOTAL</th>\r\n        <td></td>\r\n        <td></td>\r\n        <td class=\"text-right\">{{balance.terreno + balance.edifInsta + balance.mueblesEnseres + balance.eqTrans + balance.maqEquipo - balance.depMaqEquipo - balance.depEdif - balance.depMueblesEnseres -balance.depEqTrans|currency:'USD':true:'1.0-0'}}</td>\r\n        <th class=\"text-center\">TOTAL</th>\r\n        <td class=\"text-right\">{{balance.prestamosMasAnio|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr class=\"thead-inverse\">\r\n        <th colspan=\"4\" class=\"text-center bg-primary\">De Aplicación Diferida</th>\r\n        <th class=\"text-center bg-warning\" colspan=\"2\">Con los Accionistas</th>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>Pagos Hechos por anticipado</td>\r\n        <td colspan=\"3\" class=\"text-right\">{{balance.pagosAnticipado|currency:'USD':true:'1.0-0'}}</td>\r\n        <td>Capital Social</td>\r\n        <td class=\"text-right\">{{balance.capitalSocial|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>Gastos por Amortizar</td>\r\n        <td colspan=\"3\" class=\"text-right\">{{balance.gastosAmortizacion|currency:'USD':true:'1.0-0'}}</td>\r\n        <td>Reserva legal</td>\r\n        <td class=\"text-right\">{{balance.reservaLegal|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td colspan=\"4\"></td>\r\n        <td>Utilidad Acumulada</td>\r\n        <td class=\"text-right\">{{balance.utilidadAcum|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td colspan=\"4\"></td>\r\n        <td >Utilidad del Ejercicio</td>\r\n        <td class=\"text-right\">{{balance.utilidadEjercicio|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <th class=\"text-center\">TOTAL</th>\r\n        <td colspan=\"3\" class=\"text-right\">{{balance.pagosAnticipado + balance.gastosAmortizacion|currency:'USD':true:'1.0-0'}}</td>\r\n        <th class=\"text-center\">TOTAL</th>\r\n        <td class=\"text-right\">{{balance.capitalSocial + balance.reservaLegal + balance.utilidadAcum + balance.utilidadEjercicio|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n\r\n      <tr>\r\n        <th >Suma de los Derechos</th>\r\n        <td colspan=\"3\" class=\"text-right\">{{balance.pagosAnticipado + balance.gastosAmortizacion + balance.terreno\r\n          + balance.edifInsta + balance.mueblesEnseres + balance.eqTrans + balance.maqEquipo\r\n          + balance.cajaBancos + balance.cuentasPorCobrar + balance.IVAAcreditable + balance.almacenArtTerm\r\n          + balance.almacenMateriales - balance.depMaqEquipo - balance.depEdif - balance.depMueblesEnseres -balance.depEqTrans|currency:'USD':true:'1.0-0'}}</td>\r\n        <td>Suma de las Obligaciones</td>\r\n        <td class=\"text-right\">{{balance.IVAPorEnterar + balance.imptosPorPagar + balance.proveedores + balance.PTUPorPagar\r\n          + balance.prestamosMenosAnio + balance.prestamosMasAnio + balance.capitalSocial + balance.reservaLegal\r\n          + balance.utilidadAcum + balance.utilidadEjercicio|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <th>Diferencia</th>\r\n        <td colspan=\"3\" class=\"text-right\">{{(balance.pagosAnticipado + balance.gastosAmortizacion + balance.terreno\r\n          + balance.edifInsta + balance.mueblesEnseres + balance.eqTrans + balance.maqEquipo\r\n          + balance.cajaBancos + balance.cuentasPorCobrar + balance.IVAAcreditable + balance.almacenArtTerm\r\n          + balance.almacenMateriales) - (balance.IVAPorEnterar + balance.imptosPorPagar + balance.proveedores + balance.PTUPorPagar\r\n            + balance.prestamosMenosAnio + balance.prestamosMasAnio + balance.capitalSocial + balance.reservaLegal\r\n            + balance.utilidadAcum + balance.utilidadEjercicio) - balance.depMaqEquipo - balance.depEdif - balance.depMueblesEnseres -balance.depEqTrans|currency:'USD':true:'1.0-0'}}</td>\r\n        <td colspan=\"2\"></td>\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n  <div class=\"row\">\r\n    <button type=\"button\" (click)=\"descargaPDF()\"  class=\"btn btn-primary col-4 offset-4\">Exportar Resultado</button>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<table class=\"table table-hover  table-responsive\" *ngFor=\"let balance of balanceFinal\">\r\n\r\n  <tbody>\r\n    <tr class=\"thead-inverse\">\r\n      <th  class=\"text-center bg-primary \">Derechos</th>\r\n      <th  class=\"text-center \">Año Actual</th>\r\n      <th  class=\"text-center \">Año Anterior</th>\r\n      <th  class=\"text-center\">Aplicación</th>\r\n      <th  class=\"text-center\">Origen</th>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td colspan=\"5\"></td>\r\n    </tr>\r\n    <!-- <tr class=\"thead-inverse\">\r\n      <th colspan=\"4\" class=\"text-center bg-primary \">A menos de un año</th>\r\n      <th colspan=\"2\" class=\"text-center bg-warning\">A menos de un año</th>\r\n    </tr> -->\r\n    <tr>\r\n      <td>Caja Bancos</td>\r\n      <td class=\"text-right\">{{balance.cajaBancos |currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Cuentas por Cobrar</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.cuentasPorCobrar|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>IVA Acreditable</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.IVAAcreditable|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Almacen de Articulo Terminado</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.almacenArtTerm|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Alamacén de Materiales</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.almacenMateriales|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n\r\n    </tr>\r\n\r\n\r\n    <tr class=\"thead-inverse\">\r\n      <th class=\"text-center\" colspan=\"5\">A más de un año</th>\r\n    </tr>\r\n\r\n\r\n\r\n    <tr>\r\n      <td>Terrenos</td>\r\n      <td class=\"text-right\">{{balance.terreno|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Edificios e Instalaciones</td>\r\n      <td class=\"text-right\">{{balance.edifInsta|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Maquinaria y Equipo</td>\r\n      <td class=\"text-right\">{{balance.maqEquipo|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Muebles y Enseres</td>\r\n      <td class=\"text-right\">{{balance.mueblesEnseres|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Equipo de Transporte</td>\r\n      <td class=\"text-right\">{{balance.eqTrans|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n    </tr>\r\n\r\n\r\n    <tr class=\"thead-inverse\">\r\n      <th colspan=\"4\" class=\"text-center bg-primary\">De Aplicación Diferida</th>\r\n      <th class=\"text-center bg-warning\" colspan=\"2\">Con los Accionistas</th>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Pagos Hechos por anticipado</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.pagosAnticipado|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Gastos por Amortizar</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.gastosAmortizacion|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td colspan=\"4\"></td>\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td colspan=\"4\"></td>\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Obligaciones</td>\r\n      <td colspan=\"4\"></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>A menos de un Año</th>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>IVA por enterar</td>\r\n      <td class=\"text-right\">{{balance.IVAPorEnterar|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Impuestos por Pagar</td>\r\n      <td class=\"text-right\">{{balance.imptosPorPagar|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Proveedores</td>\r\n      <td class=\"text-right\">{{balance.proveedores|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>PTU por Pagar</td>\r\n      <td class=\"text-right\">{{balance.PTUPorPagar|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Préstamos Bancarios</td>\r\n      <td class=\"text-right\">{{balance.prestamosMenosAnio|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>A más de un Año</th>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Prestamos Totales</td>\r\n      <td class=\"text-right\">{{balance.prestamosMasAnio|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>Con los Accionistas</th>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Capital Social</td>\r\n      <td class=\"text-right\">{{balance.capitalSocial|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Reserva legal</td>\r\n      <td class=\"text-right\">{{balance.reservaLegal|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Utilidad Acumulada</td>\r\n      <td class=\"text-right\">{{balance.utilidadAcum|currency:'USD':true:'1.0-0'}}</td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td >Utilidad del Ejercicio</td>\r\n        <td class=\"text-right\">{{balance.utilidadEjercicio|currency:'USD':true:'1.0-0'}}</td>\r\n        <td></td>\r\n        <td></td>\r\n        <td></td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/balance-final/balance-final.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resultados_service__ = __webpack_require__("../../../../../src/app/services/resultados.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceFinalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BalanceFinalComponent = (function () {
    function BalanceFinalComponent(_resultadosService, _balanceService) {
        this._resultadosService = _resultadosService;
        this._balanceService = _balanceService;
        this._resultadosService.vender();
    }
    BalanceFinalComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this._balanceService.getBalanceFinal().subscribe(function (data) {
                if (data.success) {
                    _this.balanceFinal = _this._resultadosService.getBalanceFinal();
                }
            });
        }, 1500);
    };
    BalanceFinalComponent.prototype.descargaPDF = function () {
        var cajaBancos, cuentasPorCobrar, IVAAcreditable, almacenArtTerm, almacenMateriales, terreno, maqEquipo, edificios, mueblesEnseres, equipoTrans, pagosAnticipado, gastosAmortizacion, IVAPorEnterar, imptosPorPagar, proveedores, PTUPorPagar, prestamosMenosAnio, prestamosMasAnio, capitalSocial, reservaLegal, utilidadAcum, depMaqEquipo, depEdif, depTerreno, depEqTrans, depMueblesEnseres, utilidadEjercicio;
        for (var _i = 0, _a = this.balanceFinal; _i < _a.length; _i++) {
            var balance = _a[_i];
            cajaBancos = balance.cajaBancos;
            cuentasPorCobrar = balance.cuentasPorCobrar;
            IVAAcreditable = balance.IVAAcreditable;
            almacenArtTerm = balance.almacenArtTerm;
            almacenMateriales = balance.almacenMateriales;
            terreno = balance.terreno;
            edificios = balance.edifInsta;
            maqEquipo = balance.maqEquipo;
            mueblesEnseres = balance.mueblesEnseres;
            equipoTrans = balance.eqTrans;
            pagosAnticipado = balance.pagosAnticipado;
            gastosAmortizacion = balance.gastosAmortizacion;
            IVAPorEnterar = balance.IVAPorEnterar;
            imptosPorPagar = balance.imptosPorPagar;
            proveedores = balance.proveedores;
            PTUPorPagar = balance.PTUPorPagar;
            prestamosMenosAnio = balance.prestamosMenosAnio;
            prestamosMasAnio = balance.prestamosMasAnio;
            capitalSocial = balance.capitalSocial;
            reservaLegal = balance.reservaLegal;
            utilidadAcum = balance.utilidadAcum;
            utilidadEjercicio = balance.utilidadEjercicio;
            depMaqEquipo = balance.depMaqEquipo;
            depEdif = balance.depEdif;
            depTerreno = balance.depTerreno;
            depEqTrans = balance.depEqTrans;
            depMueblesEnseres = balance.depMueblesEnseres;
        }
        var total1 = cajaBancos + cuentasPorCobrar + IVAAcreditable + almacenArtTerm + almacenMateriales;
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [215.9, 279]
        });
        doc.setFontSize(15);
        doc.setFontType("bold");
        doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
        doc.setFontSize(13);
        doc.text(139.5, 23, 'Posición Financiera Final del Periodo ' + localStorage.getItem('numeroPeriodo'), null, null, 'center');
        doc.line(50, 27, 228, 27);
        doc.setFontSize(7);
        var mar = 45;
        var anchCell = 4;
        //Activo
        doc.text(10, 40, 'A menos de un año');
        doc.line(10, 45, 120, 45);
        doc.setFontType("normal");
        doc.text(12, 48, 'Caja y Bancos');
        doc.line(10, mar + anchCell * 1, 120, mar + anchCell * 1);
        doc.text(120, 48, cajaBancos.toString(), null, null, 'right');
        doc.text(12, 44 + anchCell * 2, 'Cuentas por Cobrar');
        doc.line(10, mar + anchCell * 2, 120, mar + anchCell * 2);
        doc.text(120, 44 + anchCell * 2, cuentasPorCobrar.toString(), null, null, 'right');
        doc.text(12, 44 + anchCell * 3, 'IVA Acreditable');
        doc.line(10, mar + anchCell * 3, 120, mar + anchCell * 3);
        doc.text(120, 44 + anchCell * 3, IVAAcreditable.toString(), null, null, 'right');
        doc.text(12, 44 + anchCell * 4, 'Almacén de Artículo Terminado');
        doc.line(10, mar + anchCell * 4, 120, mar + anchCell * 4);
        doc.text(120, 44 + anchCell * 4, almacenArtTerm.toString(), null, null, 'right');
        doc.text(12, 44 + anchCell * 5, 'Almacen de Materiales');
        doc.line(10, mar + anchCell * 5, 120, mar + anchCell * 5);
        doc.text(120, 44 + anchCell * 5, almacenMateriales.toString(), null, null, 'right');
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text(12, 44 + anchCell * 6, 'Total');
        doc.text(140, 44 + anchCell * 6, total1.toString(), null, null, 'right');
        doc.text(10, 85, 'A más de un año');
        doc.setFontType("normal");
        doc.setFontSize(7);
        doc.text(62, 44 + anchCell * 7 + 17, 'I.O.');
        doc.text(82, 44 + anchCell * 7 + 17, 'Dep. Acum');
        doc.line(10, 90, 120, 90);
        var r = terreno - depTerreno;
        doc.text(12, 44 + anchCell * 7 + 21, 'Terreno');
        doc.line(10, mar + 0 + anchCell * 7 + 21, 120, mar + anchCell * 7 + 21);
        doc.text(120, 44 + anchCell * 7 + 21, r.toString(), null, null, 'right');
        doc.text(70, 44 + anchCell * 7 + 21, terreno.toString(), null, null, 'right');
        doc.text(95, 44 + anchCell * 7 + 21, depTerreno.toString(), null, null, 'right');
        var r1 = edificios - depEdif;
        doc.text(12, 44 + anchCell * 8 + 21, 'Edificios e Instalaciones');
        doc.line(10, mar + 0 + anchCell * 8 + 21, 120, mar + anchCell * 8 + 21);
        doc.text(120, 44 + anchCell * 8 + 21, r1.toString(), null, null, 'right');
        doc.text(70, 44 + anchCell * 8 + 21, edificios.toString(), null, null, 'right');
        doc.text(95, 44 + anchCell * 8 + 21, depEdif.toString(), null, null, 'right');
        var r2 = maqEquipo - depMaqEquipo;
        doc.text(12, 44 + anchCell * 9 + 21, 'Maquinaria y Equipo');
        doc.line(10, mar + 0 + anchCell * 9 + 21, 120, mar + anchCell * 9 + 21);
        doc.text(120, 44 + anchCell * 9 + 21, r2.toString(), null, null, 'right');
        doc.text(70, 44 + anchCell * 9 + 21, maqEquipo.toString(), null, null, 'right');
        doc.text(95, 44 + anchCell * 9 + 21, depMaqEquipo.toString(), null, null, 'right');
        var r3 = mueblesEnseres - depMueblesEnseres;
        doc.text(12, 44 + anchCell * 10 + 21, 'Muebles y Enseres');
        doc.line(10, mar + 0 + anchCell * 10 + 21, 120, mar + anchCell * 10 + 21);
        doc.text(120, 44 + anchCell * 10 + 21, r3.toString(), null, null, 'right');
        doc.text(70, 44 + anchCell * 10 + 21, mueblesEnseres.toString(), null, null, 'right');
        doc.text(95, 44 + anchCell * 10 + 21, depMueblesEnseres.toString(), null, null, 'right');
        var r4 = equipoTrans - depEqTrans;
        doc.text(12, 44 + anchCell * 11 + 21, 'Equipo de Transportes');
        doc.line(10, mar + 0 + anchCell * 11 + 21, 120, mar + anchCell * 11 + 21);
        doc.text(120, 44 + anchCell * 11 + 21, r4.toString(), null, null, 'right');
        doc.text(70, 44 + anchCell * 11 + 21, equipoTrans.toString(), null, null, 'right');
        doc.text(95, 44 + anchCell * 11 + 21, depEqTrans.toString(), null, null, 'right');
        var rt = r + r1 + r2 + r3 + r4;
        var rn = equipoTrans + mueblesEnseres + maqEquipo + edificios + terreno;
        var rdep = depEdif + depMaqEquipo + depTerreno + depMueblesEnseres + depEqTrans;
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text(12, 44 + anchCell * 12 + 21, 'Total');
        doc.text(140, 44 + anchCell * 12 + 21, rt.toString(), null, null, 'right');
        doc.text(70, 44 + anchCell * 12 + 21, rn.toString(), null, null, 'right');
        doc.text(95, 44 + anchCell * 12 + 21, rdep.toString(), null, null, 'right');
        doc.setFontSize(7);
        doc.text(10, 130, 'De Aplicación Difereida');
        doc.line(10, 135, 120, 135);
        doc.setFontType("normal");
        doc.text(12, 44 + anchCell * 12 + 46, 'Pagos Hechos por Anticipado');
        doc.line(10, mar + 0 + anchCell * 12 + 46, 120, mar + anchCell * 12 + 46);
        doc.text(120, 44 + anchCell * 12 + 46, pagosAnticipado.toString(), null, null, 'right');
        doc.text(12, 44 + anchCell * 13 + 46, 'Gastos por Amortizar');
        doc.line(10, mar + 0 + anchCell * 13 + 46, 120, mar + anchCell * 13 + 46);
        doc.text(120, 44 + anchCell * 13 + 46, gastosAmortizacion.toString(), null, null, 'right');
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text(12, 44 + anchCell * 14 + 46, 'Total');
        doc.text(140, 44 + anchCell * 14 + 46, (total1 + rt + pagosAnticipado + gastosAmortizacion).toString(), null, null, 'right');
        doc.text(12, 44 + anchCell * 18 + 46, 'Suma de los Derechos');
        doc.text(140, 44 + anchCell * 18 + 46, (total1 + rt + pagosAnticipado + gastosAmortizacion).toString(), null, null, 'right');
        doc.line(120, mar + 0 + anchCell * 18 + 46, 140, mar + anchCell * 18 + 46);
        //Pasivo
        doc.text(165, 40, 'A menos de un año');
        doc.line(165, 45, 235, 45);
        doc.setFontType("normal");
        doc.text(167, 44 + anchCell * 1, 'IVA por enterar');
        doc.text(235, 44 + anchCell * 1, IVAPorEnterar.toString(), null, null, 'right');
        doc.line(165, mar + anchCell * 1, 235, mar + anchCell * 1);
        doc.text(167, 44 + anchCell * 2, 'Impuestos por Pagar');
        doc.text(235, 44 + anchCell * 2, imptosPorPagar.toString(), null, null, 'right');
        doc.line(165, mar + anchCell * 2, 235, mar + anchCell * 2);
        doc.text(167, 44 + anchCell * 3, 'Proveedores');
        doc.text(235, 44 + anchCell * 3, proveedores.toString(), null, null, 'right');
        doc.line(165, mar + anchCell * 3, 235, mar + anchCell * 3);
        doc.text(167, 44 + anchCell * 4, 'PTU por Pagar');
        doc.text(235, 44 + anchCell * 4, PTUPorPagar.toString(), null, null, 'right');
        doc.line(165, mar + anchCell * 4, 235, mar + anchCell * 4);
        doc.text(167, 44 + anchCell * 5, 'Prestamos Bancarios');
        doc.text(235, 44 + anchCell * 5, prestamosMenosAnio.toString(), null, null, 'right');
        doc.line(165, mar + anchCell * 5, 235, mar + anchCell * 5);
        var t1 = IVAPorEnterar + imptosPorPagar + PTUPorPagar + proveedores + prestamosMenosAnio;
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text(167, 44 + anchCell * 6, 'Total');
        doc.text(255, 44 + anchCell * 6, t1.toString(), null, null, 'right');
        doc.setFontSize(7);
        doc.text(165, 85, 'A más de un año');
        doc.setFontType("normal");
        doc.setFontSize(7);
        doc.line(165, 90, 235, 90);
        doc.text(167, 44 + anchCell * 7 + 21, 'Prestamos Bancarios');
        doc.line(165, mar + 0 + anchCell * 7 + 21, 235, mar + anchCell * 7 + 21);
        doc.text(235, 44 + anchCell * 7 + 21, prestamosMasAnio.toString(), null, null, 'right');
        doc.setFontSize(8);
        doc.setFontType("bold");
        doc.text(167, 44 + anchCell * 8 + 21, 'Total');
        doc.text(255, 44 + anchCell * 8 + 21, prestamosMasAnio.toString(), null, null, 'right');
        doc.text(165, 115, 'Con los Accionistas');
        doc.line(165, 122, 235, 122);
        doc.setFontType("normal");
        doc.setFontSize(7);
        doc.text(167, 44 + anchCell * 9 + 45, 'Capital Social');
        doc.line(165, mar + 0 + anchCell * 9 + 45, 235, mar + anchCell * 9 + 45);
        doc.text(235, 44 + anchCell * 9 + 45, capitalSocial.toString(), null, null, 'right');
        doc.text(167, 44 + anchCell * 10 + 45, 'Reserva Legal');
        doc.line(165, mar + 0 + anchCell * 10 + 45, 235, mar + anchCell * 10 + 45);
        doc.text(235, 44 + anchCell * 10 + 45, reservaLegal.toString(), null, null, 'right');
        doc.text(167, 44 + anchCell * 11 + 45, 'Utilidad Acumulada');
        doc.line(165, mar + 0 + anchCell * 11 + 45, 235, mar + anchCell * 11 + 45);
        doc.text(235, 44 + anchCell * 11 + 45, utilidadAcum.toString(), null, null, 'right');
        doc.text(167, 44 + anchCell * 12 + 45, 'Utilidad del Ejercicio');
        doc.line(165, mar + 0 + anchCell * 12 + 45, 235, mar + anchCell * 12 + 45);
        doc.text(235, 44 + anchCell * 12 + 45, utilidadEjercicio.toString(), null, null, 'right');
        doc.setFontSize(8);
        doc.setFontType("bold");
        var tr = t1 + prestamosMasAnio + capitalSocial + reservaLegal + utilidadAcum + utilidadEjercicio;
        doc.text(167, 44 + anchCell * 13 + 45, 'Total');
        doc.text(255, 44 + anchCell * 13 + 45, tr.toString(), null, null, 'right');
        doc.text(165, 44 + anchCell * 18 + 46, 'Suma de los Derechos');
        doc.text(255, 44 + anchCell * 18 + 46, tr.toString(), null, null, 'right');
        doc.line(235, mar + 0 + anchCell * 18 + 46, 255, mar + anchCell * 18 + 46);
        doc.save("prue.pdf");
    };
    return BalanceFinalComponent;
}());
BalanceFinalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-balance-final',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-final/balance-final.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-final/balance-final.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_resultados_service__["a" /* ResultadosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_balance_service__["a" /* BalanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_balance_service__["a" /* BalanceService */]) === "function" && _b || Object])
], BalanceFinalComponent);

var _a, _b;
//# sourceMappingURL=balance-final.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/balance-home/balance-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/balance-home/balance-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-lg-6 col-sm-12 \" style=\"height:200px;\">\r\n    <table class=\"table table-sm\" *ngFor= \"let balance of balanceFinal\">\r\n      <tr>\r\n        <th colspan=\"2\" class=\"text-center\">Activo</th>\r\n      </tr>\r\n      <tr>\r\n        <td>Caja y Bancos</td>\r\n        <td class=\"text-right\">{{balance.cajaBancos|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Cuentas Por Cobrar</td>\r\n        <td class=\"text-right\">{{balance.cuentasPorCobrar|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>IVA Acreditable</td>\r\n        <td class=\"text-right\">{{balance.IVAAcreditable|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Almacen de Articulo Terminado</td>\r\n        <td class=\"text-right\">{{balance.almacenArtTerm|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Almacen de Materiales</td>\r\n        <td class=\"text-right\">{{balance.almacenMateriales|currency:'USD':true:'1.0-0'}}</td>\r\n      </tr>\r\n    </table>    \r\n  </div>\r\n\r\n  <div class=\"col-lg-6 col-sm-12 \" style=\"height:200px;\">\r\n    <!-- <ngx-charts-bar-horizontal\r\n          [scheme]=\"colorScheme\"\r\n          [results]=\"activos\"\r\n          xAxis=\"true\"\r\n          yAxis=\"true\"\r\n          showXAxisLabel=\"true\"\r\n          roundDomains=\"true\"\r\n          showYAxisLabel=\"true\"\r\n          xAxisLabel=\"Demnada Potencial\"\r\n          yAxisLabel=\"Productos\">\r\n        </ngx-charts-bar-horizontal> -->\r\n        <!-- <ngx-charts-advanced-pie-chart\r\n            [scheme]=\"colorScheme\"\r\n            [results]=\"activos\">\r\n          </ngx-charts-advanced-pie-chart> -->\r\n\r\n        <table class=\"table table-sm\" *ngFor= \"let balance of balanceFinal\">\r\n          <tr>\r\n            <th colspan=\"2\" class=\"text-center\">Pasivo</th>\r\n          </tr>\r\n          <tr>\r\n            <td>IVA por Enterar</td>\r\n            <td class=\"text-right\">{{balance.IVAPorEnterar|currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Proveedores</td>\r\n            <td class=\"text-right\">{{balance.proveedores|currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Impuestos por Pagar</td>\r\n            <td class=\"text-right\">{{balance.imptosPorPagar|currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Prestamos Más de un Año</td>\r\n            <td class=\"text-right\">{{balance.prestamosMasAnio|currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Prestamos Menos de un Año</td>\r\n            <td class=\"text-right\">{{balance.prestamosMenosAnio|currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n        </table>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"card card-outline-primary col-7 text-center\" style=\"height:300px\">\r\n    <div class=\"card-block\">\r\n      <blockquote class=\"card-blockquote\">\r\n        <div class=\"card-header\">\r\n          <h5 class=\"col-lg-12 col-sm-12 col-md-12  text-center\">Demanda Potencial del Periodo </h5>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-7 col-sm-12 \" style=\"height:200px;\">\r\n            <ngx-charts-bar-horizontal\r\n                  [scheme]=\"colorScheme\"\r\n                  [results]=\"demandasGraf\"\r\n                  xAxis=\"true\"\r\n                  yAxis=\"true\"\r\n                  showXAxisLabel=\"true\"\r\n                  roundDomains=\"true\"\r\n                  showYAxisLabel=\"true\"\r\n                  xAxisLabel=\"Demnada Potencial(unidades)\"\r\n                  yAxisLabel=\"Productos\">\r\n                </ngx-charts-bar-horizontal>\r\n          </div>\r\n\r\n          <div class=\"col-lg-5 col-sm-8 \" style=\"height:200px; overflow-y:scroll\">\r\n            <div class=\"card\" *ngFor=\"let producto of demandas\" style=\"margin-top:15px\">\r\n                {{getNameById(producto.idProducto)}}\r\n                <div class=\"card-footer\">\r\n                  <table class=\"table\">\r\n                    <tr>\r\n                      <th class=\"text-center\">Zona</th>\r\n                      <th class=\"text-center\">Cantidad</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let zona of producto.zonas\">\r\n                      <td class=\"text-center\">{{getNameByIdZona(zona.idZona)}}</td>\r\n                      <td class=\"text-center\">{{zona.demanda}}u</td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n      </blockquote>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"col-lg-5\">\r\n            <div class=\"card card-outline-secondary mb-3 text-center\" style=\"height:300px\">\r\n  <div class=\"card-block\">\r\n    <blockquote class=\"card-blockquote\">\r\n      <div class=\"card-header\">\r\n            <h5 class=\"col-12 text-center\">Capacidad Instalada</h5>\r\n      </div>\r\n\r\n<div class=\"col-12\" style=\"height:200px\">\r\n  <ngx-charts-bar-horizontal\r\n\r\n        [scheme]=\"colorScheme2\"\r\n        [results]=\"maquinariasGraf\"\r\n        gradient=\"false\"\r\n        xAxis=\"true\"\r\n        yAxis=\"true\"\r\n        showXAxisLabel=\"true\"\r\n        showYAxisLabel=\"true\"\r\n        xAxisLabel=\"Capacidad de Producción(unidades)\"\r\n        yAxisLabel=\"Productos\">\r\n      </ngx-charts-bar-horizontal>\r\n</div>\r\n\r\n\r\n\r\n    </blockquote>\r\n  </div>\r\n</div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-4\" >\r\n            <div class=\"card card-outline-secondary mb-3 text-center\"\r\n            style=\"height:250px;overflow:hidden\">\r\n              <div class=\"card-block\">\r\n                <blockquote class=\"card-blockquote\">\r\n                  <div class=\"\">\r\n                    <h5 class=\"col-12 text-center\">Productos Desarrollados</h5>\r\n                    <hr>\r\n                  </div>\r\n\r\n                  <div class=\"row\" style=\"overflow-y:scroll; height:170px;oveflow-x:visible\">\r\n                    <div class=\"col-4\" *ngFor=\"let producto of productosDesarollados\">\r\n                      <div class=\"card\">\r\n\r\n                          <div class=\"col-12\" style=\"margin-top:10px\">\r\n                            <img src=\"assets/img/box.png\"  class=\"img-fluid\">\r\n                          </div>\r\n\r\n\r\n                          <span class=\"text-center\">{{getNameById(producto.idProducto)}}</span>\r\n\r\n\r\n\r\n                      </div>\r\n                      <!-- <div class=\"row\">\r\n                        <div class=\"col-6\" >\r\n                          <ngx-charts-pie-grid\r\n                          [scheme]=\"colorScheme\"\r\n                          [results]=\"producto.graf\"\r\n                          designatedTotal=\"2\">\r\n                          </ngx-charts-pie-grid>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                          <div class=\"row\">\r\n                            <div class=\"text-left col-12\" style=\"font-size:13px; margin-top:30px\">Periodos desarrollados: {{producto.max}}p <br></div>\r\n                            <div class=\"text-left col-12\" style=\"font-size:13px;margin-top:5px\">Costo pagado: <br>{{producto.costoDes*producto.max |currency:'USD':true:'1.0-0'}}</div>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div> -->\r\n\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n            </blockquote>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"col-4\" >\r\n            <div class=\"card card-outline-secondary mb-3 text-center\"\r\n            style=\"height:250px;overflow:hidden\" >\r\n              <div class=\"card-block\">\r\n                <blockquote class=\"card-blockquote\">\r\n                  <div class=\"\">\r\n                    <h5 class=\"col-12 text-center\">Opciones de Desarrollo de Productos</h5>\r\n                    <hr>\r\n                  </div>\r\n\r\n\r\n\r\n                  <div class=\"row\" style=\"overflow-y:scroll; height:160px;oveflow-x:visible\">\r\n                    <div class=\"col-12\" *ngFor=\"let producto of productosSinDesarrollar\">\r\n                      <div class=\"card\" style=\"margin-bottom:10px\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-3\">\r\n                            <img src=\"assets/img/box.png\" class=\"img-fluid\" style=\"margin-left:18px;margin-top:10px;margin-bottom:10px\">\r\n                          </div>\r\n                          <div class=\"col-9\">\r\n                            <div class=\"row\">\r\n                              <div class=\"text-left col-12\" style=\"font-size:13px; margin-top:15px\">Periodos a desarrollar: {{producto.tiempoDes}}p</div>\r\n                              <div class=\"text-left col-12\" style=\"font-size:13px;margin-top:5px\">Costo por Periodo:{{producto.costoDes|currency:'USD':true:'1.0-0'}}</div>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                  <!-- <div class=\"col-12\">\r\n                    <div class=\"row\" style=\"overflow-y:scroll; height:200px;oveflow-x:visible\">\r\n                      <div class=\"col-6\" *ngFor=\"let producto of productosSinDesGraf\" >\r\n                        <ngx-charts-pie-grid\r\n\r\n                        [scheme]=\"colorScheme\"\r\n                        [results]=\"producto.graf\"\r\n                        [designatedTotal]=\"producto.max\">\r\n                        </ngx-charts-pie-grid>\r\n\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div> -->\r\n                </blockquote>\r\n              </div>\r\n            </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-4\" >\r\n    <div class=\"card card-outline-secondary mb-3 text-center\"\r\n    style=\"height:250px;overflow:hidden\">\r\n      <div class=\"card-block\">\r\n        <blockquote class=\"card-blockquote\">\r\n          <div class=\"\">\r\n            <h5 class=\"col-12 text-center\">Productos en Desarrollo</h5>\r\n            <hr>\r\n          </div>\r\n          <div class=\"row\" style=\"overflow-y:scroll; height:160px;oveflow-x:visible\">\r\n            <div class=\"col-12\" *ngFor=\"let producto of productosEnDesGraf\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\" >\r\n                  <ngx-charts-pie-grid\r\n                  [scheme]=\"colorScheme\"\r\n                  [results]=\"producto.graf\"\r\n                  designatedTotal=\"2\">\r\n                  </ngx-charts-pie-grid>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"text-left col-12\" style=\"font-size:13px; margin-top:30px\">Periodos  desarrollados: {{producto.graf[0].value}} de {{producto.max}} <br></div>\r\n                    <div class=\"text-left col-12\" style=\"font-size:13px;margin-top:5px\">Costo del Periodo: <br>{{producto.costoDes|currency:'USD':true:'1.0-0'}}</div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n          <!-- <div class=\"col-12\">\r\n            <div class=\"row\" style=\"overflow-y:scroll;oveflow-x:hidden; height:200px\">\r\n              <div class=\"col-6\" *ngFor=\"let producto of productosEnDesGraf\">\r\n                <ngx-charts-pie-grid\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"producto.graf\"\r\n                [designatedTotal]=\"producto.max\">\r\n                </ngx-charts-pie-grid>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </blockquote>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"col-4\" >\r\n    <div class=\"card card-outline-secondary mb-3 text-center\"\r\n    style=\"height:250px;overflow:hidden\" >\r\n      <div class=\"card-block\">\r\n        <blockquote class=\"card-blockquote\">\r\n          <div class=\"\">\r\n            <h5 class=\"col-12 text-center\">Mercados Desarrollados</h5>\r\n            <hr>\r\n          </div>\r\n          <div style=\"overflow-y:scroll; height:170px;oveflow-x:visible\">\r\n            <div class=\"col-12\" *ngFor=\"let zona of productosZonaDesarrollados\">\r\n              <h6 style=\"margin-top:10px\">{{zona.nombreZona}}</h6>\r\n              <hr>\r\n              <div class=\"row\" style=\"margin-top:-5px\">\r\n                <div class=\"col-4\" *ngFor=\"let producto of zona.productosDes\">\r\n\r\n                  <div class=\"card\">\r\n\r\n                      <div class=\"col-12\" style=\"margin-top:10px\">\r\n                        <img src=\"assets/img/zone.png\"  class=\"img-fluid\">\r\n                      </div>\r\n                      <span class=\"text-center\" style=\"font-size:12px\">{{getNameById(producto)}}</span>\r\n                  </div>\r\n                  <!-- <div class=\"row\">\r\n                    <div class=\"col-6\" >\r\n                      <ngx-charts-pie-grid\r\n                      [scheme]=\"colorScheme\"\r\n                      [results]=\"producto.graf\"\r\n                      designatedTotal=\"2\">\r\n                      </ngx-charts-pie-grid>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <div class=\"row\">\r\n                        <div class=\"text-left col-12\" style=\"font-size:13px; margin-top:30px\">Periodos a desarrollar: {{getTiempo(zona.idZona,producto.idProducto)}}p <br></div>\r\n                        <div class=\"text-left col-12\" style=\"font-size:13px;margin-top:5px\">Costo de Periodo: <br>{{getCosto(zona.idZona,producto.idProducto)|currency:'USD':true:'1.0-0'}}</div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div> -->\r\n\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n<!--\r\n          <div class=\"col-12\">\r\n            <div class=\"row\" style=\"overflow-y:scroll; height:200px;oveflow-x:visible\">\r\n              <div class=\"col-12\" *ngFor=\"let zona of productosZonaDesGraf\">\r\n                <h6>{{zona.nombreZona}}</h6>\r\n                <hr>\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\" *ngFor=\"let producto of zona.productos\">\r\n                    <ngx-charts-pie-grid\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"producto.graf\"\r\n                    designatedTotal=\"40\">\r\n                    </ngx-charts-pie-grid>\r\n\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div> -->\r\n        </blockquote>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"col-4\" >\r\n  <div class=\"card card-outline-secondary mb-3 text-center\"\r\n  style=\"height:250px;overflow:hidden\" >\r\n    <div class=\"card-block\">\r\n      <blockquote class=\"card-blockquote\">\r\n        <div class=\"\">\r\n          <h5 class=\"col-12 text-center\">Opciones de Desarrollo de Mercado</h5>\r\n          <hr>\r\n        </div>\r\n        <div style=\"overflow-y:scroll; height:150px;oveflow-x:visible\">\r\n          <div class=\"col-12\" *ngFor=\"let zona of productosZonaSinDesarrollar\" >\r\n            <h6 style=\"margin-top:0px\">{{zona.nombreZona}}</h6>\r\n            <hr>\r\n            <div class=\"row\">\r\n              <div class=\"col-12\" *ngFor=\"let producto of zona.productosSinDes\">\r\n                <div class=\"card\" style=\"margin-bottom:10px\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                      <img src=\"assets/img/zone.png\" class=\"img-fluid\" style=\"margin-left:18px;margin-top:10px;margin-bottom:10px\">\r\n                    </div>\r\n                    <div class=\"col-9\">\r\n                      <div class=\"row\">\r\n                        <div class=\"text-left col-12\" style=\"font-size:13px; margin-top:15px\">Periodos a desarrollar: {{getTiempo(zona.idZona,producto)}}p</div>\r\n                        <div class=\"text-left col-12\" style=\"font-size:13px;margin-top:5px\">Costo por Periodo:{{getCosto(zona.idZona,producto)|currency:'USD':true:'1.0-0'}}</div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n        <!-- <div class=\"col-12\">\r\n          <div class=\"row\" style=\"overflow-y:scroll; height:200px;oveflow-x:visible\">\r\n\r\n\r\n            <div class=\"col-12\" *ngFor=\"let zona of productosZonaSinDesGraf\">\r\n              <h6>{{zona.nombreZona}}</h6>\r\n              <hr>\r\n              <div class=\"row\">\r\n                <div class=\"col-6\" *ngFor=\"let producto of zona.productos\">\r\n                  <ngx-charts-pie-grid\r\n                  [scheme]=\"colorScheme\"\r\n                  [results]=\"producto.graf\"\r\n                  designatedTotal=\"40\">\r\n                  </ngx-charts-pie-grid>\r\n\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </div> -->\r\n      </blockquote>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"col-4\" >\r\n  <div class=\"card card-outline-secondary mb-3 text-center\"\r\n  style=\"height:250px;overflow:hidden\">\r\n    <div class=\"card-block\" >\r\n      <blockquote class=\"card-blockquote\">\r\n        <div class=\"\">\r\n          <h5 class=\"col-12 text-center\">Mercados en Desarrollo</h5>\r\n          <hr>\r\n        </div>\r\n        <div style=\"overflow-y:scroll; height:180px;oveflow-x:visible\">\r\n          <div class=\"col-12\" *ngFor=\"let zona of productosZonaEnDesGraf\">\r\n            <h6 style=\"margin-top:15px\">{{zona.nombreZona}}</h6>\r\n            <hr>\r\n            <div class=\"row\">\r\n              <div class=\"col-12\" *ngFor=\"let producto of zona.productos\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\" >\r\n                    <ngx-charts-pie-grid\r\n                    [scheme]=\"colorScheme\"\r\n                    [results]=\"producto.graf\"\r\n                    [designatedTotal]=\"producto.max\">\r\n                    </ngx-charts-pie-grid>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <div class=\"row\">\r\n                      <div class=\"text-left col-12\" style=\"font-size:13px; margin-top:30px\">Periodos Desarrollados: <br>{{producto.graf[0].value}} de {{producto.max}}</div>\r\n                      <div class=\"text-left col-12\" style=\"font-size:13px;margin-top:5px\">Costo de Periodo: <br>{{getCosto(zona.idZona,producto.idProducto)|currency:'USD':true:'1.0-0'}}</div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </blockquote>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n          </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/balance-home/balance-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_desarrollo_producto_service__ = __webpack_require__("../../../../../src/app/services/desarrollo-producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_compra_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/compra-maquinaria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_resultados_service__ = __webpack_require__("../../../../../src/app/services/resultados.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dashboard_service__ = __webpack_require__("../../../../../src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_desarrollo_zona_service__ = __webpack_require__("../../../../../src/app/services/desarrollo-zona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_zonas_service__ = __webpack_require__("../../../../../src/app/services/zonas.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BalanceHomeComponent = (function () {
    function BalanceHomeComponent(_desarrolloProducto, _desarrolloZonaService, _CompraMaquinariaService, _productosService, _resultadosService, _dash, _balanceService, _demandaService) {
        var _this = this;
        this._desarrolloProducto = _desarrolloProducto;
        this._desarrolloZonaService = _desarrolloZonaService;
        this._CompraMaquinariaService = _CompraMaquinariaService;
        this._productosService = _productosService;
        this._resultadosService = _resultadosService;
        this._dash = _dash;
        this._balanceService = _balanceService;
        this._demandaService = _demandaService;
        this.productosZonaSinDesarrollar = [];
        this.productosZonaEnDesarrollo = [];
        this.productosZonaDesarrollados = [];
        this.demandasGraf = [];
        this.balanceFinal = [];
        this.activos = [];
        this.pasivos = [];
        this.selectedTabProd = "Productos en Desarrollo";
        this.selectedTabZona = "Zonas en Desarrollo";
        this.view = [700, 400];
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.colorScheme2 = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.zonas = [];
        this.productosDesarollados = [];
        this.productosEnDesarrollo = [];
        this.productosSinDesarrollar = [];
        this.activosGraf = [];
        this.productos = this._productosService.returnProductos();
        this.productosSinDesarrollar = this._desarrolloProducto.returnProductosSinDesarrollar();
        this.productosEnDesarrollo = this._desarrolloProducto.returnProductosEnDesarrollo();
        this.productosDesarollados = this._desarrolloProducto.returnProductosDesarrollados();
        this.productosZonaSinDesarrollar = this._desarrolloZonaService.returnProductosDeZonaSinDesarrollar();
        this.productosZonaEnDesarrollo = this._desarrolloZonaService.returnProductosDeZonaEnDesarrollo();
        console.log("Productos desarrolados", this.productosDesGraf, this.productosSinDesGraf);
        this.productosZonaDesarrollados = this._desarrolloZonaService.returnProductosDeZonaDesarrollados();
        this.demandas = this._dash.returnDemandas();
        this.balanceFinal = this._balanceService.returnBalance();
        this.maquinarias = this._dash.returnMaquinarias();
        this.activos = this._balanceService.returnActivos();
        this.pasivos = this._balanceService.returnPasivos();
        this.zonas = this._demandaService.returnZonasNormales();
        console.log(this.activos, this.pasivos);
        setTimeout(function () {
            console.log("prod des zONA", _this.productosZonaDesarrollados, _this.productosZonaSinDesarrollar);
            _this.productosEnDesGraf = _this.grafProd(_this.productosEnDesarrollo);
            console.log(_this.productosDesGraf);
            _this.productosSinDesGraf = _this.grafProdSin(_this.productosSinDesarrollar);
            console.log("Productos SIn DesGraf", _this.productosSinDesGraf);
            _this.productosDesGraf = _this.grafProdDes(_this.productosDesarollados);
            _this.demandasGraf = _this.getGrafDemanda(_this.demandas);
            _this.maquinariasGraf = _this.getGrafMaquinaria(_this.maquinarias);
            _this.productosZonaSinDesGraf = _this.grafZonaSinDes(_this.productosZonaSinDesarrollar);
            _this.productosZonaEnDesGraf = _this.grafZonaEnDes(_this.productosZonaEnDesarrollo);
            _this.productosZonaDesGraf = _this.grafZonaDes(_this.productosZonaDesarrollados);
            console.log("graf", _this.productosZonaEnDesarrollo);
            console.log("Prtoductos2", _this.productosDesarollados, _this.productosEnDesarrollo);
            _this.pasivo = [
                {
                    "name": "IVA por Enterar",
                    "value": _this.getIVAporEnterar()
                },
                {
                    "name": "Proveedores",
                    "value": _this.getProvedores()
                },
                {
                    "name": "Impuestos por Pagar",
                    "value": _this.getImpuestosPorPagar()
                },
                {
                    "name": "Prestamos Más de un Año",
                    "value": _this.getPrestamosMas()
                },
                {
                    "name": "Prestamos Menos de un Año",
                    "value": _this.getPrestamosMenos()
                }
            ];
            console.log(_this.balanceFinal);
        }, 3000);
        this.activosGraf = this.grafActivos();
        console.log("Activo", this.activo);
        this.single = [
            {
                "name": "Germany",
                "value": 8940000
            },
            {
                "name": "USA",
                "value": 5000000
            },
            {
                "name": "France",
                "value": 7200000
            },
            {
                "name": "Mexico",
                "value": 7200000
            },
            {
                "name": "U",
                "value": 5000000
            },
            {
                "name": "Uru",
                "value": 7200000
            }
        ];
        this.single2 = [
            {
                "name": "Producto 1",
                "value": 8940000
            },
            {
                "name": "Producto 2",
                "value": 5000000
            },
            {
                "name": "Producto 3",
                "value": 7200000
            },
            {
                "name": "Producto 4",
                "value": 7200000
            },
            {
                "name": "Producto 5",
                "value": 5000000
            },
            {
                "name": "Producto 6",
                "value": 7200000
            }
        ];
        this.single3 = [
            {
                "name": "Germany",
                "value": 0
            }
        ];
        this.single4 = [
            {
                "name": "Germany",
                "value": 8940000
            },
            {
                "name": "USA",
                "value": 5000000
            },
            {
                "name": "France",
                "value": 7200000
            }
        ];
    }
    BalanceHomeComponent.prototype.ngOnInit = function () {
    };
    BalanceHomeComponent.prototype.grafActivos = function () {
        var act = [];
        console.log("Antes", this.activos);
        for (var key in this.activos) {
            act.push({ "name": "Activo", "value": this.activos[key] });
        }
        console.log("Arreglo", act);
        return act;
    };
    BalanceHomeComponent.prototype.grafProd = function (productos) {
        var data = [];
        console.log(productos);
        for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
            var producto = productos_1[_i];
            console.log(producto);
            data.push({
                graf: [{
                        "name": producto.nombreProd,
                        "value": producto.periodosDes
                    }],
                max: producto.tiempoDes,
                costoDes: producto.costoDes
            });
        }
        return data;
    };
    BalanceHomeComponent.prototype.grafZonaEnDes = function (zonas) {
        var data = [];
        for (var _i = 0, zonas_1 = zonas; _i < zonas_1.length; _i++) {
            var zona = zonas_1[_i];
            var zonaTemp = {
                nombreZona: zona.nombreZona,
                idZona: zona.idZona,
                productos: []
            };
            for (var _a = 0, _b = zona.productosEnDes; _a < _b.length; _a++) {
                var producto = _b[_a];
                zonaTemp.productos.push({
                    graf: [{
                            "name": this.getNameById(producto.idProducto),
                            "value": producto.periodosDes
                        }],
                    max: producto.tiempoDes,
                    idProducto: producto.idProducto
                });
            }
            data.push(zonaTemp);
        }
        console.log("GrafZona", data);
        return data;
    };
    BalanceHomeComponent.prototype.getTiempo = function (idZona, idProducto) {
        for (var _i = 0, _a = this.zonas; _i < _a.length; _i++) {
            var zona = _a[_i];
            if (zona.idZona == idZona) {
                for (var _b = 0, _c = zona.productos; _b < _c.length; _b++) {
                    var producto = _c[_b];
                    if (producto.Producto_idProducto == idProducto) {
                        return producto.tiempoDes;
                    }
                }
            }
        }
        return 0;
    };
    BalanceHomeComponent.prototype.getCosto = function (idZona, idProducto) {
        for (var _i = 0, _a = this.zonas; _i < _a.length; _i++) {
            var zona = _a[_i];
            if (zona.idZona == idZona) {
                for (var _b = 0, _c = zona.productos; _b < _c.length; _b++) {
                    var producto = _c[_b];
                    if (producto.Producto_idProducto == idProducto) {
                        return producto.costoDes;
                    }
                }
            }
        }
        return 0;
    };
    BalanceHomeComponent.prototype.grafZonaSinDes = function (zonas) {
        var data = [];
        for (var _i = 0, zonas_2 = zonas; _i < zonas_2.length; _i++) {
            var zona = zonas_2[_i];
            var zonaTemp = {
                nombreZona: zona.nombreZona,
                idZona: zona.idZona,
                productos: []
            };
            for (var _a = 0, _b = zona.productosSinDes; _a < _b.length; _a++) {
                var producto = _b[_a];
                zonaTemp.productos.push({
                    graf: [{
                            "name": this.getNameById(producto),
                            "value": 0
                        }],
                    max: 2,
                    idProducto: producto
                });
            }
            data.push(zonaTemp);
        }
        console.log("grafZona SIn Des", data);
        return data;
    };
    BalanceHomeComponent.prototype.grafZonaDes = function (zonas) {
        var data = [];
        for (var _i = 0, zonas_3 = zonas; _i < zonas_3.length; _i++) {
            var zona = zonas_3[_i];
            var zonaTemp = {
                nombreZona: zona.nombreZona,
                idZona: zona.idZona,
                productos: []
            };
            for (var _a = 0, _b = zona.productosDes; _a < _b.length; _a++) {
                var producto = _b[_a];
                zonaTemp.productos.push({
                    graf: [{
                            "name": this.getNameById(producto),
                            "value": 2
                        }],
                    idProducto: producto,
                    max: 2
                });
            }
            data.push(zonaTemp);
        }
        console.log("grafZona SIn Des", data);
        return data;
    };
    BalanceHomeComponent.prototype.grafProdSin = function (productos) {
        var data = [];
        console.log(productos);
        for (var _i = 0, productos_2 = productos; _i < productos_2.length; _i++) {
            var producto = productos_2[_i];
            console.log(producto);
            data.push({
                graf: [{
                        "name": producto.nombreProd,
                        "value": 0
                    }],
                max: producto.tiempoDes,
                costoDes: producto.costoDes
            });
        }
        return data;
    };
    BalanceHomeComponent.prototype.getGrafDemanda = function (demandas) {
        var data = [];
        for (var _i = 0, demandas_1 = demandas; _i < demandas_1.length; _i++) {
            var prod = demandas_1[_i];
            var demandaTotal = 0;
            for (var _a = 0, _b = prod.zonas; _a < _b.length; _a++) {
                var zona = _b[_a];
                demandaTotal = demandaTotal + zona.demanda;
            }
            data.push({
                "name": this.getNameById(prod.idProducto),
                "value": demandaTotal
            });
        }
        return data;
    };
    BalanceHomeComponent.prototype.getGrafMaquinaria = function (productos) {
        var data = [];
        for (var _i = 0, productos_3 = productos; _i < productos_3.length; _i++) {
            var prod = productos_3[_i];
            var produccionTotal = 0;
            for (var _a = 0, _b = prod.maquinas; _a < _b.length; _a++) {
                var maquina = _b[_a];
                produccionTotal = produccionTotal + maquina.cantidadProd;
            }
            data.push({
                "name": this.getNameById(prod.idProducto),
                "value": produccionTotal
            });
        }
        return data;
    };
    BalanceHomeComponent.prototype.grafProdDes = function (productos) {
        var data = [];
        console.log(productos);
        for (var _i = 0, productos_4 = productos; _i < productos_4.length; _i++) {
            var producto = productos_4[_i];
            console.log(producto);
            data.push({
                graf: [{
                        "name": producto.nombreProd,
                        "value": producto.tiempoDes
                    }],
                max: producto.tiempoDes,
                costoDes: producto.costoDes
            });
        }
        return data;
    };
    BalanceHomeComponent.prototype.getNameById = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == id)
                return producto.nombreProd;
        }
        return "id no encontrado";
    };
    BalanceHomeComponent.prototype.getNameByIdZona = function (id) {
        for (var _i = 0, _a = this.zonas; _i < _a.length; _i++) {
            var zona = _a[_i];
            if (zona.idZona == id)
                return zona.nombreZona;
        }
        return "id no encontrado";
    };
    BalanceHomeComponent.prototype.getCajaBancos = function () {
        var cajaBancos = 0;
        for (var key in this.balanceFinal) {
            cajaBancos += this.balanceFinal[key].cajaBancos;
        }
        return cajaBancos;
    };
    BalanceHomeComponent.prototype.getCuentasPorCobrar = function () {
        var item = 0;
        for (var key in this.balanceFinal) {
            item += this.balanceFinal[key].cuentasPorCobrar;
        }
        return item;
    };
    BalanceHomeComponent.prototype.getAlmacenDeArticuloTermindo = function () {
        var item = 0;
        for (var key in this.balanceFinal) {
            item += this.balanceFinal[key].almacenArtTerm;
        }
        return item;
    };
    BalanceHomeComponent.prototype.getIVAporEnterar = function () {
        var item = 0;
        for (var key in this.balanceFinal) {
            item += this.balanceFinal[key].IVAPorEnterar;
        }
        return item;
    };
    BalanceHomeComponent.prototype.getImpuestosPorPagar = function () {
        var item = 0;
        for (var key in this.balanceFinal) {
            item += this.balanceFinal[key].imptosPorPagar;
        }
        return item;
    };
    BalanceHomeComponent.prototype.getProvedores = function () {
        var item = 0;
        for (var key in this.balanceFinal) {
            item += this.balanceFinal[key].proveedores;
        }
        return item;
    };
    BalanceHomeComponent.prototype.getPTUporPagar = function () {
        var item = 0;
        for (var key in this.balanceFinal) {
            item += this.balanceFinal[key].PTUporPagar;
        }
        return item;
    };
    BalanceHomeComponent.prototype.getPrestamosMenos = function () {
        var item = 0;
        for (var key in this.balanceFinal) {
            item += this.balanceFinal[key].prestamosMenosAnio;
        }
        return item;
    };
    BalanceHomeComponent.prototype.getPrestamosMas = function () {
        var item = 0;
        for (var key in this.balanceFinal) {
            item += this.balanceFinal[key].prestamosMenosAnio;
        }
        return item;
    };
    return BalanceHomeComponent;
}());
BalanceHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-balance-home',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-home/balance-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-home/balance-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_desarrollo_producto_service__["a" /* DesarrolloProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_desarrollo_producto_service__["a" /* DesarrolloProductoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_desarrollo_zona_service__["a" /* DesarrolloZonaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_desarrollo_zona_service__["a" /* DesarrolloZonaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_compra_maquinaria_service__["a" /* CompraMaquinariaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_compra_maquinaria_service__["a" /* CompraMaquinariaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_resultados_service__["a" /* ResultadosService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_dashboard_service__["a" /* DashboardService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_balance_service__["a" /* BalanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_balance_service__["a" /* BalanceService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__services_zonas_service__["a" /* ZonasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_zonas_service__["a" /* ZonasService */]) === "function" && _h || Object])
], BalanceHomeComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=balance-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/balance-inicial/balance-inicial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/balance-inicial/balance-inicial.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Balance General</h3>\r\n\r\n<table class=\"table table-hover  table-responsive offset-3\" *ngFor=\"let balance of balanceInicial\">\r\n  <thead>\r\n    <tr>\r\n      <th colspan=\"6\" class=\"text-center\">Posición Financiera Final</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr class=\"thead-inverse\">\r\n      <th colspan=\"4\" class=\"text-center bg-primary\">A menos de un año</th>\r\n      <th colspan=\"2\" class=\"text-center bg-warning\">A menos de un año</th>\r\n    </tr>\r\n    <tr>\r\n      <td>Caja Bancos</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.cajaBancos|currency:'USD':true:'1.0-0'}}</td>\r\n      <td>IVA por enterar</td>\r\n      <td>{{balance.IVAPorEnterar | currency:'USD':true}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Cuentas por Cobrar</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.cuentasPorCobrar |currency:'USD':true:'1.0-0'}}</td>\r\n      <td>Impuestos por Pagar</td>\r\n      <td class=\"text-right\">{{balance.imptosPorPagar |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>IVA Acreditable</td>\r\n      <td colspan=\"3\" class=\"text-right\"> {{balance.IVAAcreditable |currency:'USD':true:'1.0-0'}}</td>\r\n      <td>Proveedores</td>\r\n      <td class=\"text-right\">{{balance.proveedores |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Almacen de Articulo Terminado</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.almacenArtTerm|currency:'USD':true:'1.0-0' }}</td>\r\n      <td>PTU por Pagar</td>\r\n      <td class=\"text-right\">{{balance.PTUPorPagar |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Alamacén de Materiales</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.almacenMateriales |currency:'USD':true:'1.0-0'}}</td>\r\n      <td>Préstamos Bancarios</td>\r\n      <td class=\"text-right\">{{balance.prestamosMenosAnio|currency:'USD':true:'1.0-0' }}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th class=\"text-center\">TOTAL</th>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.cajaBancos + balance.cuentasPorCobrar + balance.IVAAcreditable\r\n          + balance.almacenArtTerm + balance.almacenMateriales |currency:'USD':true:'1.0-0' }}</td>\r\n      <th class=\"text-center\">TOTAL</th>\r\n      <td class=\"text-right\">{{balance.IVAPorEnterar + balance.imptosPorPagar + balance.proveedores + balance.PTUPorPagar + balance.prestamosMenosAnio |currency:'USD':true:'1.0-0' }}</td>\r\n    </tr>\r\n\r\n    <tr class=\"thead-inverse\">\r\n      <th class=\"text-center bg-primary\" colspan=\"4\">A más de un año</th>\r\n      <th class=\"text-center bg-warning\">A más de un año</th>\r\n\r\n    </tr>\r\n\r\n    <tr class=\"thead-inverse\">\r\n      <th class=\"text-center bg-success\"></th>\r\n      <th class=\"text-center bg-success\">I.O.</th>\r\n      <th class=\"text-center bg-success\">Dep. Acum</th>\r\n      <th class=\"text-center bg-success\">Neto</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>Terrenos</td>\r\n      <td class=\"text-right\">{{balance.terreno |currency:'USD':true:'1.0-0' }}</td>\r\n      <td class=\"text-right\">{{balance.depTerreno |currency:'USD':true:'1.0-0'}}</td>\r\n      <td class=\"text-right\">{{balance.terreno - balance.depTerreno |currency:'USD':true:'1.0-0' }}</td>\r\n      <td>Prestamos Totales</td>\r\n      <td class=\"text-right\">{{balance.prestamosMasAnio |currency:'USD':true:'1.0-0' }}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Edificios e Instalaciones</td>\r\n      <td class=\"text-right\">{{balance.edifInsta |currency:'USD':true:'1.0-0' }}</td>\r\n      <td class=\"text-right\">{{balance.depEdif |currency:'USD':true:'1.0-0' }}</td>\r\n      <td class=\"text-right\">{{balance.edifInsta - balance.depEdif |currency:'USD':true:'1.0-0' }}</td>\r\n      <td colspan=\"2\"></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Maquinaria y Equipo</td>\r\n      <td class=\"text-right\">{{balance.maqEquipo |currency:'USD':true:'1.0-0' }}</td>\r\n      <td class=\"text-right\">{{balance.depMaqEquipo |currency:'USD':true:'1.0-0' }}</td>\r\n      <td class=\"text-right\">{{balance.maqEquipo - balance.depMaqEquipo |currency:'USD':true:'1.0-0'}}</td>\r\n      <td colspan=\"2\"></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Muebles y Enseres</td>\r\n      <td class=\"text-right\">{{balance.mueblesEnseres |currency:'USD':true:'1.0-0' }}</td>\r\n      <td class=\"text-right\">{{balance.depMueblesEnseres |currency:'USD':true:'1.0-0' }}</td>\r\n      <td class=\"text-right\">{{balance.mueblesEnseres - balance.depMueblesEnseres |currency:'USD':true:'1.0-0'}}</td>\r\n      <td colspan=\"2\"></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Equipo de Transporte</td>\r\n      <td class=\"text-right\">{{balance.eqTrans|currency:'USD':true:'1.0-0' }}</td>\r\n      <td class=\"text-right\">{{balance.depEqTrans |currency:'USD':true:'1.0-0' }}</td>\r\n      <td class=\"text-right\">{{balance.eqTrans - balance.depEqTrans |currency:'USD':true:'1.0-0' }}</td>\r\n      <td colspan=\"2\"></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th class=\"text-center\">TOTAL</th>\r\n      <td></td>\r\n      <td></td>\r\n      <td class=\"text-right\">{{balance.terreno + balance.edifInsta + balance.mueblesEnseres + balance.eqTrans + balance.maqEquipo - balance.depMaqEquipo - balance.depEdif - balance.depMueblesEnseres -balance.depEqTrans |currency:'USD':true:'1.0-0' }}</td>\r\n      <th class=\"text-center\">TOTAL</th>\r\n      <td class=\"text-right\">{{balance.prestamosMasAnio |currency:'USD':true:'1.0-0' }}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th colspan=\"4\" class=\"text-center\">De Aplicación Diferida</th>\r\n      <th class=\"text-center\" colspan=\"2\">Con los Accionistas</th>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Pagos Hechos por anticipado</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.pagosAnticipado|currency:'USD':true:'1.0-0' }}</td>\r\n      <td>Capital Social</td>\r\n      <td class=\"text-right\">{{balance.capitalSocial |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>Gastos por Amortizar</td>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.gastosAmortizacion  |currency:'USD':true:'1.0-0'}}</td>\r\n      <td>Reserva legal</td>\r\n      <td class=\"text-right\">{{balance.reservaLegal  |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td colspan=\"4\"></td>\r\n      <td>Utilidad Acumulada</td>\r\n      <td class=\"text-right\">{{balance.utilidadAcum  |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td colspan=\"4\"></td>\r\n      <td >Utilidad del Ejercicio</td>\r\n      <td class=\"text-right\">{{balance.utilidadEjercicio  |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th class=\"text-center\">TOTAL</th>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.pagosAnticipado + balance.gastosAmortizacion |currency:'USD':true:'1.0-0'}}</td>\r\n      <th class=\"text-center\">TOTAL</th>\r\n      <td class=\"text-right\">{{balance.capitalSocial + balance.reservaLegal + balance.utilidadAcum + balance.utilidadEjercicio  |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <th >Suma de los Derechos</th>\r\n      <td colspan=\"3\" class=\"text-right\">{{balance.pagosAnticipado + balance.gastosAmortizacion + balance.terreno\r\n        + balance.edifInsta + balance.mueblesEnseres + balance.eqTrans + balance.maqEquipo\r\n        + balance.cajaBancos + balance.cuentasPorCobrar + balance.IVAAcreditable + balance.almacenArtTerm\r\n        + balance.almacenMateriales - balance.depMaqEquipo - balance.depEdif - balance.depMueblesEnseres -balance.depEqTrans  |currency:'USD':true:'1.0-0'}}</td>\r\n      <td>Suma de las Obligaciones</td>\r\n      <td class=\"text-right\">{{balance.IVAPorEnterar + balance.imptosPorPagar + balance.proveedores + balance.PTUPorPagar\r\n        + balance.prestamosMenosAnio + balance.prestamosMasAnio + balance.capitalSocial + balance.reservaLegal\r\n        + balance.utilidadAcum + balance.utilidadEjercicio  |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>Diferencia</th>\r\n      <td colspan=\"3\" class=\"text-right\">{{(balance.pagosAnticipado + balance.gastosAmortizacion + balance.terreno\r\n        + balance.edifInsta + balance.mueblesEnseres + balance.eqTrans + balance.maqEquipo\r\n        + balance.cajaBancos + balance.cuentasPorCobrar + balance.IVAAcreditable + balance.almacenArtTerm\r\n        + balance.almacenMateriales) - (balance.IVAPorEnterar + balance.imptosPorPagar + balance.proveedores + balance.PTUPorPagar\r\n          + balance.prestamosMenosAnio + balance.prestamosMasAnio + balance.capitalSocial + balance.reservaLegal\r\n          + balance.utilidadAcum + balance.utilidadEjercicio) - balance.depMaqEquipo - balance.depEdif - balance.depMueblesEnseres -balance.depEqTrans  |currency:'USD':true:'1.0-0'}}</td>\r\n      <td colspan=\"2\"></td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/balance-inicial/balance-inicial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resultados_service__ = __webpack_require__("../../../../../src/app/services/resultados.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceInicialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BalanceInicialComponent = (function () {
    function BalanceInicialComponent(_resultadosService) {
        this._resultadosService = _resultadosService;
        this.balanceInicial = this._resultadosService.balanceInicialAnterior();
        console.log(this.balanceInicial);
    }
    BalanceInicialComponent.prototype.ngOnInit = function () {
    };
    return BalanceInicialComponent;
}());
BalanceInicialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-balance-inicial',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-inicial/balance-inicial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-inicial/balance-inicial.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_resultados_service__["a" /* ResultadosService */]) === "function" && _a || Object])
], BalanceInicialComponent);

var _a;
//# sourceMappingURL=balance-inicial.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/balance/balance.component.html":
/***/ (function(module, exports) {

module.exports = "  <div style=\"z-index:10000;color:white;position:fixed; margin-top:-93px; margin-left:15%\">\r\n    <h4 class=\" text-center\">Periodo Corriendo: {{periodo}}</h4>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"openConf=true\"\r\n  style=\"z-index:10000;color:white;position:fixed; margin-top:-97px; margin-left:30%\">Cerrar Periodo</button>\r\n  <button  type=\"button\" class=\"btn btn-info\" (click)=\"openBalances()\"\r\n  style=\"z-index:1000000;color:white;position:fixed; margin-top:-97px; margin-left:40%\">Periodos Anteriores</button>\r\n\r\n  <div bsModal #modalPeriodos=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\"\r\n  style=\"z-index:100000\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h2 class=\"modal-title\">Periodos</h2>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"list-group\" >\r\n            <a class=\"list-group-item list-group-item-action \" *ngFor=\"let p of periodos\" (click)=\"transicion(p.numero)\">{{p.nombre}}</a>\r\n          </div>\r\n              <div class=\"modal-footer\">\r\n                <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalPeriodos.hide()\">\r\n                Cancelar\r\n                </button>\r\n              </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ngl-modal header=\"Confirmación\"  [(open)]=\"openConf\" size=\"x-small\" directional=\"false\">\r\n      <div body>\r\n        <div class=\"col-12 text-center container\">\r\n          <h2 style=\"margin-bottom:30px\">¿Esta seguro que deseas cerrar el periodo actual ?</h2>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-template ngl-modal-footer>\r\n      <button class=\"btn btn-danger\" (click)=\"openConf=false\">Cancel</button>\r\n      <button class=\"btn btn-primary\" (click)=\"pasarPeriodo()\">Cerrar Periodo</button>\r\n      </ng-template>\r\n    </ngl-modal>\r\n\r\n\r\n    <ngl-modal header=\"Confirmación\"  [(open)]=\"openBien\" size=\"x-small\" directional=\"false\">\r\n      <div body>\r\n        <div class=\"col-12 text-center container\">\r\n          <h2 style=\"margin-bottom:30px\">Ha cerrado periodo satisfactoriamente</h2>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-template ngl-modal-footer>\r\n      <button class=\"btn btn-primary\" (click)=\"modalPasarPeriodo()\">Aceptar</button>\r\n      </ng-template>\r\n    </ngl-modal>\r\n\r\n\r\n    <ngl-modal  [(open)]=\"openLoad\" size=\"small\" directional=\"false\">\r\n      <div body>\r\n        <h1 class=\"col-12 text-center\" >Cerrando Periodo</h1>\r\n        <h5 class=\"col-12 text-center\">Realzando Operacion</h5>\r\n        <div style=\"position:relative; height:6.25rem; z-index:0;\">\r\n          <ngl-spinner size=\"large\" type=\"brand\"></ngl-spinner>\r\n        </div>\r\n      </div>\r\n    </ngl-modal>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/balance/balance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_proyectos_service__ = __webpack_require__("../../../../../src/app/services/proyectos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_desarrollo_producto_service__ = __webpack_require__("../../../../../src/app/services/desarrollo-producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_resultados_service__ = __webpack_require__("../../../../../src/app/services/resultados.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_desarrollo_zona_service__ = __webpack_require__("../../../../../src/app/services/desarrollo-zona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auxiliar_service__ = __webpack_require__("../../../../../src/app/services/auxiliar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_usuario_credito_service__ = __webpack_require__("../../../../../src/app/services/usuario-credito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BalanceComponent = (function () {
    function BalanceComponent(_proyectoService, _balanceService, _auxiliarService, _resultadosService, _desarrolloZona, router, _creditoService, _desarrolloProducto) {
        this._proyectoService = _proyectoService;
        this._balanceService = _balanceService;
        this._auxiliarService = _auxiliarService;
        this._resultadosService = _resultadosService;
        this._desarrolloZona = _desarrolloZona;
        this.router = router;
        this._creditoService = _creditoService;
        this._desarrolloProducto = _desarrolloProducto;
        this.totalItems = 50;
        this.smallnumPages = 0;
        this.opciones = false;
        this.periodos = [];
        this.openConf = false;
        this.openBien = false;
        this.openLoad = false;
        this.status = {
            isFirstOpen: true,
            isOpen: true
        };
        this.balanceFinal = this._resultadosService.getBalanceFinal();
    }
    BalanceComponent.prototype.ngOnInit = function () {
        this.asignarBalance(localStorage.getItem('idProyecto'));
    };
    BalanceComponent.prototype.asignarBalance = function (idProyecto) {
        var _this = this;
        this.periodos.length = 0;
        this._proyectoService.buscarPeriodos(idProyecto).subscribe(function (data) {
            if (data.datos.length == 0) {
                _this.periodo = 1;
                var x = {
                    nombre: "Periodo 1",
                    numero: 1
                };
                _this.periodos.push(x);
            }
            else {
                _this.periodo = parseInt(data.datos.length) - 1;
                for (var key$ in data.datos) {
                    if (data.datos[key$].numeroPeriodo != 0) {
                        var y = {
                            nombre: "Periodo " + (data.datos[key$].numeroPeriodo),
                            numero: (data.datos[key$].numeroPeriodo)
                        };
                        _this.periodos.push(y);
                    }
                }
            }
        });
    };
    BalanceComponent.prototype.pasarPeriodo = function () {
        var _this = this;
        var p = localStorage.getItem('numeroPeriodo');
        var proyecto = localStorage.getItem('idProyecto');
        var periodoNuevo = parseInt(p) + 1;
        var cajaBancosFinal = 0;
        for (var _i = 0, _a = this.balanceFinal; _i < _a.length; _i++) {
            var b = _a[_i];
            cajaBancosFinal += b.cajaBancos;
        }
        if (localStorage.getItem('periodos') == p) {
            alert("Haz finalizado la simulacion");
        }
        else {
            if (cajaBancosFinal < 0) {
                this.openConf = false;
                alert("Necesitas un prestamo");
                this.router.navigate(['Usuario/proyecto/financiamiento']);
            }
            else {
                this.openConf = false;
                this.openLoad = true;
                setTimeout(function () { _this.openLoad = false, _this.openBien = true; }, 2000);
                this._balanceService.getBalanceByIds(proyecto, p).subscribe(function (data) {
                    var dep = data.datos[0].maqEquipo * .10;
                    _this._balanceService.crearBalance(proyecto, data.datos[0], periodoNuevo).subscribe(function (data) {
                        if (data.success) {
                            localStorage.setItem('numeroPeriodo', periodoNuevo.toString());
                            localStorage.setItem('numeroRPeriodos', periodoNuevo.toString());
                            _this.periodo = _this.periodo + 1;
                            var y = {
                                nombre: "Periodo " + _this.periodo,
                                numero: _this.periodo
                            };
                            _this.periodos.push(y);
                        }
                    });
                });
                this._desarrolloProducto.actualizarPD();
                this._desarrolloZona.actualizarZonasDes();
                this._creditoService.validarP().subscribe();
            }
        }
    };
    BalanceComponent.prototype.openBalances = function () {
        this.modalPeriodos.show();
    };
    BalanceComponent.prototype.modalPasarPeriodo = function () {
        this.openBien = false;
        this.router.navigate(['Usuario/proyecto/home']);
    };
    BalanceComponent.prototype.transicion = function (numero) {
        console.log(numero);
        this.periodo = numero;
        localStorage.setItem('numeroPeriodo', numero);
        this.modalPeriodos.hide();
    };
    return BalanceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalPeriodos'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], BalanceComponent.prototype, "modalPeriodos", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConf'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _b || Object)
], BalanceComponent.prototype, "confModal", void 0);
BalanceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-balance',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance/balance.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_proyectos_service__["a" /* ProyectosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_proyectos_service__["a" /* ProyectosService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_balance_service__["a" /* BalanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_balance_service__["a" /* BalanceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_auxiliar_service__["a" /* AuxiliarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auxiliar_service__["a" /* AuxiliarService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_resultados_service__["a" /* ResultadosService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_desarrollo_zona_service__["a" /* DesarrolloZonaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_desarrollo_zona_service__["a" /* DesarrolloZonaService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* Router */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__services_usuario_credito_service__["a" /* UsuarioCreditoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_usuario_credito_service__["a" /* UsuarioCreditoService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__services_desarrollo_producto_service__["a" /* DesarrolloProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_desarrollo_producto_service__["a" /* DesarrolloProductoService */]) === "function" && _k || Object])
], BalanceComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=balance.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/compra-maquinaria/compra-maquinaria.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resaltar{\r\n  background-color:#408AB4;\r\n  border-color: black;\r\n}\r\n\r\n.resaltarLess{\r\n  background-color:#FF895D;\r\n  border-color: black;\r\n}\r\n\r\n\r\n.sma{\r\n  font-size: 15px\r\n}\r\n\r\n\r\n.letra-resaltar{\r\n  color:white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/compra-maquinaria/compra-maquinaria.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n  <div class=\"offset-1 col-4\" >\r\n    <h2 class=\"col-12 text-center\">Maquinas para Comprar</h2>\r\n    <hr>\r\n    <div class=\"col-12\"  style=\"overflow-y:scroll;height:550px\">\r\n      <div class=\"card\" *ngFor=\"let maquina of maquinas\" (click)=\"selectMaquinariaAdd(maquina)\"\r\n      [ngClass]=\"{'resaltar':maquina.idMaquinaria==this.maqSelectedAdd.idMaquinaria}\">\r\n        <div class=\"card-block\"\r\n        [ngClass]=\"{'letra-resaltar':maquina.idMaquinaria==this.maqSelectedAdd.idMaquinaria}\">\r\n          <div class=\"row\">\r\n            <img  src=\"assets/img/machine.png\" style=\"height:60px;margin-left:10px;\">\r\n\r\n            <div class=\"col-6\">\r\n              <h4 class=\"card-title\">{{maquina.nombreMaq}}</h4>\r\n              <h6 class=\"card-subtitle\">Costo: {{ maquina.costo | currency:'USD':true }} </h6>\r\n\r\n\r\n            </div>\r\n            <!-- <div class=\" col-3 \">\r\n              <button type=\"button\" class=\"btn btn-success\" (click)= \"agregarMaquinaria(maquina)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row\">\r\n            <img src=\"assets/img/box.png\" style=\"height:35px;margin-left:10px;margin-top:6px; margin-right:10px\">\r\n            <div class=\"col-6\">\r\n              <span class=\"row sma\">Producto: {{getNameById(maquina.Producto_idProducto)}}</span>\r\n              <span class=\"row sma\">Producción: {{maquina.cantidadProd}}u</span>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-2\">\r\n    <button type=\"button\" class=\"offset-1 col-10 btn btn-primary \"\r\n    (click) =\"openConf=true\" style=\"margin-top:250px\"><i class=\"material-icons\">keyboard_arrow_right</i></button>\r\n    <button type=\"button\" class=\"offset-1 col-10 btn btn-danger \" style=\"margin-top:50px\" (click)=\"regresar()\">\r\n      <i class=\"material-icons\">keyboard_arrow_left</i>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"col-4\">\r\n    <h2 class=\"col-12 text-center\">Maquinas Compradas</h2>\r\n    <hr>\r\n\r\n    <div class=\"col-12\" style=\"overflow-y:scroll;height:550px\">\r\n      <div class=\"card\" *ngFor=\"let maquina of maquinasCompradas\" (click)=\"selectMaquinariaLess(maquina)\"\r\n      [ngClass]=\"{'resaltarLess':maquina.idMaquinaria==this.maqSelectedLess.idMaquinaria}\">\r\n        <div class=\"card-block\"\r\n        [ngClass]=\"{'letra-resaltar':maquina.idMaquinaria==this.maqSelectedLess.idMaquinaria}\">\r\n          <div class=\"row\">\r\n            <img  src=\"assets/img/machine.png\" style=\"height:60px;margin-left:10px;\">\r\n\r\n            <div class=\"col-6\">\r\n              <h4 class=\"card-title\">{{maquina.nombreMaq}}</h4>\r\n              <h6 class=\"card-subtitle\">Cantidad:<ngl-badge type=\"success\" class=\"slds-l-horizontal--large\">{{maquina.Cantidad}}</ngl-badge></h6>\r\n\r\n\r\n\r\n            </div>\r\n\r\n            <!-- <div class=\" col-3 \">\r\n              <button type=\"button\" class=\"btn btn-success\" (click)= \"agregarMaquinaria(maquina)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"row\">\r\n            <img src=\"assets/img/box.png\" style=\"height:35px;margin-left:10px;margin-top:6px; margin-right:10px\">\r\n            <div class=\"col-6\">\r\n              <span class=\"row sma\">Producto: {{getNameById(maquina.Producto_idProducto)}}</span>\r\n              <span class=\"row sma\">Producción: {{maquina.cantidadProd*maquina.Cantidad}}u</span>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n        <!-- <div class=\"card\" *ngFor=\"let maquina of maquinasCompradas\" >\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <img  src=\"assets/img/machine.png\" style=\"height:40px;margin-left:10px;\">\r\n\r\n              <div class=\"col-6\">\r\n                <h4 class=\"card-title\">{{maquina.nombreMaq}}</h4>\r\n                {{maquina.Cantidad}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ngl-modal  [(open)]=\"openLoad\" size=\"small\" directional=\"false\">\r\n  <div body>\r\n        <h2 class=\"col-12 text-center\">Comprando Maquinaria</h2>\r\n    <h6 class=\"col-12 text-center\">Realizando Operación</h6>\r\n    <div style=\"position:relative; height:6.25rem; z-index:0;\">\r\n      <ngl-spinner size=\"large\" type=\"brand\"></ngl-spinner>\r\n    </div>\r\n\r\n  </div>\r\n  </ngl-modal>\r\n\r\n\r\n  <ngl-modal header=\"Confirmación\"  [(open)]=\"openConf\" size=\"x-small\" directional=\"false\">\r\n\r\n    <div body>\r\n      <div class=\"col-12 text-center container\">\r\n        <h5 style=\"margin-bottom:30px\">¿Estas seguro que deseas comprar la maquina \"{{maqSelectedAdd.nombreMaq}}\"?</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-3 offset-2\">\r\n            <img  src=\"assets/img/machine.png\" class=\"img-fluid\">\r\n          </div>\r\n          <div class=\"col-5 \">\r\n            <p>\r\n            <h5 class=\"text-left\"><b>Costo: </b>{{ maqSelectedAdd.costo | currency:'USD':true }}</h5>\r\n            <p>\r\n            <h5 class=\"text-left\"><b>Producto: </b>{{getNameById(maqSelectedAdd.Producto_idProducto)}}</h5>\r\n            <p>\r\n            <h5 class=\"text-left\"><b>Producción: </b>{{maqSelectedAdd.cantidadProd}}u</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n        </div>\r\n        <br>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template ngl-modal-footer>\r\n    <button class=\"btn btn-danger\" (click)=\"openConf=false\">Cancelar</button>\r\n    <button class=\"btn btn-primary\" (click)=\"comprar()\">Comprar</button>\r\n  </ng-template>\r\n    </ngl-modal>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/compra-maquinaria/compra-maquinaria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_compra_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/compra-maquinaria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/maquinaria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompraMaquinariaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompraMaquinariaComponent = (function () {
    function CompraMaquinariaComponent(_CompraMaquinariaService, _productosService, _maquinariaService) {
        var _this = this;
        this._CompraMaquinariaService = _CompraMaquinariaService;
        this._productosService = _productosService;
        this._maquinariaService = _maquinariaService;
        this.maquinas = new Array();
        this.directional = false;
        this.productos = new Array();
        this.maquinasCompradas = [];
        this.maqSelectedAdd = {
            idMaquinaria: null,
            Producto_idProducto: null,
            cantidadProd: null,
            costo: null,
            depAcum: null,
            nombreMaq: null
        };
        this.maqSelectedLess = {
            idMaquinaria: null,
            Producto_idProducto: null,
            cantidadProd: null,
            costo: null,
            cantidad: null,
            Proyectos_idProyecto: null,
            Maquinaria_idMaquinaria: null,
            depAcum: null,
            nombreMaq: null,
            imgMaq: null
        };
        this.productos = this._productosService.returnProductos();
        this.maquinas = this._maquinariaService.returnMPC();
        this.maquinasCompradas = this._CompraMaquinariaService.returnMaquinasCompradas();
        console.log(this.maquinasCompradas);
        setTimeout(function () {
            _this.maqSelectedAdd = _this.maquinas[0];
        }, 900);
        setTimeout(function () {
            _this.maqSelectedLess = _this.maquinasCompradas[0];
        }, 800);
        console.log(this.maqSelectedAdd);
    }
    CompraMaquinariaComponent.prototype.ngOnInit = function () {
    };
    CompraMaquinariaComponent.prototype.selectMaquinariaAdd = function (maquina) {
        this.maqSelectedAdd = maquina;
        console.log(this.maqSelectedAdd);
    };
    CompraMaquinariaComponent.prototype.selectMaquinariaLess = function (maquina) {
        this.maqSelectedLess = maquina;
        console.log(this.maqSelectedLess);
    };
    CompraMaquinariaComponent.prototype.getNameById = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == id)
                return producto.nombreProd;
        }
        return "id no encontrado";
    };
    CompraMaquinariaComponent.prototype.comprar = function () {
        var _this = this;
        this.openConf = false;
        this.openLoad = true;
        setTimeout(function () { return _this.openLoad = false; }, 2000);
        var x = {
            Balance_numeroPeriodo: localStorage.getItem('numeroPeriodo'),
            Maquinaria_idMaquinaria: this.maqSelectedAdd.idMaquinaria,
            Producto_idProducto: this.maqSelectedAdd.Producto_idProducto,
            Proyectos_idProyecto: parseInt(localStorage.getItem('idProyecto'))
        };
        var y = {
            Balance_numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo')),
            Proyectos_idProyecto: parseInt(localStorage.getItem('idProyecto')),
            idProducto: this.maqSelectedAdd.Producto_idProducto,
            costo: this.maqSelectedAdd.costo,
            dep: this.maqSelectedAdd.depAcum
        };
        this._CompraMaquinariaService.compraMaquinaria(x, y);
    };
    CompraMaquinariaComponent.prototype.regresar = function () {
        if (this.maqSelectedLess.Balance_numeroPeriodo == parseInt(localStorage.getItem('numeroPeriodo'))) {
            var x = {
                Maquinaria_idMaquinaria: this.maqSelectedLess.idMaquinaria,
                Balance_numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo')),
                Proyectos_idProyecto: parseInt(localStorage.getItem('idProyecto'))
            };
            var y = {
                Balance_numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo')),
                Proyectos_idProyecto: parseInt(localStorage.getItem('idProyecto')),
                idProducto: this.maqSelectedLess.Producto_idProducto,
                costo: this.maqSelectedLess.costo,
                dep: this.maqSelectedLess.depAcum
            };
            this.maquinasCompradas = this._CompraMaquinariaService.regresarMaquinaria(x, y);
            console.log(this.maquinasCompradas);
        }
        else {
            alert("No puedes regresar esa maquinaria");
        }
    };
    return CompraMaquinariaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConfCompra'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], CompraMaquinariaComponent.prototype, "modalConfCompra", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalLoadCompra'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _b || Object)
], CompraMaquinariaComponent.prototype, "modalLoadCompra", void 0);
CompraMaquinariaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-compra-maquinaria',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/compra-maquinaria/compra-maquinaria.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/compra-maquinaria/compra-maquinaria.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_compra_maquinaria_service__["a" /* CompraMaquinariaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_compra_maquinaria_service__["a" /* CompraMaquinariaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_maquinaria_service__["a" /* MaquinariaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_maquinaria_service__["a" /* MaquinariaService */]) === "function" && _e || Object])
], CompraMaquinariaComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=compra-maquinaria.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/demanda-potencial/demanda-potencial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/demanda-potencial/demanda-potencial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n<h3 class=\"text-center col-12\">Demanda Potencial</h3>\r\n<hr>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\" style=\"height:500px\" *ngFor=\"let zona of graficas\" >\r\n    <div class=\"row\">\r\n      <h4 class=\"col-12 text-center\">{{zona.nombreZona}}</h4>\r\n\r\n  <div class=\"col-12\" style=\"height:400px;\">\r\n    <ngx-charts-line-chart\r\n         [scheme]=\"colorScheme\"\r\n         [results]=\"zona.graf\"\r\n         xAxis=\"true\"\r\n         legendTitle=\"Productos\"\r\n         yAxis=\"true\"\r\n         legend=\"true\"\r\n         showXAxisLabel=\"true\"\r\n         showYAxisLabel=\"true\"\r\n         xAxisLabel=\"Periodos\"\r\n         yAxisLabel=\"Demanda Potencial\"\r\n         autoScale=\"true\">\r\n       </ngx-charts-line-chart>\r\n  </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/demanda-potencial/demanda-potencial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_zonas_service__ = __webpack_require__("../../../../../src/app/services/zonas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_graficas_service__ = __webpack_require__("../../../../../src/app/services/graficas.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemandaPotencialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemandaPotencialComponent = (function () {
    function DemandaPotencialComponent(_demandaService, _productosService, _graficasService) {
        var _this = this;
        this._demandaService = _demandaService;
        this._productosService = _productosService;
        this._graficasService = _graficasService;
        this.zonas = [];
        this.productos = [];
        this.graficas = [];
        this.zonas = _graficasService.returnZonas();
        this.productos = this._productosService.returnProductos();
        setTimeout(function () {
            _this.graficas = _this.setGrafica(_this.zonas);
            console.log(_this.graficas);
        }, 800);
        console.log(this.zonas, this.productos);
        this.multi = [
            {
                "name": "Germany",
                "series": [
                    {
                        "name": "2010",
                        "value": 7300000
                    },
                    {
                        "name": "2011",
                        "value": 8940000
                    }
                ]
            },
            {
                "name": "USA",
                "series": [
                    {
                        "name": "2010",
                        "value": 7870000
                    },
                    {
                        "name": "2011",
                        "value": 8270000
                    }
                ]
            },
            {
                "name": "France",
                "series": [
                    {
                        "name": "2010",
                        "value": 5000002
                    },
                    {
                        "name": "2011",
                        "value": 5800000
                    }
                ]
            }
        ];
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
    }
    DemandaPotencialComponent.prototype.ngOnInit = function () {
    };
    DemandaPotencialComponent.prototype.setGrafica = function (zonas) {
        var zonasTemp = [];
        for (var _i = 0, zonas_1 = zonas; _i < zonas_1.length; _i++) {
            var zona = zonas_1[_i];
            var zonaTemp = {
                nombreZona: zona.nombreZona,
                graf: this.getProductos(zona.productos)
            };
            zonasTemp.push(zonaTemp);
        }
        return zonasTemp;
    };
    DemandaPotencialComponent.prototype.getProductos = function (productos) {
        var productosTemp = [];
        for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
            var producto = productos_1[_i];
            var productoTemp = {
                name: this.getNameById(producto.idProducto),
                series: this.getSeries(producto.periodos)
            };
            productosTemp.push(productoTemp);
        }
        return productosTemp;
    };
    DemandaPotencialComponent.prototype.getSeries = function (periodos) {
        var series = [];
        for (var _i = 0, periodos_1 = periodos; _i < periodos_1.length; _i++) {
            var periodo = periodos_1[_i];
            var serieTemp = {
                name: periodo.numPeriodo,
                value: periodo.cantidad
            };
            series.push(serieTemp);
        }
        return series;
    };
    DemandaPotencialComponent.prototype.getNameById = function (id) {
        //console.log(this.productos)
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            //console.log(producto.idProducto);
            if (producto.idProducto == id)
                return producto.nombreProd;
        }
        return "id no encontrado";
    };
    return DemandaPotencialComponent;
}());
DemandaPotencialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-demanda-potencial',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/demanda-potencial/demanda-potencial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/demanda-potencial/demanda-potencial.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_zonas_service__["a" /* ZonasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_zonas_service__["a" /* ZonasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_producto_service__["a" /* ProductoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_graficas_service__["a" /* GraficasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_graficas_service__["a" /* GraficasService */]) === "function" && _c || Object])
], DemandaPotencialComponent);

var _a, _b, _c;
//# sourceMappingURL=demanda-potencial.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-mercado/desarrollo-mercado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resaltar{\r\n  background-color: #408AB4;\r\n  color:white;\r\n\r\n\r\n}\r\n\r\n/*.desarrollados{}\r\n\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n\r\n  .desarrollados{\r\n    height: 1000px;\r\n  }\r\n\r\n }*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-mercado/desarrollo-mercado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-4 offset-1\">\r\n    <h3 class=\"col-12 text-center\">Zonas a Desarrollar</h3>\r\n    <hr>\r\n    <div class=\"col-12\" style=\"overflow-y:scroll;height:550px\">\r\n      <div class=\"card\" *ngFor=\"let zona of productosZonaSinDesarrollar\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-3\">\r\n                <img class=\"img-fluid\"  src=\"assets/img/zone.png\" style=\"margin-left:10px;\">\r\n            </div>\r\n            <div class=\"col-9\">\r\n              <h4 class=\"card-title\">{{zona.nombreZona}}</h4>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"card-footer\" style=\"margin-top:20px;\">\r\n            <div class=\"col-12\" *ngFor=\"let producto of zona.productosSinDes\"\r\n            style=\"height:110px;\" class=\"card\"\r\n            (click)=\"selectProductoAdd(producto,zona.idZona,zona.nombreZona)\"\r\n            [ngClass]=\"{'resaltar':selecciona(producto,zona.idZona) }\">\r\n            <div class=\"row align-items-center\" >\r\n              <div class=\"col-3\">\r\n                <img src=\"assets/img/box.png\" class=\"img-fluid align-middle\"\r\n                style=\"margin-left:10px\" >\r\n              </div>\r\n\r\n              <div class=\"col-9\" style=\"margin-top:14px\">\r\n                <h5>{{getNameById(producto)}}</h5>\r\n                <h6>Costo de Desarrollo: <br><b>{{ getCosto(zona.idZona,producto) | currency:'USD':true }}</b></h6>\r\n                <h6>Tiempo de Desarrollo: {{getTiempo(zona.idZona,producto)}}</h6>\r\n              </div>\r\n            </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n<div class=\"col-2\">\r\n  <button type=\"button\" class=\"offset-1 col-10 btn btn-primary \"\r\n  style=\"margin-top:130px\"\r\n  (click)=\"openConf=true\"><i class=\"material-icons\">keyboard_arrow_right</i></button>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"col-4\">\r\n  <div class=\"row\">\r\n    <h3 class=\"col-12 text-center\">Zonas Desarrolladas</h3>\r\n    <hr>\r\n    <hr>\r\n    <div class=\"col-12\" style=\"height:250px; overflow-y:scroll;overflow-x:hidden\">\r\n      <!-- <div class=\"card\" *ngFor=\"let zona of productosZonaDesarrollados\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <img  src=\"assets/img/zone.png\" style=\"height:40px;margin-left:10px;\">\r\n            <div class=\"col-6\">\r\n              <h4 class=\"card-title\">{{zona.nombreZona}}</h4>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"card-footer\" style=\"margin-top:20px;\">\r\n            <div class=\"col-12\" *ngFor=\"let producto of zona.productosDes\" style=\"height:50px\">\r\n            <div class=\"row\">\r\n              <img src=\"assets/img/box.png\" style=\"height:35px;margin-left:10px;margin-top:6px\">\r\n              <div class=\"col-6\" style=\"margin-top:14px\">\r\n                <h5>{{getNameById(producto)}}</h5>\r\n              </div>\r\n            </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"card\" *ngFor=\"let zona of productosZonaDesarrollados\">\r\n      <div class=\"card-block\">\r\n        <div class=\"row\">\r\n          <img  src=\"assets/img/zone.png\" style=\"height:40px;margin-left:20px;\">\r\n          <div class=\"col-6\">\r\n            <h4 class=\"card-title\">{{zona.nombreZona}}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\" style=\"margin-top:20px;\">\r\n          <div class=\"col-12\" *ngFor=\"let producto of zona.productosDes\"\r\n          style=\"height:110px;\" class=\"card\"\r\n          (click)=\"selectProductoAdd(producto,zona.idZona)\">\r\n          <div class=\"row align-items-center\" >\r\n            <div class=\"col-3\">\r\n              <img src=\"assets/img/box.png\" class=\"img-fluid align-middle\"\r\n              style=\"margin-left:10px\" >\r\n            </div>\r\n            <div class=\"col-9\" style=\"margin-top:14px\">\r\n              <h5>{{getNameById(producto)}}</h5>\r\n              <h6>Costo de Desarrollo: <br><b>{{ getCosto(zona.idZona,producto) | currency:'USD':true }}</b></h6>\r\n              <h6>Tiempo de Desarrollo: {{getTiempo(zona.idZona,producto)}}</h6>\r\n            </div>\r\n          </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n  </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"margin-top:50px;\" >\r\n    <h3 class=\"col-12 text-center\">Zonas en Desarrollo</h3>\r\n    <hr>\r\n    <br>\r\n    <div class=\"col-12\" style=\"height:250px; overflow-y:scroll;overflow-x:hidden\">\r\n      <!-- <div class=\"card\" *ngFor=\"let zona of productosZonaEnDesarrollo\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <img  src=\"assets/img/zone.png\" style=\"height:40px;margin-left:10px;\">\r\n            <div class=\"col-6\">\r\n              <h4 class=\"card-title\">{{zona.nombreZona}}</h4>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"card-footer\" style=\"margin-top:20px;\">\r\n            <div class=\"col-12\" *ngFor=\"let producto of zona.productosEnDes\" style=\"height:50px\">\r\n            <div class=\"row\">\r\n              <img src=\"assets/img/box.png\" style=\"height:35px;margin-left:10px;margin-top:6px\" alt=\"\">\r\n              <div class=\"col-6\" style=\"margin-top:14px\">\r\n                <h5>{{getNameById(producto)}}</h5>\r\n              </div>\r\n              <button type=\"button\" (click)=\"confPago(zona.idZona,producto)\" class=\"btn btn-primary\">Pagar</button>\r\n            </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"card\" *ngFor=\"let zona of productosZonaEnDesarrollo\">\r\n      <div class=\"card-block\">\r\n        <div class=\"row\">\r\n          <img  src=\"assets/img/zone.png\" style=\"height:40px;margin-left:20px;\">\r\n          <div class=\"col-6\">\r\n            <h4 class=\"card-title\">{{zona.nombreZona}}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\" style=\"margin-top:20px;\">\r\n          <div class=\"col-12\" *ngFor=\"let producto of zona.productosEnDes\"\r\n          style=\"height:110px;\" class=\"card\">\r\n          <div class=\"row align-items-center\" >\r\n\r\n              <button type=\"button\" (click)=\"confPagoF(zona.idZona,producto.idProducto,zona.nombreZona)\"\r\n              class=\"btn btn-primary col-3\" [disabled]=\"validaPago(producto)\">Pagar</button>\r\n\r\n            <div class=\"col-9\" style=\"margin-top:14px\">\r\n              <h5>{{getNameById(producto.idProducto)}}</h5>\r\n              <h6>Pago de Desarrollo: <br><b>{{ getCosto(zona.idZona,producto.idProducto) | currency:'USD':true }}</b></h6>\r\n              <h6>Periodos de Desarrollo: {{getTiempo(zona.idZona,producto.idProducto)}}</h6>\r\n            </div>\r\n\r\n\r\n\r\n\r\n          </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n  </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ngl-modal header=\"Confirmación\"  [(open)]=\"openConf\" size=\"x-small\" directional=\"false\">\r\n\r\n  <div body>\r\n    <div class=\"col-12 text-center container\">\r\n      <h5 style=\"margin-bottom:30px\">¿Estas seguro que deseas empezar a desarrollar \"{{getNameById(productoSelectedAdd.idProducto)}}\" en la zona \"{{productoSelectedAdd.nombreZona}}\"?</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-4 offset-2\">\r\n          <img  src=\"assets/img/zone.png\" class=\"img-fluid\">\r\n        </div>\r\n        <div class=\"col-5 \">\r\n          <p>\r\n          <h5 class=\"text-left\"><b>Costo Total: </b>{{ getCosto(productoSelectedAdd.idZona,productoSelectedAdd.idProducto)  * getTiempo(productoSelectedAdd.idZona,productoSelectedAdd.idProducto) | currency:'USD':true }}</h5>\r\n          <p>\r\n          <h5 class=\"text-left\"><b>Costo por Periodo: </b>{{getCosto(productoSelectedAdd.idZona,productoSelectedAdd.idProducto)}}</h5>\r\n          <p>\r\n          <h5 class=\"text-left\"><b>Tiempo de Desarrollo: </b>{{getTiempo(productoSelectedAdd.idZona,productoSelectedAdd.idProducto)}}</h5>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template ngl-modal-footer>\r\n  <button class=\"btn btn-danger\" (click)=\"openConf=false\">Cancelar</button>\r\n  <button class=\"btn btn-primary\" (click)=\"desarrollaZona(productoSelectedAdd)\">Comenzar Desarrollo</button>\r\n</ng-template>\r\n  </ngl-modal>\r\n\r\n\r\n\r\n  <ngl-modal header=\"Confirmación\"  [(open)]=\"openPago\" size=\"x-small\" directional=\"false\">\r\n\r\n    <div body>\r\n      <div class=\"col-12 text-center container\">\r\n        <h5 style=\"margin-bottom:30px\">¿Estas seguro que deseas pagar el desarrollo de \"{{getNameById(productoSelectedPago.idProducto)}}\" en la zona \"{{productoSelectedPago.nombreZona}}\"?</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-4 offset-2\">\r\n            <img  src=\"assets/img/zone.png\" class=\"img-fluid\">\r\n          </div>\r\n          <div class=\"col-5 \">\r\n            <p>\r\n            <h5 class=\"text-left\"><b>Costo Total: </b>{{ getCosto(productoSelectedPago.idZona,productoSelectedPago.idProducto)  * getTiempo(productoSelectedPago.idZona,productoSelectedPago.idProducto) | currency:'USD':true }}</h5>\r\n            <p>\r\n            <h5 class=\"text-left\"><b>Costo por Periodo: </b>{{getCosto(productoSelectedPago.idZona,productoSelectedPago.idProducto)}}</h5>\r\n            <p>\r\n            <h5 class=\"text-left\"><b>Tiempo de Desarrollo: </b>{{getTiempo(productoSelectedPago.idZona,productoSelectedPago.idProducto)}}</h5>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template ngl-modal-footer>\r\n    <button class=\"btn btn-danger\" (click)=\"openConf=false\">Cancelar</button>\r\n    <button class=\"btn btn-primary\" (click)=\"pagarDesarrollo()\">Pagar Desarrollo</button>\r\n  </ng-template>\r\n    </ngl-modal>\r\n\r\n\r\n\r\n  <ngl-modal  [(open)]=\"openLoad\" size=\"small\" directional=\"false\">\r\n    <div body>\r\n          <h2 class=\"col-12 text-center\">Iniciando Desarrollo del Mercado</h2>\r\n      <h6 class=\"col-12 text-center\">Realizando Operación</h6>\r\n      <div style=\"position:relative; height:6.25rem; z-index:0;\">\r\n        <ngl-spinner size=\"large\" type=\"brand\"></ngl-spinner>\r\n      </div>\r\n\r\n    </div>\r\n    </ngl-modal>\r\n\r\n    <ngl-modal  [(open)]=\"openLoadPago\" size=\"small\" directional=\"false\">\r\n      <div body>\r\n            <h2 class=\"col-12 text-center\">Pagando Desarrollo</h2>\r\n        <h6 class=\"col-12 text-center\">Realizando Operación</h6>\r\n        <div style=\"position:relative; height:6.25rem; z-index:0;\">\r\n          <ngl-spinner size=\"large\" type=\"brand\"></ngl-spinner>\r\n        </div>\r\n\r\n      </div>\r\n      </ngl-modal>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-mercado/desarrollo-mercado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_zonas_service__ = __webpack_require__("../../../../../src/app/services/zonas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_desarrollo_zona_service__ = __webpack_require__("../../../../../src/app/services/desarrollo-zona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesarrolloMercadoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DesarrolloMercadoComponent = (function () {
    function DesarrolloMercadoComponent(_zonasService, _desarrolloZonaService, _productoService) {
        var _this = this;
        this._zonasService = _zonasService;
        this._desarrolloZonaService = _desarrolloZonaService;
        this._productoService = _productoService;
        this.zonas = [];
        this.productos = [];
        this.productosZonaSinDesarrollar = [];
        this.productosZonaEnDesarrollo = [];
        this.productosZonaDesarrollados = [];
        this.openConf = false;
        this.openPago = false;
        this.openLoad = false;
        this.zonas = this._zonasService.returnZonasNormales();
        this.productos = this._productoService.returnProductos();
        this.productosZonaSinDesarrollar = this._desarrolloZonaService.returnProductosDeZonaSinDesarrollar();
        this.productosZonaEnDesarrollo = this._desarrolloZonaService.returnProductosDeZonaEnDesarrollo();
        this.productosZonaDesarrollados = this._desarrolloZonaService.returnProductosDeZonaDesarrollados();
        this.productoSelectedAdd = {
            idZona: null,
            idProducto: null,
            nombreZona: null
        };
        this.productoSelectedPago = {
            idZona: null,
            idProducto: null,
            nombreZona: null
        };
        setTimeout(function () {
            _this.productoSelectedAdd = {
                idZona: _this.productosZonaSinDesarrollar[0].idZona,
                idProducto: _this.productosZonaSinDesarrollar[0].productosSinDes[0]
            };
        }, 400);
        console.log(this.productosZonaSinDesarrollar);
        console.log(this.productosZonaEnDesarrollo);
        console.log(this.productosZonaDesarrollados);
        this.zonaForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            'idProducto': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required)
        });
        console.log(this.productosZonaDesarrollados);
    }
    DesarrolloMercadoComponent.prototype.ngOnInit = function () {
    };
    DesarrolloMercadoComponent.prototype.selecciona = function (producto, idZona) {
        if (producto == this.productoSelectedAdd.idProducto && idZona == this.productoSelectedAdd.idZona)
            return true;
        else
            return false;
    };
    DesarrolloMercadoComponent.prototype.getNameById = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto_1 = _a[_i];
            if (producto_1.idProducto == id)
                return producto_1.nombreProd;
        }
        return "id no encontrado";
    };
    DesarrolloMercadoComponent.prototype.validaPago = function (producto) {
        if (producto.ultimoPeriodoDes == localStorage.getItem('numeroPeriodo'))
            return true;
        else
            return false;
    };
    DesarrolloMercadoComponent.prototype.getCosto = function (idZona, idProducto) {
        for (var _i = 0, _a = this.zonas; _i < _a.length; _i++) {
            var zona = _a[_i];
            if (zona.idZona == idZona) {
                for (var _b = 0, _c = zona.productos; _b < _c.length; _b++) {
                    var producto_2 = _c[_b];
                    if (producto_2.Producto_idProducto == idProducto) {
                        return producto_2.costoDes;
                    }
                }
            }
        }
        return 0;
    };
    DesarrolloMercadoComponent.prototype.getTiempo = function (idZona, idProducto) {
        for (var _i = 0, _a = this.zonas; _i < _a.length; _i++) {
            var zona = _a[_i];
            if (zona.idZona == idZona) {
                for (var _b = 0, _c = zona.productos; _b < _c.length; _b++) {
                    var producto_3 = _c[_b];
                    if (producto_3.Producto_idProducto == idProducto) {
                        return producto_3.tiempoDes;
                    }
                }
            }
        }
        return 0;
    };
    DesarrolloMercadoComponent.prototype.pagarDesarrollo = function () {
        var _this = this;
        this.openPago = false;
        this.openLoad = true;
        setTimeout(function () { return _this.openLoad = false; }, 2000);
        console.log(this.productoSelectedPago.idProducto);
        var costo = this.getCosto(this.productoSelectedPago.idZona, this.productoSelectedPago.idProducto);
        var x = {
            Producto_idProducto: this.productoSelectedPago.idProducto,
            Zona_idZonas: this.productoSelectedPago.idZona,
            Proyecto_idProyecto: localStorage.getItem('idProyecto'),
            Proyecto_Usuario_idUsuario: localStorage.getItem('idUsuario'),
            ultimoPeriodoDes: localStorage.getItem('numeroPeriodo')
        };
        console.log("idProducto", this.productoSelectedPago.idProducto);
        this._desarrolloZonaService.Desarrollar(x).subscribe();
        this._desarrolloZonaService.cobrarDesarrollo(costo, this.productoSelectedPago.idProducto).subscribe();
    };
    DesarrolloMercadoComponent.prototype.desarrollaZona = function (producto) {
        var _this = this;
        this.openConf = false;
        this.openLoad = true;
        setTimeout(function () { return _this.openLoad = false; }, 2000);
        this.quitaProducto(producto.idZona, producto.idProducto);
        var x = {
            Producto_idProducto: producto.idProducto,
            Zona_idZonas: producto.idZona,
            Proyecto_idProyecto: localStorage.getItem('idProyecto'),
            Proyecto_Usuario_idUsuario: localStorage.getItem('idUsuario'),
            periodoInicio: localStorage.getItem('numeroPeriodo'),
            ultimoPeriodoDes: localStorage.getItem('numeroPeriodo')
        };
        var costo = this.getCosto(producto.idZona, producto.idProducto);
        console.log("idProducto", producto.idProducto);
        this._desarrolloZonaService.cobrarDesarrollo(costo, producto.idProducto).subscribe();
        this._desarrolloZonaService.comenzarDesarrolloZona(x);
    };
    DesarrolloMercadoComponent.prototype.quitaProducto = function (zona, producto) {
        for (var i in this.productosZonaSinDesarrollar) {
            if (this.productosZonaSinDesarrollar[i].idZona == zona)
                for (var j in this.productosZonaSinDesarrollar[i].productosSinDes) {
                    if (this.productosZonaSinDesarrollar[i].productosSinDes[j] == producto) {
                        this.productosZonaSinDesarrollar[i].productosSinDes.splice(parseInt(j), 1);
                    }
                }
        }
    };
    DesarrolloMercadoComponent.prototype.confPagoF = function (idZona, idProducto, nombreZona) {
        this.openPago = true;
        this.productoSelectedPago = {
            idZona: idZona,
            idProducto: idProducto,
            nombreZona: nombreZona
        };
        console.log(this.productoSelectedPago);
    };
    DesarrolloMercadoComponent.prototype.selectProductoAdd = function (idProducto, idZona, nombreZona) {
        this.productoSelectedAdd = {
            idProducto: idProducto,
            idZona: idZona,
            nombreZona: nombreZona
        };
        console.log(this.productoSelectedAdd);
    };
    return DesarrolloMercadoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConfDes'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], DesarrolloMercadoComponent.prototype, "modalConfDes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConfPago'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _b || Object)
], DesarrolloMercadoComponent.prototype, "modalConfPago", void 0);
DesarrolloMercadoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-desarrollo-mercado',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-mercado/desarrollo-mercado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-mercado/desarrollo-mercado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_zonas_service__["a" /* ZonasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_zonas_service__["a" /* ZonasService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_desarrollo_zona_service__["a" /* DesarrolloZonaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_desarrollo_zona_service__["a" /* DesarrolloZonaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]) === "function" && _e || Object])
], DesarrolloMercadoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=desarrollo-mercado.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-producto/desarrollo-producto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resaltar{\r\n  background-color:#408AB4;\r\n  border-color: black;\r\n}\r\n\r\n.letra-resaltar{\r\n  color:white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-producto/desarrollo-producto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-4 offset-1\">\r\n      <h3 class=\"text-center\">Desarrollo de Productos</h3>\r\n      <hr>\r\n\r\n      <div class=\"col-12\" style=\"height:550px; overflow-y:scroll;overflow-x:hidden\">\r\n        <div class=\"card\" *ngFor=\"let producto of productosSinDesarrollar\" (click)=\"selectProducto(producto)\"\r\n        [ngClass]=\"{'resaltar':producto.idProducto==this.productoSelectedAdd.idProducto}\">\r\n          <div class=\"card-block\"\r\n          [ngClass]=\"{'letra-resaltar':producto.idProducto==this.productoSelectedAdd.idProducto}\">\r\n            <div class=\"row\">\r\n              <img  src=\"assets/img/box.png\" style=\"height:70px;margin-left:10px;\">\r\n\r\n              <div class=\"col-8\">\r\n                <h4 class=\"card-title\">{{producto.nombreProd}}</h4>\r\n                <h6 class=\"card-subtitle\">Costo por periodo: <b>{{ producto.costoDes | currency:'USD':true }}</b> </h6>\r\n                <h6 class=\"card-subtitle\" style=\"margin-top:5px\">Tiempo de desarrollo: {{producto.tiempoDes}}</h6>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-2\">\r\n    <button type=\"button\" class=\"btn btn-primary col-10 offset-1\" style=\"margin-top:300px;\"\r\n    (click)=\"openConf=true\"><i class=\"material-icons\">keyboard_arrow_right</i></button>\r\n  </div>\r\n\r\n  <div class=\" col-4\">\r\n    <h3 style=\"text-center col-12\">Productos Desarrollados</h3>\r\n    <hr>\r\n    <div class=\"row\" >\r\n      <div class=\"col-12\" style=\"height:250px; overflow-y:scroll;overflow-x:hidden\">\r\n\r\n        <!-- <div class=\"card\" *ngFor=\"let producto of productosDesarollados\">\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <img  src=\"assets/img/box.png\" style=\"height:40px;margin-left:10px;\">\r\n\r\n              <div class=\"col-6\" style=\"margin-top:20px\">\r\n                <h4 class=\"card-title\">{{producto.nombreProd}}</h4>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <div class=\"card\" *ngFor=\"let producto of productosDesarollados\">\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <img  src=\"assets/img/box.png\" style=\"height:70px;margin-left:10px;\">\r\n\r\n              <div class=\"col-8\">\r\n                <h4 class=\"card-title\">{{producto.nombreProd}}</h4>\r\n                <h6 class=\"card-subtitle\">Costo total: <b>{{ producto.costoDes * producto.tiempoDes | currency:'USD':true }}</b> </h6>\r\n                <h6 class=\"card-subtitle\" style=\"margin-top:5px\">Tiempo de desarrollo: {{producto.tiempoDes}}</h6>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"margin-top:20px;\">\r\n      <h2 class=\"text-center col-12\">Productos en Desarrollo</h2>\r\n      <hr>\r\n      <div class=\"col-12\" style=\"height:250px; overflow-y:scroll;overflow-x:hidden\">\r\n        <!-- <div class=\"card\" *ngFor=\"let producto of productosEnDesarrollo\">\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <img  src=\"assets/img/box.png\" style=\"height:40px;margin-left:10px;\">\r\n\r\n              <div class=\"col-6\">\r\n                <h4 class=\"card-title\">{{producto.nombreProd}}</h4>\r\n              </div>\r\n\r\n              <button type=\"button\" (click)=\"confPago(producto.idProducto,producto.costoDes)\"\r\n              class=\"btn btn-primary\" [disabled]=\"revisaPeriodo(producto)\">Pagar</button>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <div class=\"card\" *ngFor=\"let producto of productosEnDesarrollo\">\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <img  src=\"assets/img/box.png\" style=\"height:70px;margin-left:10px;margin-top:10px\">\r\n\r\n              <div class=\"col-7\">\r\n                <h4 class=\"card-title\">{{producto.nombreProd}}</h4>\r\n                <h6 class=\"card-subtitle\">Costo: <b>{{ producto.costoDes | currency:'USD':true }}</b> </h6>\r\n                <h6 class=\"card-subtitle\" style=\"margin-top:5px\">Tiempo de desarrollo: {{producto.tiempoDes}}</h6>\r\n                <h6 class=\"card-subtitle\" style=\"margin-top:5px\">Tiempo desarrollado: {{producto.periodosDes}}</h6>\r\n\r\n              </div>\r\n\r\n              <button type=\"button\" (click)=\"confPago(producto)\"\r\n              class=\"btn btn-primary\" [disabled]=\"revisaPeriodo(producto)\">Pagar</button>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ngl-modal header=\"Confirmación\"  [(open)]=\"openConf\" size=\"x-small\" directional=\"false\">\r\n\r\n  <div body>\r\n    <div class=\"col-12 text-center container\">\r\n      <h5 style=\"margin-bottom:30px\">¿Estas seguro que deseas empezar a desarrollar \"{{productoSelectedAdd.nombreProd}}\"?</h5>\r\n      <div class=\"row\">\r\n        <div class=\"col-4 offset-2\">\r\n          <img  src=\"assets/img/box.png\" class=\"img-fluid\">\r\n        </div>\r\n        <div class=\"col-5 \">\r\n          <p>\r\n          <h5 class=\"text-left\"><b>Costo Total: </b>{{ productoSelectedAdd.costoDes * productoSelectedAdd.tiempoDes | currency:'USD':true }}</h5>\r\n          <p>\r\n          <h5 class=\"text-left\"><b>Costo por Periodo: </b>{{productoSelectedAdd.costoDes}}</h5>\r\n          <p>\r\n          <h5 class=\"text-left\"><b>Tiempo de Desarrollo: </b>{{productoSelectedAdd.tiempoDes}}</h5>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template ngl-modal-footer>\r\n  <button class=\"btn btn-danger\" (click)=\"openConf=false\">Cancelar</button>\r\n  <button class=\"btn btn-primary\" (click)=\"desarrollar()\">Comenzar Desarrollo</button>\r\n</ng-template>\r\n  </ngl-modal>\r\n\r\n\r\n  <ngl-modal header=\"Confirmación\"  [(open)]=\"openPago\" size=\"x-small\" directional=\"false\">\r\n\r\n    <div body>\r\n      <div class=\"col-12 text-center container\">\r\n        <h5 style=\"margin-bottom:30px\">¿Estas seguro que deseas realizar el pago de \"{{productoSelectedPago.nombreProd}}\"?</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-4 offset-2\">\r\n            <img  src=\"assets/img/box.png\" class=\"img-fluid\">\r\n          </div>\r\n          <div class=\"col-5 \">\r\n            <p>\r\n            <h5 class=\"text-left\"><b>Costo de Pago: </b>{{ productoSelectedPago.costoDes | currency:'USD':true }}</h5>\r\n            <p>\r\n            <h5 class=\"text-left\"><b>Periodo de Desarrollo:<br> </b>{{productoSelectedPago.periodosDes + 1}} de {{productoSelectedPago.tiempoDes}} periodos</h5>\r\n            <p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n        </div>\r\n        <br>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template ngl-modal-footer>\r\n    <button class=\"btn btn-danger\" (click)=\"openPago=false\">Cancelar</button>\r\n    <button class=\"btn btn-primary\" (click)=\"pagarDesarrollo()\">Realizar Pago</button>\r\n  </ng-template>\r\n    </ngl-modal>\r\n\r\n\r\n\r\n  <ngl-modal  [(open)]=\"openLoad\" size=\"small\" directional=\"false\">\r\n    <div body>\r\n          <h2 class=\"col-12 text-center\">Iniciando Desarrollo de Producto</h2>\r\n      <h6 class=\"col-12 text-center\">Realizando Operación</h6>\r\n      <div style=\"position:relative; height:6.25rem; z-index:0;\">\r\n        <ngl-spinner size=\"large\" type=\"brand\"></ngl-spinner>\r\n      </div>\r\n\r\n    </div>\r\n    </ngl-modal>\r\n\r\n\r\n\r\n    <ngl-modal  [(open)]=\"openLoadPago\" size=\"small\" directional=\"false\">\r\n      <div body>\r\n            <h2 class=\"col-12 text-center\">Realizando Pago de Desarrollo</h2>\r\n        <h6 class=\"col-12 text-center\">Realizando Operación</h6>\r\n        <div style=\"position:relative; height:6.25rem; z-index:0;\">\r\n          <ngl-spinner size=\"large\" type=\"brand\"></ngl-spinner>\r\n        </div>\r\n\r\n      </div>\r\n      </ngl-modal>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-producto/desarrollo-producto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_desarrollo_producto_service__ = __webpack_require__("../../../../../src/app/services/desarrollo-producto.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesarrolloProductoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesarrolloProductoComponent = (function () {
    function DesarrolloProductoComponent(_desarrolloProducto) {
        var _this = this;
        this._desarrolloProducto = _desarrolloProducto;
        this.productosDesarollados = [];
        this.productosEnDesarrollo = [];
        this.productosSinDesarrollar = [];
        this.productoSelectedAdd = {
            costoDes: null,
            costoUni: null,
            costoVarUniDist: null,
            costoVarUniFabri: null,
            costosFijosFabri: null,
            costosMPPUniProd: null,
            depAdmon: null,
            depDistribucion: null,
            gastosFijosAdmon: null,
            gastosFijosDist: null,
            idProducto: null,
            nombreProd: null,
            precioVenta: null,
            tiempoDes: null,
            uniMP: null
        };
        this.productoSelectedPago = {};
        this.openConf = false;
        this.openLoad = false;
        this.openPago = false;
        this.openLoadPago = false;
        this.productosSinDesarrollar = this._desarrolloProducto.returnProductosSinDesarrollar();
        this.productosEnDesarrollo = this._desarrolloProducto.returnProductosEnDesarrollo();
        this.productosDesarollados = this._desarrolloProducto.returnProductosDesarrollados();
        console.log("array en desarrolloo", this.productosEnDesarrollo);
        setTimeout(function () {
            if (_this.productosSinDesarrollar.length == 0) {
                console.log("ARREGLO VACIO");
                _this.productoSelectedAdd = {
                    costoDes: null,
                    costoUni: null,
                    costoVarUniDist: null,
                    costoVarUniFabri: null,
                    costosFijosFabri: null,
                    costosMPPUniProd: null,
                    depAdmon: null,
                    depDistribucion: null,
                    gastosFijosAdmon: null,
                    gastosFijosDist: null,
                    idProducto: null,
                    nombreProd: null,
                    precioVenta: null,
                    tiempoDes: null,
                    uniMP: null
                };
            }
            else {
                console.log("ARREGLO LLENO");
                _this.productoSelectedAdd = _this.productosSinDesarrollar[0];
            }
        }, 2000);
    }
    DesarrolloProductoComponent.prototype.ngOnInit = function () {
    };
    DesarrolloProductoComponent.prototype.desarrollar = function () {
        var _this = this;
        this.openConf = false;
        this.openLoad = true;
        setTimeout(function () {
            _this.openLoad = false;
        }, 2000);
        this._desarrolloProducto.comenzarDesarrollo(this.productoSelectedAdd.idProducto, this.productoSelectedAdd.costoDes);
    };
    DesarrolloProductoComponent.prototype.pagarDesarrollo = function () {
        var _this = this;
        this.openPago = false;
        this.openLoadPago = true;
        setTimeout(function () { return _this.openLoadPago = false; }, 2000);
        this._desarrolloProducto.pagarDesarrollo(this.productoSelectedPago.idProducto, this.productoSelectedPago.costoDes);
    };
    DesarrolloProductoComponent.prototype.revisaPeriodo = function (producto) {
        console.log(producto.ultimoPeriodoDes == localStorage.getItem('numeroPeriodo'));
        return producto.ultimoPeriodoDes == localStorage.getItem('numeroPeriodo');
    };
    DesarrolloProductoComponent.prototype.confPago = function (producto) {
        this.productoSelectedPago = producto;
        this.openPago = true;
    };
    DesarrolloProductoComponent.prototype.selectProducto = function (producto) {
        console.log(producto);
        this.productoSelectedAdd = producto;
    };
    return DesarrolloProductoComponent;
}());
DesarrolloProductoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-desarrollo-producto',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-producto/desarrollo-producto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-producto/desarrollo-producto.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_desarrollo_producto_service__["a" /* DesarrolloProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_desarrollo_producto_service__["a" /* DesarrolloProductoService */]) === "function" && _a || Object])
], DesarrolloProductoComponent);

var _a;
//# sourceMappingURL=desarrollo-producto.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/estado-resultados/estado-resultados.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"text-center\">Estado de Resultados</h4>\r\n<hr>\r\n\r\n<table class=\"table table-bordered table-responsive offset-2\">\r\n  <thead>\r\n    <tr>\r\n      <th></th>\r\n      <th *ngFor=\"let producto of resultados\">{{getNameByIdProducto(producto) }}</th>\r\n      <th>Total</th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr>\r\n      <th>Ventas Netas</th>\r\n      <td class=\"text-right\" *ngFor=\"let producto of resultados\">{{getVentasNetas(producto) |currency:'USD':true:'1.0-0'}}</td>\r\n      <td class=\"text-right\" >{{getTotalVentas() |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>Costo de Ventas</th>\r\n      <td class=\"text-right\" *ngFor=\"let producto of resultados\">{{getCostoVentas(producto) |currency:'USD':true:'1.0-0'}}</td>\r\n      <td class=\"text-right\" >{{getTotalCostosVentas() |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>Utilidad Bruta</th>\r\n      <td class=\"text-right\" *ngFor=\"let producto of resultados\">{{getUtilidadParcial(producto) |currency:'USD':true:'1.0-0'}}</td>\r\n      <td class=\"text-right\" >{{getUtilidadBruta() |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>Costo de distribucion</th>\r\n      <td class=\"text-right\" *ngFor=\"let producto of resultados\">{{getDistParcial(producto) |currency:'USD':true:'1.0-0'}}</td>\r\n      <td class=\"text-right\">{{getDistTotal() |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>Otros Gastos</th>\r\n      <td class=\"text-right\" *ngFor=\"let producto of resultados\"> {{getOtrosGastosParcial(producto) |currency:'USD':true:'1.0-0'}}</td>\r\n      <td class=\"text-right\" *ngFor=\"let item of auxiliarT\">{{item |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>Costo de Administración</th>\r\n      <td class=\"text-right\" *ngFor=\"let producto of resultados\">{{getAdminParcial(producto) |currency:'USD':true:'1.0-0'}}</td>\r\n      <td class=\"text-right\">{{getAdminTotal() |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>Utilidad en Operación</th>\r\n      <td class=\"text-right\" *ngFor=\"let producto of resultados\">{{getUtilidadAntesParcial(producto) |currency:'USD':true:'1.0-0'}}</td>\r\n      <td class=\"text-right\" *ngFor=\"let item of auxiliarT\">{{getUtilidadAntes() - item |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>Intereses</th>\r\n      <td class=\"text-right\" *ngFor=\"let producto of resultados\">-</td>\r\n      <td class=\"text-right\" *ngFor=\"let aux of intereses\">{{aux |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>Utilidad antes de Impuestos</th>\r\n      <td class=\"text-right\" *ngFor=\"let producto of resultados\">{{getUtilidadAntesParcial(producto) |currency:'USD':true:'1.0-0'}}</td>\r\n      <td class=\"text-right\">{{getUtilidad2() |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>ISR</th>\r\n      <td  class=\"text-right\" *ngFor=\"let producto of resultados\">-</td>\r\n      <td  class=\"text-right\">{{getISR() |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>PTU</th>\r\n      <td class=\"text-right\" *ngFor=\"let producto of resultados\">-</td>\r\n      <td class=\"text-right\">{{getPTU() |currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <th>Utilidad del Ejercicio</th>\r\n      <td class=\"text-right\" *ngFor=\"let producto of resultados\">-</td>\r\n      <td class=\"text-right\">{{getUtilidad2() - getISR() - getPTU()|currency:'USD':true:'1.0-0'}}</td>\r\n    </tr>\r\n\r\n\r\n  </tbody>\r\n</table>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-4 offset-4\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"PDFestadoDeResultados()\">Exportar a PDF</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/estado-resultados/estado-resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_operacion_service__ = __webpack_require__("../../../../../src/app/services/operacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_resultados_service__ = __webpack_require__("../../../../../src/app/services/resultados.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_compra_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/compra-maquinaria.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadoResultadosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EstadoResultadosComponent = (function () {
    function EstadoResultadosComponent(_operacionService, _productoService, _maqService, _balanceService, _resultadosService) {
        var _this = this;
        this._operacionService = _operacionService;
        this._productoService = _productoService;
        this._maqService = _maqService;
        this._balanceService = _balanceService;
        this._resultadosService = _resultadosService;
        this.resultados = [];
        this.auxiliares = [];
        this.auxiliarC = [];
        this.productos = [];
        this.auxiliarT = [];
        this.intereses = [];
        this.maquinas = [];
        this._resultadosService.vender();
        setTimeout(function () {
            _this.auxiliares = _this._operacionService.returnAuxiliares();
            _this.productos = _this._productoService.returnProductos();
            _this.intereses = _this._operacionService.returnInter();
            _this.auxiliarT = _this._operacionService.returnAuxiliarCTotal();
            _this.resultados = _this._operacionService.returnProductoResultados();
            _this.auxiliarC = _this._operacionService.returnAuxiliarC();
            _this.maquinas = _this._maqService.returnMaquinasCompradas();
            console.log("Intereses", _this.intereses);
        }, 1500);
    }
    EstadoResultadosComponent.prototype.ngOnInit = function () {
    };
    EstadoResultadosComponent.prototype.getNameByIdProducto = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == id)
                return producto.nombreProd;
        }
        return "id no encontrado";
    };
    EstadoResultadosComponent.prototype.getVentasNetas = function (id) {
        var i = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            if (aux.Producto_idProducto == id) {
                i += (aux.Ventas - aux.IVAxVentas);
            }
        }
        return i;
    };
    EstadoResultadosComponent.prototype.getTotalVentas = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.Ventas - aux.IVAxVentas;
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getTotalCostosVentas = function () {
        var T = 0;
        if (this.auxiliares.length == 0) {
            for (var _i = 0, _a = this.maquinas; _i < _a.length; _i++) {
                var m = _a[_i];
                T += ((m.costo * (m.depAcum / 100)) * m.Cantidad);
            }
        }
        else {
            for (var _b = 0, _c = this.auxiliares; _b < _c.length; _b++) {
                var aux = _c[_b];
                T += aux.costoVentas;
            }
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getCostoVentas = function (id) {
        var T = 0;
        if (this.auxiliares.length == 0) {
            for (var _i = 0, _a = this.maquinas; _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.Producto_idProducto == id) {
                    T += ((m.costo * (m.depAcum / 100)) * m.Cantidad);
                }
            }
        }
        else {
            for (var _b = 0, _c = this.auxiliares; _b < _c.length; _b++) {
                var aux = _c[_b];
                if (aux.Producto_idProducto == id) {
                    T += aux.costoVentas;
                }
            }
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getUtilidadBruta = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.Ventas - aux.costoVentas - aux.IVAxVentas;
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getUtilidadParcial = function (id) {
        var T = 0;
        if (this.auxiliares.length == 0) {
            for (var _i = 0, _a = this.maquinas; _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.Producto_idProducto == id) {
                    T -= ((m.costo * (m.depAcum / 100)) * m.Cantidad);
                }
            }
        }
        else {
            for (var _b = 0, _c = this.auxiliares; _b < _c.length; _b++) {
                var aux = _c[_b];
                if (aux.Producto_idProducto == id) {
                    T += aux.Ventas - aux.costoVentas - aux.IVAxVentas;
                }
            }
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getDistTotal = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.costoDistribucion;
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getDistParcial = function (id) {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            if (aux.Producto_idProducto == id) {
                T += aux.costoDistribucion;
            }
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getAdminParcial = function (id) {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            if (aux.Producto_idProducto == id) {
                T += aux.costoAdministrativo;
            }
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getAdminTotal = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.costoAdministrativo;
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getOtrosGastosParcial = function (id) {
        var T = 0;
        for (var _i = 0, _a = this.auxiliarC; _i < _a.length; _i++) {
            var aux = _a[_i];
            if (aux.Producto_idProducto == id) {
                T += (aux.desarrolloMercado + aux.desarrolloProducto);
            }
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getUtilidadAntesParcial = function (id) {
        var T = 0;
        if (this.auxiliares.length == 0) {
            for (var _i = 0, _a = this.maquinas; _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.Producto_idProducto == id) {
                    T -= ((m.costo * (m.depAcum / 100)) * m.Cantidad);
                }
            }
        }
        else {
            for (var _b = 0, _c = this.auxiliares; _b < _c.length; _b++) {
                var aux = _c[_b];
                if (aux.Producto_idProducto == id) {
                    T += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
                }
            }
        }
        for (var _d = 0, _e = this.auxiliarC; _d < _e.length; _d++) {
            var aux2 = _e[_d];
            if (aux2.Producto_idProducto == id) {
                T += -aux2.desarrolloMercado - aux2.desarrolloProducto;
            }
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getUtilidadAntes = function () {
        var T = 0;
        if (this.auxiliares.length == 0) {
            for (var _i = 0, _a = this.maquinas; _i < _a.length; _i++) {
                var m = _a[_i];
                T -= ((m.costo * (m.depAcum / 100)) * m.Cantidad);
            }
        }
        else {
            for (var _b = 0, _c = this.auxiliares; _b < _c.length; _b++) {
                var aux = _c[_b];
                T += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
            }
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getUtilidad2 = function () {
        var T = 0;
        if (this.auxiliares.length == 0) {
            for (var _i = 0, _a = this.maquinas; _i < _a.length; _i++) {
                var m = _a[_i];
                T -= ((m.costo * (m.depAcum / 100)) * m.Cantidad);
            }
        }
        else {
            for (var _b = 0, _c = this.auxiliares; _b < _c.length; _b++) {
                var aux = _c[_b];
                T += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
            }
        }
        for (var _d = 0, _e = this.auxiliarT; _d < _e.length; _d++) {
            var i = _e[_d];
            T -= i;
        }
        for (var _f = 0, _g = this.intereses; _f < _g.length; _f++) {
            var i2 = _g[_f];
            T -= i2;
        }
        return T;
    };
    EstadoResultadosComponent.prototype.getISR = function () {
        var isr = 0;
        var uti = this.getUtilidad2();
        if (uti > 0) {
            isr = uti * .34;
        }
        return isr;
    };
    EstadoResultadosComponent.prototype.getPTU = function () {
        var ptu = 0;
        var uti = this.getUtilidadAntes();
        if (uti > 0) {
            ptu = uti * .10;
        }
        return ptu;
    };
    EstadoResultadosComponent.prototype.PDFestadoDeResultados = function () {
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [215.9, 279]
        });
        var columns = [
            { title: "", dataKey: "cara" },
            { title: "Producto X", dataKey: "x" }
        ];
        var rows = [
            { "cara": "Ventas Netas", "x": "1000000" },
            { "cara": "Costo de Ventas", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Utilidad Bruta", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Costo de Distribución", "x": "1000000" },
            { "cara": "Otros Gastos", "x": "1000000" },
            { "cara": "Gastos de Administración", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "", "x": "" },
            { "cara": "Utilidad en Operación", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Intereses", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Utilidad antes de Impuestos", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "ISR", "x": "1000000" },
            { "cara": "PTU", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Utilidad del Ejercicio", "x": "1000000" },
        ];
        doc.autoTable(columns, rows, {
            margin: { top: 40,
                left: 40 },
            tableWidth: 200,
            headerStyles: { fillColor: 0 },
            columnStyles: {
                cara: { halign: 'left', columnWidth: 65 }
            },
            addPageContent: function (data) {
                doc.setFontSize(15);
                doc.setFontType("bold");
                doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
                doc.setFontSize(13);
                doc.text(139.5, 23, 'Estado de Resultados', null, null, 'center');
                doc.line(50, 27, 228, 27);
            },
        });
        doc.save("Estado de Resultados.pdf");
    };
    return EstadoResultadosComponent;
}());
EstadoResultadosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-estado-resultados',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/estado-resultados/estado-resultados.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_operacion_service__["a" /* OperacionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_operacion_service__["a" /* OperacionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_compra_maquinaria_service__["a" /* CompraMaquinariaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_compra_maquinaria_service__["a" /* CompraMaquinariaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_balance_service__["a" /* BalanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_balance_service__["a" /* BalanceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_resultados_service__["a" /* ResultadosService */]) === "function" && _e || Object])
], EstadoResultadosComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=estado-resultados.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/financiamiento/financiamiento.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/financiamiento/financiamiento.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"height:800px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-8\" >\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <h3 class=\"col-12 text-center\">Creditos</h3>\r\n          <hr>\r\n        </div>\r\n        <div class=\"card col-5\" *ngFor=\"let credito of creditos\">\r\n\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <img  src=\"assets/img/credit.png\" class=\" img-fluid\"  style=\"margin-left:20px\">\r\n\r\n              </div>\r\n\r\n              <div class=\"col-8\">\r\n                <h4 class=\"card-title\" style=\"margin-bottom:15px\">{{credito.nombreCredito}}</h4>\r\n                <h6 class=\"card-subtitle\" style=\"margin-bottom:15px\">Monto Máximo: {{credito.montoMax| currency:'USD':true }}</h6>\r\n                <h6 class=\"card-subtitle\" style=\"margin-bottom:15px\">Monto Minimo: {{credito.montoMin| currency:'USD':true}}</h6>\r\n                <h6 class=\"card-subtitle\" style=\"margin-bottom:15px\">Descripción: {{credito.pago}}</h6>\r\n                <h6 class=\"card-subtitle\" style=\"margin-bottom:15px\"> Duración: {{credito.plazo}} periodo(s)</h6>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"card-footer\">\r\n              <div  class=\"btn btn-primary  offset-1 col-10\" (click)=\"selectCredito(credito)\" [hidden]=\"validaCredito(credito)\" >Solicitar</div>\r\n              <button class=\"btn btn-success offset-1 col-10\" (click)=\"verPagos(credito.idCredito)\" [hidden]=\"!validaCredito(credito)\">Ver Pagos</button>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <h3 class=\"col-12 text-center\">Creditos Activos</h3>\r\n          <hr>\r\n        </div>\r\n        <div class=\"card col-12\" *ngFor=\"let credito of creditosActivos\">\r\n\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <img  src=\"assets/img/credit.png\" class=\" img-fluid\"  style=\"margin-left:20px\">\r\n              </div>\r\n\r\n              <div class=\"col-3\">\r\n                <h4 class=\"card-title\" style=\"margin-bottom:15px\">{{getNameById(credito.idCredito)}}</h4>\r\n              </div>\r\n\r\n              <button type=\"button\" class=\"btn btn-danger col-3 offset-1 text-center\" (click)=\"eliminarCreditoSolicitado(credito.idCredito)\" [disabled]=\"!validaCreditoA(credito)\">Cancelar</button>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<ngl-modal header=\"Confirmación\"  [(open)]=\"openModalConf\" size=\"x-small\" directional=\"false\">\r\n\r\n  <div body>\r\n    <div class=\"col-12 text-center container\">\r\n      <h5 style=\"margin-bottom:30px\">Ingresa la cantidad del credito que se desea solicitar</h5>\r\n      <div class=\"row\">\r\n\r\n      </div>\r\n\r\n        <form [formGroup]=\"solicitudForm\" (ngSubmit)=\"solicitaCredito(solicitudForm.value)\"  class=\"offset-1\" >\r\n          <input type=\"number\" formControlName=\"idCredito\" hidden=\"true\">\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Monto a Solicitar:  </label>\r\n\r\n            <div class=\"input-group col-6 has-success \" [ngClass]=\"{'has-danger': !solicitudForm.get('monto').valid}\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n                formControlName=\"monto\">\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"form-control-feedback offset-5 text-center col-6\" style=\"font-size:10px;\"\r\n            [ngClass]=\"{'has-danger': !solicitudForm.get('monto').valid}\" *ngIf=\"!solicitudForm.controls['monto'].valid\">\r\n              El costo es requerido\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <button class=\"btn btn-danger offset-2 col-4\" (click)=\"openModalConf=false\">Salir</button>\r\n            <button type=\"submit\" class=\"btn btn-primary offset-1 col-4\"  >Solicitar</button>\r\n\r\n\r\n          </div>\r\n\r\n          </form>\r\n\r\n\r\n      <br>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  </ngl-modal>\r\n\r\n\r\n\r\n  <ngl-modal header=\"Tabla de Amorizacion\"  [(open)]=\"openTablaAmort\" size=\"x-small\" directional=\"false\">\r\n\r\n    <div body>\r\n      <div class=\"col-12 text-center container\">\r\n        <table class=\"table table-bordered table-responsive center-block\">\r\n          <tbody>\r\n            <tr>\r\n              <th>Capital</th>\r\n              <th>Interes</th>\r\n              <th>Pago</th>\r\n              <th>Saldo</th>\r\n              <th>Pago a Capital</th>\r\n            </tr>\r\n            <tr *ngFor=\"let t of tablaA\">\r\n              <td class=\"text-right\">{{t.capital |currency:'USD':true:'1.0-0'}}</td>\r\n              <td class=\"text-right\">{{t.interes |currency:'USD':true:'1.0-0'}}</td>\r\n              <td class=\"text-right\">{{t.pago |currency:'USD':true:'1.0-0'}}</td>\r\n              <td class=\"text-right\">{{t.saldo |currency:'USD':true:'1.0-0'}}</td>\r\n              <td class=\"text-right\">{{t.pagoCapital |currency:'USD':true:'1.0-0'}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <br>\r\n        <div class=\"row\">\r\n\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <button class=\"btn btn-danger offset-1 col-4\" (click)=\"openTablaAmort=false\">Salir</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    </ngl-modal>\r\n\r\n    <ngl-modal header=\"Pagos\"  [(open)]=\"openPagos\" size=\"x-small\" directional=\"false\">\r\n\r\n      <div body>\r\n        <div class=\"col-12 text-center container\">\r\n          <table class=\"table table-bordered table-responsive center-block\">\r\n            <tbody>\r\n              <tr>\r\n                <th>Periodo</th>\r\n                <th>Interes</th>\r\n                <th>Pago</th>\r\n                <th>Pago a Capital</th>\r\n              </tr>\r\n              <tr *ngFor=\"let t of tablaPagos\">\r\n                <td class=\"text-right\">{{t.numeroPeriodo}}</td>\r\n                <td class=\"text-right\">{{t.intereses |currency:'USD':true:'1.0-0'}}</td>\r\n                <td class=\"text-right\">{{t.pagoCapital + t.intereses |currency:'USD':true:'1.0-0'}}</td>\r\n                <td class=\"text-right\">{{t.pagoCapital |currency:'USD':true:'1.0-0'}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <br>\r\n          <div class=\"row\">\r\n\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <button class=\"btn btn-danger offset-1 col-4\" (click)=\"openPagos=false\">Salir</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      </ngl-modal>\r\n\r\n\r\n\r\n      <ngl-modal header=\"Alerta\"  [(open)]=\"modalAlerta\" size=\"x-small\" directional=\"false\">\r\n\r\n        <div body>\r\n          <h5 class=\"col-12 text-center\">Has sobrepasado el limite de créditos activos, termina de pagar un credito para pedir otro nuevo</h5>\r\n        </div>\r\n\r\n        <ng-template ngl-modal-footer>\r\n        <button class=\"btn btn-primary col-4 offset-4\" (click)=\"modalAlerta=false\">Aceptar</button>\r\n\r\n      </ng-template>\r\n        </ngl-modal>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/financiamiento/financiamiento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_usuario_credito_service__ = __webpack_require__("../../../../../src/app/services/usuario-credito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanciamientoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinanciamientoComponent = (function () {
    function FinanciamientoComponent(_creditoService) {
        this._creditoService = _creditoService;
        this.tablaA = [];
        this.creditosActivos = [];
        this.creditosSolicitados = [];
        this.openTablaAmort = false;
        this.openPagos = false;
        this.tablaPagos = [];
        this.openModalConf = false;
        this.modalAlerta = false;
        this.creditos = this._creditoService.returnCreditosU(localStorage.getItem('idUsuario'));
        this.creditosActivos = this._creditoService.arregloC();
        console.log("cActivos", this.creditosActivos);
        this.solicitudForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            'monto': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'idCredito': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    FinanciamientoComponent.prototype.validaCredito = function (credito) {
        for (var _i = 0, _a = this.creditosActivos; _i < _a.length; _i++) {
            var credit = _a[_i];
            if (credito.idCredito == credit.idCredito) {
                console.log("esta pedidio");
                return true;
            }
        }
        console.log("no esta pedido");
        return false;
    };
    FinanciamientoComponent.prototype.validaCreditoA = function (credito) {
        if (credito.numeroPeriodo == localStorage.getItem('numeroPeriodo'))
            return true;
        else
            return false;
    };
    FinanciamientoComponent.prototype.getNameById = function (id) {
        for (var _i = 0, _a = this.creditos; _i < _a.length; _i++) {
            var credito = _a[_i];
            if (credito.idCredito == id)
                return credito.nombreCredito;
        }
        return "id no encontrado";
    };
    FinanciamientoComponent.prototype.selectCredito = function (credito) {
        this.solicitudForm.controls['idCredito'].setValue(credito.idCredito);
        this.openModalConf = true;
        this.creditoSelected = credito;
    };
    FinanciamientoComponent.prototype.solicitaCredito = function (cantidad) {
        var _this = this;
        var x = {
            idCredito: cantidad.idCredito,
            idProyecto: parseInt(localStorage.getItem('idProyecto')),
            numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo')),
            monto: cantidad.monto
        };
        this._creditoService.validarC().subscribe(function (data1) {
            if (data1.limite == 0) {
                _this._creditoService.solicitarCredito(x).subscribe(function (data) {
                    if (data.success) {
                        _this.verAmortizacion(cantidad.idCredito);
                    }
                });
                console.log("Activos", _this._creditoService.arregloC());
                _this.creditosActivos = _this._creditoService.arregloC();
            }
            else {
                _this.modalAlerta = true;
                _this.openModalConf = false;
            }
        });
    };
    FinanciamientoComponent.prototype.eliminarCreditoSolicitado = function (idCredito) {
        var x = {
            idCredito: idCredito,
            idProyecto: parseInt(localStorage.getItem('idProyecto')),
            numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo'))
        };
        this._creditoService.eliminarCredito(x).subscribe(function (data) { console.log(2, data); });
        this._creditoService.eliminarCreditoActivo(x).subscribe();
    };
    FinanciamientoComponent.prototype.verAmortizacion = function (idCredito) {
        this.openTablaAmort = true;
        this.tablaA = this._creditoService.visualizarTabla(idCredito);
    };
    FinanciamientoComponent.prototype.verPagos = function (idCredito) {
        this.openPagos = true;
        this.tablaPagos = this._creditoService.verPagosP(idCredito);
    };
    FinanciamientoComponent.prototype.ngOnInit = function () {
    };
    return FinanciamientoComponent;
}());
FinanciamientoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-financiamiento',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/financiamiento/financiamiento.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/financiamiento/financiamiento.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_usuario_credito_service__["a" /* UsuarioCreditoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_usuario_credito_service__["a" /* UsuarioCreditoService */]) === "function" && _a || Object])
], FinanciamientoComponent);

var _a;
//# sourceMappingURL=financiamiento.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/operacion/operacion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/operacion/operacion.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Resultados de Operacion</h3>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"col-10 offset-1\">\r\n  <ngl-section [(open)]=\"almacenArticuloTerm\" title=\"Almacen de Articulo Terminado\">\r\n    <div class=\"row\">\r\n      <div class=\"offset-3\">\r\n        <table class=\"table table-bordered table-responsive\">\r\n\r\n          <tbody>\r\n            <tr>\r\n              <th class=\"text-center\">Producto</th>\r\n              <th class=\"text-center\">Unidades</th>\r\n              <th class=\"text-center\">Costo de Producción</th>\r\n              <th class=\"text-center\">TOTAL</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let producto of auxiliaresAnteriores\">\r\n              <td>{{getNameByIdProducto(producto.Producto_idProducto)}}</td>\r\n              <td class=\"text-right\">{{producto.unidadesAlmacenadas}}</td>\r\n              <td class=\"text-right\">{{(producto.inventarioFinal / producto.unidadesAlmacenadas)|currency:'USD':true:'1.0-0'}}</td>\r\n              <td class=\"text-right\">{{producto.inventarioFinal |currency:'USD':true:'1.0-0'}}</td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-4 offset-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"PDFalmacenArticuloTerminado()\">Exportar a PDF</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </ngl-section>\r\n</div>\r\n\r\n\r\n<div class=\"col-10 offset-1\">\r\n  <ngl-section [(open)]=\"presGlobalVentas\" title=\"Presupuesto Global de Ventas e IVA\">\r\n    <div class=\"row\">\r\n      <div class=\"offset-2\">\r\n        <table class=\"table table-bordered table-responsive\">\r\n\r\n          <tbody>\r\n            <tr>\r\n              <th class=\"text-center\">Producto</th>\r\n              <th class=\"text-center\">Unidades a Vender</th>\r\n              <th class=\"text-center\">Precio de Venta</th>\r\n              <th class=\"text-center\">Ventas en $</th>\r\n              <th class=\"text-center\">IVA (15%)</th>\r\n              <th class=\"text-center\">Importe</th>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let producto of auxiliares\">\r\n              <td>{{getNameByIdProducto(producto.Producto_idProducto) }}</td>\r\n              <td class=\"text-right\">{{producto.unidadesVendidas }}</td>\r\n              <td class=\"text-right\">{{getPrecioVenta(producto.Producto_idProducto) |currency:'USD':true:'1.0-0'}}</td>\r\n              <td class=\"text-right\">{{producto.Ventas - producto.IVAxVentas |currency:'USD':true:'1.0-0'}}</td>\r\n              <td class=\"text-right\">{{producto.IVAxVentas |currency:'USD':true:'1.0-0'}}</td>\r\n              <td class=\"text-right\">{{producto.Ventas |currency:'USD':true:'1.0-0'}}</td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-4 offset-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\" PDFpresupuestoGlobalVentasIVA()\">Exportar a PDF</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </ngl-section>\r\n</div>\r\n\r\n\r\n<div class=\"col-10 offset-1\">\r\n  <ngl-section [(open)]=\"presGlobalProduccion\" title=\"´Presupuesto Global de Producción\">\r\n    <div class=\"\">\r\n      <table class=\"table table-bordered table-responsive\">\r\n\r\n        <tbody>\r\n          <tr>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Producto</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Unidades a Vender (+)</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Inventario Final (+)</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Inventario Inicial (-)</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Unidades a Producir</th>\r\n            <th class=\"text-center align-middle\" colspan=\"2\">Materia Prima</th>\r\n            <th class=\"text-center align-middle\" colspan=\"2\" >Costo de Transformación</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Costo de Producción Unitario</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Costo de Producción Total</th>\r\n          </tr>\r\n          <tr>\r\n            <th class=\"text-center align-middle\">Costo Unitario</th>\r\n            <th class=\"text-center align-middle\">Costo Total</th>\r\n            <th class=\"text-center align-middle\">Costo Unitario</th>\r\n            <th class=\"text-center align-middle\">Costo Total</th>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let producto of auxiliares\">\r\n            <td>{{getNameByIdProducto(producto.Producto_idProducto) }}</td>\r\n            <td class=\"text-right\">{{producto.unidadesVendidas}}</td>\r\n            <td class=\"text-right\">{{producto.unidadesAlmacenadas}}</td>\r\n            <td class=\"text-right\">{{getUnidadesAlmacenadasAnterior(producto.Producto_idProducto) }}</td>\r\n            <td class=\"text-right\">{{producto.unidadesProducidas }}</td>\r\n            <td class=\"text-right\">{{getMPPuniProd(producto.Producto_idProducto) |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{producto.materiaCosumida |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{(producto.costoTransformacionVentas + producto.costoTransformacionMaq)/producto.unidadesProducidas |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\"> {{producto.costoTransformacionVentas + producto.costoTransformacionMaq |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{getMPPuniProd(producto.Producto_idProducto) + (producto.costoTransformacionVentas + producto.costoTransformacionMaq)/producto.unidadesProducidas|currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{producto.costoTransformacionVentas + producto.costoTransformacionMaq + producto.materiaCosumida |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n\r\n\r\n    </div>\r\n  </ngl-section>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"col-10 offset-1\">\r\n  <ngl-section [(open)]=\"presGlobalConsumoMP\" title=\"Presupuesto Global de Consumo de Materias Primas\">\r\n    <div class=\"offset-2\">\r\n      <table class=\"table table-bordered table-responsive\">\r\n\r\n        <tbody>\r\n          <tr>\r\n            <th class=\"text-center align-middle\" >Producto</th>\r\n            <th class=\"text-center align-middle\" >Cantidad Unitaria</th>\r\n            <th class=\"text-center align-middle\" >Costo Unitario</th>\r\n            <th class=\"text-center align-middle\" >Unidades a Producir</th>\r\n            <th class=\"text-center align-middle\" >Cantidad</th>\r\n            <th class=\"text-center align-middle\" >Importe</th>\r\n\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let producto of auxiliares\">\r\n            <td>{{getNameByIdProducto(producto.Producto_idProducto) }}</td>\r\n            <td class=\"text-right\">{{getUniMP(producto.Producto_idProducto)}}</td>\r\n            <td class=\"text-right\">{{getCostoUni(producto.Producto_idProducto) |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{producto.unidadesProducidas }}</td>\r\n            <td class=\"text-right\">{{getUniMP(producto.Producto_idProducto) * producto.unidadesProducidas}}</td>\r\n            <td class=\"text-right\">{{getCostoUni(producto.Producto_idProducto) * (getUniMP(producto.Producto_idProducto) * producto.unidadesProducidas) |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-4 offset-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"PDFpresupuestoGlobalConsumoMP()\">Exportar a PDF</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </ngl-section>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"col-10 offset-1\">\r\n  <ngl-section [(open)]=\"presGlobalComprasMP\" title=\"Presupuesto Global Compras de Materias Primas e IVA\">\r\n    <div class=\"row\">\r\n      <div class=\"offset-2\">\r\n        <table class=\"table table-bordered table-responsive\">\r\n          <tbody>\r\n            <tr>\r\n              <th class=\"text-center align-middle\" >Materiales </th>\r\n              <th class=\"text-center align-middle\" >Cantidad a Comprar</th>\r\n              <th class=\"text-center align-middle\"  >Costo Unitario</th>\r\n              <th class=\"text-center align-middle\" >Importe</th>\r\n              <th class=\"text-center align-middle\" >IVA Acreditable</th>\r\n              <th class=\"text-center align-middle\" >Total a Pagar</th>\r\n            </tr>\r\n\r\n\r\n            <tr>\r\n              <td class=\"text-right\">1</td>\r\n              <td class=\"text-right\">{{getUniMPTotal()}}</td>\r\n              <td class=\"text-right\">$69</td>\r\n              <td class=\"text-right\">{{getUniMPTotalCash() |currency:'USD':true:'1.0-0'}}</td>\r\n              <td class=\"text-right\">{{getIVAMP() |currency:'USD':true:'1.0-0'}}</td>\r\n              <td class=\"text-right\">{{getTotalMP() |currency:'USD':true:'1.0-0'}}</td>\r\n            </tr>\r\n\r\n\r\n          </tbody>\r\n        </table>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-4 offset-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"PDFpresupuestoGlobalComprasMP()\">Exportar a PDF</button>\r\n      </div>\r\n    </div>\r\n  </ngl-section>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"col-10 offset-1\">\r\n  <ngl-section [(open)]=\"presGlobalCostoTrans\" title=\"Presupuesto Global de Costo de Transformación\">\r\n  <div class=\"row\">\r\n    <div class=\"\">\r\n      <table class=\"table table-bordered table-responsive\">\r\n\r\n        <tbody>\r\n          <tr>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Producto</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Unidades a Producir</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Costo Unitario Total</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Costo de Transformacion</th>\r\n            <th class=\"text-center align-middle\" colspan=\"2\">Menos</th>\r\n            <th class=\"text-center align-middle\" colspan=\"2\">Menos partidas que no incluyen IVA</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\" >Neto</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">IVA</th>\r\n            <th class=\"text-center align-middle\" rowspan=\"2\">Total a Pagar</th>\r\n          </tr>\r\n          <tr>\r\n            <th class=\"text-center align-middle\">Depreciaciones</th>\r\n            <th class=\"text-center align-middle\">Neto</th>\r\n            <th class=\"text-center align-middle\">Sueldos y Salarios</th>\r\n            <th class=\"text-center align-middle\">Prevención Social</th>\r\n          </tr>\r\n\r\n          <tr *ngFor=\"let producto of auxiliares\">\r\n            <td>{{getNameByIdProducto(producto.Producto_idProducto) }}</td>\r\n            <td class=\"text-right\">{{producto.unidadesProducidas}}</td>\r\n            <td class=\"text-right\">{{(producto.costoTransformacionVentas + producto.costoTransformacionMaq )/ producto.unidadesProducidas |currency:'USD':true:'1.0-0' }}</td>\r\n            <td class=\"text-right\">{{producto.costoTransformacionVentas + producto.costoTransformacionMaq |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{producto.costoTransformacionMaq |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{producto.costoTransformacionVentas |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{0}}</td>\r\n            <td class=\"text-right\">{{0}}</td>\r\n            <td class=\"text-right\">{{producto.costoTransformacionVentas |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{-producto.IVATrans |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{producto.costoTransformacionVentas - producto.IVATrans |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 offset-4\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"PDFpresupuestoGlobalCostoTrans()\">Exportar a PDF</button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  </ngl-section>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"col-10 offset-1\">\r\n  <ngl-section [(open)]=\"presGlobalCostoDist\" title=\"Presupuesto Global de Costo de Distribución\">\r\n    <div class=\"offset-2\">\r\n      <table class=\"table table-bordered table-responsive \">\r\n        <thead>\r\n          <tr>\r\n            <th></th>\r\n            <th *ngFor=\"let producto of auxiliares\">{{getNameByIdProducto(producto.Producto_idProducto) }}</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr>\r\n            <th>Unidades  a Vender</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.unidadesVendidas }}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Cto Unitario Total</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoDistribucion / producto.unidadesVendidas |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Cto Distribución</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoDistribucion |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Menos</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">-</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Depreciaciones</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoDistribucion - producto.costoDistDep |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Neto</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoDistDep |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Menos partidas que no Incluyen IVA</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">-</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Sueldos y salarios</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">-</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Prevención Social</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">-</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Neto</th>\r\n            <td  class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoDistDep |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>IVA</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{-producto.IVADist |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Total a Pagar</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoDistDep - producto.IVADist |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-4 offset-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"PDFpresupuestoGlobalCostoDist()\">Exportar a PDF</button>\r\n      </div>\r\n    </div>\r\n\r\n  </ngl-section>\r\n</div>\r\n\r\n<div class=\"col-10 offset-1\">\r\n  <ngl-section [(open)]=\"presGlobalCostoAdmon\" title=\"Presupuesto Global de Costo de Administración\">\r\n    <div class=\"offset-2\">\r\n\r\n          <table class=\"table table-bordered table-responsive \">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th *ngFor=\"let producto of auxiliares\">{{getNameByIdProducto(producto.Producto_idProducto) }}</th>\r\n              </tr>\r\n            </thead>\r\n\r\n            <tbody>\r\n              <tr>\r\n                <th>Unidades  a Vender</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.unidadesVendidas }}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Cto Unitario Total</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoAdministrativo/producto.unidadesVendidas |currency:'USD':true:'1.0-0'}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Cto Administracion</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoAdministrativo |currency:'USD':true:'1.0-0'}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Menos</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">-</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Depreciaciones</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoAdministrativo - producto.costoAdminDep |currency:'USD':true:'1.0-0'}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Neto</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoAdminDep |currency:'USD':true:'1.0-0'}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Menos partidas que no Incluyen IVA</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">-</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Sueldos y salarios</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">-</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Prevención Social</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">-</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Neto</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoAdminDep |currency:'USD':true:'1.0-0'}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>IVA</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{-producto.IVAAdmon |currency:'USD':true:'1.0-0'}}</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <th>Total a Pagar</th>\r\n                <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoAdminDep - producto.IVAAdmon |currency:'USD':true:'1.0-0'}}</td>\r\n              </tr>\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-4 offset-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"PDFpresupuestoGlobalCostoAdmin()\">Exportar a PDF</button>\r\n      </div>\r\n    </div>\r\n\r\n  </ngl-section>\r\n</div>\r\n\r\n<div class=\"col-10 offset-1\">\r\n  <ngl-section [(open)]=\"presOtrosGastos\" title=\"Presupuesto Global de Otros Gastos\">\r\n    <div class=\"offset-2\">\r\n      <table class=\"table table-bordered table-responsive \">\r\n        <thead>\r\n          <tr>\r\n            <th></th>\r\n            <th *ngFor=\"let producto of auxiliarC\">{{getNameByIdProducto(producto.Producto_idProducto) }}</th>\r\n            <th>Total</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr>\r\n            <th>Desarrollo de Producto</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliarC\">{{producto.desarrolloProducto |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{getTotalProducto() |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Desarrollo de Mercado</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliarC\">{{producto.desarrolloMercado |currency:'USD':true:'1.0-0'}}</td>\r\n            <td class=\"text-right\">{{getTotalMercado() |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-4 offset-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"PDFpresupuestoGlobalOtrosGastos()\">Exportar a PDF</button>\r\n      </div>\r\n    </div>\r\n\r\n  </ngl-section>\r\n</div>\r\n\r\n\r\n<div class=\"col-10 offset-1\">\r\n  <ngl-section [(open)]=\"presGlobalCostoVenta\" title=\"Costo de Producción y Ventas\">\r\n    <div class=\"offset-2\">\r\n      <table class=\"table table-bordered table-responsive \">\r\n        <thead>\r\n          <tr>\r\n            <th></th>\r\n            <th *ngFor=\"let producto of auxiliares\">{{getNameByIdProducto(producto.Producto_idProducto) }}</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n          <tr>\r\n            <th>Materia Prima Consumida</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.materiaCosumida |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Indirectos de Producción</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoTransformacionVentas + producto.costoTransformacionMaq |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Costo de Producción</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.materiaCosumida + producto.costoTransformacionVentas + producto.costoTransformacionMaq |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>I.F. de Producto terminado</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.inventarioFinal |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Costo de Ventas</th>\r\n            <td class=\"text-right\" *ngFor=\"let producto of auxiliares\">{{producto.costoVentas |currency:'USD':true:'1.0-0'}}</td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-4 offset-4\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"PDFcostoProduccionVentas()\">Exportar a PDF</button>\r\n      </div>\r\n    </div>\r\n\r\n  </ngl-section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/operacion/operacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_operacion_service__ = __webpack_require__("../../../../../src/app/services/operacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resultados_service__ = __webpack_require__("../../../../../src/app/services/resultados.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperacionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OperacionComponent = (function () {
    function OperacionComponent(_productoService, _balanceService, _operacionService, _resultadosService, cp) {
        this._productoService = _productoService;
        this._balanceService = _balanceService;
        this._operacionService = _operacionService;
        this._resultadosService = _resultadosService;
        this.cp = cp;
        this.productos = [];
        this.auxiliares = [];
        this.auxiliaresAnteriores = [];
        this.auxiliarC = [];
        this.opne = false;
        this.almacenArticuloTerm = false;
        this.presGlobalVentas = false;
        this.presGlobalProduccion = false;
        this.presGlobalConsumoMP = false;
        this.presGlobalComprasMP = false;
        this.presGlobalCostoTrans = false;
        this.presGlobalCostoDist = false;
        this.presGlobalCostoAdmon = false;
        this.presGlobalCostoVenta = false;
        this.presOtrosGastos = false;
        this._resultadosService.vender();
    }
    OperacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this._balanceService.getBalanceFinal().subscribe(function (data) {
                if (data.success) {
                    _this.auxiliaresAnteriores = _this._operacionService.returnAuxiliaresAnteriores();
                    _this.auxiliares = _this._operacionService.returnAuxiliares();
                    _this.auxiliarC = _this._operacionService.returnAuxiliarC();
                    _this.productos = _this._productoService.returnProductos();
                }
            });
        }, 1500);
    };
    OperacionComponent.prototype.getNameByIdProducto = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == id)
                return producto.nombreProd;
        }
        return "id no encontrado";
    };
    OperacionComponent.prototype.getPrecioVenta = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == id)
                return producto.precioVenta;
        }
        return 0;
    };
    OperacionComponent.prototype.getMPPuniProd = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == id)
                return producto.costosMPPUniProd;
        }
        return 0;
    };
    OperacionComponent.prototype.getUnidadesAlmacenadasAnterior = function (idProducto) {
        for (var _i = 0, _a = this.auxiliaresAnteriores; _i < _a.length; _i++) {
            var aux = _a[_i];
            if (aux.Producto_idProducto == idProducto) {
                return aux.unidadesAlmacenadas;
            }
        }
        return 0;
    };
    OperacionComponent.prototype.getUniMP = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == id)
                return producto.uniMP;
        }
        return 0;
    };
    OperacionComponent.prototype.getCostoUni = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == id)
                return producto.costoUni;
        }
        return 0;
    };
    OperacionComponent.prototype.getUniMPTotal = function () {
        var mpT = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            mpT += this.getUniMP(aux.Producto_idProducto) * aux.unidadesProducidas;
        }
        return mpT;
    };
    OperacionComponent.prototype.getUniMPTotalCash = function () {
        var mpTC = 0;
        mpTC = this.getUniMPTotal() * 69;
        return mpTC;
    };
    OperacionComponent.prototype.getIVAMP = function () {
        var mpIVA = 0;
        mpIVA = this.getUniMPTotalCash() * .15;
        return mpIVA;
    };
    OperacionComponent.prototype.getTotalMP = function () {
        var total = 0;
        total = this.getUniMPTotalCash() + this.getIVAMP();
        return total;
    };
    OperacionComponent.prototype.getTotalVentas = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.Ventas - aux.IVAxVentas;
        }
        return T;
    };
    OperacionComponent.prototype.getTotalCostosVentas = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.costoVentas;
        }
        return T;
    };
    OperacionComponent.prototype.getUtilidadBruta = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.Ventas - aux.costoVentas - aux.IVAxVentas;
        }
        return T;
    };
    OperacionComponent.prototype.getDistTotal = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.costoDistribucion;
        }
        return T;
    };
    OperacionComponent.prototype.getAdminTotal = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.costoAdministrativo;
        }
        return T;
    };
    OperacionComponent.prototype.getTotalMercado = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliarC; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.desarrolloMercado;
        }
        return T;
    };
    OperacionComponent.prototype.getTotalProducto = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliarC; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.desarrolloProducto;
        }
        return T;
    };
    OperacionComponent.prototype.getUtilidadAntes = function () {
        var T = 0;
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var aux = _a[_i];
            T += aux.Ventas - aux.IVAxVentas - aux.costoVentas - aux.costoDistribucion - aux.costoAdministrativo;
        }
        for (var _b = 0, _c = this.auxiliarC; _b < _c.length; _b++) {
            var aux2 = _c[_b];
            T += -aux2.desarrolloMercado - aux2.desarrolloProducto;
        }
        return T;
    };
    OperacionComponent.prototype.getISR = function () {
        var isr = 0;
        var uti = this.getUtilidadAntes();
        if (uti > 0) {
            isr = uti * .34;
        }
        return isr;
    };
    OperacionComponent.prototype.getPTU = function () {
        var ptu = 0;
        var uti = this.getUtilidadAntes();
        if (uti > 0) {
            ptu = uti * .10;
        }
        return ptu;
    };
    OperacionComponent.prototype.PDFalmacenArticuloTerminado = function () {
        var vars = 200000;
        var varss = this.cp.transform(vars, 'USD', true, '1.0-0');
        console.log(varss);
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [215.9, 279]
        });
        var columns = [
            { title: "Producto", dataKey: "producto" },
            { title: "Unidades", dataKey: "unidades" },
            { title: "Costo Unitario de Producción", dataKey: "costoUni" },
            { title: "Total", dataKey: "total" }
        ];
        var rows = [
            { "producto": "", "unidades": "", "costoUni": "", "total": "" }
        ];
        //Cosas Importantes
        for (var _i = 0, _a = this.auxiliaresAnteriores; _i < _a.length; _i++) {
            var producto = _a[_i];
            var x = {
                "producto": this.getNameByIdProducto(producto.Producto_idProducto),
                "unidades": producto.unidadesAlmacenadas.toString(),
                "costoUni": (producto.inventarioFinal / producto.unidadesAlmacenadas).toString(),
                "total": producto.inventarioFinal.toString()
            };
            rows.push(x);
        }
        doc.autoTable(columns, rows, {
            margin: { top: 40,
                left: 40 },
            tableWidth: 200,
            headerStyles: { fillColor: 0 },
            columnStyles: {
                total: { halign: 'right', columnWidth: 'auto' },
                producto: { halign: 'center' },
                unidades: { halign: 'right' },
                costoUni: { halign: 'right' }
            },
            addPageContent: function (data) {
                doc.setFontSize(15);
                doc.setFontType("bold");
                doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
                doc.setFontSize(13);
                doc.text(139.5, 23, 'Almacen de Artículo Terminado del Periodo ' + localStorage.getItem('numeroPeriodo'), null, null, 'center');
                doc.line(50, 27, 228, 27);
            },
        });
        doc.save("Alamcen Articulo Terminado.pdf");
    };
    OperacionComponent.prototype.PDFpresupuestoGlobalComprasMP = function () {
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [215.9, 279]
        });
        var columns = [
            { title: "Material", dataKey: "material" },
            { title: "Cantidad a Comprar", dataKey: "cantidadComprar" },
            { title: "Costo Unitario", dataKey: "costoUni" },
            { title: "Importe", dataKey: "importe" },
            { title: "IVA Acreditable", dataKey: "ivaA" },
            { title: "Total a Pagar", dataKey: "total" }
        ];
        var rows = [
            { "material": "", "cantidadComprar": "", "costoUni": "", "importe": "", "ivaA": "", "total": "" },
            { "material": "1",
                "cantidadComprar": this.getUniMPTotal().toString(),
                "costoUni": "69",
                "importe": this.getUniMPTotalCash().toString(),
                "ivaA": this.getIVAMP().toString(),
                "total": this.getTotalMP().toString()
            }
        ];
        doc.autoTable(columns, rows, {
            margin: { top: 40,
                left: 40 },
            tableWidth: 200,
            headerStyles: { fillColor: 0 },
            columnStyles: {
                total: { halign: 'right', columnWidth: 'auto' },
                material: { halign: 'center' },
                unidades: { halign: 'right' },
                costoUni: { halign: 'right' }
            },
            addPageContent: function (data) {
                doc.setFontSize(15);
                doc.setFontType("bold");
                doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
                doc.setFontSize(13);
                doc.text(139.5, 23, 'Presupuesto Global de Compras de Materia Prima e I.V.A. del Periodo ' + localStorage.getItem('numeroPeriodo'), null, null, 'center');
                doc.line(50, 27, 228, 27);
            },
        });
        doc.save("Presupuesto Global de Compras de Materia Prima.pdf");
    };
    OperacionComponent.prototype.PDFpresupuestoGlobalConsumoMP = function () {
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [215.9, 279]
        });
        var columns = [
            { title: "Producto", dataKey: "producto" },
            { title: "Cantidad Unitaria", dataKey: "cantidadUnit" },
            { title: "Costo Unitario", dataKey: "costoUni" },
            { title: "Unidades a Producir", dataKey: "unidadProd" },
            { title: "Cantidad", dataKey: "cantidad" },
            { title: "Importe", dataKey: "importe" }
        ];
        var rows = [
            { "producto": "", "cantidadUnit": "", "costoUni": "", "unidadProd": "", "cantidad": "", "importe": "" }
        ];
        //Cosas Importantes
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var producto = _a[_i];
            var x = {
                "producto": this.getNameByIdProducto(producto.Producto_idProducto),
                "cantidadUnit": (this.getUniMP(producto.Producto_idProducto)).toString(),
                "costoUni": (this.getCostoUni(producto.Producto_idProducto)).toString(),
                "unidadProd": producto.unidadesProducidas.toString(),
                "cantidad": (this.getUniMP(producto.Producto_idProducto) * producto.unidadesProducidas).toString(),
                "importe": (this.getCostoUni(producto.Producto_idProducto) * (this.getUniMP(producto.Producto_idProducto) * producto.unidadesProducidas)).toString()
            };
            rows.push(x);
        }
        doc.autoTable(columns, rows, {
            margin: { top: 40,
                left: 40 },
            tableWidth: 200,
            headerStyles: { fillColor: 0 },
            columnStyles: {
                total: { halign: 'right', columnWidth: 'auto' },
                material: { halign: 'center' },
                unidades: { halign: 'right' },
                costoUni: { halign: 'right' }
            },
            addPageContent: function (data) {
                doc.setFontSize(15);
                doc.setFontType("bold");
                doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
                doc.setFontSize(13);
                doc.text(139.5, 23, 'Presupuesto Global de Compras de Materia Prima e I.V.A. del Periodo X', null, null, 'center');
                doc.line(50, 27, 228, 27);
            },
        });
        doc.save("Presupuesto Global de Consumo de Materias Primas.pdf");
    };
    OperacionComponent.prototype.PDFpresupuestoGlobalVentasIVA = function () {
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [215.9, 279]
        });
        var columns = [
            { title: "", dataKey: "cara" },
            { title: "Producto X", dataKey: "x" }
        ];
        var rows = [
            { "cara": "Unidades a Vender", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Precio de Venta", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Venta en $ ", "x": "" },
            { "cara": "", "x": "" },
            { "cara": "Importe", "x": "" },
            { "cara": "", "x": "" }
        ];
        doc.autoTable(columns, rows, {
            margin: { top: 40,
                left: 40 },
            tableWidth: 200,
            headerStyles: { fillColor: 0 },
            columnStyles: {
                cara: { halign: 'left', columnWidth: 40 }
            },
            addPageContent: function (data) {
                doc.setFontSize(15);
                doc.setFontType("bold");
                doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
                doc.setFontSize(13);
                doc.text(139.5, 23, 'Presupuesto Global de Ventas e IVA del Periodo X', null, null, 'center');
                doc.line(50, 27, 228, 27);
            },
        });
        doc.save("Presupuesto Global de Ventas e IVA.pdf");
    };
    OperacionComponent.prototype.PDFpresupuestoGlobalCostoTrans = function () {
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [215.9, 279]
        });
        var columns = [
            { title: "", dataKey: "cara" }
        ];
        var rows = [
            { "cara": "Unidades a Producir" },
            { "cara": "" },
            { "cara": "Costo de Transformación" },
            { "cara": "" },
            { "cara": "Menos: " },
            { "cara": "Depreciaciones" },
            { "cara": "Neto" },
            { "cara": "" },
            { "cara": "Menos partidas que no incluyen I.V.A." },
            { "cara": "" },
            { "cara": "Sueldos y Salarios" },
            { "cara": "Previsión Social" },
            { "cara": "" },
            { "cara": "Neto" },
            { "cara": "I.V.A." },
            { "cara": "Total a Pagar" },
        ];
        for (var _i = 0, _a = this.auxiliares; _i < _a.length; _i++) {
            var producto = _a[_i];
            var x = {
                title: this.getNameByIdProducto(producto.Producto_idProducto),
                dataKey: this.getNameByIdProducto(producto.Producto_idProducto)
            };
            columns.push(x);
            rows[0][x.dataKey] = ((producto.costoTransformacionVentas + producto.costoTransformacionMaq) / producto.unidadesProducidas).toString();
            rows[2][x.dataKey] = (producto.costoTransformacionVentas + producto.costoTransformacionMaq).toString();
            rows[5][x.dataKey] = producto.costoTransformacionMaq.toString();
            rows[6][x.dataKey] = producto.costoTransformacionVentas.toString();
            rows[10][x.dataKey] = "0";
            rows[11][x.dataKey] = "0";
            rows[13][x.dataKey] = producto.costoTransformacionVentas.toString();
            rows[14][x.dataKey] = -producto.IVATrans.toString();
            rows[15][x.dataKey] = (producto.costoTransformacionVentas - producto.IVATrans).toString();
        }
        doc.autoTable(columns, rows, {
            margin: { top: 40,
                left: 40 },
            tableWidth: 200,
            headerStyles: { fillColor: 0 },
            columnStyles: {
                cara: { halign: 'left', columnWidth: 65 }
            },
            addPageContent: function (data) {
                doc.setFontSize(15);
                doc.setFontType("bold");
                doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
                doc.setFontSize(13);
                doc.text(139.5, 23, 'Presupuesto Global de  Costo de Trasnformación del Periodo X', null, null, 'center');
                doc.line(50, 27, 228, 27);
            },
        });
        doc.save("Presupuesto Global de Costo de Trasnformacion.pdf");
    };
    OperacionComponent.prototype.PDFpresupuestoGlobalCostoDist = function () {
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [215.9, 279]
        });
        var columns = [
            { title: "", dataKey: "cara" },
            { title: "Producto X", dataKey: "x" }
        ];
        var rows = [
            { "cara": "Unidades a Vender", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Costo Unitario Total", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Costo de Distribución", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Menos: ", "x": "" },
            { "cara": "Depreciaciones", "x": "5000000" },
            { "cara": "Neto", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Menos partidas que no incluyen I.V.A.", "x": "" },
            { "cara": "", "x": "" },
            { "cara": "Sueldos y Salarios", "x": "" },
            { "cara": "Previsión Social", "x": "" },
            { "cara": "", "x": "" },
            { "cara": "Neto", "x": "" },
            { "cara": "I.V.A.", "x": "" },
            { "cara": "Total a Pagar", "x": "" },
        ];
        rows[0]["t"] = "hola";
        doc.autoTable(columns, rows, {
            margin: { top: 40,
                left: 40 },
            tableWidth: 200,
            headerStyles: { fillColor: 0 },
            columnStyles: {
                cara: { halign: 'left', columnWidth: 65 }
            },
            addPageContent: function (data) {
                doc.setFontSize(15);
                doc.setFontType("bold");
                doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
                doc.setFontSize(13);
                doc.text(139.5, 23, 'Presupuesto Global de  Costo de Distribución del Periodo X', null, null, 'center');
                doc.line(50, 27, 228, 27);
            },
        });
        doc.save("Presupuesto Global de Costo de Distribucion.pdf");
    };
    OperacionComponent.prototype.PDFpresupuestoGlobalCostoAdmin = function () {
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [215.9, 279]
        });
        var columns = [
            { title: "", dataKey: "cara" },
            { title: "Producto X", dataKey: "x" }
        ];
        var rows = [
            { "cara": "Unidades a Vender", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Costo Unitario Total", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Costo de Distribución", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Menos: ", "x": "" },
            { "cara": "Depreciaciones", "x": "5000000" },
            { "cara": "Neto", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Menos partidas que no incluyen I.V.A.", "x": "" },
            { "cara": "", "x": "" },
            { "cara": "Sueldos y Salarios", "x": "" },
            { "cara": "Previsión Social", "x": "" },
            { "cara": "", "x": "" },
            { "cara": "Neto", "x": "" },
            { "cara": "I.V.A.", "x": "" },
            { "cara": "Total a Pagar", "x": "" },
        ];
        rows[0]["t"] = "hola";
        doc.autoTable(columns, rows, {
            margin: { top: 40,
                left: 40 },
            tableWidth: 200,
            headerStyles: { fillColor: 0 },
            columnStyles: {
                cara: { halign: 'left', columnWidth: 65 }
            },
            addPageContent: function (data) {
                doc.setFontSize(15);
                doc.setFontType("bold");
                doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
                doc.setFontSize(13);
                doc.text(139.5, 23, 'Presupuesto Global de  Costo de Administración del Periodo X', null, null, 'center');
                doc.line(50, 27, 228, 27);
            },
        });
        doc.save("Presupuesto Global de Costo de Administracion.pdf");
    };
    OperacionComponent.prototype.PDFpresupuestoGlobalOtrosGastos = function () {
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [215.9, 279]
        });
        var columns = [
            { title: "", dataKey: "cara" },
            { title: "Producto X", dataKey: "x" },
            { title: "Producto Y", dataKey: "ProductoY" }
        ];
        var rows = [
            { "cara": "Desarrollo de Producto", "x": "1000000" },
            { "cara": "Desarrollo de Mercado", "x": "1000000" },
            { "cara": "Participación de Mercado", "x": "1000000" },
            { "cara": "Total", "x": "1000000" },
        ];
        rows[0]["ProductoY"] = "3000000";
        doc.autoTable(columns, rows, {
            margin: { top: 40,
                left: 40 },
            tableWidth: 200,
            headerStyles: { fillColor: 0 },
            columnStyles: {
                cara: { halign: 'left', columnWidth: 65 }
            },
            addPageContent: function (data) {
                doc.setFontSize(15);
                doc.setFontType("bold");
                doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
                doc.setFontSize(13);
                doc.text(139.5, 23, 'Presupuesto Global de Otros Gastos del Periodo X', null, null, 'center');
                doc.line(50, 27, 228, 27);
            },
        });
        doc.save("Presupuesto Global Otros Gastos.pdf");
    };
    OperacionComponent.prototype.PDFcostoProduccionVentas = function () {
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [215.9, 279]
        });
        var columns = [
            { title: "", dataKey: "cara" },
            { title: "Producto X", dataKey: "x" }
        ];
        var rows = [
            { "cara": "I.I de Materia Prima", "x": "1000000" },
            { "cara": "Compras", "x": "1000000" },
            { "cara": "I.F. de Materia prima", "x": "1000000" },
            { "cara": "Materia prima consumida", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Mano de Obra y Gastos I.P.", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Costo de Producción", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "I.I. de Producto Terminado", "x": "1000000" },
            { "cara": "I.F. de Producto Terminado", "x": "1000000" },
            { "cara": "", "x": "" },
            { "cara": "Costo de Ventas", "x": "1000000" }
        ];
        doc.autoTable(columns, rows, {
            margin: { top: 40,
                left: 40 },
            tableWidth: 200,
            headerStyles: { fillColor: 0 },
            columnStyles: {
                cara: { halign: 'left', columnWidth: 65 }
            },
            addPageContent: function (data) {
                doc.setFontSize(15);
                doc.setFontType("bold");
                doc.text(139.5, 15, 'Proyecto Empresa XYZ SA de CV', null, null, 'center');
                doc.setFontSize(13);
                doc.text(139.5, 23, 'Costo de Producción y Ventas', null, null, 'center');
                doc.line(50, 27, 228, 27);
            },
        });
        doc.save("Costo de Producción y Ventas.pdf");
    };
    return OperacionComponent;
}());
OperacionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-operacion',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/operacion/operacion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/operacion/operacion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_balance_service__["a" /* BalanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_balance_service__["a" /* BalanceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_operacion_service__["a" /* OperacionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_operacion_service__["a" /* OperacionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_resultados_service__["a" /* ResultadosService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["CurrencyPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["CurrencyPipe"]) === "function" && _e || Object])
], OperacionComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=operacion.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/proyecto-usuario.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainPage{\r\n  padding-left:320px;\r\n  padding-top: 110px;\r\n  overflow: hidden;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/proyecto-usuario.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav-p></app-sidenav-p>\r\n<div class=\"mainPage\">\r\n  <app-balance></app-balance>\r\n<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/proyecto-usuario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProyectoUsuarioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProyectoUsuarioComponent = (function () {
    function ProyectoUsuarioComponent() {
    }
    ProyectoUsuarioComponent.prototype.ngOnInit = function () {
    };
    return ProyectoUsuarioComponent;
}());
ProyectoUsuarioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-proyecto-usuario',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/proyecto-usuario.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/proyecto-usuario.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProyectoUsuarioComponent);

//# sourceMappingURL=proyecto-usuario.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/proyecto.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__desarrollo_mercado_desarrollo_mercado_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-mercado/desarrollo-mercado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__desarrollo_producto_desarrollo_producto_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/desarrollo-producto/desarrollo-producto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__venta_productos_venta_productos_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/venta-productos/venta-productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compra_maquinaria_compra_maquinaria_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/compra-maquinaria/compra-maquinaria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__balance_inicial_balance_inicial_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-inicial/balance-inicial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__balance_final_balance_final_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-final/balance-final.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__balance_home_balance_home_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/balance-home/balance-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__operacion_operacion_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/operacion/operacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__estado_resultados_estado_resultados_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/estado-resultados/estado-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__financiamiento_financiamiento_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/financiamiento/financiamiento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demanda_potencial_demanda_potencial_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/demanda-potencial/demanda-potencial.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROYECTO_ROUTES; });











var PROYECTO_ROUTES = [
    { path: 'compraMaquinaria', component: __WEBPACK_IMPORTED_MODULE_3__compra_maquinaria_compra_maquinaria_component__["a" /* CompraMaquinariaComponent */] },
    { path: 'estadoResultados', component: __WEBPACK_IMPORTED_MODULE_8__estado_resultados_estado_resultados_component__["a" /* EstadoResultadosComponent */] },
    { path: 'desarrolloProducto', component: __WEBPACK_IMPORTED_MODULE_1__desarrollo_producto_desarrollo_producto_component__["a" /* DesarrolloProductoComponent */] },
    { path: 'desarrolloMercado', component: __WEBPACK_IMPORTED_MODULE_0__desarrollo_mercado_desarrollo_mercado_component__["a" /* DesarrolloMercadoComponent */] },
    { path: 'produccion', component: __WEBPACK_IMPORTED_MODULE_2__venta_productos_venta_productos_component__["a" /* VentaProductosComponent */] },
    { path: 'operacion', component: __WEBPACK_IMPORTED_MODULE_7__operacion_operacion_component__["a" /* OperacionComponent */] },
    { path: 'demandaPotencial', component: __WEBPACK_IMPORTED_MODULE_10__demanda_potencial_demanda_potencial_component__["a" /* DemandaPotencialComponent */] },
    { path: 'financiamiento', component: __WEBPACK_IMPORTED_MODULE_9__financiamiento_financiamiento_component__["a" /* FinanciamientoComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__balance_home_balance_home_component__["a" /* BalanceHomeComponent */] },
    { path: 'balance_inicial', component: __WEBPACK_IMPORTED_MODULE_4__balance_inicial_balance_inicial_component__["a" /* BalanceInicialComponent */] },
    { path: 'balance_final', component: __WEBPACK_IMPORTED_MODULE_5__balance_final_balance_final_component__["a" /* BalanceFinalComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
//# sourceMappingURL=proyecto.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/sidenav-p/sidenav-p.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-side-menu {\r\n  overflow: auto;\r\n  font-family: verdana;\r\n  font-size: 15px;\r\n  font-weight: 200;\r\n  background-color: #408AB4 ;\r\n  position: fixed;\r\n  top: 0px;\r\n  width: 300px;\r\n  height: 100%;\r\n  color: #e1ffff;\r\n  margin-top: 110px;\r\n}\r\n.nav-side-menu .brand {\r\n  background-color: #34699A;\r\n  line-height: 50px;\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n.nav-side-menu .toggle-btn {\r\n  display: none;\r\n}\r\n.nav-side-menu ul,\r\n.nav-side-menu li {\r\n  list-style: none;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  line-height: 70px;\r\n  cursor: pointer;\r\n  /*\r\n    .collapsed{\r\n       .arrow:before{\r\n                 font-family: FontAwesome;\r\n                 content: \"\\f053\";\r\n                 display: inline-block;\r\n                 padding-left:10px;\r\n                 padding-right: 10px;\r\n                 vertical-align: middle;\r\n                 float:right;\r\n            }\r\n     }\r\n*/\r\n}\r\n.nav-side-menu ul :not(collapsed) .arrow:before,\r\n.nav-side-menu li :not(collapsed) .arrow:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\F078\";\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  vertical-align: middle;\r\n  float: right;\r\n}\r\n.nav-side-menu ul .active,\r\n.nav-side-menu li .active {\r\n  border-left: 3px solid #d19b3d;\r\n  background-color: #4f5b69;\r\n}\r\n.nav-side-menu ul .sub-menu li.active,\r\n.nav-side-menu li .sub-menu li.active {\r\n  color: #d19b3d;\r\n}\r\n.nav-side-menu ul .sub-menu li.active a,\r\n.nav-side-menu li .sub-menu li.active a {\r\n  color: #d19b3d;\r\n}\r\n\r\n.active{\r\n  background-color: gray;\r\n}\r\n\r\n.nav-side-menu ul .sub-menu li,\r\n.nav-side-menu li .sub-menu li {\r\n  background-color: #181c20;\r\n  border: none;\r\n  line-height: 28px;\r\n  border-bottom: 1px solid #23282e;\r\n  margin-left: 0px;\r\n}\r\n.nav-side-menu ul .sub-menu li:hover,\r\n.nav-side-menu li .sub-menu li:hover {\r\n  background-color:#65C6C4;\r\n}\r\n.nav-side-menu ul .sub-menu li:before,\r\n.nav-side-menu li .sub-menu li:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\F105\";\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  vertical-align: middle;\r\n}\r\n.nav-side-menu li {\r\n  padding-left: 0px;\r\n  border-left: 3px solid #2e353d;\r\n  border-bottom: 1px solid #23282e;\r\n}\r\n.nav-side-menu li a {\r\n  text-decoration: none;\r\n  color: #e1ffff;\r\n}\r\n.nav-side-menu li a i {\r\n  padding-left: 10px;\r\n  width: 20px;\r\n  padding-right: 20px;\r\n}\r\n.nav-side-menu li:hover {\r\n  border-left: 3px solid #77ABB7;\r\n  background-color: #4f5b69;\r\n  transition: all 1s ease;\r\n}\r\n@media (max-width: 767px) {\r\n  .nav-side-menu {\r\n    position: relative;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n  }\r\n  .nav-side-menu .toggle-btn {\r\n    display: block;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    z-index: 9000 !important;\r\n    padding: 3px;\r\n    background-color: #ffffff;\r\n    color: #000;\r\n    width: 40px;\r\n    text-align: center;\r\n  }\r\n  .brand {\r\n    text-align: left !important;\r\n    font-size: 22px;\r\n    padding-left: 20px;\r\n    line-height: 50px !important;\r\n  }\r\n}\r\n@media (min-width: 767px) {\r\n  .nav-side-menu .menu-list .menu-content {\r\n    display: block;\r\n  }\r\n}\r\nbody {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/sidenav-p/sidenav-p.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-side-menu\">\r\n    <div class=\"brand\">Proyecto\r\n      <button type=\"button\" class=\"btn btn-danger\" style=\"position:fixed; margin-left:4.1%;height:50px\" (click)=\"verProyectos()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></button>\r\n    </div>\r\n    <i class=\"fa fa-bars fa-2x toggle-btn\" data-toggle=\"collapse\" data-target=\"#menu-content\"></i>\r\n\r\n        <div class=\"menu-list\">\r\n            <ul id=\"menu-content\" class=\"menu-content collapse out\">\r\n\r\n                <li [routerLink]=\"['home']\">\r\n                  <a >\r\n                  <i class=\"fa fa-tachometer fa-lg\"></i> Valores iniciales\r\n                  </a>\r\n                </li>\r\n\r\n                <li [routerLink]=\"['demandaPotencial']\">\r\n                  <a >\r\n                  <i class=\"fa fa-area-chart fa-lg\"></i> Demanda potencial\r\n                  </a>\r\n                </li>\r\n\r\n                <li [routerLink]=\"['produccion']\" routerLinkActive=\"active\">\r\n                   <a>\r\n                    <i class=\"fa fa-pie-chart fa-lg\"></i>  Decisiones de Producción\r\n                   </a>\r\n                </li>\r\n\r\n                <li data-toggle=\"collapse\" data-target=\"#service\" class=\"collapsed\">\r\n                  <a href=\"#\"><i class=\"fa fa-line-chart fa-lg\"></i> Decisiones de Crecimiento<span class=\"arrow\"></span></a>\r\n                </li>\r\n                <ul class=\"sub-menu collapse\" id=\"service\">\r\n\r\n                  <li [routerLink]=\"['compraMaquinaria']\" routerLinkActive=\"active\">\r\n                     <a >\r\n                     <i class=\"fa fa-cogs fa-lg\"></i> Compra de Maquinaria\r\n                     </a>\r\n                   </li>\r\n                   <li [routerLink]=\"['desarrolloProducto']\" routerLinkActive=\"active\">\r\n                      <a >\r\n                      <i class=\"fa fa-flask fa-lg\"></i> Desarrollo de Productos\r\n                      </a>\r\n                    </li>\r\n                   <li [routerLink]=\"['desarrolloMercado']\" routerLinkActive=\"active\">\r\n                      <a >\r\n                      <i class=\"fa fa-map-marker fa-lg\"></i> Desarrollo de mercados\r\n                      </a>\r\n                    </li>\r\n                </ul>\r\n\r\n                <li [routerLink]=\"['financiamiento']\" routerLinkActive=\"active\">\r\n                   <a>\r\n                    <i class=\"fa fa-credit-card fa-lg\"></i>  Decisiones de Finaciamiento\r\n                   </a>\r\n                </li>\r\n\r\n                <li data-toggle=\"collapse\" data-target=\"#service2\" class=\"collapsed\">\r\n                  <a href=\"#\"><i class=\"fa fa-list-alt fa-lg\"></i> Resultados del periodo<span class=\"arrow\"></span></a>\r\n                </li>\r\n                <ul class=\"sub-menu collapse\" id=\"service2\">\r\n                  <li [routerLink]=\"['balance_inicial']\" >Balance Inicial</li>\r\n                  <li [routerLink]=\"['operacion']\" >Resultados Operacion</li>\r\n                  <li [routerLink]=\"['estadoResultados']\">Estado de Resultados</li>\r\n                  <li [routerLink]=\"['balance_final']\">Balance Final</li>\r\n                  <li [routerLink]=\"['prueba']\">Prueba</li>\r\n                </ul>\r\n            </ul>\r\n     </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/sidenav-p/sidenav-p.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavPComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavPComponent = (function () {
    function SidenavPComponent(router) {
        this.router = router;
    }
    SidenavPComponent.prototype.ngOnInit = function () {
    };
    SidenavPComponent.prototype.verProyectos = function () {
        localStorage.removeItem('numeroPeriodo');
        localStorage.removeItem('idProyecto');
        localStorage.removeItem('numeroRPeriodos');
        this.router.navigate(['/Usuario/proyectos']);
    };
    return SidenavPComponent;
}());
SidenavPComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidenav-p',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/sidenav-p/sidenav-p.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/sidenav-p/sidenav-p.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], SidenavPComponent);

var _a;
//# sourceMappingURL=sidenav-p.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/venta-productos/venta-productos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/venta-productos/venta-productos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"container\">\r\n    <h1 class=\"col-12 text-center\">Ventas de Periodo</h1>\r\n    <hr>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-3 offset-1\">\r\n      <div class=\"row\" *ngFor=\"let producto of productosOperacion\" style=\"margin-bottom:50px\">\r\n        <div class=\"col-12 card card-inverse card-success  text-center\" style=\"margin-bottom:20px\">\r\n          <div class=\"card-block\">\r\n              <blockquote class=\"card-blockquote\">\r\n              <br>\r\n              <h3 class=\"col-12 text center\">{{getNameByIdProducto(producto.idProducto)}}</h3>\r\n                                  <h5 class=\"col-12 text-center\">Opciones de Venta</h5>\r\n              <form [formGroup]=\"ventasForm\" (ngSubmit)=\"selectVenta(ventasForm.value,producto.idProducto)\" class=\"offset-1\"  >\r\n              <div class=\"col-12\" >\r\n                    <!-- <option *ngFor=\"let option of producto.zonas\" value={{option}}>{{getNameByIdZona(option)}}</option> -->\r\n\r\n                    <div class=\"container\" *ngFor=\"let option of producto.zonas\" style=\"margin-top:30px\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-6 text-center\">\r\n                          <h6>{{getNameByIdZona(option)}}</h6>\r\n                        </div>\r\n\r\n                        <div class=\"offset-1 col-2\">\r\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalVenta(option,producto.idProducto)\">Vender</button>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n              </div>\r\n            </form>\r\n\r\n            <h3 class=\"col-12 text-center\" style=\"margin-top:25px\">Almacenamiento</h3>\r\n            <form [formGroup]=\"almacenForm\" (ngSubmit)=\"selectAlmacen(almacenForm.value,producto.idProducto)\" class=\"offset-1\"  >\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-12 col-form-label\">Cantidad a Almacenar</label>\r\n                <div class=\"col-8 offset-2\">\r\n                  <input class=\"form-control\" currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\"\r\n                  formControlName=\"cantidadAlmacen\" value=\"0\">\r\n                </div>\r\n              </div>\r\n\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary col-6\" >Almacenar</button>\r\n\r\n          </form>\r\n\r\n            </blockquote>\r\n\r\n          </div>\r\n          </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\" offset-1 col-5\" style=\"height:auto\">\r\n      <div class=\"row\">\r\n        <h2 class=\" col-12 text-center\">Relación de Ventas </h2>\r\n        <hr>\r\n      </div>\r\n\r\n\r\n      <table class=\"table table-striped\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col-12 text-center\">Producto</th>\r\n      <th scope=\"col-12 text-center\">Zona</th>\r\n      <th scope=\"col-12 text-center\">Unidades Vendidas</th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let venta of ventas\">\r\n      <td>{{getNameByIdProducto(venta.Producto_idProducto)}}</td>\r\n      <td>{{getNameByIdZona(venta.Zona_idZonas)}}</td>\r\n      <td class=\"col-12 text-right\">{{venta.unidadesVendidas|number:'1.0-0'}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<div class=\"row\">\r\n  <h3 class=\"col-12 text-center\">Almacen</h3>\r\n  <hr>\r\n</div>\r\n\r\n<table class=\"table table-striped\">\r\n<thead>\r\n<tr>\r\n<th scope=\"col-12 text-center\">Producto</th>\r\n<th scope=\"col-12 text-center\">Unidades Almacenandas</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n<tr *ngFor=\"let alma of almacen\">\r\n<td class=\"col-12 text-center\">{{getNameByIdProducto(alma.Producto_idProducto)}}</td>\r\n<td class=\"col-12 text-right\">{{alma.unidadesAlmacenadas|number:'1.0-0'}}</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <ngl-modal header=\"Confirmación de Venta\"  [(open)]=\"openVenta\" size=\"x-small\" directional=\"false\">\r\n\r\n    <div body>\r\n      <h5 class=\"col-12 text-center\">Venta de {{getNameByIdProducto(this.ventasForm.controls['idProducto'].value)}}  en {{zonaSelected.nombreZona}} </h5>\r\n      <!-- <div class=\"col-12\" style=\"height:250px;\">\r\n        <ngx-charts-line-chart\r\n             [scheme]=\"colorScheme\"\r\n             [results]=\"zonaSelected.graf\"\r\n             xAxis=\"true\"\r\n             legendTitle=\"Productos\"\r\n             yAxis=\"true\"\r\n             legend=\"true\"\r\n             showXAxisLabel=\"true\"\r\n             showYAxisLabel=\"true\"\r\n             xAxisLabel=\"Periodos\"\r\n             yAxisLabel=\"Demanda Potencial\"\r\n             autoScale=\"true\"\r\n            >\r\n           </ngx-charts-line-chart>\r\n      </div> -->\r\n\r\n      <h5 style=\"margin-top:15px\">Capacidad de Producción en Unidades: <b>{{produccionSelected|number:'1.0-0'}}</b></h5>\r\n      <h5 >Demanda de Periodo:<b>{{demandaSelected|number:'1.0-0'}}</b> </h5>\r\n          <form [formGroup]=\"ventasForm\" (ngSubmit)=\"selectVenta(ventasForm.value,producto.idProducto)\" class=\"offset-1\"  >\r\n          <div class=\"form-group row\">\r\n\r\n\r\n\r\n            <label class=\"col-12 col-form-label text-center\">Cantidad a Vender</label>\r\n            <div class=\"offset-3 col-6\">\r\n\r\n              <input  currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" formControlName=\"cantidadVenta\">\r\n            </div>\r\n          </div>\r\n          <ng-template ngl-modal-footer>\r\n              <button type=\"submit\" class=\"btn btn-danger col-5 offset-1\" (click)=\"openVenta=false\" >Cancelar</button>\r\n            <button type=\"submit\" class=\"btn btn-primary col-5\" (click)=\"selectVenta(ventasForm.value)\" >Vender</button>\r\n\r\n\r\n        </ng-template>\r\n\r\n          </form>\r\n    </div>\r\n\r\n\r\n    </ngl-modal>\r\n\r\n\r\n\r\n  <ngl-modal header=\"Confirmación\"  [(open)]=\"openConfAlmacen\" size=\"x-small\" directional=\"false\">\r\n\r\n    <div body>\r\n      <div class=\"col-12 text-center container\">\r\n        <h5 style=\"margin-bottom:30px\">¿Estas seguro que deseas almacenar {{selectedAlmacen.almacen|number:'1.0-0'}} unidades del producto \"{{getNameByIdProducto(selectedAlmacen.idProducto)}}\"?</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-4 offset-4\">\r\n            <img  src=\"assets/img/machine.png\" class=\"img-fluid\">\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template ngl-modal-footer>\r\n      <button class=\"btn btn-danger\" (click)=\"openConfAlmacen=false\">Cancelar</button>\r\n      <button class=\"btn btn-primary\" (click)=\"cobrarAlmacen()\">Almacenar</button>\r\n\r\n  </ng-template>\r\n    </ngl-modal>\r\n\r\n\r\n  <ngl-modal  [(open)]=\"openLoad\" size=\"small\" directional=\"false\">\r\n    <div body>\r\n      <h1 class=\"col-12 text-center\" *ngIf=\"produciendo\">Produciendo...</h1>\r\n      <h1 class=\"col-12 text-center\" *ngIf=\"vendiendo\">Vendiendo...</h1>\r\n\r\n      <h6 class=\"col-12 text-center\">Realizando Operación</h6>\r\n      <div style=\"position:relative; height:6.25rem; z-index:0;\">\r\n        <ngl-spinner size=\"large\" type=\"brand\"></ngl-spinner>\r\n      </div>\r\n\r\n    </div>\r\n    </ngl-modal>\r\n\r\n\r\n\r\n    <ngl-modal header=\"Confirmación\"  [(open)]=\"openConf\" size=\"x-small\" directional=\"false\">\r\n\r\n      <div body>\r\n        <div class=\"container\">\r\n          <h5 class=\"col-12 text-center\" style=\"margin-bottom:30px\">¿Estas seguro que deseas vender {{selectedVenta.venta.cantidadVenta|number:'1.0-0'}} unidades del producto \"{{getNameByIdProducto(selectedVenta.idProducto)}}\", en la zona \"{{getNameByIdZona(selectedVenta.venta.idZona)}}\" ?</h5>\r\n            <div class=\"col-2 offset-5\">\r\n              <img  src=\"assets/img/box.png\" class=\"img-fluid\">\r\n            </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <ng-template ngl-modal-footer>\r\n        <button class=\"btn btn-danger\" (click)=\"openConf=false\">Cancelar</button>\r\n        <button class=\"btn btn-primary\" (click)=\"cobrarVenta()\">Vender</button>\r\n\r\n    </ng-template>\r\n      </ngl-modal>\r\n\r\n\r\n\r\n\r\n      <ngl-modal header=\"Confirmación\"  [(open)]=\"modalAlerta\" size=\"x-small\" directional=\"false\">\r\n\r\n        <div body>\r\n          <h3 class=\"col-12 text-center\">{{mensaje}}</h3>\r\n        </div>\r\n\r\n        <ng-template ngl-modal-footer>\r\n        <button class=\"btn btn-primary col-4 offset-4\" (click)=\"paso()\">Aceptar</button>\r\n\r\n      </ng-template>\r\n        </ngl-modal>\r\n\r\n        <ngl-modal header=\"Confirmación\"  [(open)]=\"modalAlerta2\" size=\"x-small\" directional=\"false\">\r\n\r\n          <div body>\r\n            <h3 class=\"col-12 text-center\">{{mensaje}}</h3>\r\n          </div>\r\n\r\n          <ng-template ngl-modal-footer>\r\n          <button class=\"btn btn-primary col-4 offset-4\" (click)=\"modalAlerta2=false\">Aceptar</button>\r\n\r\n        </ng-template>\r\n          </ngl-modal>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyecto-usuario/venta-productos/venta-productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_operacion_service__ = __webpack_require__("../../../../../src/app/services/operacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_zonas_service__ = __webpack_require__("../../../../../src/app/services/zonas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_graficas_service__ = __webpack_require__("../../../../../src/app/services/graficas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_dashboard_service__ = __webpack_require__("../../../../../src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VentaProductosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VentaProductosComponent = (function () {
    function VentaProductosComponent(_operacionService, _zonasService, router, _productoService, _graficasService, _dash) {
        var _this = this;
        this._operacionService = _operacionService;
        this._zonasService = _zonasService;
        this.router = router;
        this._productoService = _productoService;
        this._graficasService = _graficasService;
        this._dash = _dash;
        this.productosOperacion = [];
        this.productos = [];
        this.zonas = [];
        this.almacen = [];
        this.ventaO = {
            idZona: null,
            cantiadVenta: null
        };
        this.selectedVenta = {
            venta: this.ventaO,
            idProducto: null
        };
        this.selectedAlmacen = {
            almacen: null,
            idProducto: null
        };
        this.openConfAlmacen = false;
        this.modalAlerta = false;
        this.modalAlerta2 = false;
        this.vendeForm = [];
        this.openVenta = false;
        this.vendiendo = false;
        this.produciendo = false;
        this.openConf = false;
        this.openLoad = false;
        this.prueba = [];
        this.formsVentas = [];
        this.graficas = [];
        this.zonaSelected = { graf: null, nombreZona: null };
        this.zonas = this._graficasService.returnZonas();
        this.productos = this._productoService.returnProductos();
        this.productosOperacion = this._operacionService.returnProductosOperacion();
        this.ventas = this._operacionService.returnAllOperaciones();
        console.log(this.zonas);
        this.maquinarias = this._dash.returnMaquinarias();
        this.demandas = this._dash.returnDemandas();
        this.almacen = this._operacionService.returnAlmacen();
        console.log(this.almacen);
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        setTimeout(function () {
            _this.graficas = _this.setGrafica(_this.zonas);
            console.log(_this.graficas);
        }, 800);
        this.ventasForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            'idProducto': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            'idZona': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            'cantidadVenta': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
        });
        this.almacenForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            'cantidadAlmacen': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
        });
    }
    VentaProductosComponent.prototype.ngOnInit = function () {
        console.log(this.ventas);
    };
    VentaProductosComponent.prototype.progressVenta = function () {
        var _this = this;
        this.vendiendo = false;
        this.openLoad = true;
        this.produciendo = true;
        setTimeout(function () { _this.produciendo = false; _this.vendiendo = true; }, 1000);
        setTimeout(function () { return _this.openLoad = false; }, 1000);
    };
    VentaProductosComponent.prototype.openModalVenta = function (idZona, idProducto) {
        this.selectProduccion(idProducto);
        this.selectDemanda(idZona, idProducto);
        console.log(this.demandaSelected);
        console.log(this.produccionSelected);
        for (var _i = 0, _a = this.graficas; _i < _a.length; _i++) {
            var zona = _a[_i];
            if (this.getNameByIdZona(idZona) == zona.nombreZona) {
                this.zonaSelected = zona;
            }
        }
        console.log(this.zonaSelected);
        this.ventasForm.controls['idProducto'].setValue(idProducto);
        this.ventasForm.controls['idZona'].setValue(idZona);
        this.openVenta = true;
    };
    VentaProductosComponent.prototype.progressAlmacen = function () {
        var _this = this;
        this.produciendo = true;
        this.vendiendo = false;
        this.openLoad = true;
        setTimeout(function () { return _this.openLoad = false; }, 1000);
        setTimeout(function () { _this.produciendo = false; }, 1000);
    };
    VentaProductosComponent.prototype.cobrarVenta = function () {
        var _this = this;
        this.openConf = false;
        this.openVenta = false;
        var p = this.selectedVenta.idProducto;
        var idZ = this.selectedVenta.venta.idZona;
        var cv = this.selectedVenta.venta.cantidadVenta;
        var x = {
            "Producto_idProducto": p,
            "Zona_idZonas": idZ,
            "Proyecto_idProyecto": parseInt(localStorage.getItem('idProyecto')),
            "Usuario_idUsuario": parseInt(localStorage.getItem('idUsuario')),
            "numeroPeriodo": parseInt(localStorage.getItem('numeroPeriodo')),
            "unidadesVendidas": cv
        };
        this._operacionService.validarOperacion(x).subscribe(function (data) {
            if (data.success) {
                _this.progressVenta();
                _this.ventas = _this._operacionService.registerOperacion(x);
            }
            else {
                if (data.m) {
                    _this.mensaje = data.msg;
                    _this.modalAlerta = true;
                }
                else {
                    _this.mensaje = data.msg;
                    _this.modalAlerta2 = true;
                }
            }
        });
    };
    VentaProductosComponent.prototype.paso = function () {
        this.modalAlerta = false;
        this.router.navigate(['Usuario/proyecto/compraMaquinaria']);
    };
    VentaProductosComponent.prototype.selectVenta = function (venta) {
        this.openConf = true;
        this.selectedVenta = {
            venta: {
                idZona: venta.idZona,
                cantidadVenta: venta.cantidadVenta
            },
            idProducto: venta.idProducto
        };
        console.log(this.selectedVenta);
    };
    VentaProductosComponent.prototype.selectAlmacen = function (almacen, idProducto) {
        this.openConfAlmacen = true;
        this.selectedAlmacen.idProducto = idProducto;
        this.selectedAlmacen.almacen = almacen.cantidadAlmacen;
    };
    VentaProductosComponent.prototype.getNameByIdProducto = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == id)
                return producto.nombreProd;
        }
        return "id no encontrado";
    };
    VentaProductosComponent.prototype.cobrarAlmacen = function () {
        var _this = this;
        var x = {
            Producto_idProducto: this.selectedAlmacen.idProducto,
            unidadesAlmacenadas: this.selectedAlmacen.almacen,
            Balance_numeroPeriodo: localStorage.getItem('numeroPeriodo'),
            Proyecto_idProyecto: localStorage.getItem('idProyecto')
        };
        this._operacionService.validarAlmacen(x).subscribe(function (data) {
            if (data.success) {
                _this.openConfAlmacen = false;
                _this.progressAlmacen();
                _this.almacen = _this._operacionService.registerAlmacen(x);
            }
            else {
                _this.mensaje = data.msg;
                _this.openVenta = true;
                _this.modalAlerta = true;
            }
        });
        setTimeout(function () { _this.almacen = _this._operacionService.returnAlmacen(); }, 1000);
    };
    VentaProductosComponent.prototype.getNameByIdZona = function (id) {
        for (var _i = 0, _a = this.zonas; _i < _a.length; _i++) {
            var zona = _a[_i];
            if (zona.idZona == id)
                return zona.nombreZona;
        }
        return "id no encontrado";
    };
    VentaProductosComponent.prototype.selectProduccion = function (idProducto) {
        console.log(idProducto);
        console.log(this.maquinarias);
        var cantProdTem = 0;
        for (var _i = 0, _a = this.maquinarias; _i < _a.length; _i++) {
            var produccion = _a[_i];
            if (produccion.idProducto == idProducto) {
                for (var _b = 0, _c = produccion.maquinas; _b < _c.length; _b++) {
                    var maquina = _c[_b];
                    cantProdTem = maquina.cantidadProd + cantProdTem;
                    console.log("Maq", maquina);
                }
            }
        }
        this.produccionSelected = cantProdTem;
        console.log(this.produccionSelected);
    };
    VentaProductosComponent.prototype.selectDemanda = function (idZona, idProducto) {
        for (var _i = 0, _a = this.demandas; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == idProducto) {
                for (var _b = 0, _c = producto.zonas; _b < _c.length; _b++) {
                    var zona = _c[_b];
                    if (zona.idZona == idZona) {
                        this.demandaSelected = zona.demanda;
                    }
                }
            }
        }
    };
    VentaProductosComponent.prototype.getProducto = function (id) {
        var prod = null;
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == id) {
                prod = producto;
                break;
            }
        }
        return prod;
    };
    VentaProductosComponent.prototype.setGrafica = function (zonas) {
        var zonasTemp = [];
        for (var _i = 0, zonas_1 = zonas; _i < zonas_1.length; _i++) {
            var zona = zonas_1[_i];
            var zonaTemp = {
                nombreZona: zona.nombreZona,
                graf: this.getProductos(zona.productos)
            };
            zonasTemp.push(zonaTemp);
        }
        return zonasTemp;
    };
    VentaProductosComponent.prototype.getProductos = function (productos) {
        var productosTemp = [];
        for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
            var producto = productos_1[_i];
            var productoTemp = {
                name: this.getNameByIdProducto(producto.idProducto),
                series: this.getSeries(producto.periodos)
            };
            productosTemp.push(productoTemp);
        }
        return productosTemp;
    };
    VentaProductosComponent.prototype.getSeries = function (periodos) {
        var series = [];
        for (var _i = 0, periodos_1 = periodos; _i < periodos_1.length; _i++) {
            var periodo = periodos_1[_i];
            var serieTemp = {
                name: periodo.numPeriodo,
                value: periodo.cantidad
            };
            series.push(serieTemp);
        }
        return series;
    };
    return VentaProductosComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalProgressVenta'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], VentaProductosComponent.prototype, "modalProgressVenta", void 0);
VentaProductosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-venta-productos',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/venta-productos/venta-productos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/venta-productos/venta-productos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_operacion_service__["a" /* OperacionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_operacion_service__["a" /* OperacionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_zonas_service__["a" /* ZonasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_zonas_service__["a" /* ZonasService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_producto_service__["a" /* ProductoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_graficas_service__["a" /* GraficasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_graficas_service__["a" /* GraficasService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_dashboard_service__["a" /* DashboardService */]) === "function" && _g || Object])
], VentaProductosComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=venta-productos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyectos/proyectos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyectos/proyectos.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div style=\"margin-top:90px\" class=\"container\">\r\n  <div class=\"section\" style=\"margin-bottom:50px;\">\r\n    <h1 class=\"text-center\">Proyectos</h1>\r\n    <hr>\r\n    <div class=\"text-center\" *ngFor=\"let alert of alerts\" style=\"z-index:10000;width:100%; \">\r\n      <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\"><h3>{{ alert.msg }}</h3></alert>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6\" *ngFor=\"let proyecto of proyectos\">\r\n        <div class=\"card card-inverse card-primary mb-3 text-center col-10 offser-1\">\r\n          <div class=\"card-block\">\r\n            <img src=\"assets/img/presentation.png\" class=\"col-6\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <br>\r\n              <h1>{{proyecto.nombreProyecto}}</h1>\r\n              <h6>Fecha de Creación: {{proyecto.fechaCreacion}}</h6>\r\n\r\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"entrarProyecto(proyecto.idProyecto)\">Entrar a Proyecto</button>\r\n              <div class=\"row\" style=\"margin-top:20px\">\r\n                <button type=\"button\" class=\"btn btn-secondary offset-1 col-4\" (click)=\"openEdit(proyecto)\">Edita</button>\r\n                <button type=\"button\" class=\"btn btn-danger offset-2 col-4\" (click)=\"confDelete(proyecto)\">Elimina</button>\r\n              </div>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div bsModal #modalEdit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\" \">Edita Proyecto</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <form [formGroup]=\"editForm\" (ngSubmit)=\"modificaProyecto(editForm.value)\" class=\"offset-1\"  >\r\n\r\n              <div class=\"form-group\" hidden>\r\n                <label class=\"col-2 col-form-label\">id:</label>\r\n                <div class=\"col-2\">\r\n\r\n                  <input class=\"form-control\"\r\n                  type=\"text\"\r\n                  placeholder=\"id\"\r\n                  formControlName=\"idProyecto\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-5 col-form-label\">Nombre</label>\r\n                <div class=\"col-6\">\r\n\r\n                  <input class=\"form-control\"\r\n                  type=\"text\"\r\n                  formControlName=\"nombreProyecto\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-5 col-form-label\">Fecha de Creación</label>\r\n                <div class=\"col-6\">\r\n\r\n                  <input class=\"form-control\"\r\n                  type=\"text\"\r\n                  formControlName=\"fechaCreacion\"\r\n                  disabled>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\" hidden>\r\n                <label class=\"col-5 col-form-label\">Fecha de Creación</label>\r\n                <div class=\"col-6\">\r\n\r\n                  <input class=\"form-control\"\r\n                  type=\"text\"\r\n                  formControlName=\"Usuario_idUsuario\"\r\n                  disabled>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-outline-success\">\r\n                  Guardar\r\n                </button>\r\n\r\n                <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalEdit.hide()\" >\r\n                  Cancelar\r\n                </button>\r\n\r\n              </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"button\" (click)=\"openNew()\" class=\"btn btn-warning btn-floating\">Agregar</button>\r\n\r\n  <div bsModal #modalNew=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\" \">Edita Proyecto</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <form [formGroup]=\"newForm\" (ngSubmit)=\"agregaProyecto(newForm.value)\" class=\"offset-1\"  >\r\n\r\n              <div class=\"form-group\" hidden>\r\n                <label class=\"col-2 col-form-label\">id:</label>\r\n                <div class=\"col-2\">\r\n\r\n                  <input class=\"form-control\"\r\n                  type=\"text\"\r\n                  placeholder=\"id\"\r\n                  formControlName=\"idProyecto\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-5 col-form-label\">Nombre</label>\r\n                <div class=\"col-6\">\r\n\r\n                  <input class=\"form-control\"\r\n                  type=\"text\"\r\n                  formControlName=\"nombreProyecto\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-5 col-form-label\">Fecha de Creación</label>\r\n                <div class=\"col-6\">\r\n\r\n                  <input class=\"form-control\"\r\n                  type=\"text\"\r\n                  formControlName=\"fechaCreacion\"\r\n                  disabled>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\" hidden>\r\n                <label class=\"col-5 col-form-label\">Fecha de Creación</label>\r\n                <div class=\"col-6\">\r\n\r\n                  <input class=\"form-control\"\r\n                  type=\"text\"\r\n                  formControlName=\"Usuario_idUsuario\"\r\n                  disabled>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-outline-success\">\r\n                  Guardar\r\n                </button>\r\n\r\n                <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalNew.hide()\" >\r\n                  Cancelar\r\n                </button>\r\n\r\n              </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<div bsModal #modalConf=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"\">Confirmación</h4>\r\n      </div>\r\n      <div class=\"modal-body center-block text-center\">\r\n\r\n\r\n        <div class=\"row text-center offset-1\">\r\n          Datos listos\r\n          <br>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <button type=\"button\" class=\"btn btn-danger offset-4 col-4\" (click)=\"entrarP()\" >Aceptar</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div bsModal #modalConfDelete=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\" \">Confirmación</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n\r\n        <div class=\"row text-center\">\r\n          ¿Estas seguro que deseas eliminar el proyecto ?\r\n          <br>\r\n          <br>\r\n          Todo el progreso se perderá\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <button type=\"button\" class=\"btn btn-danger offset-2 col-3\" (click)=eliminaProyecto(proyectoDelete.idProyecto)>Si</button>\r\n          <button type=\"button\" class=\"btn btn-primary offset-2 col-3\" (click)=\"confModalDelete.hide()\">No</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/proyectos/proyectos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_proyectos_service__ = __webpack_require__("../../../../../src/app/services/proyectos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProyectosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProyectosComponent = (function () {
    function ProyectosComponent(_proyectosService, datePipe) {
        this._proyectosService = _proyectosService;
        this.datePipe = datePipe;
        this.alerts = [];
        this.proyectoDelete = {
            idProyecto: 1,
            Usuario_idUsuario: 0,
            nombreProyecto: "",
            fechaCreacion: 0
        };
        this.editForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            'idProyecto': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            'nombreProyecto': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            'fechaCreacion': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            'Usuario_idUsuario': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](localStorage.getItem('idUsuario'))
        });
        this.newForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            'idProyecto': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            'nombreProyecto': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            'fechaCreacion': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.datePipe.transform(Date.now())),
            'Usuario_idUsuario': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](localStorage.getItem('idUsuario'))
        });
    }
    ProyectosComponent.prototype.entrarProyecto = function (idProyecto) {
        this._proyectosService.asignarBalance(idProyecto);
        localStorage.setItem('idProyecto', idProyecto);
        this.confModal.show();
    };
    ProyectosComponent.prototype.entrarP = function () {
        this.confModal.hide();
        this._proyectosService.entrar();
    };
    ProyectosComponent.prototype.ngOnInit = function () {
        this.proyectos = this._proyectosService.returnUsuarios();
    };
    ProyectosComponent.prototype.eliminaProyecto = function (id) {
        this.confModalDelete.hide();
        this._proyectosService.eliminaProyecto(id).subscribe();
        this.alerts.push({
            type: 'danger',
            msg: "Proyecto Eliminado",
            timeout: 2000
        });
    };
    ProyectosComponent.prototype.agregaProyecto = function (proyecto) {
        this._proyectosService.agregaProyecto(proyecto);
        this.modalNew.hide();
        this.alerts.push({
            type: 'success',
            msg: "Nuevo Proyecto: " + (proyecto.nombreProyecto) + " Agregado",
            timeout: 2000
        });
    };
    ProyectosComponent.prototype.modificaProyecto = function (proyecto) {
        this.modalEdit.hide();
        console.log(this.alerts);
        this._proyectosService.setProyecto(proyecto).subscribe();
        this.alerts.push({
            type: 'success',
            msg: "Proyecto: " + (proyecto.nombreProyecto) + " Modificado",
            timeout: 2000
        });
    };
    ProyectosComponent.prototype.confDelete = function (proyecto) {
        this.proyectoDelete = proyecto;
        this.confModalDelete.show();
    };
    ProyectosComponent.prototype.openEdit = function (proyecto) {
        this.editForm.setValue(proyecto);
        console.log("hola", proyecto);
        this.modalEdit.show();
    };
    ProyectosComponent.prototype.openNew = function () {
        this.newForm.controls['nombreProyecto'].reset();
        this.modalNew.show();
    };
    return ProyectosComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConfDelete'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], ProyectosComponent.prototype, "confModalDelete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConf'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _b || Object)
], ProyectosComponent.prototype, "confModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalEdit'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _c || Object)
], ProyectosComponent.prototype, "modalEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalNew'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _d || Object)
], ProyectosComponent.prototype, "modalNew", void 0);
ProyectosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-proyectos',
        template: __webpack_require__("../../../../../src/app/components/usuario/proyectos/proyectos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuario/proyectos/proyectos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_proyectos_service__["a" /* ProyectosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_proyectos_service__["a" /* ProyectosService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"]) === "function" && _f || Object])
], ProyectosComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=proyectos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/usuario.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar-usuario></app-navbar-usuario>\r\n<div>\r\n<router-outlet style=\"margin-left:90px;\"></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuario/usuario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuarioComponent = (function () {
    function UsuarioComponent() {
    }
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    return UsuarioComponent;
}());
UsuarioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-usuario',
        template: __webpack_require__("../../../../../src/app/components/usuario/usuario.component.html")
    }),
    __metadata("design:paramtypes", [])
], UsuarioComponent);

//# sourceMappingURL=usuario.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuario/usuario.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__proyectos_proyectos_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyectos/proyectos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proyecto_usuario_proyecto_usuario_component__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/proyecto-usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proyecto_usuario_proyecto_routes__ = __webpack_require__("../../../../../src/app/components/usuario/proyecto-usuario/proyecto.routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USUARIO_ROUTES; });



var USUARIO_ROUTES = [
    { path: 'proyectos', component: __WEBPACK_IMPORTED_MODULE_0__proyectos_proyectos_component__["a" /* ProyectosComponent */] },
    { path: 'proyecto', component: __WEBPACK_IMPORTED_MODULE_1__proyecto_usuario_proyecto_usuario_component__["a" /* ProyectoUsuarioComponent */],
        children: __WEBPACK_IMPORTED_MODULE_2__proyecto_usuario_proyecto_routes__["a" /* PROYECTO_ROUTES */]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'proyectos' }
];
//# sourceMappingURL=usuario.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/usuarios/usuarios.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contain{\r\n  overflow:scroll;\r\n  height:1000px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/usuarios/usuarios.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h2 class=\"text-center col-2 offset-5\">Usuarios</h2>\r\n    <button type=\"button\" (click)=\"openNew()\" class=\"btn btn-warning offset-4 col-1\">Agregar</button>\r\n\r\n  </div>\r\n\r\n  <hr>\r\n  <div class=\"text-center\" *ngFor=\"let alert of alerts\" style=\"z-index:10000;width:100%; \">\r\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\"><h3>{{ alert.msg }}</h3></alert>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!--++++++++++++++++++++++++++++++   Tarjeta de Usuario    +++++++++++++++++++++++++++++++++++-->\r\n<div class=\"container contain\">\r\n\r\n\r\n<div class=\"card-columns\" >\r\n  <div class=\"card\" *ngFor=\"let usuario of usuarios\">\r\n\r\n\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <img  src=\"assets/img/user.png\" style=\"height:100px\">\r\n\r\n        <div class=\"col-8\">\r\n          <h4 class=\"card-title\">{{usuario.nombreUsuario}} {{usuario.apPat}}</h4>\r\n          <p class=\"card-text\">\r\n            Usuario: {{usuario.user}}\r\n            <br>\r\n            Contraseña: {{usuario.contra}}\r\n            <br>\r\n            Agregado Por: {{getAdministrador(usuario.Administrador_idAdministrador)}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n      <div class=\"card-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger col-4\" (click)=\"confDelete(usuario)\" >Eliminar</button>\r\n          <button type=\"button\"  class=\"btn btn-primary col-3\" (click)=\"openEdit(usuario)\">Editar</button>\r\n        <button type=\"button\" class=\"btn btn-success col-4\" (click)=\"openVars(usuario)\" >Variables</button>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!--- +++++++++++++++++++++++++++ Formulario para agregar +++++++++++++++++++++++++++++++++++++++++ -->\r\n<!-- <ng-template #newModal let-c=\"close\" let-d=\"dismiss\"  >\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Agregar Usuario</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n\r\n        </div>\r\n  </ng-template> -->\r\n\r\n  <div bsModal  ngDraggable #modalNew=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"col-12 text-center\">Agrega Usuario</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <form [formGroup]=\"newForm\" (ngSubmit)=\"guarda(newForm.value)\" class=\"offset-1\"  >\r\n\r\n\r\n\r\n              <!-- <div class=\"form-group row\">\r\n                <label class=\"col-6 col-form-label text-center\">Nombre</label>\r\n                <div class=\"col-5\">\r\n\r\n                  <input class=\"form-control\"\r\n                         type=\"text\"\r\n                         formControlName=\"nombreUsuario\">\r\n                </div>\r\n              </div> -->\r\n\r\n              <div class=\"form-group row text-center\" >\r\n                <label class=\"col-5 col-form-label\">Nombre</label>\r\n                <div class=\"col-6 has-success\"\r\n                [ngClass]=\"{'has-danger': !newForm.get('nombreUsuario').valid}\">\r\n\r\n\r\n                  <input class=\"form-control\"\r\n                         type=\"text\"\r\n                         formControlName=\"nombreUsuario\" >\r\n                         <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                         *ngIf=\"!newForm.controls['nombreUsuario'].valid\">\r\n                           El nombre es requerido\r\n                         </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <div class=\"form-group row\">\r\n                <label class=\"col-6 col-form-label text-center\">Apellido Paterno</label>\r\n                <div class=\"col-5\">\r\n\r\n                  <input class=\"form-control\"\r\n                         type=\"text\"\r\n                         formControlName=\"apPat\">\r\n                </div>\r\n              </div> -->\r\n\r\n              <div class=\"form-group row text-center\" >\r\n                <label class=\"col-5 col-form-label\">Apellido Paterno</label>\r\n                <div class=\"col-6 has-success\"\r\n                [ngClass]=\"{'has-danger': !newForm.get('apPat').valid}\">\r\n\r\n\r\n                  <input class=\"form-control\"\r\n                         type=\"text\"\r\n                         formControlName=\"apPat\" >\r\n                         <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                         *ngIf=\"!newForm.controls['apPat'].valid\">\r\n                           El nombre es requerido\r\n                         </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n            <!-- <div class=\"form-group row\">\r\n              <label class=\"col-6 col-form-label text-center\">Apellido Materno</label>\r\n              <div class=\"col-5\">\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"apMat\">\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Apellido Materno</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !newForm.get('apMat').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"apMat\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!newForm.controls['apMat'].valid\">\r\n                         El nombre es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group row\">\r\n              <label class=\"col-6 col-form-label text-center\">Nombre de usuario</label>\r\n              <div class=\"col-md-5\">\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"user\">\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Nombre de usuario</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !newForm.get('user').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"user\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!newForm.controls['user'].valid\">\r\n                         El nombre es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group row\">\r\n              <label class=\"col-6 col-form-label text-center\">Contraseña</label>\r\n              <div class=\"col-5\">\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"contra\">\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Contraseña</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !newForm.get('contra').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"contra\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!newForm.controls['contra'].valid\">\r\n                         El nombre es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Proyectos</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !newForm.get('proyectos').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"number\"\r\n                       formControlName=\"proyectos\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!newForm.controls['proyectos'].valid\">\r\n                         El numero de proyectos es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Periodos por proyecto</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !newForm.get('periodos').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"number\"\r\n                       formControlName=\"periodos\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!newForm.controls['periodos'].valid\">\r\n                         El numero de periodos es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Modificacion de periodos anteriores</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !newForm.get('regresion').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"number\"\r\n                       formControlName=\"regresion\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!newForm.controls['regresion'].valid\">\r\n                         El valor es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"Administrador_idAdministrador\"\r\n                       hidden>\r\n\r\n\r\n\r\n                <div class=\"modal-footer\">\r\n                  <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalNew.hide()\">\r\n                  Cancelar\r\n                  </button>\r\n                  <button type=\"submit\" class=\"btn btn-outline-success\"  [disabled]=\"!newForm.valid\">\r\n                    Guardar\r\n                  </button>\r\n\r\n\r\n\r\n                </div>\r\n          </form>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n<!--- Boton de Acción de Formulario de Edición--->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div bsModal #modalEdit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center\">Edita Usuario</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"editaUsuario(editForm.value)\"  >\r\n\r\n\r\n            <div class=\"form-group row\" hidden>\r\n              <label class=\"col-6 col-form-label\">id</label>\r\n              <div class=\"col-8\">\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       placeholder=\"Nombre de Usuario\"\r\n                       formControlName=\"idUsuario\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Nombre</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('nombreUsuario').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"nombreUsuario\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!editForm.controls['nombreUsuario'].valid\">\r\n                         El nombre es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group row\">\r\n              <label class=\"col-6 col-form-label text-center\">Apellido Paterno</label>\r\n              <div class=\"col-5\">\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"apPat\">\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"form-group row text-center\" >\r\n              <label class=\"col-5 col-form-label\">Apellido Paterno</label>\r\n              <div class=\"col-6 has-success\"\r\n              [ngClass]=\"{'has-danger': !editForm.get('apPat').valid}\">\r\n\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"apPat\" >\r\n                       <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                       *ngIf=\"!editForm.controls['apPat'].valid\">\r\n                         El nombre es requerido\r\n                       </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n          <!-- <div class=\"form-group row\">\r\n            <label class=\"col-6 col-form-label text-center\">Apellido Materno</label>\r\n            <div class=\"col-5\">\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"apMat\">\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Apellido Materno</label>\r\n            <div class=\"col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('apMat').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"apMat\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!editForm.controls['apMat'].valid\">\r\n                       El nombre es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <div class=\"form-group row\">\r\n            <label class=\"col-6 col-form-label text-center\">Nombre de usuario</label>\r\n            <div class=\"col-md-5\">\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"user\">\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Nombre de usuario</label>\r\n            <div class=\"col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('user').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"user\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!editForm.controls['user'].valid\">\r\n                       El nombre es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <div class=\"form-group row\">\r\n            <label class=\"col-6 col-form-label text-center\">Contraseña</label>\r\n            <div class=\"col-5\">\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"contra\">\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Contraseña</label>\r\n            <div class=\"col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('contra').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"contra\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!editForm.controls['contra'].valid\">\r\n                       El nombre es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Proyectos</label>\r\n            <div class=\"col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('proyectos').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"number\"\r\n                     formControlName=\"proyectos\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!editForm.controls['proyectos'].valid\">\r\n                       El numero de proyectos es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Periodos por proyecto</label>\r\n            <div class=\"col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('periodos').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"number\"\r\n                     formControlName=\"periodos\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!editForm.controls['periodos'].valid\">\r\n                       El numero de periodos es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row text-center\" >\r\n            <label class=\"col-5 col-form-label\">Modificacion de periodos anteriores</label>\r\n            <div class=\"col-6 has-success\"\r\n            [ngClass]=\"{'has-danger': !editForm.get('regresion').valid}\">\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"number\"\r\n                     formControlName=\"regresion\" >\r\n                     <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                     *ngIf=\"!editForm.controls['regresion'].valid\">\r\n                       El valor es requerido\r\n                     </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n              <input class=\"form-control\"\r\n                     type=\"text\"\r\n                     formControlName=\"Administrador_idAdministrador\"\r\n                     hidden>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"modal-footer\">\r\n                <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalEdit.hide()\">\r\n                Cancelar\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-outline-success\" [disabled]=\"!editForm.valid\" >\r\n                  Guardar\r\n                </button>\r\n\r\n\r\n\r\n              </div>\r\n        </form>\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div bsModal #modalConfDelete=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center \">Confirmación</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n\r\n        <div class=\"row text-center\">\r\n          ¿Estas seguro que deseas eliminar al usuario \"{{usuarioDelete.nombreUsuario}}\" ?\r\n          <br>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <button type=\"button\" class=\"btn btn-danger offset-2 col-3\" (click)=\"eliminaUsuario(usuarioDelete.idUsuario)\" >Si</button>\r\n          <button type=\"button\" class=\"btn btn-primary offset-2 col-3\" (click)=\"modalConfDelete.hide()\">No</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--                  Modal Copia                 -->\r\n\r\n\r\n\r\n<!-- ////////////////////////////////////7777 Modal para cambiar variables de usuario //////////////////////////////////////-->\r\n\r\n<div bsModal #modalVars=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2 class=\"col-12 text-center\">Variables de Proyectos de {{userSelected.nombreUsuario}} {{userSelected.apPat}}</h2>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"list-group\">\r\n          <button type=\"button\" class=\"list-group-item list-group-item-action\" (click)=\"openVariables()\">Valores de Balance Iniciales</button>\r\n          <button type=\"button\" class=\"list-group-item list-group-item-action\" (click)=\"openMaqInit()\">Maquinaria Existente</button>\r\n          <button type=\"button\" class=\"list-group-item list-group-item-action\" (click)=\"openModalProdInit()\">Productos Existentes</button>\r\n          <button type=\"button\" class=\"list-group-item list-group-item-action\" (click)=\"openModalZonaInit()\">Zonas Existentes</button>\r\n          <button type=\"button\" class=\"list-group-item list-group-item-action\" (click)=\"openModalCreditosInit()\">Financiamientos</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button  type=\"button\" class=\"btn btn-danger\" (click)=\"modalVars.hide()\">\r\n        Salir\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- Modal de variables inciiales -->\r\n\r\n<div bsModal #modalVariables=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2 class=\"col-12 text-center\">Variables Iniciales de Balance</h2>\r\n        <h4 class=\"col-12 text-center\" style=\"margin-top:10px\">{{userSelected.nombreUsuario}} {{userSelected.apPat}}</h4>\r\n      </div>\r\n\r\n\r\n      <div class=\"modal-body\">\r\n\r\n        <form [formGroup]=\"variablesForm\" class=\"offset-1\" (ngSubmit)=\"balanceCero(variablesForm.value)\" >\r\n\r\n            <div class=\"form-group row\" hidden>\r\n              <label class=\"col-6 col-form-label text-center\">id</label>\r\n              <div class=\"col-5\">\r\n\r\n                <input class=\"form-control\"\r\n                       type=\"text\"\r\n                       formControlName=\"idUsuario\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- <div class=\"form-group row text-center\">\r\n              <label class=\"col-7 col-form-label\">Caja y Bancos</label>\r\n\r\n              <div class=\"input-group col-4\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"cajaBancos\">\r\n              </div>\r\n\r\n            </div> -->\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <h5 class=\"col-12 text-center\">Valores de Activo</h5>\r\n                <div class=\"container\">\r\n                <hr>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Cuentas Por Cobrar</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input class=\"form-control\" formControlName=\"cuentasPorCobrar\"\r\n                currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">IVA Acreditable</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input  class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\r\n                formControlName=\"IVAAcreditable\"\r\n                currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Almacen de Articulo Terminado</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"almacenArtTerm\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Almacen de Materiales</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"almacenMateriales\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Terrenos</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"terreno\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Edificios e Instalaciones</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"edifInsta\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Maquinaria y Equipo</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"maqEquipo\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Muebeles y Enseres</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"mueblesEnseres\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Equipo de Transporte</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"eqTrans\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Pagos Por Anticipado</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"pagosAnticipado\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Gastos de Amortización</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"gastosAmortizacion\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n\r\n                <div class=\"container\" style=\"margin-top:30px\">\r\n                <h5 class=\"col-12 text-center\">Valores de Pasivo</h5>\r\n                <hr>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">IVA por Enterar</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"IVAPorEnterar\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Impuestos por Pagar</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"imptosPorPagar\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Proveedores</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"proveedores\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">PTU por Pagar</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"PTUPorPagar\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Capital Social</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"capitalSocial\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Reserva Legal</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"reservaLegal\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Utilidad Acumulada</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"utilidadAcum\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Prestamos a menos de un Año</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"prestamosMenosAnio\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row text-center\">\r\n              <label class=\"col-5 col-form-label\">Prestamos a Mas de un Año</label>\r\n\r\n              <div class=\"input-group col-6\">\r\n                <span class=\"input-group-addon\">$</span>\r\n                <input currencyMask [options]=\"{ prefix: '', thousands: ',', precision:'0' }\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"prestamosMasAnio\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"modal-footer\">\r\n              <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalVariables.hide()\">\r\n              Cancelar\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"openCopia()\">\r\n                Copiar Variables\r\n              </button>\r\n\r\n              <button type=\"submit\" class=\"btn btn-outline-success\" >\r\n                Guardar\r\n              </button>\r\n\r\n\r\n\r\n            </div>\r\n\r\n        </form>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div bsModal #modalCopia=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center\">Copia de Variables Iniciales</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n      <accordion *ngFor=\"let usuario of usuarios\" [closeOthers]=\"1\">\r\n        <accordion-group #group >\r\n          <div accordion-heading>\r\n            <div class=\"row\">\r\n              <h4 class=\"col-6\">{{usuario.nombreUsuario}} {{usuario.apPat}}</h4>\r\n              <button class=\"col-5 btn btn-primary\" type=\"button\" (click)=\"setVariablesUsuario(usuario)\" >Copiar a Formulario</button>\r\n            </div>\r\n\r\n            <i class=\"pull-right float-xs-right glyphicon\"\r\n            [ngClass]=\"{'glyphicon-chevron-down': group?.isOpen, 'glyphicon-chevron-right': !group?.isOpen}\"></i>\r\n          </div>\r\n\r\n              <table class=\"table table-hover text-center\">\r\n                <thead class=\"text-center\">\r\n                  <tr>\r\n                    <th>Cuenta</th>\r\n                    <th>Cantidad</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>Caja y Bancos</td>\r\n                    <td>{{usuario.cajaBancos| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Cuentas Por Cobrar:</td>\r\n                    <td>{{usuario.cuentasPorCobrar| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>IVA Acreditable</td>\r\n                    <td>{{usuario.IVAAcreditable| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Almacen de Articulo Terminado</td>\r\n                    <td>{{usuario.almacenArtTerm | currency:'USD':true }}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Almacen de Materiales</td>\r\n                    <td>{{usuario.almacenMateriales| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Terrenos</td>\r\n                    <td>{{usuario.terreno| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Maquinaria y Equipo</td>\r\n                    <td>{{usuario.maqEquipo| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Muebeles y Enseres</td>\r\n                    <td>{{usuario.mueblesEnseres| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Equipo de Transporte</td>\r\n                    <td>{{usuario.eqTrans| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Pagos Por Anticipado</td>\r\n                    <td>{{usuario.pagosAnticipado| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Gastos de Amortización</td>\r\n                    <td>{{usuario.gastosAmortizacion| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>IVA por Enterar</td>\r\n                    <td>{{usuario.IVAPorEnterar| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Impuestos por Pagar</td>\r\n                    <td>{{usuario.imptosPorPagar| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Proveedores</td>\r\n                    <td>{{usuario.proveedores| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>PTU por Pagar</td>\r\n                    <td>{{usuario.PTUPorPagar| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Capital Social</td>\r\n                    <td>{{usuario.capitalSocial| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Reserva Legal</td>\r\n                    <td>{{usuario.reservaLegal| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Utilidad Acumulada</td>\r\n                    <td>{{usuario.utilidadAcum| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Prestamos a menos de un Año</td>\r\n                    <td>{{usuario.prestamosMenosAnio| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td>Prestamos a Mas de un Año</td>\r\n                    <td>{{usuario.prestamosMasAnio| currency:'USD':true}}</td>\r\n                  </tr>\r\n\r\n                </tbody>\r\n\r\n              </table>\r\n  </accordion-group>\r\n</accordion>\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalCopia.hide()\">\r\n        Cancelar\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div bsModal #modalMaqInit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2 class=\"col-12 text-center\">Maquinaria Inicial</h2>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\" col-5 offset-1\" style=\"margin-top:10px\">\r\n            <span class=\"text-center\" style=\"margin-bottom:20px;\"><h3>Maquinarias Existentes</h3></span>\r\n\r\n            <div class=\"card\" *ngFor=\"let maquina of maquinas\">\r\n              <div class=\"card-block\">\r\n                <div class=\"row\">\r\n                  <img  src=\"assets/img/machine.png\" style=\"height:40px;margin-left:10px;\">\r\n\r\n                  <div class=\"col-6\">\r\n                    <h4 class=\"card-title\">{{maquina.nombreMaq}}</h4>\r\n                  </div>\r\n                  <div class=\"col-3 \">\r\n                    <button type=\"button\" class=\"btn btn-success\" (click)= \"agregarMaquinaria(maquina)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\" col-5\" style=\"margin-top:10px\">\r\n            <span class=\"text-center\" style=\"margin-bottom:20px;\" ><h3>Maquinarias Asignadas</h3></span>\r\n\r\n            <div class=\"card\" *ngFor=\"let maq of maquinariaU\">\r\n              <div class=\"card-block\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-3 \">\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)= \"eliminaMaquinaria(maq)\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button>\r\n                  </div>\r\n                  <div class=\"col-5\">\r\n                    <h4 class=\"card-title text-right\">{{getNameByIdMaq(maq.idMaquinaria)}}</h4>\r\n                  </div>\r\n                  <img  src=\"assets/img/machine.png\" style=\"height:40px;margin-right:10px;\">\r\n                  <h4><span class=\"badge badge-success\">{{maq.cantidad}}</span></h4>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"modal-footer\">\r\n        <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalMaqInit.hide()\">\r\n        Salir\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div bsModal #modalZonaInit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2 class=\"col-12 text-center\">Zonas de Mercado Desarrolladas</h2>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"list-group col-5 offset-1\" style=\"margin-top:10px\">\r\n            <span class=\"text-center\" style=\"margin-bottom:10px;\"><h3>Zonas de Demanda</h3></span>\r\n          <!-- <accordion>\r\n            <accordion-group #group style=\"margin-top:10px\" *ngFor=\"let zona of zonas\">\r\n              <div accordion-heading class=\"col-5\" >\r\n                <h3>{{zona.nombreZona}}</h3>\r\n                <i class=\"pull-right float-xs-right glyphicon\"\r\n                [ngClass]=\"{'glyphicon-chevron-down': group?.isOpen, 'glyphicon-chevron-right': !group?.isOpen}\"></i>\r\n              </div>\r\n              <div class=\"\" *ngFor=\"let producto of zona.productos\">\r\n                  <span class=\"col-4\">{{getNameById(producto.idProducto)}}</span>\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"agregarZona(zona,producto)\">Asignar</button>\r\n\r\n              </div>\r\n            </accordion-group>\r\n          </accordion> -->\r\n\r\n          <div class=\"card\" *ngFor=\"let zona of zonas\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row\" style=\"margin-bottom:20px;\">\r\n                <img  src=\"assets/img/zone.png\" style=\"height:40px;margin-left:20px;\">\r\n\r\n                <div class=\"col-7\">\r\n                  <h4 class=\"card-title\">{{zona.nombreZona}}</h4>\r\n                </div>\r\n                <div class=\"col-1 \">\r\n                  <!-- <button type=\"button\" class=\"btn btn-success\" (click)= \"agregarMaquinaria(maquina)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> -->\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <div class=\"list-group\">\r\n                  <li type=\"button\"\r\n                  class=\"list-group-item list-group-item-action\"\r\n                  *ngFor=\"let producto of zona.productos\">{{getNameById(producto.idProducto)}}\r\n                  <button type=\"button\" (click)=\"agregarZona(zona,producto)\" class=\"btn btn-primary col-3 offset-4\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button></li>\r\n                </div>\r\n\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"list-group col-5\" style=\"margin-top:10px\">\r\n            <span class=\"text-center\" style=\"margin-bottom:10px;\"><h3>Productos Asignados</h3></span>\r\n            <!-- <a class=\"list-group-item list-group-item-action  align-items-start active\">\r\n              <div class=\"d-flex w-100 justify-content-between\" *ngFor=\"let producto of zonasU\">\r\n                <h4 class=\"mb-2 col-6\">{{getNameById(producto.idProducto)}} ({{getNameByIdZona(producto.idZona)}})</h4>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"eliminaProductoZona(producto)\">Eliminar</button>\r\n\r\n\r\n              </div>\r\n\r\n              <small class=\"mb-1\"></small>\r\n            </a> -->\r\n\r\n            <div class=\"card\" *ngFor=\"let producto of zonasU\">\r\n              <div class=\"card-block\">\r\n                <div class=\"row\" style=\"margin-bottom:20px;\">\r\n                  <img  src=\"assets/img/box.png\" style=\"height:40px;margin-left:20px;\">\r\n\r\n                  <div class=\"col-7\">\r\n                    <h4 class=\"card-title\">{{getNameById(producto.idProducto)}}</h4>\r\n                  </div>\r\n                  <div class=\"col-1 \">\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"eliminaProductoZona(producto)\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                  <div class=\"row\">\r\n                    <img  src=\"assets/img/zone.png\" style=\"height:20px;margin-left:20px;margin-top:5px;\">\r\n                    <div class=\"col-7\">\r\n                      {{getNameByIdZona(producto.idZona)}}\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"modal-footer\">\r\n        <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalZonaInit.hide()\">\r\n        Salir\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!--Modal de asignacion de Productos-->\r\n<div bsModal #modalProdInit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2 class=\"col-12 text-center\">Productos Iniciales Desarrollados</h2>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"list-group col-5 offset-1\" style=\"margin-top:10px\">\r\n          <span class=\"text-center\" style=\"margin-bottom:10px;\"><h3>Productos de Desarrollo</h3></span>\r\n          <div class=\"card\" *ngFor=\"let producto of productos\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row\">\r\n                <img  src=\"assets/img/box.png\" style=\"height:40px;margin-left:10px;\">\r\n\r\n                <div class=\"col-6\">\r\n                  <h4 class=\"card-title\">{{producto.nombreProd}}</h4>\r\n                </div>\r\n                <div class=\"col-3 \">\r\n                  <button type=\"button\" class=\"btn btn-success\" (click)=\"agregarProducto(producto)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n          <div class=\"list-group col-5\" style=\"margin-top:10px\">\r\n            <span class=\"text-center\" style=\"margin-bottom:10px;\"><h3>Productos Existentes</h3></span>\r\n          <div class=\"card\" *ngFor=\"let producto of productosU\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row\">\r\n                <div class=\"col-3 \">\r\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"eliminaProducto(producto)\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button>\r\n                </div>\r\n                <div class=\"col-7\">\r\n                  <h4 class=\"card-title text-right\">{{getNameById(producto.idProducto)}}</h4>\r\n                </div>\r\n                <img  src=\"assets/img/box.png\" style=\"height:40px;\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n      <div class=\"modal-footer\">\r\n        <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalProdInit.hide()\">\r\n        Salir\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!--Modal de asignacion de creditos-->\r\n\r\n<div bsModal #modalCreditosInit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h2 class=\"col-12 text-center\">Asignación de tipos de financiamiento</h2>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"list-group col-5 offset-1\" style=\"margin-top:10px\">\r\n          <span class=\"text-center\" style=\"margin-bottom:10px;\"><h3>Creditos</h3></span>\r\n          <div class=\"card\" *ngFor=\"let credito of creditos\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row\">\r\n                <img  src=\"assets/img/credit.png\" style=\"height:40px;margin-left:10px;\">\r\n\r\n                <div class=\"col-6\">\r\n                  <h4 class=\"card-title\">{{credito.nombreCredito}}</h4>\r\n                </div>\r\n                <div class=\"col-3 \">\r\n                  <button type=\"button\" class=\"btn btn-success\" (click)=\"agregarCredito(credito)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n          <div class=\"list-group col-5\" style=\"margin-top:10px\">\r\n            <span class=\"text-center\" style=\"margin-bottom:10px;\"><h3>Creditos Asignados</h3></span>\r\n          <div class=\"card\" *ngFor=\"let credito of creditosU\">\r\n            <div class=\"card-block\">\r\n              <div class=\"row\">\r\n                <div class=\"col-3 \">\r\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"eliminaCredito(credito)\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button>\r\n                </div>\r\n                <div class=\"col-7\">\r\n                  <h4 class=\"card-title text-right\">{{getNameByIdCredito(credito.idCredito)}}</h4>\r\n                </div>\r\n                <img  src=\"assets/img/credit.png\" style=\"height:40px;\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n      <div class=\"modal-footer\">\r\n        <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalCreditosInit.hide()\">\r\n        Salir\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!--Modal de que no cuadran los valores del balance-->\r\n\r\n<div bsModal #modalErrBalance=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"col-12 text-center \">Error en Balance</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n\r\n        <div class=\"row offset-1\">\r\n          <div class=\"\">\r\n            Los valores del Balance no cuadran\r\n\r\n          </div>\r\n          <br>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <button type=\"button\" class=\"btn btn-danger offset-4 col-4\"  (click)=\"modalErrBalance.hide()\">Ok</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/usuarios/usuarios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_administradores_service__ = __webpack_require__("../../../../../src/app/services/administradores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_creditos_service__ = __webpack_require__("../../../../../src/app/services/creditos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_usuario_credito_service__ = __webpack_require__("../../../../../src/app/services/usuario-credito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/maquinaria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_usuario_zona_service__ = __webpack_require__("../../../../../src/app/services/usuario-zona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_usuario_producto_service__ = __webpack_require__("../../../../../src/app/services/usuario-producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_zonas_service__ = __webpack_require__("../../../../../src/app/services/zonas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_usuario_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/usuario-maquinaria.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var UsuariosComponent = (function () {
    function UsuariosComponent(_usuariosService, modalService, authService, _usuarioProductoService, _creditosService, _usuarioCreditoService, _administradoresService, _productoService, _usuarioMaquinariaService, _usuarioZonaService, _maquinariaService, _zonasService) {
        this._usuariosService = _usuariosService;
        this.modalService = modalService;
        this.authService = authService;
        this._usuarioProductoService = _usuarioProductoService;
        this._creditosService = _creditosService;
        this._usuarioCreditoService = _usuarioCreditoService;
        this._administradoresService = _administradoresService;
        this._productoService = _productoService;
        this._usuarioMaquinariaService = _usuarioMaquinariaService;
        this._usuarioZonaService = _usuarioZonaService;
        this._maquinariaService = _maquinariaService;
        this._zonasService = _zonasService;
        this.usuarioDelete = {
            idUsuario: 0,
            nombreUsuario: "",
            apPat: "",
            apMat: "",
            contra: "",
            user: "",
            proyectos: 0,
            periodos: 0,
            regresion: 0
        };
        this.alerts = [];
        this.userSelected = {
            idUsuario: 0,
            nombreUsuario: "",
            apPat: "",
            apMat: "",
            contra: "",
            user: "",
            proyectos: 0,
            periodos: 0,
            regresion: 0
        };
        this.administradores = new Array();
        this.usuarios = new Array();
        this.proyectos = new Array();
        this.status = {
            isFirstOpen: true,
            isOpen: true
        };
        this.idAdmin = localStorage.getItem('idAdmin');
        this.newForm = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormGroup"]({
            'nombreUsuario': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'apPat': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'apMat': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'user': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'contra': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'proyectos': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'periodos': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'regresion': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'Administrador_idAdministrador': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"](localStorage.getItem('idAdmin'))
        });
        this.editForm = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormGroup"]({
            'idUsuario': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'nombreUsuario': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'apPat': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'apMat': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'user': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'contra': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'proyectos': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'periodos': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'regresion': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'Administrador_idAdministrador': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"](localStorage.getItem('idAdmin'))
        });
        this.variablesForm = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormGroup"]({
            'idUsuario': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'cajaBancos': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'cuentasPorCobrar': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'IVAAcreditable': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'almacenArtTerm': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'almacenMateriales': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'terreno': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'edifInsta': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'maqEquipo': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'mueblesEnseres': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'eqTrans': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'pagosAnticipado': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'gastosAmortizacion': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'IVAPorEnterar': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'imptosPorPagar': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'proveedores': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'PTUPorPagar': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'capitalSocial': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'reservaLegal': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'utilidadAcum': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'prestamosMenosAnio': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required),
            'prestamosMasAnio': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required)
        });
    }
    UsuariosComponent.prototype.getAdministrador = function (id) {
        for (var _i = 0, _a = this.administradores; _i < _a.length; _i++) {
            var admin_1 = _a[_i];
            if (admin_1.idAdministrador == id)
                return admin_1.nombreAdmin;
        }
        return "id no encontrado";
    };
    UsuariosComponent.prototype.ngOnInit = function () {
        this.administradores = this._administradoresService.returnAdministradores();
        this.usuarios = this._usuariosService.returnUsuarios();
        this.proyectos = this._usuariosService.returnProyectos();
    };
    UsuariosComponent.prototype.guarda = function (usuario) {
        if (!this.buscaRepetidos(usuario)) {
            this._usuariosService.guardarUsuario(usuario);
            this.modalNew.hide();
            this.alerts.push({
                type: 'success',
                msg: "Usuario \"" + (usuario.nombreUsuario) + "\" agregado",
                timeout: 2000
            });
        }
        else {
            alert("Repetidos");
        }
    };
    UsuariosComponent.prototype.buscaRepetidos = function (user) {
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var usuario_1 = _a[_i];
            if (usuario_1.nombreUsuario + " " + usuario_1.apPat + " " + usuario_1.apMat == user.nombreUsuario + " " + user.apPat + " " + user.apMat) {
                return true;
            }
        }
    };
    UsuariosComponent.prototype.editaUsuario = function (usuario) {
        this._usuariosService.setUsuario(usuario).subscribe();
        this.modalEdit.hide();
        this.alerts.push({
            type: 'success',
            msg: "Usuario \"" + (usuario.nombreUsuario) + "\" agregado",
            timeout: 2000
        });
    };
    UsuariosComponent.prototype.eliminaUsuario = function (idUsuario) {
        this._usuariosService.deleteUsuario(idUsuario).subscribe();
        console.log("Eliminado", idUsuario);
        this.modalConfDelete.hide();
        this.alerts.push({
            type: 'danger',
            msg: "Usuario Eliminado",
            timeout: 2000
        });
    };
    UsuariosComponent.prototype.setVariablesUsuario = function (usuario) {
        console.log(usuario);
        this.variablesForm.controls['IVAAcreditable'].setValue(usuario.IVAAcreditable);
        this.variablesForm.controls['cajaBancos'].setValue(usuario.cajaBancos);
        this.variablesForm.controls['cuentasPorCobrar'].setValue(usuario.cuentasPorCobrar);
        this.variablesForm.controls['almacenArtTerm'].setValue(usuario.almacenArtTerm);
        this.variablesForm.controls['almacenMateriales'].setValue(usuario.almacenMateriales);
        this.variablesForm.controls['terreno'].setValue(usuario.terreno);
        this.variablesForm.controls['edifInsta'].setValue(usuario.edifInsta);
        this.variablesForm.controls['maqEquipo'].setValue(usuario.maqEquipo);
        this.variablesForm.controls['mueblesEnseres'].setValue(usuario.mueblesEnseres);
        this.variablesForm.controls['eqTrans'].setValue(usuario.eqTrans);
        this.variablesForm.controls['pagosAnticipado'].setValue(usuario.pagosAnticipado);
        this.variablesForm.controls['gastosAmortizacion'].setValue(usuario.gastosAmortizacion);
        this.variablesForm.controls['IVAPorEnterar'].setValue(usuario.IVAPorEnterar);
        this.variablesForm.controls['imptosPorPagar'].setValue(usuario.imptosPorPagar);
        this.variablesForm.controls['proveedores'].setValue(usuario.proveedores);
        this.variablesForm.controls['PTUPorPagar'].setValue(usuario.PTUPorPagar);
        this.variablesForm.controls['capitalSocial'].setValue(usuario.capitalSocial);
        this.variablesForm.controls['reservaLegal'].setValue(usuario.reservaLegal);
        this.variablesForm.controls['utilidadAcum'].setValue(usuario.utilidadAcum);
        this.variablesForm.controls['prestamosMenosAnio'].setValue(usuario.prestamosMenosAnio);
        this.variablesForm.controls['prestamosMasAnio'].setValue(usuario.prestamosMasAnio);
        this.modalCopia.hide();
    };
    UsuariosComponent.prototype.openVariables = function () {
        this.variablesForm.controls['idUsuario'].setValue(this.userSelected.idUsuario);
        this.variablesForm.controls['IVAAcreditable'].setValue(this.userSelected.IVAAcreditable);
        this.variablesForm.controls['cajaBancos'].setValue(this.userSelected.cajaBancos);
        this.variablesForm.controls['cuentasPorCobrar'].setValue(this.userSelected.cuentasPorCobrar);
        this.variablesForm.controls['almacenArtTerm'].setValue(this.userSelected.almacenArtTerm);
        this.variablesForm.controls['almacenMateriales'].setValue(this.userSelected.almacenMateriales);
        this.variablesForm.controls['terreno'].setValue(this.userSelected.terreno);
        this.variablesForm.controls['edifInsta'].setValue(this.userSelected.edifInsta);
        this.variablesForm.controls['maqEquipo'].setValue(this.userSelected.maqEquipo);
        this.variablesForm.controls['mueblesEnseres'].setValue(this.userSelected.mueblesEnseres);
        this.variablesForm.controls['eqTrans'].setValue(this.userSelected.eqTrans);
        this.variablesForm.controls['pagosAnticipado'].setValue(this.userSelected.pagosAnticipado);
        this.variablesForm.controls['gastosAmortizacion'].setValue(this.userSelected.gastosAmortizacion);
        this.variablesForm.controls['IVAPorEnterar'].setValue(this.userSelected.IVAPorEnterar);
        this.variablesForm.controls['imptosPorPagar'].setValue(this.userSelected.imptosPorPagar);
        this.variablesForm.controls['proveedores'].setValue(this.userSelected.proveedores);
        this.variablesForm.controls['PTUPorPagar'].setValue(this.userSelected.PTUPorPagar);
        this.variablesForm.controls['capitalSocial'].setValue(this.userSelected.capitalSocial);
        this.variablesForm.controls['reservaLegal'].setValue(this.userSelected.reservaLegal);
        this.variablesForm.controls['utilidadAcum'].setValue(this.userSelected.utilidadAcum);
        this.variablesForm.controls['prestamosMenosAnio'].setValue(this.userSelected.prestamosMenosAnio);
        this.variablesForm.controls['prestamosMasAnio'].setValue(this.userSelected.prestamosMasAnio);
        this.modalVariables.show();
    };
    UsuariosComponent.prototype.openCopia = function () {
        this.modalCopia.show();
    };
    UsuariosComponent.prototype.openNew = function () {
        this.modalNew.show();
        this.newForm.reset();
        this.newForm.controls['Administrador_idAdministrador'].setValue(localStorage.getItem('idAdmin'));
    };
    //Abre formulario para editar un item
    UsuariosComponent.prototype.openEdit = function (usuario) {
        this.modalEdit.show();
        this.editForm.controls['idUsuario'].setValue(usuario.idUsuario);
        this.editForm.controls['nombreUsuario'].setValue(usuario.nombreUsuario);
        this.editForm.controls['apPat'].setValue(usuario.apPat);
        this.editForm.controls['apMat'].setValue(usuario.apMat);
        this.editForm.controls['user'].setValue(usuario.user);
        this.editForm.controls['contra'].setValue(usuario.contra);
        this.editForm.controls['proyectos'].setValue(usuario.proyectos);
        this.editForm.controls['periodos'].setValue(usuario.periodos);
        this.editForm.controls['regresion'].setValue(usuario.regresion);
        this.editForm.controls['Administrador_idAdministrador'].setValue(usuario.Administrador_idAdministrador);
    };
    UsuariosComponent.prototype.getNameById = function (id) {
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            if (producto.idProducto == id)
                return producto.nombreProd;
        }
        return "id no encontrado";
    };
    UsuariosComponent.prototype.openVars = function (usuario) {
        console.log(usuario);
        this.productos = this._productoService.returnProductos();
        this.maquinas = this._maquinariaService.returnMaquinas();
        this.zonas = this._zonasService.returnZonas();
        this.creditos = this._creditosService.establecerValores();
        this.maquinariaU = this._usuarioMaquinariaService.returnMaquinariasU(usuario.idUsuario);
        this.zonasU = this._usuarioZonaService.returnZonasU(usuario.idUsuario);
        this.productosU = this._usuarioProductoService.returnProductosU(usuario.idUsuario);
        this.creditosU = this._usuarioCreditoService.returnCreditosU(usuario.idUsuario);
        this.modalVars.show();
        this.userSelected = usuario;
    };
    UsuariosComponent.prototype.confDelete = function (usuario) {
        this.usuarioDelete = usuario;
        console.log(this.usuarioDelete);
        this.modalConfDelete.show();
    };
    UsuariosComponent.prototype.agregarMaquinaria = function (maquina, idUsuario) {
        var x = {
            Administrador_idAdministrador: localStorage.getItem('idAdmin'),
            idUsuario: this.userSelected.idUsuario,
            idMaquinaria: maquina.idMaquinaria,
            Producto_idProducto: maquina.Producto_idProducto,
            cantidad: 1
        };
        this._usuarioMaquinariaService.agregarMaquinariaU(x);
    };
    UsuariosComponent.prototype.agregarZona = function (zona, producto) {
        var x = {
            idUsuario: this.userSelected.idUsuario,
            idAdministrador: localStorage.getItem('idAdmin'),
            idProducto: producto.idProducto,
            idZona: zona.idZona
        };
        this._usuarioZonaService.agregarZonaU(x);
    };
    UsuariosComponent.prototype.agregarProducto = function (producto) {
        var y = {
            idUsuario: this.userSelected.idUsuario,
            idAdministrador: localStorage.getItem('idAdmin'),
            idProducto: producto.idProducto
        };
        this._usuarioProductoService.insertar(y);
    };
    UsuariosComponent.prototype.agregarCredito = function (credito) {
        var z = {
            idUsuario: this.userSelected.idUsuario,
            idAdministrador: localStorage.getItem('idAdmin'),
            idCredito: credito.idCredito
        };
        this._usuarioCreditoService.insertar(z);
    };
    UsuariosComponent.prototype.balanceCero = function (data) {
        var objeto = {
            "IVAPorEnterar": data.IVAPorEnterar,
            "imptosPorPagar": data.imptosPorPagar,
            "proveedores": data.proveedores,
            "PTUPorPagar": data.PTUPorPagar,
            "prestamosMenosAnio": data.prestamosMenosAnio,
            "prestamosMasAnio": data.prestamosMasAnio,
            "cajaBancos": data.cajaBancos,
            "cuentasPorCobrar": data.cuentasPorCobrar,
            "IVAAcreditable": data.IVAAcreditable,
            "almacenArtTerm": data.almacenArtTerm,
            "almacenMateriales": data.almacenMateriales,
            "terreno": data.terreno,
            "edifInsta": data.edifInsta,
            "maqEquipo": data.maqEquipo,
            "mueblesEnseres": data.mueblesEnseres,
            "pagosAnticipado": data.pagosAnticipado,
            "gastosAmortizacion": data.gastosAmortizacion,
            "capitalSocial": data.capitalSocial,
            "reservaLegal": data.reservaLegal,
            "utilidadAcum": data.utilidadAcum,
            "eqTrans": data.eqTrans
        };
        if (this.variablesForm.controls['IVAAcreditable'].value +
            this.variablesForm.controls['cajaBancos'].value +
            this.variablesForm.controls['cuentasPorCobrar'].value +
            this.variablesForm.controls['almacenArtTerm'].value +
            this.variablesForm.controls['almacenMateriales'].value +
            this.variablesForm.controls['terreno'].value +
            this.variablesForm.controls['edifInsta'].value +
            this.variablesForm.controls['maqEquipo'].value +
            this.variablesForm.controls['mueblesEnseres'].value +
            this.variablesForm.controls['eqTrans'].value +
            this.variablesForm.controls['pagosAnticipado'].value +
            this.variablesForm.controls['gastosAmortizacion'].value ==
            this.variablesForm.controls['IVAPorEnterar'].value +
                this.variablesForm.controls['imptosPorPagar'].value +
                this.variablesForm.controls['proveedores'].value +
                this.variablesForm.controls['PTUPorPagar'].value +
                this.variablesForm.controls['capitalSocial'].value +
                this.variablesForm.controls['reservaLegal'].value +
                this.variablesForm.controls['utilidadAcum'].value +
                this.variablesForm.controls['prestamosMenosAnio'].value +
                this.variablesForm.controls['prestamosMasAnio'].value) {
            this._usuariosService.inicializarVariables(objeto, data.idUsuario);
            this.modalVariables.hide();
        }
        else {
            this.modalErrBalance.show();
        }
    };
    UsuariosComponent.prototype.openMaqInit = function () {
        this.modalMaqInit.show();
    };
    UsuariosComponent.prototype.openModalProdInit = function () {
        this.modalProdInit.show();
    };
    UsuariosComponent.prototype.openModalZonaInit = function () {
        this.modalZonaInit.show();
    };
    UsuariosComponent.prototype.openModalCreditosInit = function () {
        this.modalCreditosInit.show();
    };
    UsuariosComponent.prototype.eliminaMaquinaria = function (maquinaria) {
        this._usuarioMaquinariaService.deleteMaquinaria(maquinaria).subscribe();
    };
    UsuariosComponent.prototype.eliminaProductoZona = function (zona) {
        this._usuarioZonaService.deleteZona(zona).subscribe();
    };
    UsuariosComponent.prototype.eliminaProducto = function (producto) {
        this._usuarioProductoService.eliminar(producto);
    };
    UsuariosComponent.prototype.eliminaCredito = function (credito) {
        this._usuarioCreditoService.eliminar(credito);
    };
    UsuariosComponent.prototype.getNameByIdMaq = function (id) {
        for (var _i = 0, _a = this.maquinas; _i < _a.length; _i++) {
            var maq = _a[_i];
            if (maq.idMaquinaria == id)
                return maq.nombreMaq;
        }
        return "id no encontrado";
    };
    UsuariosComponent.prototype.getNameByIdZona = function (id) {
        for (var _i = 0, _a = this.zonas; _i < _a.length; _i++) {
            var maq = _a[_i];
            if (maq.idZona == id)
                return maq.nombreZona;
        }
        return "id no encontrado";
    };
    UsuariosComponent.prototype.getNameByIdCredito = function (id) {
        for (var _i = 0, _a = this.creditos; _i < _a.length; _i++) {
            var maq = _a[_i];
            if (maq.idCredito == id)
                return maq.nombreCredito;
        }
        return "id no encontrado";
    };
    return UsuariosComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalProdInit'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], UsuariosComponent.prototype, "modalProdInit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalEdit'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _b || Object)
], UsuariosComponent.prototype, "modalEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalCreditosInit'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _c || Object)
], UsuariosComponent.prototype, "modalCreditosInit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalVars'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _d || Object)
], UsuariosComponent.prototype, "modalVars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalNew'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _e || Object)
], UsuariosComponent.prototype, "modalNew", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalConfDelete'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _f || Object)
], UsuariosComponent.prototype, "modalConfDelete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalVariables'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _g || Object)
], UsuariosComponent.prototype, "modalVariables", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalMaqInit'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _h || Object)
], UsuariosComponent.prototype, "modalMaqInit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalZonaInit'),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _j || Object)
], UsuariosComponent.prototype, "modalZonaInit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalCopia'),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _k || Object)
], UsuariosComponent.prototype, "modalCopia", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalErrBalance'),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _l || Object)
], UsuariosComponent.prototype, "modalErrBalance", void 0);
UsuariosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-usuarios',
        template: __webpack_require__("../../../../../src/app/components/usuarios/usuarios.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/usuarios/usuarios.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1__services_usuarios_service__["a" /* UsuariosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_usuarios_service__["a" /* UsuariosService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_12__services_usuario_producto_service__["a" /* UsuarioProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_usuario_producto_service__["a" /* UsuarioProductoService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_4__services_creditos_service__["a" /* CreditosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_creditos_service__["a" /* CreditosService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_5__services_usuario_credito_service__["a" /* UsuarioCreditoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_usuario_credito_service__["a" /* UsuarioCreditoService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_2__services_administradores_service__["a" /* AdministradoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_administradores_service__["a" /* AdministradoresService */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_10__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_producto_service__["a" /* ProductoService */]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_14__services_usuario_maquinaria_service__["a" /* UsuarioMaquinariaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__services_usuario_maquinaria_service__["a" /* UsuarioMaquinariaService */]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_11__services_usuario_zona_service__["a" /* UsuarioZonaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_usuario_zona_service__["a" /* UsuarioZonaService */]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_9__services_maquinaria_service__["a" /* MaquinariaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_maquinaria_service__["a" /* MaquinariaService */]) === "function" && _x || Object, typeof (_y = typeof __WEBPACK_IMPORTED_MODULE_13__services_zonas_service__["a" /* ZonasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_zonas_service__["a" /* ZonasService */]) === "function" && _y || Object])
], UsuariosComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
//# sourceMappingURL=usuarios.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/variables/variables.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h2>Variables</h2>\r\n<table class=\"table table-bordered table-responsive center-block\">\r\n  <tbody>\r\n    <tr>\r\n      <th>Concepto</th>\r\n      <th>Valor</th>\r\n      <th>\r\n    </tr>\r\n    <tr *ngFor=\"let t of variables\">\r\n      <td class=\"text-right\">{{t.concepto}}</td>\r\n      <td class=\"text-right\">{{t.valor}}</td>\r\n      <th><button class=\"btn btn-success\">Modificar</button></th>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/variables/variables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_variables_service__ = __webpack_require__("../../../../../src/app/services/variables.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariablesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VariablesComponent = (function () {
    function VariablesComponent(_variablesService) {
        this._variablesService = _variablesService;
        this.variables = [];
        this.variables = this._variablesService.returnVariables();
    }
    VariablesComponent.prototype.ngOnInit = function () {
    };
    return VariablesComponent;
}());
VariablesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-variables',
        template: __webpack_require__("../../../../../src/app/components/variables/variables.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_variables_service__["a" /* VariablesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_variables_service__["a" /* VariablesService */]) === "function" && _a || Object])
], VariablesComponent);

var _a;
//# sourceMappingURL=variables.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/zona-producto/zona-producto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resaltar{\r\n  background-color:#408AB4;\r\n  border-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/zona-producto/zona-producto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" col-12\" style=\"margin-left:60px\">\r\n  <h1  class=\"text-center\" >Demanda de Productos por Zona</h1>\r\n  <hr>\r\n  <div class=\"row\" *ngFor=\"let zona of zonas; let i=index\">\r\n\r\n    <div class=\"mb-3 card card-outline-primary col-11 text-center \" >\r\n\r\n        <blockquote class=\"card-blockquote\" style=\"margin-top:30px\">\r\n          <h1>{{zona.nombreZona}}</h1>\r\n        </blockquote>\r\n\r\n        <div class=\"row\" style=\"margin-bottom:30px;margin-top:30px\">\r\n\r\n            <div class=\"col-6\" >\r\n              <nvd3 [options]=\"options\" [data]=\"graficas[i]\"></nvd3>\r\n            </div>\r\n\r\n            <div class=\"col-6\" >\r\n              <div style=\"height:480px;overflow-y:scroll;overflow-x:hidden;margin-left:30px;padding-left:30px;\">\r\n                <div class=\"row\" *ngFor=\"let producto of zona.productos\" style=\"margin-bottom:30px\"\r\n                (click)=\"selectProductoScroll(top)\">\r\n\r\n                  <table class=\"table table-responsive table-sm \" >\r\n                    <thead>\r\n\r\n\r\n                      <tr>\r\n                        <th>Periodo</th>\r\n                        <th *ngFor=\"let periodo of producto.periodos\" class=\"text-center table-info\">{{periodo.numPeriodo}}</th>\r\n                      </tr>\r\n\r\n                    </thead>\r\n\r\n\r\n\r\n                    <tr>\r\n                      <th>{{getNameById(producto.idProducto)}}</th>\r\n                      <th *ngFor=\"let periodo of producto.periodos\" class=\"text-center\">{{periodo.cantidad}}</th>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <th></th>\r\n                      <th *ngFor=\"let periodo of producto.periodos\">\r\n                        <button type=\"button\" class=\"btn btn-primary text-center\"\r\n                        (click)=\"openModalPeriodoEdit(zona.idZona,producto.idProducto,periodo.numPeriodo,periodo.cantidad)\">\r\n                          <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                        </button></th>\r\n\r\n                    </tr>\r\n\r\n\r\n                  </table>\r\n                  <button type=\"button\" class=\"btn btn-danger offset-1 col-4\" (click)=\"borraPeriodo(zona.idZona,producto.idProducto,numPeriodo)\" >Eliminar</button>\r\n                  <button type=\"button\" class=\"btn btn-success offset-2 col-4\" (click)=\"openModalPeriodo(zona.idZona,producto.idProducto)\" >Agregar</button>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div bsModal #modalPeriodoNew=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\" \"></h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h2 class=\"text-center\">Agrega Periodo</h2>\r\n        <br>\r\n        <form [formGroup]=\"formPeriodoNew\" (ngSubmit)=\"agregaPeriodo(formPeriodoNew.value)\" class=\"offset-1\"  >\r\n\r\n          <input class=\"form-control\"\r\n                 type=\"text\"\r\n                 formControlName=\"idProducto\" hidden>\r\n\r\n                 <input class=\"form-control\"\r\n                        type=\"text\"\r\n                        formControlName=\"idZona\"  hidden>\r\n\r\n\r\n\r\n                        <div class=\"form-group row text-center\" >\r\n                          <label class=\"col-5 col-form-label\">Cantidad Demandanda</label>\r\n                          <div class=\"col-6 has-success\"\r\n                          [ngClass]=\"{'has-danger': !formPeriodoNew.get('cantidad').valid}\">\r\n\r\n\r\n                            <input class=\"form-control\"\r\n                                   type=\"number\"\r\n                                   formControlName=\"cantidad\" >\r\n                                   <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                                   *ngIf=\"!formPeriodoNew.controls['cantidad'].valid\">\r\n                                     La cantidad es reuqerida\r\n                                   </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"modal-footer\">\r\n                          <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalPeriodoNew.hide()\">\r\n                          Cancelar\r\n                          </button>\r\n                          <button type=\"submit\" class=\"btn btn-outline-success\"  [disabled]=\"!formPeriodoNew.valid\">\r\n                            Guardar\r\n                          </button>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n        </form>\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div bsModal #modalPeriodoEdit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\" \"></h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h2 class=\"text-center\">Agrega Periodo</h2>\r\n        <br>\r\n        <form [formGroup]=\"formPeriodoEdit\" (ngSubmit)=\"editaPeriodo(formPeriodoEdit.value)\" class=\"offset-1\"  >\r\n\r\n          <input class=\"form-control\"\r\n                 type=\"text\"\r\n                 formControlName=\"idProducto\" hidden>\r\n\r\n                 <input class=\"form-control\"\r\n                        type=\"text\"\r\n                        formControlName=\"idZona\"  hidden>\r\n\r\n\r\n\r\n                        <div class=\"form-group row text-center\" >\r\n                          <label class=\"col-5 col-form-label\">Cantidad Demandanda</label>\r\n                          <div class=\"col-6 has-success\"\r\n                          [ngClass]=\"{'has-danger': !formPeriodoEdit.get('cantidad').valid}\">\r\n\r\n\r\n                            <input class=\"form-control\"\r\n                                   type=\"number\"\r\n                                   formControlName=\"cantidad\" >\r\n                                   <div class=\"form-control-feedback\" style=\"font-size:10px;\"\r\n                                   *ngIf=\"!formPeriodoEdit.controls['cantidad'].valid\">\r\n                                     La cantidad es reuqerida\r\n                                   </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"modal-footer\">\r\n                          <button  type=\"button\" class=\"btn btn-outline-danger\" (click)=\"modalPeriodoEdit.hide()\">\r\n                          Cancelar\r\n                          </button>\r\n                          <button type=\"submit\" class=\"btn btn-outline-success\"  [disabled]=\"!formPeriodoEdit.valid\">\r\n                            Guardar\r\n                          </button>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n        </form>\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/zona-producto/zona-producto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_zonas_service__ = __webpack_require__("../../../../../src/app/services/zonas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_graficas_service__ = __webpack_require__("../../../../../src/app/services/graficas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZonaProductoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import {BrowserAnimationsModule} from '@angular/platform-browser-animations';
var ZonaProductoComponent = (function () {
    function ZonaProductoComponent(_demandaService, _productosService, modalService, _graficasService) {
        this._demandaService = _demandaService;
        this._productosService = _productosService;
        this.modalService = modalService;
        this._graficasService = _graficasService;
        this.zonaScrollSelected = {
            zona: null,
            producto: null
        };
        this.zonas = _graficasService.returnZonas();
        console.log("Original", this.zonas);
        this.graficas = this._graficasService.setGraficas();
        console.log("Data para Graficas", this.graficas);
        // console.log(this.graficas);
        this.productos = this._productosService.returnProductos();
        this.formPeriodoNew = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            'idZona': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'idProducto': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'cantidad': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.formPeriodoEdit = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            'idZona': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'idProducto': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'numPeriodo': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'cantidad': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    ZonaProductoComponent.prototype.ngOnInit = function () {
        console.log("random", "#", Math.random().toString(16).slice(2, 8));
        this.options = {
            chart: {
                type: 'lineChart',
                height: 500,
                width: 600,
                margin: {
                    top: 50,
                    right: 20,
                    bottom: 40,
                    left: 70
                },
                x: function (d) { return d.x; },
                y: function (d) { return d.y; },
                useInteractiveGuideline: true,
                xAxis: {
                    axisLabel: 'Periodos'
                },
                yAxis: {
                    axisLabel: 'Demanda Existente',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -5
                }
            }
        };
        this.data = [
            {
                values: [
                    { x: 1, y: 4 },
                    { x: 2, y: 4 },
                    { x: 3, y: 2 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 },
                    { x: 6, y: 8 },
                    { x: 7, y: 4 },
                ],
                key: 'Sine Wave',
                color: '#ff7f0e' //color - optional: choose your own line color.
            },
            {
                values: [
                    { x: 1, y: 5 },
                    { x: 2, y: 6 },
                    { x: 3, y: 7 },
                    { x: 4, y: 8 },
                    { x: 5, y: 9 },
                    { x: 6.5, y: 2 },
                    { x: 7, y: 3 },
                ],
                key: 'Hola',
                color: 'blue' //color - optional: choose your own line color.
            }
        ];
        console.log("Data", this.data);
    };
    ZonaProductoComponent.prototype.openModalPeriodo = function (idZona, idProducto) {
        this.formPeriodoNew.controls['idZona'].setValue(idZona);
        this.formPeriodoNew.controls['idProducto'].setValue(idProducto);
        console.log("Datos de Entrada", idZona, idProducto);
        this.modalPeriodoNew.show();
    };
    ZonaProductoComponent.prototype.openModalPeriodoEdit = function (idZona, idProducto, numPeriodo, cantidad) {
        // console.log(idZona,idProducto,numPeriodo);
        console.log(cantidad);
        this.formPeriodoEdit.get('idZona').setValue(idZona);
        this.formPeriodoEdit.get('idProducto').setValue(idProducto);
        this.formPeriodoEdit.get('numPeriodo').setValue(numPeriodo);
        this.formPeriodoEdit.get('cantidad').setValue(cantidad);
        this.modalPeriodoEdit.show();
    };
    ZonaProductoComponent.prototype.editaPeriodo = function (producto) {
        var _this = this;
        console.log("Producto", producto);
        this._graficasService.editaPeriodo(producto);
        //this.scrollService.scrollTo(this.zonaScrollSelected.zona+this.zonaScrollSelected.producto)
        this.modalPeriodoEdit.hide();
        setTimeout(function () {
            _this.graficas = _this._graficasService.returnGraficas();
        }, 1000);
        // console.log("Coomponent",producto)
        //this.scrollService.scrollTo(zona.idZona.toS);
    };
    ZonaProductoComponent.prototype.borraPeriodo = function (idZona, idProducto) {
        var _this = this;
        this._graficasService.eliminaPeriodo(idZona, idProducto);
        // console.log(idZona,idProducto);
        setTimeout(function () {
            _this.graficas = _this._graficasService.returnGraficas();
        }, 1000);
    };
    ZonaProductoComponent.prototype.selectProductoScroll = function (element) {
        // this.zonaScrollSelected={
        //   zona:zona.idZona,
        //   producto:producto.idProducto
        // };
        console.log(element);
        //console.log(this.zonaScrollSelected.zona+this.zonaScrollSelected.producto)
    };
    ZonaProductoComponent.prototype.agregaPeriodo = function (producto) {
        // this._graficasService.addPeriodo(producto).subscribe();
        var _this = this;
        this._graficasService.agregaPeriodo(producto);
        console.log("anterior graf", this.graficas);
        console.log("new graf", this.graficas);
        //console.log(this.zonas);
        // console.log(producto);
        setTimeout(function () {
            _this.graficas = _this._graficasService.returnGraficas();
        }, 1000);
        this.modalPeriodoNew.hide();
    };
    ZonaProductoComponent.prototype.numPeriodos = function (producto) {
        this._graficasService.getZonas().subscribe(function (data) {
            for (var _i = 0, _a = data.datos; _i < _a.length; _i++) {
                var zona_1 = _a[_i];
            }
        });
    };
    ZonaProductoComponent.prototype.getNameById = function (id) {
        //console.log(this.productos)
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto_1 = _a[_i];
            //console.log(producto.idProducto);
            if (producto_1.idProducto == id)
                return producto_1.nombreProd;
        }
        return "id no encontrado";
    };
    return ZonaProductoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalPeriodoNew'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], ZonaProductoComponent.prototype, "modalPeriodoNew", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalPeriodoEdit'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _b || Object)
], ZonaProductoComponent.prototype, "modalPeriodoEdit", void 0);
ZonaProductoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-zona-producto',
        template: __webpack_require__("../../../../../src/app/components/zona-producto/zona-producto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/zona-producto/zona-producto.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_zonas_service__["a" /* ZonasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_zonas_service__["a" /* ZonasService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_producto_service__["a" /* ProductoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_graficas_service__["a" /* GraficasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_graficas_service__["a" /* GraficasService */]) === "function" && _f || Object])
], ZonaProductoComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=zona-producto.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/administradores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministradoresService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdministradoresService = (function () {
    function AdministradoresService(http) {
        var _this = this;
        this.http = http;
        this.administradores = new Array();
        this.getAdministradores().subscribe(function (data) {
            for (var key$ in data) {
                _this.administradores.push(data[key$]);
            }
        });
    }
    AdministradoresService.prototype.establecerValores = function () {
        var _this = this;
        this.administradores.length = 0;
        this.getAdministradores().subscribe(function (data) {
            for (var key$ in data) {
                _this.administradores.push(data[key$]);
            }
        });
        return this.administradores;
    };
    AdministradoresService.prototype.deleteAdministrador = function (id) {
        console.log("Eliminando", id);
        for (var i = 0; this.administradores.length > i; i++) {
            if (this.administradores[i].idAdministrador == id) {
                console.log(this.administradores[i].idAdministrador);
                this.administradores.splice(i, 1);
                console.log("Administrador: ", id, "eliminado");
            }
        }
        console.log('admin/delete/' + id);
        return this.http.get('admin/delete/' + id).map(function (res) { return res.json(); });
    };
    AdministradoresService.prototype.getAdministradores = function () {
        return this.http.get('admin/').map(function (res) { return res.json(); });
    };
    AdministradoresService.prototype.returnAdministradores = function () {
        return this.establecerValores();
    };
    AdministradoresService.prototype.getAdministrador = function (id) {
        this.returnAdministradores();
        for (var i = 0; this.administradores.length > i; i++) {
            if (this.administradores[i].idAdministrador == id) {
                this.Administrador = this.administradores[i];
                break;
            }
        }
        return this.Administrador;
    };
    AdministradoresService.prototype.guardarAdministrador = function (admin) {
        var _this = this;
        this.addAdministrador(admin).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.administradores[key$] = data.datos[key$];
            }
        });
    };
    AdministradoresService.prototype.addAdministrador = function (admin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('admin/register', admin, { headers: headers }).map(function (res) { return res.json(); });
    };
    AdministradoresService.prototype.getAdministradorById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.get('admin/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    AdministradoresService.prototype.setAdministrador = function (admin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        for (var i = 0; this.administradores.length > i; i++) {
            console.log(this.administradores[i].idAdministrador, admin.idAdministrador);
            if (this.administradores[i].idAdministrador == admin.idAdministrador) {
                this.administradores.splice(i, 1);
                this.administradores.push(admin);
            }
        }
        return this.http.post('admin/modify/' + admin.idAdministrador, admin, { headers: headers }).map(function (res) { return res.json(); });
    };
    return AdministradoresService;
}());
AdministradoresService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AdministradoresService);

var _a;
//# sourceMappingURL=administradores.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerAdmin = function (admin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('admin/register', admin, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.authenticateAdmin = function (datos) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('admin/authenticate', datos, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.authenticateUsuario = function (datos) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('usuario/authenticate', datos, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    AuthService.prototype.getProfileAdmin = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.loadToken();
        headers.append('Authorization', this.authToken);
        return this.http.get('admin/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfileUsuario = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.loadToken();
        headers.append('Authorization', this.authToken);
        return this.http.get('admin/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeAdminData = function (token, admin) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('idAdmin', admin.id);
        localStorage.setItem('nombreAdmin', admin.name);
        this.authToken = token;
        this.admin = admin;
    };
    AuthService.prototype.storeUsuarioData = function (token, usuario) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('idUsuario', usuario.id);
        localStorage.setItem('nombreUsuario', usuario.name);
        localStorage.setItem("periodos", usuario.periodos);
        localStorage.setItem("regresion", usuario.regresion);
        this.authToken = token;
        this.usuario = usuario;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        if (this.authToken) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logoutAdmin = function () {
        this.authToken = null;
        this.admin = null;
        localStorage.clear();
    };
    AuthService.prototype.logoutUsuario = function () {
        this.authToken = null;
        this.usuario = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auxiliar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuxiliarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuxiliarService = (function () {
    function AuxiliarService(http) {
        this.http = http;
        this.auxiliar = [];
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
    }
    AuxiliarService.prototype.getAuxiliar = function (numeroPeriodo, idProyecto) {
        var x = {
            Proyectos_idProyecto: idProyecto,
            Balance_numeroPeriodo: numeroPeriodo
        };
        return this.http.post('auxiliar/', x, this.headers).map(function (res) { return res.json(); });
    };
    AuxiliarService.prototype.returnAuxiliar = function (numeroPeriodo, idProyecto) {
        var _this = this;
        this.auxiliar.length = 0;
        this.getAuxiliar(numeroPeriodo, idProyecto).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.auxiliar.push(data.datos);
            }
        });
        return this.auxiliar;
    };
    AuxiliarService.prototype.editarAuxiliar = function (data) {
        return this.http.post('auxiliar/modify', data, this.headers).map(function (res) { return res.json(); });
    };
    AuxiliarService.prototype.addAuxiliar = function (data) {
        return this.http.post('auxiliar/register', data, this.headers).map(function (res) { return res.json(); });
    };
    return AuxiliarService;
}());
AuxiliarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuxiliarService);

var _a;
//# sourceMappingURL=auxiliar.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/balance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BalanceService = (function () {
    function BalanceService(http) {
        this.http = http;
        this.balancesArray = [];
        this.balances = [];
        this.periodoActual = localStorage.getItem('numeroPeriodo');
    }
    BalanceService.prototype.getBalance = function () {
        var x = {
            idProyecto: parseInt(localStorage.getItem('idProyecto')),
            numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo'))
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('balance/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    BalanceService.prototype.returnBalance = function () {
        var balanceF = [];
        this.getBalance().subscribe(function (data) {
            for (var key in data.datos) {
                balanceF.push(data.datos[key]);
            }
        });
        console.log("Balance Actuarl", balanceF);
        return balanceF;
    };
    BalanceService.prototype.getBalanceFinal = function () {
        var x = {
            idProyecto: parseInt(localStorage.getItem('idProyecto')),
            numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo')) - 1
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('balance/final', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    BalanceService.prototype.getActivos = function () {
        var x = {
            idProyecto: parseInt(localStorage.getItem('idProyecto')),
            numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo'))
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('balance/getactivos', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    BalanceService.prototype.getPasivos = function () {
        var x = {
            idProyecto: parseInt(localStorage.getItem('idProyecto')),
            numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo'))
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('balance/getpasivos', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    BalanceService.prototype.returnActivos = function () {
        var activos = [];
        this.getActivos().subscribe(function (data) {
            for (var key in data.datos) {
                activos.push(data.datos[key]);
            }
        });
        return activos;
    };
    BalanceService.prototype.returnPasivos = function () {
        var pasivos = [];
        this.getPasivos().subscribe(function (data) {
            for (var key in data.datos) {
                pasivos.push(data.datos[key]);
            }
        });
        return pasivos;
    };
    BalanceService.prototype.getBalanceByIds = function (idProyecto, numeroPeriodo) {
        var x = {
            idProyecto: parseInt(idProyecto),
            numeroPeriodo: numeroPeriodo
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('balance/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    BalanceService.prototype.editarBalance = function (id, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('balance/modify/' + id, data, { headers: headers }).map(function (res) { return res.json(); });
    };
    BalanceService.prototype.getAll = function () {
        return this.http.get('balance/' + localStorage.getItem('idProyecto')).map(function (res) { return res.json(); });
    };
    BalanceService.prototype.crearBalance = function (idProyecto, data, numPeriodo) {
        var Balance = {
            "IVAPorEnterar": data.IVAPorEnterar,
            "numeroPeriodo": numPeriodo,
            "imptosPorPagar": data.imptosPorPagar,
            "proveedores": data.proveedores,
            "PTUPorPagar": data.PTUPorPagar,
            "prestamosMenosAnio": data.prestamosMenosAnio,
            "prestamosMasAnio": data.prestamosMasAnio,
            "cajaBancos": data.cajaBancos,
            "cuentasPorCobrar": data.cuentasPorCobrar,
            "IVAAcreditable": data.IVAAcreditable,
            "almacenArtTerm": data.almacenArtTerm,
            "almacenMateriales": data.almacenMateriales,
            "terreno": data.terreno,
            "edifInsta": data.edifInsta,
            "maqEquipo": data.maqEquipo,
            "mueblesEnseres": data.mueblesEnseres,
            "pagosAnticipado": data.pagosAnticipado,
            "gastosAmortizacion": data.gastosAmortizacion,
            "capitalSocial": data.capitalSocial,
            "reservaLegal": data.reservaLegal,
            "utilidadAcum": data.utilidadAcum,
            "depEdif": data.depEdif,
            "depMueblesEnseres": data.depMueblesEnseres,
            "eqTrans": data.eqTrans,
            "Proyectos_idProyecto": idProyecto,
            "depTerreno": data.depTerreno,
            "depMaqEquipo": data.depMaqEquipo,
            "depEqTrans": data.depEqTrans
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('balance/register/', Balance, { headers: headers }).map(function (res) { return res.json(); });
    };
    BalanceService.prototype.returnTodosBalances = function () {
        var _this = this;
        this.balancesArray.length = 0;
        this.getAll().subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.balancesArray.push(data.datos[key$]);
            }
        });
        return this.balancesArray;
    };
    return BalanceService;
}());
BalanceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], BalanceService);

var _a;
//# sourceMappingURL=balance.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/compra-maquinaria.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maquinaria_service__ = __webpack_require__("../../../../../src/app/services/maquinaria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompraMaquinariaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompraMaquinariaService = (function () {
    function CompraMaquinariaService(_maquinariaService, _balanceService, http) {
        this._maquinariaService = _maquinariaService;
        this._balanceService = _balanceService;
        this.http = http;
        this.maqCompradas = new Array();
        this.maquinas = new Array();
        this.maquinasCompradas = [];
    }
    CompraMaquinariaService.prototype.establecerValores = function () {
        var _this = this;
        this.maquinasCompradas.length = 0;
        this.getMaquinariaC().subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.maquinasCompradas.push(data.datos[key$]);
            }
        });
        return this.maquinasCompradas;
    };
    CompraMaquinariaService.prototype.returnMaquinasCompradas = function () {
        return this.establecerValores();
    };
    CompraMaquinariaService.prototype.getMaquinariaC = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var x = {
            idProyecto: localStorage.getItem('idProyecto'),
            numeroPeriodo: localStorage.getItem('numeroPeriodo')
        };
        return this.http.post('maquinariacomprada/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    CompraMaquinariaService.prototype.compraMaquinaria = function (x, y) {
        var _this = this;
        this.comprar(x).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.maquinasCompradas[key$] = data.datos[key$];
            }
        });
        this.cobrar(y).subscribe(function (data) {
            console.log("Perro", data);
        });
    };
    CompraMaquinariaService.prototype.regresarMaquinaria = function (x, y) {
        this.undo(y).subscribe(function (data) {
            console.log("Undo", data);
        });
        var maqC = [];
        this.vuelta(x).subscribe(function (data) {
            console.log("Vuelta", data);
            for (var key$ in data.datos) {
                maqC.push(data.datos[key$]);
            }
        });
        return maqC;
    };
    CompraMaquinariaService.prototype.cobrar = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('maquinariacomprada/cobrar/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    CompraMaquinariaService.prototype.comprar = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('maquinariacomprada/compra/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    CompraMaquinariaService.prototype.asingar = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        console.log(x);
        return this.http.post('maquinariacomprada/asignar/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    CompraMaquinariaService.prototype.vuelta = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('maquinariacomprada/vuelta/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    CompraMaquinariaService.prototype.undo = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('maquinariacomprada/undo/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    return CompraMaquinariaService;
}());
CompraMaquinariaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__maquinaria_service__["a" /* MaquinariaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__maquinaria_service__["a" /* MaquinariaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__balance_service__["a" /* BalanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__balance_service__["a" /* BalanceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _c || Object])
], CompraMaquinariaService);

var _a, _b, _c;
//# sourceMappingURL=compra-maquinaria.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/creditos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreditosService = (function () {
    function CreditosService(http) {
        this.http = http;
        this.creditos = new Array();
    }
    CreditosService.prototype.establecerValores = function () {
        var _this = this;
        this.creditos.length = 0;
        this.getCreditos().subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.creditos.push(data.datos[key$]);
            }
        });
        return this.creditos;
    };
    CreditosService.prototype.getCreditos = function () {
        return this.http.get('prestamo/getcredito').map(function (res) { return res.json(); });
    };
    CreditosService.prototype.setCreditos = function (credito) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        console.log(credito.idPrestamos, "Modificandose");
        for (var i = 0; this.creditos.length > i; i++) {
            if (this.creditos[i].idPrestamos == credito.idPrestamos) {
                this.creditos.splice(i, 1);
                this.creditos.push(credito);
                console.log("credito: ", this.creditos[i].idPrestamos, "modificado");
            }
        }
        return this.http.post('prestamo/modify/' + credito.idPrestamos, credito, { headers: headers }).map(function (res) { return res.json(); });
    };
    CreditosService.prototype.addCredito = function (credito) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('prestamo/addcredito', credito, { headers: headers }).map(function (res) { return res.json(); });
    };
    CreditosService.prototype.guardarCredito = function (credito) {
        var _this = this;
        var creditos = [];
        this.addCredito(credito).subscribe(function (data) {
            if (data.success) {
                _this.getCreditos().subscribe(function (data2) {
                    for (var key$ in data2.datos) {
                        creditos.push(data2.datos[key$]);
                    }
                });
            }
        });
        this.creditos = creditos;
        return creditos;
    };
    CreditosService.prototype.deleteCredito = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        for (var i = 0; this.creditos.length > i; i++) {
            if (this.creditos[i].idCredito == id) {
                this.creditos.splice(i, 1);
            }
        }
        return this.http.get('prestamo/deletecredito/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    return CreditosService;
}());
CreditosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CreditosService);

var _a;
//# sourceMappingURL=creditos.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.getDemandas = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var datos = {
            "Proyecto_Usuario_idUsuario": localStorage.getItem('idUsuario'),
            "Proyecto_idProyecto": localStorage.getItem('idProyecto'),
            "numPeriodo": localStorage.getItem('numeroPeriodo')
        };
        return this.http.post('dashboard/productoszonademandadesarrollados', datos, { headers: headers }).map(function (res) { return res.json(); });
    };
    DashboardService.prototype.getMaquinarias = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var datos = {
            "Proyecto_idProyecto": localStorage.getItem('idProyecto')
        };
        return this.http.post('dashboard/productomaquinaria', datos, { headers: headers }).map(function (res) { return res.json(); });
    };
    DashboardService.prototype.returnDemandas = function () {
        var demandas = [];
        this.getDemandas().subscribe(function (data) {
            for (var num in data.datos) {
                demandas.push(data.datos[num]);
            }
        });
        console.log("Servicio", demandas);
        return demandas;
    };
    DashboardService.prototype.returnMaquinarias = function () {
        var maquinas = [];
        this.getMaquinarias().subscribe(function (data) {
            for (var num in data.datos) {
                maquinas.push(data.datos[num]);
            }
        });
        console.log("Servicio", maquinas);
        return maquinas;
    };
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DashboardService);

var _a;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/desarrollo-producto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesarrolloProductoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DesarrolloProductoService = (function () {
    function DesarrolloProductoService(http) {
        this.http = http;
        this.productosDesarollados = [];
        this.productosEnDesarrollo = [];
        this.productosSinDesarrollar = [];
    }
    DesarrolloProductoService.prototype.returnProductosSinDesarrollar = function () {
        var _this = this;
        this.productosSinDesarrollar.length = 0;
        this.getProductosNoDesarrollados().subscribe(function (data) {
            for (var i in data.datos) {
                _this.productosSinDesarrollar.push(data.datos[i]);
            }
        });
        return this.productosSinDesarrollar;
    };
    DesarrolloProductoService.prototype.returnProductosEnDesarrollo = function () {
        var _this = this;
        this.productosEnDesarrollo.length = 0;
        this.getProductosEnDesarrollo().subscribe(function (data) {
            for (var i in data.datos) {
                _this.productosEnDesarrollo.push(data.datos[i]);
            }
        });
        return this.productosEnDesarrollo;
    };
    DesarrolloProductoService.prototype.returnProductosDesarrollados = function () {
        var _this = this;
        this.productosDesarollados.length = 0;
        this.getProductosDesarrollados().subscribe(function (data) {
            for (var i in data.datos) {
                _this.productosDesarollados.push(data.datos[i]);
            }
        });
        return this.productosDesarollados;
    };
    DesarrolloProductoService.prototype.getProductosNoDesarrollados = function () {
        return this.http.get('proyectoproducto/getproductossindesarrollar/' + localStorage.getItem('idProyecto')).map(function (res) { return res.json(); });
    };
    DesarrolloProductoService.prototype.getProductosEnDesarrollo = function () {
        return this.http.get('proyectoproducto/getproductosendesarrollo/' + localStorage.getItem('idProyecto')).map(function (res) { return res.json(); });
    };
    DesarrolloProductoService.prototype.getProductosDesarrollados = function () {
        return this.http.get('proyectoproducto/getproductosdesarrollados/' + localStorage.getItem('idProyecto')).map(function (res) { return res.json(); });
    };
    DesarrolloProductoService.prototype.getTerminados = function () {
        return this.http.get('proyectoproducto/getterminados/' + localStorage.getItem('idProyecto')).map(function (res) { return res.json(); });
    };
    DesarrolloProductoService.prototype.setDesarrollado = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('proyectoproducto/desarrollado/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    DesarrolloProductoService.prototype.actualizarPD = function () {
        var _this = this;
        this.getTerminados().subscribe(function (data) {
            for (var key$ in data.datos) {
                var x = {
                    Proyectos_idProyecto: localStorage.getItem('idProyecto'),
                    Productos_idProducto: data.datos[key$].idProducto
                };
                _this.setDesarrollado(x).subscribe();
            }
        });
    };
    DesarrolloProductoService.prototype.comenzarDesarrollo = function (id, costo) {
        var _this = this;
        var x = {
            Proyectos_idProyecto: parseInt(localStorage.getItem('idProyecto')),
            Productos_idProducto: id,
            periodoInicio: parseInt(localStorage.getItem('numeroPeriodo')),
            ultimoPeriodoDes: parseInt(localStorage.getItem('numeroPeriodo'))
        };
        for (var i = 0; this.productosSinDesarrollar.length > i; i++) {
            if (this.productosSinDesarrollar[i].idProducto == id) {
                this.productosSinDesarrollar.splice(i, 1);
            }
        }
        var y = {
            idProyecto: parseInt(localStorage.getItem('idProyecto')),
            idProducto: id,
            numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo')),
            costoDes: costo
        };
        this.desarrollar(x).subscribe(function (data) {
            for (var i in data.datos) {
                _this.productosEnDesarrollo[i] = data.datos[i];
            }
        });
        this.pagoBalance(y).subscribe();
    };
    DesarrolloProductoService.prototype.pagoBalance = function (y) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('proyectoproducto/operacionespagardesarrollo/', y, { headers: headers }).map(function (res) { return res.json(); });
    };
    DesarrolloProductoService.prototype.desarrollar = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('proyectoproducto/desarrolloproducto/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    DesarrolloProductoService.prototype.pagarDesarrollo = function (id, costo) {
        var _this = this;
        var x = {
            Proyectos_idProyecto: parseInt(localStorage.getItem('idProyecto')),
            Productos_idProducto: id,
            ultimoPeriodoDes: parseInt(localStorage.getItem('numeroPeriodo'))
        };
        var y = {
            idProducto: id,
            idProyecto: parseInt(localStorage.getItem('idProyecto')),
            numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo')),
            costoDes: costo
        };
        this.pd(x).subscribe(function (data) {
            for (var i in data.datos) {
                _this.productosEnDesarrollo[i] = data.datos[i];
            }
        });
        this.pagoBalance(y).subscribe();
    };
    DesarrolloProductoService.prototype.pd = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('proyectoproducto/pagardesarrollo/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    return DesarrolloProductoService;
}());
DesarrolloProductoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DesarrolloProductoService);

var _a;
//# sourceMappingURL=desarrollo-producto.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/desarrollo-zona.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesarrolloZonaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesarrolloZonaService = (function () {
    function DesarrolloZonaService(http) {
        this.http = http;
        this.productosZonaSinDesarrollar = [];
        this.productosZonaEnDesarrollo = [];
        this.productosZonaDesarrollados = [];
    }
    DesarrolloZonaService.prototype.comenzarDesarrolloZona = function (x) {
        var _this = this;
        this.addZona(x).subscribe(function (data) {
            if (data.success) {
                _this.getProductosDeZonaEnDesarrollo().subscribe(function (data) {
                    for (var key$ in data.datos) {
                        _this.productosZonaEnDesarrollo[key$] = data.datos[key$];
                    }
                });
            }
        });
    };
    DesarrolloZonaService.prototype.addZona = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('productoszonasproyectos/desarrollozona/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    DesarrolloZonaService.prototype.returnDemanda = function (nP, idZ, idP) {
        this.getDemanda(nP, idZ, idP).subscribe(function (data) {
            return data.datos[0];
        });
    };
    DesarrolloZonaService.prototype.getDemanda = function (nP, idZ, idP) {
        var x = {
            numPeriodo: nP,
            idZona: idZ,
            idProducto: idP
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('demanda/getdemanda', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    DesarrolloZonaService.prototype.cobrarDesarrollo = function (costoDes, idProducto) {
        var x = {
            idProducto: idProducto,
            idProyecto: localStorage.getItem('idProyecto'),
            numeroPeriodo: localStorage.getItem('numeroPeriodo'),
            costoDes: costoDes
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('productoszonasproyectos/operacionespagardesarrollo/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    DesarrolloZonaService.prototype.returnProductosDeZonaSinDesarrollar = function () {
        var _this = this;
        this.productosZonaSinDesarrollar.length = 0;
        this.getProductosDeZonaSinDesarrollar().subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.productosZonaSinDesarrollar.push(data.datos[key$]);
            }
        });
        return this.productosZonaSinDesarrollar;
    };
    DesarrolloZonaService.prototype.returnProductosDeZonaEnDesarrollo = function () {
        var _this = this;
        this.productosZonaEnDesarrollo.length = 0;
        this.getProductosDeZonaEnDesarrollo().subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.productosZonaEnDesarrollo.push(data.datos[key$]);
            }
        });
        return this.productosZonaEnDesarrollo;
    };
    DesarrolloZonaService.prototype.returnProductosDeZonaDesarrollados = function () {
        var _this = this;
        this.productosZonaDesarrollados.length = 0;
        this.getProductosDeZonaDesarrollados().subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.productosZonaDesarrollados.push(data.datos[key$]);
            }
        });
        return this.productosZonaDesarrollados;
    };
    DesarrolloZonaService.prototype.getProductosDeZonaSinDesarrollar = function () {
        var x = {
            Proyecto_idProyecto: parseInt(localStorage.getItem('idProyecto')),
            Proyecto_Usuario_idUsuario: parseInt(localStorage.getItem('idUsuario'))
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('productoszonasproyectos/productossindesarrollar/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    DesarrolloZonaService.prototype.getProductosDeZonaEnDesarrollo = function () {
        var x = {
            Proyecto_idProyecto: parseInt(localStorage.getItem('idProyecto')),
            Proyecto_Usuario_idUsuario: parseInt(localStorage.getItem('idUsuario'))
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('productoszonasproyectos/productosendesarrollo/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    DesarrolloZonaService.prototype.actualizarZonasDes = function () {
        var _this = this;
        this.getTerminados().subscribe(function (data) {
            for (var key$ in data.datos) {
                var x = {
                    Producto_idProducto: data.datos[key$].Producto_idProducto,
                    Zona_idZonas: data.datos[key$].Zona_idZonas,
                    Proyecto_idProyecto: data.datos[key$].Proyecto_idProyecto,
                    Proyecto_Usuario_idUsuario: data.datos[key$].Proyecto_Usuario_idUsuario
                };
                _this.zonaDesarrollada(x).subscribe();
            }
        });
    };
    DesarrolloZonaService.prototype.Desarrollar = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('productoszonasproyectos/pagardesarrollozona/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    DesarrolloZonaService.prototype.zonaDesarrollada = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('productoszonasproyectos/desarrolladoproductozonaproyecto/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    DesarrolloZonaService.prototype.getTerminados = function () {
        return this.http.get('productoszonasproyectos/terminados/' + localStorage.getItem('idProyecto')).map(function (res) { return res.json(); });
    };
    DesarrolloZonaService.prototype.getProductosDeZonaDesarrollados = function () {
        var x = {
            Proyecto_idProyecto: parseInt(localStorage.getItem('idProyecto')),
            Proyecto_Usuario_idUsuario: parseInt(localStorage.getItem('idUsuario'))
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('productoszonasproyectos/productosdesarrollados/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    return DesarrolloZonaService;
}());
DesarrolloZonaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DesarrolloZonaService);

var _a;
//# sourceMappingURL=desarrollo-zona.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/graficas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zonas_service__ = __webpack_require__("../../../../../src/app/services/zonas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficasService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraficasService = (function () {
    function GraficasService(_productosService, _zonasService, http) {
        this._productosService = _productosService;
        this._zonasService = _zonasService;
        this.http = http;
        this.graficas = [];
        this.zonas = [];
        this.productos = this._productosService.returnProductos();
    }
    GraficasService.prototype.getZonas = function () {
        return this.http.get('demanda/grafica/').map(function (res) { return res.json(); });
    };
    GraficasService.prototype.deletePeriodo = function (idZonaA, idProductoA) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('demanda/delete/', { idZona: idZonaA,
            idProducto: idProductoA
        }, { headers: headers }).map(function (res) { return res.json(); });
    };
    GraficasService.prototype.eliminaPeriodo = function (idZona, idProducto) {
        var _this = this;
        this.deletePeriodo(idZona, idProducto).subscribe(function (data) {
            if (data.success) {
                _this.getZonas().subscribe(function (data) {
                    for (var num in data.datos) {
                        _this.zonas[num] = data.datos[num];
                    }
                });
            }
        });
    };
    GraficasService.prototype.setPeriodo = function (producto) {
        console.log(producto);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('demanda/modify/', { idZona: producto.idZona,
            idProducto: producto.idProducto,
            numPeriodo: producto.numPeriodo,
            cantidad: producto.cantidad
        }, { headers: headers }).map(function (res) { return res.json(); });
    };
    GraficasService.prototype.editaPeriodo = function (producto) {
        var _this = this;
        this.setPeriodo(producto).subscribe(function (data) {
            if (data.success) {
                _this.getZonas().subscribe(function (data) {
                    for (var num in data.datos) {
                        _this.zonas[num] = data.datos[num];
                    }
                });
            }
        });
    };
    GraficasService.prototype.addPeriodo = function (producto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        console.log("Servicio", producto);
        return this.http.post('demanda/registerdemanda/', { idZona: producto.idZona,
            idProducto: producto.idProducto,
            cantidad: producto.cantidad
        }, { headers: headers }).map(function (res) { return res.json(); });
    };
    GraficasService.prototype.returnGraficas = function () {
        this.graficas = this.setGraficas();
        return this.graficas;
    };
    GraficasService.prototype.agregaPeriodo = function (producto) {
        var _this = this;
        this.addPeriodo(producto).subscribe(function (data) {
            if (data.success) {
                _this.getZonas().subscribe(function (data) {
                    for (var num in data.datos) {
                        _this.zonas[num] = data.datos[num];
                    }
                });
            }
        });
    };
    GraficasService.prototype.estableceZonasGraf = function () {
        var _this = this;
        this.zonas.length = 0;
        this.getZonas().subscribe(function (data) {
            console.log("Servici Graf", data);
            for (var key$ in data.datos) {
                _this.zonas.push(data.datos[key$]);
            }
        });
        return this.zonas;
    };
    GraficasService.prototype.returnZonas = function () {
        this.estableceZonasGraf();
        return this.zonas;
    };
    GraficasService.prototype.setGraficas = function () {
        var _this = this;
        var graficas = [];
        var grafica;
        graficas = new Array;
        this.getZonas().subscribe(function (data) {
            for (var num in data.datos) {
                graficas.push(_this.setProductos(data.datos[num]));
            }
        });
        return graficas;
    };
    GraficasService.prototype.setProductos = function (zona) {
        var data = [];
        for (var _i = 0, _a = zona.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            data.push({
                values: this.setPeriodos(producto),
                key: this.getNameById(producto.idProducto),
                color: "#" + Math.random().toString(16).slice(2, 8)
            });
        }
        return data;
    };
    GraficasService.prototype.setPeriodos = function (producto) {
        var data = [];
        for (var _i = 0, _a = producto.periodos; _i < _a.length; _i++) {
            var periodo = _a[_i];
            data.push({ x: periodo.numPeriodo, y: periodo.cantidad });
        }
        return data;
    };
    GraficasService.prototype.getNameById = function (id) {
        //console.log(this.productos)
        for (var _i = 0, _a = this.productos; _i < _a.length; _i++) {
            var producto = _a[_i];
            //console.log(producto.idProducto);
            if (producto.idProducto == id)
                return producto.nombreProd;
        }
        return "id no encontrado";
    };
    return GraficasService;
}());
GraficasService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__producto_service__["a" /* ProductoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__zonas_service__["a" /* ZonasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__zonas_service__["a" /* ZonasService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _c || Object])
], GraficasService);

var _a, _b, _c;
//# sourceMappingURL=graficas.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/maquinaria.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaquinariaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaquinariaService = (function () {
    function MaquinariaService(http) {
        this.http = http;
        //Aqui va el url donde se mandaran los datos
        this.maquinas = new Array();
    }
    MaquinariaService.prototype.getMaquinas = function () {
        return this.http.get('maquinaria/').map(function (res) { return res.json(); });
    };
    MaquinariaService.prototype.establecerValores = function () {
        var _this = this;
        this.maquinas.length = 0;
        this.getMaquinas().skipWhile(function (v) { return v.length === 0; }).take(1).subscribe(function (data) {
            for (var key$ in data) {
                _this.maquinas.push(data[key$]);
            }
        });
        return this.maquinas;
    };
    MaquinariaService.prototype.returnMaquinas = function () {
        return this.establecerValores();
    };
    MaquinariaService.prototype.getMaquinariasPC = function () {
        return this.http.get('maquinaria/maquinariaspc/' + localStorage.getItem('idProyecto')).map(function (res) { return res.json(); });
    };
    MaquinariaService.prototype.returnMPC = function () {
        var mpc = [];
        this.getMaquinariasPC().subscribe(function (data) {
            for (var key in data.datos) {
                mpc.push(data.datos[key]);
            }
        });
        return mpc;
    };
    MaquinariaService.prototype.setMaquina = function (maquina) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        console.log(maquina.idMaquinaria, "Modificandose");
        for (var i = 0; this.maquinas.length > i; i++) {
            if (this.maquinas[i].idMaquinaria == maquina.idMaquinaria) {
                this.maquinas.splice(i, 1);
                this.maquinas.push(maquina);
            }
        }
        return this.http.post('maquinaria/modify/' + maquina.idMaquinaria, maquina, { headers: headers }).map(function (res) { return res.json(); });
    };
    MaquinariaService.prototype.addMaquina = function (maquina) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        console.log("maquina: ", maquina.nombreMaq, " agregada");
        return this.http.post('maquinaria/register', maquina, { headers: headers }).map(function (res) { return res.json(); });
    };
    MaquinariaService.prototype.guardarMaquina = function (maquinaria) {
        var _this = this;
        this.addMaquina(maquinaria).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.maquinas[key$] = data.datos[key$];
            }
        });
    };
    MaquinariaService.prototype.deleteMauqina = function (id) {
        for (var i = 0; this.maquinas.length > i; i++) {
            if (this.maquinas[i].idMaquinaria == id) {
                this.maquinas.splice(i, 1);
            }
        }
        console.log('maquinaria/delete/' + id);
        return this.http.get('maquinaria/delete/' + id).map(function (res) { return res.json(); });
    };
    return MaquinariaService;
}());
MaquinariaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], MaquinariaService);

var _a;
//# sourceMappingURL=maquinaria.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/operacion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperacionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OperacionService = (function () {
    function OperacionService(http, balanceService, productoService) {
        this.http = http;
        this.balanceService = balanceService;
        this.productoService = productoService;
        this.opAnterior = [];
        this.opActual = [];
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.productosOperacion = [];
        this.auxiliares = [];
        this.auxiliaresAnteriores = [];
        this.auxiliarC = [];
    }
    OperacionService.prototype.returnProductosOperacion = function () {
        var _this = this;
        this.productosOperacion.length = 0;
        this.getProductosOperacion().subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.productosOperacion.push(data.datos[key$]);
            }
        });
        return this.productosOperacion;
    };
    OperacionService.prototype.registerOperacion = function (x) {
        var operaciones = [];
        this.addOperacion(x).subscribe(function (data) {
            for (var key in data.datos) {
                operaciones.push(data.datos[key]);
            }
        });
        return operaciones;
    };
    //Peticiones
    OperacionService.prototype.getProductosOperacion = function () {
        var x = {
            "idProyecto": localStorage.getItem('idProyecto'),
            "idUsuario": localStorage.getItem('idUsuario')
        };
        return this.http.post('productoszonasproyectos/zonasporproducto/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.sell = function (x) {
        return this.http.post('operacion/selling/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.getAllOperaciones = function () {
        var x = {
            "numeroPeriodo": localStorage.getItem('numeroPeriodo'),
            "idProyecto": localStorage.getItem('idProyecto'),
            "idUsuario": localStorage.getItem('idUsuario')
        };
        return this.http.post('operacion/getAll/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.returnAllOperaciones = function () {
        var operaciones = [];
        this.getAllOperaciones().subscribe(function (data) {
            for (var key in data.datos) {
                operaciones.push(data.datos[key]);
            }
        });
        return operaciones;
    };
    OperacionService.prototype.getProductosV = function () {
        var x = {
            "numeroPeriodo": localStorage.getItem('numeroPeriodo'),
            "idProyecto": localStorage.getItem('idProyecto'),
            "idUsuario": localStorage.getItem('idUsuario')
        };
        return this.http.post('operacion/productosventa/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.returnProductoResultados = function () {
        var resul = [];
        this.getProductosResultados().subscribe(function (data) {
            for (var key in data.datos) {
                resul.push(data.datos[key]);
            }
        });
        return resul;
    };
    OperacionService.prototype.returnAuxiliares = function () {
        var _this = this;
        this.auxiliares.length = 0;
        this.getAuxiliares().subscribe(function (data) {
            console.log("Auxes Acutuales", data);
            for (var key in data.datos) {
                _this.auxiliares.push(data.datos[key]);
            }
        });
        return this.auxiliares;
    };
    OperacionService.prototype.returnAuxiliaresAnteriores = function () {
        var _this = this;
        this.auxiliaresAnteriores.length = 0;
        this.getAuxiliaresAnteriores().subscribe(function (data) {
            console.log("Auxes Anteriores", data);
            for (var key in data.datos) {
                _this.auxiliaresAnteriores.push(data.datos[key]);
            }
        });
        return this.auxiliaresAnteriores;
    };
    OperacionService.prototype.returnAuxiliarC = function () {
        var _this = this;
        this.auxiliarC.length = 0;
        this.getAuxiliarC().subscribe(function (data) {
            for (var key in data.datos) {
                _this.auxiliarC.push(data.datos[key]);
            }
        });
        return this.auxiliarC;
    };
    OperacionService.prototype.returnAlmacen = function () {
        var alma = [];
        this.getAlmacen().subscribe(function (data) {
            for (var key in data.datos) {
                alma.push(data.datos[key]);
            }
        });
        return alma;
    };
    OperacionService.prototype.registerAlmacen = function (x) {
        var alma = [];
        this.addAlmacen(x).subscribe(function (data) {
            for (var key in data.datos) {
                alma.push(data.datos[key]);
            }
        });
        return alma;
    };
    OperacionService.prototype.returnInter = function () {
        var intereses = [];
        this.getInter().subscribe(function (data) {
            for (var key in data.datos) {
                intereses.push(data.datos[key]);
            }
        });
        return intereses;
    };
    OperacionService.prototype.returnAuxiliarCTotal = function () {
        var auxiliarT = [];
        var T = 0;
        this.getAuxiliarC().subscribe(function (data) {
            for (var key in data.datos) {
                T += data.datos[key].desarrolloMercado + data.datos[key].desarrolloProducto;
            }
            auxiliarT.push(T);
        });
        return auxiliarT;
    };
    OperacionService.prototype.getAuxiliares = function () {
        var x = {
            "Proyectos_idProyecto": localStorage.getItem('idProyecto'),
            "Balance_numeroPeriodo": localStorage.getItem('numeroPeriodo')
        };
        return this.http.post('operacion/getventas/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.getAuxiliarC = function () {
        var x = {
            "Proyectos_idProyecto": localStorage.getItem('idProyecto'),
            "Balance_numeroPeriodo": localStorage.getItem('numeroPeriodo')
        };
        return this.http.post('operacion/getauxiliar/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.getProductosResultados = function () {
        var x = {
            "idProyecto": localStorage.getItem('idProyecto'),
            "numeroPeriodo": localStorage.getItem('numeroPeriodo')
        };
        return this.http.post('operacion/resultados/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.getAuxiliaresAnteriores = function () {
        var x = {
            "Proyectos_idProyecto": localStorage.getItem('idProyecto'),
            "Balance_numeroPeriodo": parseInt(localStorage.getItem('numeroPeriodo')) - 1
        };
        return this.http.post('operacion/getventas/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.validarOperacion = function (x) {
        return this.http.post('operacion/validate/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.validarAlmacen = function (x) {
        return this.http.post('operacion/validateAlmacen/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.addOperacion = function (x) {
        return this.http.post('operacion/register/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.addAlmacen = function (x) {
        return this.http.post('operacion/registerAlmacen/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.getAlmacen = function () {
        var x = {
            Balance_numeroPeriodo: localStorage.getItem('numeroPeriodo'),
            Proyecto_idProyecto: localStorage.getItem('idProyecto')
        };
        return this.http.post('operacion/getAlmacen/', x, this.headers).map(function (res) { return res.json(); });
    };
    OperacionService.prototype.getInter = function () {
        var x = {
            "idProyecto": localStorage.getItem('idProyecto'),
            "numeroPeriodo": parseInt(localStorage.getItem('numeroPeriodo'))
        };
        return this.http.post('prestamo/getIntereses/', x, this.headers).map(function (res) { return res.json(); });
    };
    return OperacionService;
}());
OperacionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__balance_service__["a" /* BalanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__balance_service__["a" /* BalanceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__producto_service__["a" /* ProductoService */]) === "function" && _c || Object])
], OperacionService);

var _a, _b, _c;
//# sourceMappingURL=operacion.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/producto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductoService = (function () {
    function ProductoService(http) {
        this.http = http;
        this.productos = [];
    }
    ProductoService.prototype.establecerValores = function () {
        var _this = this;
        this.productos.length = 0;
        this.getProductos().subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.productos.push(data.datos[key$]);
            }
        });
        return this.productos;
    };
    ProductoService.prototype.deleteProducto = function (id) {
        console.log("Eliminando", id);
        for (var i = 0; this.productos.length > i; i++) {
            if (this.productos[i].idProducto == id) {
                console.log(this.productos[i].idProducto);
                this.productos.splice(i, 1);
                console.log("producto: ", id, "eliminado");
            }
        }
        console.log('producto/delete/' + id);
        return this.http.get('producto/delete/' + id).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.getProductos = function () {
        return this.http.get('producto/').map(function (res) { return res.json(); });
    };
    ProductoService.prototype.returnProductos = function () {
        this.productos = this.establecerValores();
        return this.productos;
    };
    ProductoService.prototype.guardarProducto = function (producto) {
        var _this = this;
        this.addProducto(producto).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.productos[key$] = data.datos[key$];
            }
        });
    };
    ProductoService.prototype.addProducto = function (producto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('producto/register', producto, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProductoService.prototype.setProducto = function (producto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        for (var i = 0; this.productos.length > i; i++) {
            console.log(this.productos[i].idProducto, producto.idProducto);
            if (this.productos[i].idProducto == producto.idProducto) {
                this.productos.splice(i, 1);
                this.productos.push(producto);
            }
        }
        return this.http.post('producto/modify/' + producto.idProducto, producto, { headers: headers }).map(function (res) { return res.json(); });
    };
    return ProductoService;
}());
ProductoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProductoService);

var _a;
//# sourceMappingURL=producto.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/proyectos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/usuario-maquinaria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_producto_service__ = __webpack_require__("../../../../../src/app/services/usuario-producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario_zona_service__ = __webpack_require__("../../../../../src/app/services/usuario-zona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__desarrollo_producto_service__ = __webpack_require__("../../../../../src/app/services/desarrollo-producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auxiliar_service__ = __webpack_require__("../../../../../src/app/services/auxiliar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__desarrollo_zona_service__ = __webpack_require__("../../../../../src/app/services/desarrollo-zona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__compra_maquinaria_service__ = __webpack_require__("../../../../../src/app/services/compra-maquinaria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProyectosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProyectosService = (function () {
    function ProyectosService(http, _balanceService, _usuarioMaquinariaService, _usuarioProductoService, router, _auxiliarService, _desarrolloProductoService, _desarrolloZonaService, _usuarioZonaService, _CompraMaquinariaService, _usuarioZona) {
        this.http = http;
        this._balanceService = _balanceService;
        this._usuarioMaquinariaService = _usuarioMaquinariaService;
        this._usuarioProductoService = _usuarioProductoService;
        this.router = router;
        this._auxiliarService = _auxiliarService;
        this._desarrolloProductoService = _desarrolloProductoService;
        this._desarrolloZonaService = _desarrolloZonaService;
        this._usuarioZonaService = _usuarioZonaService;
        this._CompraMaquinariaService = _CompraMaquinariaService;
        this._usuarioZona = _usuarioZona;
        this.proyectos = new Array();
    }
    ProyectosService.prototype.establecerValores = function () {
        var _this = this;
        this.proyectos.length = 0;
        this.getProyectos().subscribe(function (data) {
            for (var key$ in data) {
                _this.proyectos.push(data[key$]);
            }
        });
        return this.proyectos;
    };
    ProyectosService.prototype.returnUsuarios = function () {
        return this.establecerValores();
    };
    ProyectosService.prototype.setProyecto = function (proyecto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        for (var i = 0; this.proyectos.length > i; i++) {
            if (this.proyectos[i].idProyecto == proyecto.idProyecto) {
                this.proyectos.splice(i, 1);
                this.proyectos.push(proyecto);
            }
        }
        return this.http.post('proyecto/modify/' + proyecto.idProyecto, proyecto, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProyectosService.prototype.eliminaProyecto = function (id) {
        for (var i = 0; this.proyectos.length > i; i++) {
            if (this.proyectos[i].idProyecto == id) {
                this.proyectos.splice(i, 1);
            }
        }
        return this.http.get('proyecto/delete/' + id).map(function (res) { return res.json(); });
    };
    ProyectosService.prototype.buscarPeriodos = function (idProyecto) {
        return this.http.get('balance/' + idProyecto).map(function (res) { return res.json(); });
    };
    ProyectosService.prototype.asignarBalance = function (idProyecto) {
        var _this = this;
        this.buscarPeriodos(idProyecto).subscribe(function (data) {
            if (data.datos.length == 0) {
                _this.asignarMaquinaria(idProyecto, localStorage.getItem('idUsuario'));
                _this.asginarProductos(idProyecto, localStorage.getItem('idUsuario'));
                _this.asignarZonas(idProyecto, localStorage.getItem('idUsuario'));
                _this.asginarPeriodoCero(idProyecto);
                localStorage.setItem('numeroPeriodo', '1');
                localStorage.setItem('numeroRPeriodos', '1');
            }
            else {
                var num = parseInt(data.datos.length) - 1;
                localStorage.setItem('numeroPeriodo', num.toString());
                localStorage.setItem('numeroRPeriodos', num.toString());
            }
        });
    };
    ProyectosService.prototype.asginarProductos = function (idProyecto, idUsuario) {
        var _this = this;
        this._usuarioProductoService.getProductosU(idUsuario).subscribe(function (data) {
            for (var key$ in data.datos) {
                var x = {
                    Proyectos_idProyecto: idProyecto,
                    Productos_idProducto: data.datos[key$].idProducto,
                    desarrollado: 1,
                    periodoInicio: 0,
                    ultimoPeriodoDes: 0,
                    periodosDes: 0
                };
                _this._desarrolloProductoService.desarrollar(x).subscribe();
            }
        });
    };
    ProyectosService.prototype.entrar = function () {
        this.router.navigate(['Usuario/proyecto']);
    };
    ProyectosService.prototype.asignarZonas = function (idProyecto, idUsuario) {
        var _this = this;
        this._usuarioZonaService.getZonasU(idUsuario).subscribe(function (data) {
            for (var key$ in data.datos) {
                var x = {
                    Producto_idProducto: data.datos[key$].idProducto,
                    Zona_idZonas: data.datos[key$].idZona,
                    Proyecto_idProyecto: idProyecto,
                    Proyecto_Usuario_idUsuario: idUsuario,
                    desarrollado: 1,
                    periodoInicio: 0,
                    ultimoPeriodoDes: 0,
                    periodosDes: 0
                };
                _this._desarrolloZonaService.addZona(x).subscribe();
            }
        });
    };
    ProyectosService.prototype.asignarMaquinaria = function (idProyecto, idUsuario) {
        var _this = this;
        this._usuarioMaquinariaService.getMaquinariasU(idUsuario).subscribe(function (data) {
            for (var key$ in data.datos) {
                var x = {
                    Balance_numeroPeriodo: 0,
                    Maquinaria_idMaquinaria: data.datos[key$].idMaquinaria,
                    Maquinaria_idProducto: data.datos[key$].Producto_idProducto,
                    Proyectos_idProyecto: idProyecto,
                    Cantidad: data.datos[key$].cantidad
                };
                _this._CompraMaquinariaService.asingar(x).subscribe();
            }
        });
    };
    ProyectosService.prototype.asginarPeriodoCero = function (idProyecto) {
        var _this = this;
        this.buscarDatosUsuario().subscribe(function (data) {
            for (var key$ in data) {
                if (data[key$].idUsuario == localStorage.getItem('idUsuario')) {
                    _this.crearBalanceUno(idProyecto, data[key$], 1).subscribe();
                    _this.crearBalanceCero(idProyecto, data[key$], 0).subscribe();
                    break;
                }
            }
        });
    };
    ProyectosService.prototype.buscarDatosUsuario = function () {
        return this.http.get('usuario/').map(function (res) { return res.json(); });
    };
    ProyectosService.prototype.crearBalanceUno = function (idProyecto, data, num) {
        var Balance = {
            "IVAPorEnterar": data.IVAPorEnterar,
            "numeroPeriodo": num,
            "imptosPorPagar": data.imptosPorPagar,
            "proveedores": data.proveedores,
            "PTUPorPagar": data.PTUPorPagar,
            "prestamosMenosAnio": data.prestamosMenosAnio,
            "prestamosMasAnio": data.prestamosMasAnio,
            "cajaBancos": data.cajaBancos,
            "cuentasPorCobrar": data.cuentasPorCobrar,
            "IVAAcreditable": data.IVAAcreditable,
            "almacenArtTerm": data.almacenArtTerm,
            "almacenMateriales": data.almacenMateriales,
            "terreno": data.terreno,
            "edifInsta": data.edifInsta,
            "maqEquipo": data.maqEquipo,
            "mueblesEnseres": data.mueblesEnseres,
            "pagosAnticipado": data.pagosAnticipado,
            "gastosAmortizacion": data.gastosAmortizacion,
            "capitalSocial": data.capitalSocial,
            "reservaLegal": data.reservaLegal,
            "utilidadAcum": data.utilidadAcum,
            "depEdif": 0,
            "depMueblesEnseres": 0,
            "eqTrans": data.eqTrans,
            "Proyectos_idProyecto": idProyecto,
            "depTerreno": 0,
            "depMaqEquipo": 0,
            "depEqTrans": 0
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('balance/register/', Balance, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProyectosService.prototype.crearBalanceCero = function (idProyecto, data, num) {
        var Balance = {
            "IVAPorEnterar": data.IVAPorEnterar,
            "numeroPeriodo": num,
            "imptosPorPagar": data.imptosPorPagar,
            "proveedores": data.proveedores,
            "PTUPorPagar": data.PTUPorPagar,
            "prestamosMenosAnio": data.prestamosMenosAnio,
            "prestamosMasAnio": data.prestamosMasAnio,
            "cajaBancos": data.cajaBancos,
            "cuentasPorCobrar": data.cuentasPorCobrar,
            "IVAAcreditable": data.IVAAcreditable,
            "almacenArtTerm": data.almacenArtTerm,
            "almacenMateriales": data.almacenMateriales,
            "terreno": data.terreno,
            "edifInsta": data.edifInsta,
            "maqEquipo": data.maqEquipo,
            "mueblesEnseres": data.mueblesEnseres,
            "pagosAnticipado": data.pagosAnticipado,
            "gastosAmortizacion": data.gastosAmortizacion,
            "capitalSocial": data.capitalSocial,
            "reservaLegal": data.reservaLegal,
            "utilidadAcum": data.utilidadAcum,
            "depEdif": 0,
            "depMueblesEnseres": 0,
            "eqTrans": data.eqTrans,
            "Proyectos_idProyecto": idProyecto,
            "depTerreno": 0,
            "depMaqEquipo": 0,
            "depEqTrans": 0
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('balance/register/', Balance, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProyectosService.prototype.addProyecto = function (proyecto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('proyecto/register/' + localStorage.getItem('idUsuario'), proyecto, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProyectosService.prototype.agregaProyecto = function (proyecto) {
        var _this = this;
        this.addProyecto(proyecto).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.proyectos[key$] = data.datos[key$];
            }
        });
    };
    ProyectosService.prototype.getProyectos = function () {
        return this.http.get('proyecto/' + localStorage.getItem('idUsuario')).map(function (res) { return res.json(); });
    };
    return ProyectosService;
}());
ProyectosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__balance_service__["a" /* BalanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__balance_service__["a" /* BalanceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__usuario_maquinaria_service__["a" /* UsuarioMaquinariaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__usuario_maquinaria_service__["a" /* UsuarioMaquinariaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__usuario_producto_service__["a" /* UsuarioProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__usuario_producto_service__["a" /* UsuarioProductoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__auxiliar_service__["a" /* AuxiliarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auxiliar_service__["a" /* AuxiliarService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__desarrollo_producto_service__["a" /* DesarrolloProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__desarrollo_producto_service__["a" /* DesarrolloProductoService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__desarrollo_zona_service__["a" /* DesarrolloZonaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__desarrollo_zona_service__["a" /* DesarrolloZonaService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__usuario_zona_service__["a" /* UsuarioZonaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__usuario_zona_service__["a" /* UsuarioZonaService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__compra_maquinaria_service__["a" /* CompraMaquinariaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__compra_maquinaria_service__["a" /* CompraMaquinariaService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__usuario_zona_service__["a" /* UsuarioZonaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__usuario_zona_service__["a" /* UsuarioZonaService */]) === "function" && _l || Object])
], ProyectosService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=proyectos.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/resultados-operacion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__producto_service__ = __webpack_require__("../../../../../src/app/services/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operacion_service__ = __webpack_require__("../../../../../src/app/services/operacion.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosOperacionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultadosOperacionService = (function () {
    function ResultadosOperacionService(http, balanceService, productoService, operacionService) {
        this.http = http;
        this.balanceService = balanceService;
        this.productoService = productoService;
        this.operacionService = operacionService;
        this.opAnterior = [];
        this.opActual = [];
        this.BalanceActual = [];
        this.productosN = [];
        this.productosO = [];
        this.PCA = {
            unidadesAVender: null,
            costoUniTotal: null,
            costoAdministracion: null,
            depreciaciones: null,
            neto: null,
            IVA: null,
            total: null
        };
        this.PCD = {
            unidadesAVender: null,
            costoUniTotal: null,
            costoDistribucion: null,
            depreciaciones: null,
            neto: null,
            IVA: null,
            total: null
        };
        this.PCT = {
            unidadesAProducir: null,
            costoUniTotal: null,
            costoTrans: null,
            depreciaciones: null,
            neto: null,
            IVA: null,
            total: null
        };
        this.PCMP = {
            consumoMP: null,
            costoUnitarioMP: null,
            importe: null,
            IVAAcreditable: null
        };
        this.PGCMP = {
            unidadesAProducir: null,
            cantidadUnitaria: null,
            costoUnitarioMP: null,
            cantidad: null,
            importe: null
        };
        this.PGP = {
            unidadesAVender: null,
            inventarioFinal: null,
            inventarioInicial: null,
            unidadesAProducir: null,
            costoUnitarioMP: null,
            costoUnitarioTrans: null,
            costoProduccionUnitario: null,
            costoProduccionTotal: null
        };
        this.AAT = {
            unidades: null,
            costoUnitario: null,
            Total: null
        };
        this.PGV = {
            unidadesAVender: null,
            precioVenta: null,
            ventasEfe: null,
            importe: null
        };
        this.PAux = {
            idProducto: 0,
            AlmacenArtTerminadoI: null,
            PresupuestoGlobalVentas: null,
            PresupuestoGlobalProduccion: null,
            PresupuestoConsumoMP: null,
            PresupuestoCompraMP: null,
            PresupuestoCostoTransformacion: null,
            PresupuestoCostoDistribucion: null,
            PresupuestoCostoAdministracion: null,
            costoProduccionVentas: null,
            EstadoResultados: null
        };
    }
    ResultadosOperacionService.prototype.establecerValores = function () {
        var _this = this;
        this.productosO.length = 0;
        this.productosN = this.productoService.returnProductos();
        this.operacionService.getAllOperaciones().subscribe(function (data) {
            for (var key$ in data.datos) {
                var idProducto = data.datos[key$].Producto_idProducto;
                var CV = data.datos[key$].unidadesVendidas;
                var CA = data.datos[key$].unidadesAlmacenadas;
                _this.PAux.idProducto = idProducto;
                _this.PAux.AlmacenArtTerminadoI = _this.AAT;
                _this.PAux.PresupuestoGlobalVentas = _this.PGV;
                _this.PAux.PresupuestoGlobalProduccion = _this.PGP;
                _this.PAux.PresupuestoConsumoMP = _this.PGCMP;
                _this.PAux.PresupuestoCompraMP = _this.PCMP;
                _this.PAux.PresupuestoCostoTransformacion = _this.PCT;
                _this.PAux.PresupuestoCostoDistribucion = _this.PCD;
                _this.PAux.PresupuestoCostoAdministracion = _this.PCA;
                console.log(_this.PAux);
                _this.productosO.push(_this.PAux);
            }
        });
        console.log(this.productosO);
        return this.productosO;
    };
    return ResultadosOperacionService;
}());
ResultadosOperacionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__balance_service__["a" /* BalanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__balance_service__["a" /* BalanceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__producto_service__["a" /* ProductoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__producto_service__["a" /* ProductoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__operacion_service__["a" /* OperacionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__operacion_service__["a" /* OperacionService */]) === "function" && _d || Object])
], ResultadosOperacionService);

var _a, _b, _c, _d;
//# sourceMappingURL=resultados-operacion.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/resultados.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usuarios_service__ = __webpack_require__("../../../../../src/app/services/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__balance_service__ = __webpack_require__("../../../../../src/app/services/balance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operacion_service__ = __webpack_require__("../../../../../src/app/services/operacion.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultadosService = (function () {
    function ResultadosService(_usuariosService, _balanceService, _operacionService) {
        this._usuariosService = _usuariosService;
        this._balanceService = _balanceService;
        this._operacionService = _operacionService;
        this.balanceInicial = [];
        this.balanceFinal = [];
    }
    ResultadosService.prototype.balanceInicialUsuario = function () {
        var _this = this;
        this.balanceInicial.length = 0;
        this._usuariosService.getBalanceCero().subscribe(function (data) {
            for (var p in data.datos) {
                _this.balanceInicial.push(data.datos[p]);
                break;
            }
        });
        return this.balanceInicial;
    };
    ResultadosService.prototype.balanceInicialAnterior = function () {
        var _this = this;
        var periodoAnterior = parseInt(localStorage.getItem('numeroPeriodo')) - 1;
        this._balanceService.getBalanceByIds(localStorage.getItem('idProyecto'), periodoAnterior).subscribe(function (data) {
            Object.assign(_this.balanceInicial, data.datos);
        });
        return this.balanceInicial;
    };
    ResultadosService.prototype.getBalanceFinal = function () {
        var _this = this;
        this.balanceFinal.length = 0;
        this._balanceService.getBalance().subscribe(function (data) {
            for (var key in data.datos) {
                _this.balanceFinal.push(data.datos[key]);
            }
        });
        return this.balanceFinal;
    };
    ResultadosService.prototype.vender = function () {
        var _this = this;
        this._operacionService.getProductosV().subscribe(function (data) {
            console.log(data);
            for (var key$ in data.datos) {
                console.log(1);
                _this._operacionService.sell(data.datos[key$]).subscribe();
            }
        });
    };
    return ResultadosService;
}());
ResultadosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__usuarios_service__["a" /* UsuariosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__usuarios_service__["a" /* UsuariosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__balance_service__["a" /* BalanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__balance_service__["a" /* BalanceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__operacion_service__["a" /* OperacionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__operacion_service__["a" /* OperacionService */]) === "function" && _c || Object])
], ResultadosService);

var _a, _b, _c;
//# sourceMappingURL=resultados.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/usuario-credito.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioCreditoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioCreditoService = (function () {
    function UsuarioCreditoService(http) {
        this.http = http;
        this.creditosU = [];
    }
    UsuarioCreditoService.prototype.insertar = function (credito) {
        var _this = this;
        this.add(credito).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.creditosU[key$] = data.datos[key$];
            }
        });
    };
    UsuarioCreditoService.prototype.returnCreditosU = function (idUsuario) {
        var _this = this;
        this.creditosU.length = 0;
        this.getCreditosU(idUsuario).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.creditosU.push(data.datos[key$]);
            }
        });
        return this.creditosU;
    };
    UsuarioCreditoService.prototype.add = function (credito) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('usuarioscreditos/register/', credito, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioCreditoService.prototype.getCreditosU = function (idUsuario) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.get('usuarioscreditos/' + idUsuario).map(function (res) { return res.json(); });
    };
    UsuarioCreditoService.prototype.eliminar = function (credito) {
        for (var i = 0; this.creditosU.length > i; i++) {
            if (this.creditosU[i].idCredito == credito.idCredito) {
                this.creditosU.splice(i, 1);
            }
        }
        this.delete(credito).subscribe();
    };
    UsuarioCreditoService.prototype.delete = function (credito) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('usuarioscreditos/delete/', credito, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioCreditoService.prototype.solicitarCredito = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('prestamo/amortizacioncreditobalance/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioCreditoService.prototype.eliminarCredito = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('prestamo/deletecreditobalance/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioCreditoService.prototype.visualizarTabla = function (idCredito) {
        var x = {
            idCredito: idCredito,
            idProyecto: parseInt(localStorage.getItem('idProyecto')),
            numeroPeriodo: parseInt(localStorage.getItem('numeroPeriodo'))
        };
        var tabla = [];
        this.verTabla(x).subscribe(function (data) {
            console.log("Consulta Tabla", data.success, data.datos);
            for (var i in data.datos) {
                tabla.push(data.datos[i]);
            }
        });
        return tabla;
    };
    UsuarioCreditoService.prototype.verTabla = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('prestamo/veramortizacion/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioCreditoService.prototype.insertarAmortizacion = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('prestamo/veramortizacion/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioCreditoService.prototype.verPagosR = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('prestamo/getAmortizacion/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioCreditoService.prototype.verPagosP = function (idCredito) {
        var x = {
            idCredito: idCredito,
            idProyecto: parseInt(localStorage.getItem('idProyecto'))
        };
        var tabla = [];
        this.verPagosR(x).subscribe(function (data) {
            console.log("Consulta Tabla 2", data.success, data.datos);
            for (var i in data.datos) {
                if (data.datos[i].numeroPeriodo > parseInt(localStorage.getItem('numeroPeriodo'))) {
                    tabla.push(data.datos[i]);
                }
            }
        });
        return tabla;
    };
    UsuarioCreditoService.prototype.validarC = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var x = {
            idProyecto: localStorage.getItem('idProyecto')
        };
        return this.http.post('prestamo/validacreditos', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioCreditoService.prototype.arregloC = function () {
        var r = [];
        this.validarC().subscribe(function (data) {
            for (var key in data.datos) {
                r.push(data.datos[key]);
            }
        });
        return r;
    };
    UsuarioCreditoService.prototype.validarP = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var x = {
            idProyecto: localStorage.getItem('idProyecto')
        };
        return this.http.post('prestamo/validaperiodos', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuarioCreditoService.prototype.eliminarCreditoActivo = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('prestamo/deleteactivo', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    return UsuarioCreditoService;
}());
UsuarioCreditoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UsuarioCreditoService);

var _a;
//# sourceMappingURL=usuario-credito.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/usuario-maquinaria.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioMaquinariaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioMaquinariaService = (function () {
    function UsuarioMaquinariaService(http) {
        this.http = http;
        this.maquinariaU = [];
    }
    UsuarioMaquinariaService.prototype.returnMaquinariasU = function (idUsuario) {
        var _this = this;
        this.maquinariaU.length = 0;
        this.getMaquinariasU(idUsuario).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.maquinariaU.push(data.datos[key$]);
            }
        });
        return this.maquinariaU;
    };
    UsuarioMaquinariaService.prototype.agregarMaquinariaU = function (x) {
        var _this = this;
        this.addMaquinariaU(x).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.maquinariaU[key$] = data.datos[key$];
            }
        });
    };
    UsuarioMaquinariaService.prototype.deleteMaquinaria = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        for (var i = 0; this.maquinariaU.length > i; i++) {
            if (this.maquinariaU[i].idMaquinaria == x.idMaquinaria) {
                this.maquinariaU.splice(i, 1);
            }
        }
        return this.http.post('usuariosmaquinarias/delete/', x, headers).map(function (res) { return res.json(); });
    };
    UsuarioMaquinariaService.prototype.getMaquinariasU = function (idUsuario) {
        return this.http.get('usuariosmaquinarias/' + idUsuario).map(function (res) { return res.json(); });
    };
    UsuarioMaquinariaService.prototype.addMaquinariaU = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('usuariosmaquinarias/register/', x, headers).map(function (res) { return res.json(); });
    };
    return UsuarioMaquinariaService;
}());
UsuarioMaquinariaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UsuarioMaquinariaService);

var _a;
//# sourceMappingURL=usuario-maquinaria.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/usuario-producto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProductoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioProductoService = (function () {
    function UsuarioProductoService(http) {
        this.http = http;
        this.productosU = [];
    }
    UsuarioProductoService.prototype.insertar = function (producto) {
        var _this = this;
        this.add(producto).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.productosU[key$] = data.datos[key$];
            }
        });
    };
    UsuarioProductoService.prototype.returnProductosU = function (idUsuario) {
        var _this = this;
        this.productosU.length = 0;
        this.getProductosU(idUsuario).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.productosU.push(data.datos[key$]);
            }
        });
        return this.productosU;
    };
    UsuarioProductoService.prototype.add = function (producto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('usuariosproductos/register/', producto, headers).map(function (res) { return res.json(); });
    };
    UsuarioProductoService.prototype.getProductosU = function (idUsuario) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.get('usuariosproductos/' + idUsuario).map(function (res) { return res.json(); });
    };
    UsuarioProductoService.prototype.eliminar = function (producto) {
        for (var i = 0; this.productosU.length > i; i++) {
            if (this.productosU[i].idProducto == producto.idProducto) {
                this.productosU.splice(i, 1);
            }
        }
        this.delete(producto).subscribe();
    };
    UsuarioProductoService.prototype.delete = function (producto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('usuariosproductos/delete/', producto, headers).map(function (res) { return res.json(); });
    };
    return UsuarioProductoService;
}());
UsuarioProductoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UsuarioProductoService);

var _a;
//# sourceMappingURL=usuario-producto.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/usuario-zona.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioZonaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioZonaService = (function () {
    function UsuarioZonaService(http) {
        this.http = http;
        this.zonasU = [];
    }
    UsuarioZonaService.prototype.returnZonasU = function (idUsuario) {
        var _this = this;
        this.zonasU.length = 0;
        this.getZonasU(idUsuario).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.zonasU.push(data.datos[key$]);
            }
        });
        return this.zonasU;
    };
    UsuarioZonaService.prototype.agregarZonaU = function (x) {
        var _this = this;
        this.addZonaU(x).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.zonasU[key$] = data.datos[key$];
            }
        });
    };
    UsuarioZonaService.prototype.deleteZona = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        for (var i = 0; this.zonasU.length > i; i++) {
            if ((this.zonasU[i].idZona == x.idZona) && (this.zonasU[i].idProducto == x.idProducto)) {
                this.zonasU.splice(i, 1);
            }
        }
        return this.http.post('usuariosproductoszonas/delete/', x, headers).map(function (res) { return res.json(); });
    };
    UsuarioZonaService.prototype.getZonasU = function (idUsuario) {
        return this.http.get('usuariosproductoszonas/' + idUsuario).map(function (res) { return res.json(); });
    };
    UsuarioZonaService.prototype.addZonaU = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('usuariosproductoszonas/register/', x, headers).map(function (res) { return res.json(); });
    };
    return UsuarioZonaService;
}());
UsuarioZonaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UsuarioZonaService);

var _a;
//# sourceMappingURL=usuario-zona.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/usuarios.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_administradores_service__ = __webpack_require__("../../../../../src/app/services/administradores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuariosService = (function () {
    function UsuariosService(http, authService, administradoresService) {
        this.http = http;
        this.authService = authService;
        this.administradoresService = administradoresService;
        this.usuarios = new Array();
        this.proyectos = new Array();
        this.idAdmin = localStorage.getItem('idAdmin');
        /*
        this.getUsuarios().subscribe(data => {
          for(let key$ in data){
              this.usuarios.push(data[key$]);
          }
        });
        console.log("Perro",this.usuarios);
        */
    }
    UsuariosService.prototype.establecerValores = function () {
        var _this = this;
        this.usuarios.length = 0;
        this.getUsuarios().subscribe(function (data) {
            for (var key$ in data) {
                _this.usuarios.push(data[key$]);
            }
        });
        return this.usuarios;
    };
    UsuariosService.prototype.returnUsuarios = function () {
        return this.establecerValores();
    };
    UsuariosService.prototype.setBalanceCero = function (data, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('usuario/variables/' + id, data, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuariosService.prototype.inicializarVariables = function (data, id) {
        var _this = this;
        this.setBalanceCero(data, id).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.usuarios[key$] = data.datos[key$];
            }
        });
    };
    UsuariosService.prototype.deleteUsuario = function (id) {
        for (var i = 0; this.usuarios.length > i; i++) {
            if (this.usuarios[i].idUsuario == id) {
                this.usuarios.splice(i, 1);
                console.log("Usuario: ", id, "eliminado");
            }
        }
        console.log('usuario/delete/' + id);
        return this.http.get('usuario/delete/' + id).map(function (res) { return res.json(); });
    };
    UsuariosService.prototype.getUsuarios = function () {
        return this.http.get('usuario/').map(function (res) { return res.json(); });
    };
    UsuariosService.prototype.addMaquinaria = function () {
    };
    UsuariosService.prototype.guardarUsuario = function (usuario) {
        var _this = this;
        this.addUsuario(usuario).subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.usuarios[key$] = data.datos[key$];
            }
        });
    };
    UsuariosService.prototype.addUsuario = function (usuario) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('usuario/register/', usuario, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuariosService.prototype.getProyectos = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.get('usuario/proyectos', { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuariosService.prototype.returnProyectos = function () {
        var _this = this;
        this.proyectos.length = 0;
        this.getProyectos().subscribe(function (data) {
            for (var key$ in data) {
                _this.proyectos.push(data[key$]);
            }
        });
        return this.proyectos;
    };
    UsuariosService.prototype.getBalanceCero = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.get('usuario/balanceCero/' + localStorage.getItem('idUsuario'), { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuariosService.prototype.setUsuario = function (usuario) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        for (var i = 0; this.usuarios.length > i; i++) {
            if (this.usuarios[i].idUsuario == usuario.idUsuario) {
                this.usuarios.splice(i, 1);
                this.usuarios.push(usuario);
                break;
            }
        }
        return this.http.post('usuario/modify/' + usuario.idUsuario, usuario, { headers: headers }).map(function (res) { return res.json(); });
    };
    return UsuariosService;
}());
UsuariosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_administradores_service__["a" /* AdministradoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_administradores_service__["a" /* AdministradoresService */]) === "function" && _c || Object])
], UsuariosService);

var _a, _b, _c;
//# sourceMappingURL=usuarios.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/variables.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariablesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VariablesService = (function () {
    function VariablesService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
    }
    VariablesService.prototype.returnVariables = function () {
        var variables = [];
        this.getVariables().subscribe(function (data) {
            for (var key in data.datos) {
                variables.push(data.datos[key]);
            }
        });
        return variables;
    };
    VariablesService.prototype.editarVariable = function (x, id) {
        var variables = [];
        this.modifyVariable(x, id).subscribe(function (data) {
            for (var key in data.datos) {
                variables.push(data.datos[key]);
            }
        });
        return variables;
    };
    //Peticiones
    VariablesService.prototype.getVariables = function () {
        return this.http.get('variable/').map(function (res) { return res.json(); });
    };
    VariablesService.prototype.registerVariable = function (x) {
        return this.http.post('variable/register', x, this.headers).map(function (res) { return res.json(); });
    };
    VariablesService.prototype.modifyVariable = function (x, id) {
        return this.http.post('variable/modify/' + id, x, this.headers).map(function (res) { return res.json(); });
    };
    return VariablesService;
}());
VariablesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], VariablesService);

var _a;
//# sourceMappingURL=variables.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/zonas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZonasService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZonasService = (function () {
    function ZonasService(http) {
        this.http = http;
        this.zonas = new Array();
        this.zonasN = [];
    }
    ZonasService.prototype.establecerValores = function () {
        var _this = this;
        this.zonas.length = 0;
        this.getZonas().subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.zonas.push(data.datos[key$]);
            }
            var _loop_1 = function (key$) {
                _this.zonas[key$]['productos'] = [];
                _this.getProductos(_this.zonas[key$].idZona).subscribe(function (data) {
                    var producto = _this.limpiarArreglo(data.datos);
                    _this.zonas[key$].productos = (producto);
                });
            };
            for (var key$ in _this.zonas) {
                _loop_1(key$);
            }
        });
        return this.zonas;
    };
    ZonasService.prototype.addProducto = function (idZona, idProducto, tiempo, costo) {
        var x = {
            Zona_idZona: idZona,
            Producto_idProducto: idProducto,
            costoDes: costo,
            tiempoDes: tiempo
        };
        var y = {
            Producto_idProducto: idProducto,
            costoDes: costo,
            tiempoDes: tiempo
        };
        for (var _i = 0, _a = this.zonasN; _i < _a.length; _i++) {
            var zona_1 = _a[_i];
            if (zona_1.idZona == idZona) {
                zona_1.productos.push(y);
            }
        }
        this.agregarProducto(x).subscribe();
    };
    ZonasService.prototype.agregarProducto = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('zona/registerProducto/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    ZonasService.prototype.returnZonas = function () {
        return this.establecerValores();
    };
    ZonasService.prototype.limpiarArreglo = function (datos) {
        var ids = [];
        var productoPeriodo = [];
        for (var x in datos) {
            ids.push(datos[x].Producto_idProducto);
        }
        var hash = {};
        ids = ids.filter(function (current) {
            var exists = !hash[current] || false;
            hash[current] = true;
            return exists;
        });
        for (var y in ids) {
            var periodos = [];
            for (var z in datos) {
                if (ids[y] == datos[z].Producto_idProducto) {
                    var objeto = {
                        numero: datos[z].numPeriodo,
                        cantidad: datos[z].cantidad
                    };
                    periodos.push(objeto);
                }
            }
            productoPeriodo.push(this.unir(ids[y], periodos));
        }
        //console.log("Objeto de envio",productoPeriodo);
        return productoPeriodo;
    };
    ZonasService.prototype.unir = function (id, array) {
        var envio = new Object();
        envio['idProducto'] = id;
        envio['periodos'] = array;
        return envio;
    };
    ZonasService.prototype.returnZonasNormales = function () {
        var _this = this;
        this.zonasN.length = 0;
        this.getZonas().subscribe(function (data) {
            for (var key$ in data.datos) {
                _this.zonasN.push(data.datos[key$]);
            }
        });
        return this.zonasN;
    };
    ZonasService.prototype.getZonas = function () {
        return this.http.get('zona/').map(function (res) { return res.json(); });
    };
    ZonasService.prototype.getProductos = function (id) {
        return this.http.get('zona/productoperiodozona/' + id).map(function (res) { return res.json(); });
    };
    ZonasService.prototype.addZona = function (zona) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post('zona/register/', zona, { headers: headers }).map(function (res) { return res.json(); });
    };
    ZonasService.prototype.guardarZona = function (zona) {
        var _this = this;
        this.addZona(zona).subscribe(function (data) {
            if (data.success) {
                _this.getZonas().subscribe(function (data) {
                    for (var key$ in data.datos) {
                        _this.zonasN[key$] = data.datos[key$];
                    }
                });
            }
        });
    };
    ZonasService.prototype.setZona = function (zona) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        for (var i = 0; this.zonasN.length > i; i++) {
            if (this.zonasN[i].idZona == zona.idZona) {
                this.zonasN[i].nombreZona = zona.nombreZona;
            }
        }
        var x = {
            nombreZona: zona.nombreZona
        };
        return this.http.post('zona/modifynombrezona/' + zona.idZona, x, { headers: headers }).map(function (res) { return res.json(); });
    };
    ZonasService.prototype.editProductoZona = function (zona) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        for (var i = 0; this.zonasN.length > i; i++) {
            if (this.zonasN[i].idZona == zona.idZona) {
                for (var j = 0; j < this.zonasN[i].productos.length; j++) {
                    if (this.zonasN[i].productos[j].Producto_idProducto == zona.idProducto) {
                        this.zonasN[i].productos[j].costoDes = zona.costoDes;
                        this.zonasN[i].productos[j].tiempoDes = zona.tiempoDes;
                        console.log("Penny", this.zonasN[i].productos[j]);
                    }
                }
            }
        }
        return this.http.post('zona/modifyproductozona/', zona, { headers: headers }).map(function (res) { return res.json(); });
    };
    ZonasService.prototype.deleteZona = function (id) {
        for (var i = 0; this.zonasN.length > i; i++) {
            if (this.zonasN[i].idZona == id) {
                this.zonasN.splice(i, 1);
            }
        }
        return this.http.get('zona/delete/' + id).map(function (res) { return res.json(); });
    };
    ZonasService.prototype.deleteProducto = function (x) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var id = x.idZona;
        for (var i = 0; this.zonasN.length > i; i++) {
            if (this.zonasN[i].idZona == id) {
                for (var j = 0; j < this.zonasN[i].productos.length; j++) {
                    if (this.zonasN[i].productos[j].Producto_idProducto == x.idProducto) {
                        this.zonasN[i].productos.splice(j, 1);
                    }
                }
            }
        }
        return this.http.post('zona/deleteProducto/', x, { headers: headers }).map(function (res) { return res.json(); });
    };
    return ZonasService;
}());
ZonasService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ZonasService);

var _a;
//# sourceMappingURL=zonas.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map