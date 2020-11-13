import { HomeComponent } from './components/shared/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthServiceCanloadGuard } from './services/auth-service-canload.guard';
import { AuthServiceCanActivateGuard } from './services/auth-service-canactivate.guard';
import { Perfil } from './components/login/Models/Perfil';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent,
     canActivate: [AuthServiceCanActivateGuard],
    },
    { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
    { path: 'gestionUsuario',
     loadChildren: () => import('./components/gestion-usuario/gestion-usuario.module').then(m => m.GestionUsuarioModule),
     canLoad: [AuthServiceCanloadGuard],
     canActivate: [AuthServiceCanActivateGuard],
     data: { perfiles: [Perfil.Admin] } },

    { path: 'gestionArticulo',
     loadChildren: () => import('./components/gestion-articulo/gestion-articulo.module').then(m => m.GestionArticuloModule),
     canLoad: [AuthServiceCanloadGuard],
     canActivate: [AuthServiceCanActivateGuard],
     data: { perfiles: [Perfil.Admin] } },

    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
