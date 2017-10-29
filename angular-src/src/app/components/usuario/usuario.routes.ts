import { Routes } from '@angular/router';
import { ProyectosComponent} from './proyectos/proyectos.component';
import { ProyectoUsuarioComponent} from './proyecto-usuario/proyecto-usuario.component'
import { PROYECTO_ROUTES } from './proyecto-usuario/proyecto.routes';

export const USUARIO_ROUTES: Routes = [
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'proyecto', component: ProyectoUsuarioComponent, 
    children: PROYECTO_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'proyectos' }
];
