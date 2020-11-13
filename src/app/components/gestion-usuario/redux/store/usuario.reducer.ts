
import { createReducer, on } from '@ngrx/store';
import { UserModel } from '../../models/UserModel';
import * as actions from './usuario.actions';



export interface UserState{
  users: UserModel[];
}

//set the initial state with localStorage
export const initialState: UserModel[] = [];

const __userReducer = createReducer(
  initialState,

  on( actions.CREAR, (state,  UserModel ) => [...state, UserModel] ),

  on( actions.ELIMINAR, (state, { id }) => state.filter( user => user.ID_Usuario !== id )),

  on( actions.EDITAR, (state, { id_usuario, id_perfil, usuario, email }) => {
      return state.map( user => {
          console.log("USER_id = " + user.ID_Usuario + " USERMODEL_id " + id_usuario);
        if(user.ID_Usuario == id_usuario){
          console.log("USER = " + user.Email);
          return {
            ...user,
            Usuario: usuario,
            Id_Perfil: id_perfil,
            Email: email
          };
        }else{
          return user;
        }
      });
  }),


);

export function userReducer(state, action) {
  return __userReducer(state, action);
}
