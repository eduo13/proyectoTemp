import { createAction, props } from '@ngrx/store';
import { CrearArticuloModelo } from '../../models/crearArticuloModelo';


  export const CREAR = createAction(
    '[Articulo] Crear articulo',
    props<CrearArticuloModelo>());

  export const ELIMINAR = createAction(
    '[Articulo] Eliminar articulo',
    props<{nombre: string}>());

  export const LISTA_ARTICULOS = createAction(
    '[Articulo] Lista articulos',
    props<{lista: CrearArticuloModelo[]}>());
