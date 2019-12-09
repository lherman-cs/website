import { ThunkDispatch } from "redux-thunk";
import * as api from "api/user";
import {
  LoginState,
  UserState,
  FetchUserState,
  LoginAction,
  FetchUserAction,
  LOGIN,
  FETCH_USER
} from "./types";

export function login() {
  return async (dispatch: ThunkDispatch<UserState, void, LoginAction>) => {
    const _dispatch = (payload: LoginState) =>
      dispatch({ type: LOGIN, payload });

    _dispatch({ status: "pending", data: null });
    const result = await api.login();
    _dispatch(result);
  };
}

export function fetchUser(uid: string) {
  return async (dispatch: ThunkDispatch<UserState, void, FetchUserAction>) => {
    const _dispatch = (payload: FetchUserState) =>
      dispatch({ type: FETCH_USER, payload });

    _dispatch({ status: "pending", data: null });
    const result = await api.fetchUser(uid);
    _dispatch(result);
  };
}
