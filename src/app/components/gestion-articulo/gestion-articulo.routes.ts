import { CardArticuloComponent } from './card-articulo/card-articulo.component';
import { Routes, RouterModule } from '@angular/router';
import { GestionArticuloComponent } from './gestion-articulo.component';


const GESTION_ARTICULO_ROUTES: Routes = [
    { path: '', component: GestionArticuloComponent},
    { path: 'listadoArticulo', component: CardArticuloComponent},
    
];

export const GESTION_ARTICULO_ROUTING = RouterModule.forChild(GESTION_ARTICULO_ROUTES);