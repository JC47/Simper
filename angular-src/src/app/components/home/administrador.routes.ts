import { Routes } from '@angular/router';
import {ProductosComponent} from '../productos/productos.component';
import {MaquinariasComponent} from '../maquinarias/maquinarias.component';
import {DemandasComponent} from '../demandas/demandas.component';
import {UsuariosComponent} from '../usuarios/usuarios.component';
import {CreditosComponent} from '../creditos/creditos.component';
import {ZonaProductoComponent} from '../zona-producto/zona-producto.component';
import {AdministradoresComponent} from '../administradores/administradores.component';
import {VariablesComponent} from '../variables/variables.component';

export const ADMIN_ROUTES: Routes = [
  { path:'variables', component:VariablesComponent},
  { path: 'productos', component:ProductosComponent },
  { path: 'maquinarias', component:MaquinariasComponent },
  { path: 'usuarios', component:UsuariosComponent },
  { path: 'creditos', component:CreditosComponent },
  { path: 'administradores', component:AdministradoresComponent},
  { path: 'zonas', component:DemandasComponent },
  { path: 'demandas', component:ZonaProductoComponent  },
  { path: '**', pathMatch: 'full', redirectTo: 'usuarios' }
];
