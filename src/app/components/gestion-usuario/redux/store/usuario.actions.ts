//import { Action } from '@ngrx/store';

import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../models/UserModel';

/*
export enum UserTypes {
  CREAR = '[User] Crear',
  EDITAR = '[User] Editar',
}

export class CrearUser implements Action {
  readonly type = UserTypes.CREAR;
  constructor(public payload: any) {}
}

export class EditarUser implements Action {
  readonly type = UserTypes.EDITAR;
  constructor(public payload: any) {}
}


export type UserActions =
  | CrearUser
  | EditarUser;
*/

  export const CREAR = createAction(
    '[User] Crear User',
    props<UserModel>());

  export const EDITAR = createAction(
    '[User] Editar User',
    props<{id_usuario: number, id_perfil: number, usuario: string, email: string}>());

  export const ELIMINAR = createAction(
    '[User] Eliminar User',
    props<{id: number}>());
