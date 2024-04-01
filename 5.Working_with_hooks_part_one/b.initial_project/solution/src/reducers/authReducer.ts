import { Auth, AuthAction, AuthActionType } from "../types/auth";

export function authReducer(auth: Auth, action: AuthAction) {
  switch (action.type) {
    case AuthActionType.LOG_IN: {
      return {
        isLoggedIn: true,
        userName: action.userName,
      };
    }
    case AuthActionType.LOG_OUT: {
      return {
        isLoggedIn: false,
        userName: "",
      };
    }
    default: {
      return auth;
    }
  }
}
