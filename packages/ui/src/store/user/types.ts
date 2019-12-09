import { Action } from "redux";

import { User } from "model/user";
import { AsyncState } from "model/store";
import { Error } from "model/error";

/* State */
export type LoginState = AsyncState<null, null, Error>;
export type FetchUserState = AsyncState<null, User, Error>;

export type UserState = {
  data: User | null;
  login: LoginState | null;
  fetchUser: FetchUserState | null;
};

/* Action */
const NAMESPACE = "USER";
export const LOGIN = `${NAMESPACE}/LOGIN`;
export const FETCH_USER = `${NAMESPACE}/FETCH_USER`;

export type UserActionTypes = LoginAction | FetchUserAction;

export interface LoginAction extends Action {
  type: typeof LOGIN;
  payload: LoginState;
}

export interface FetchUserAction extends Action {
  type: typeof FETCH_USER;
  payload: FetchUserState;
}
