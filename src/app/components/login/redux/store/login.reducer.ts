import { DatosLogin } from '../../models/datosLogin';
import { AuthenticationActionTypes, AuthenticationActions } from './login.actions';

export interface LoginState {
  isAuthenticated: boolean;
  user: DatosLogin | null;
  errorMessage: string | null;
}

//set the initial state with localStorage
export const initialState: LoginState = {
  isAuthenticated: false,
  user: {
          token: null,
          email: null
        },
  errorMessage: null
};

export function loginReducer(state = initialState, action: AuthenticationActions): LoginState {
  switch (action.type) {
    case AuthenticationActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthenticationActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload.message
      };
    }
    case AuthenticationActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}




