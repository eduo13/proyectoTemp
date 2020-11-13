import { GestionUsuarioComponent } from './gestion-usuario.component';
import { Routes, RouterModule } from '@angular/router';


const GESTION_USUARIO_ROUTES: Routes = [
    { path: 'gu', component: GestionUsuarioComponent},
    {path: '', redirectTo:'gu'}
];

export const GESTION_USUARIO_ROUTING = RouterModule.forChild(GESTION_USUARIO_ROUTES);
