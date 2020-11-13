//Rutas
import { GESTION_USUARIO_ROUTING } from './gestion-usuario.routes';

//@Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Servicios
import { GestionUsuarioService } from './gestion-usuario.service';

//Componentes
import { GestionUsuarioComponent } from './gestion-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    GestionUsuarioComponent,
    CrearUsuarioComponent,
    UserListComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GESTION_USUARIO_ROUTING
  ],
  providers: [
    GestionUsuarioService
  ]
})
export class GestionUsuarioModule { }
