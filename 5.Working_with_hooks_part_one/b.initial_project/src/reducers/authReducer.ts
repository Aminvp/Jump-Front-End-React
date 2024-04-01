import { Auth, AuthAction, AuthActionType } from "../types/auth";

export function authReducer(auth: Auth, action: AuthAction) {
  switch (action.type) {
    case AuthActionType.LOG_IN:
      return {...auth, isLoggedIn: true, userName:action.userName};
    case AuthActionType.LOG_OUT:
      return { ...auth, isLoggedIn: false };
    default: 
      return auth;
  }
}
