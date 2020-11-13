//Rutas
import { GESTION_ARTICULO_ROUTING } from './gestion-articulo.routes';

//@Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Imagen
import { ImageUploadModule } from 'angular2-image-upload';

//Servicios
import { GestionArticuloService } from './gestion-articulo.service';

//Componentes
import { GestionArticuloComponent } from './gestion-articulo.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { ListaArticuloComponent } from './lista-articulo/lista-articulo.component';
import { CardArticuloComponent } from './card-articulo/card-articulo.component';

@NgModule({
  declarations: [
    GestionArticuloComponent,
    CrearArticuloComponent,
    ListaArticuloComponent,
    CardArticuloComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImageUploadModule.forRoot(),
    GESTION_ARTICULO_ROUTING
  ],
  providers: [
    GestionArticuloService
  ]
})
export class GestionArticuloModule { }
