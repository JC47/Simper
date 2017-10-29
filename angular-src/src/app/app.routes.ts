import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {AuthGuard} from './guards/auth.guard';
import { ADMIN_ROUTES} from './components/home/administrador.routes';
import {USUARIO_ROUTES } from'./components/usuario/usuario.routes';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'Administrador', component:HomeComponent, canActivate:[AuthGuard],
    children: ADMIN_ROUTES
  },
  { path: 'Usuario', component:UsuarioComponent, canActivate:[AuthGuard],
    children: USUARIO_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);

//Calette was here
