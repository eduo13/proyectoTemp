import { Action } from '@ngrx/store';

/* export const LOGIN = '[Login] Set Login';
export const UNSET_LOGIN = '[Login] Unset Login'; */


export enum AuthenticationActionTypes {
  LOGIN = '[Authentication] Login',
  LOGIN_SUCCESS = '[Authentication] Login Success',
  LOGIN_FAILURE = '[Authentication] Login Failure',
  SIGNUP = '[Authentication] Signup',
  SIGNUP_SUCCESS = '[Authentication] Signup Success',
  SIGNUP_FAILURE = '[Authentication] Signup Failure',
  LOGOUT = '[Authentication] Logout',
  UNSET_LOGIN = '[Authentication] Unset login',
  GET_STATUS = '[Authentication] GetStatus',
}

export class Login implements Action {
  readonly type = AuthenticationActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthenticationActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = AuthenticationActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthenticationActionTypes.LOGOUT;
}

export class GetStatus implements Action {
  readonly type = AuthenticationActionTypes.GET_STATUS;
}

//export type AccionesLogin = SetLoginAction | UnsetLoginAction;
export type AuthenticationActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | GetStatus;

