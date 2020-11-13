import { createReducer, on } from '@ngrx/store';
import { CrearArticuloModelo } from '../../models/crearArticuloModelo';
import * as actions from '../store/articulo.actions';


export interface ArticuloState{
  articulos: CrearArticuloModelo[];
}

//set the initial state with localStorage
export const initialState: CrearArticuloModelo[] = [];


const __articuloReducer = createReducer(
  initialState,

  on( actions.CREAR, (state,  articulo ) => [...state, articulo] ),

  on( actions.ELIMINAR, (state, { nombre }) => state.filter( articulo => articulo.Nombre !== nombre )),

  on( actions.LISTA_ARTICULOS, (state, { lista }) => state = lista ),

//  on( actions.EDITAR, (state, { lista }) => state = lista ),

);

export function articuloReducer(state, action) {
  return __articuloReducer(state, action);
}
