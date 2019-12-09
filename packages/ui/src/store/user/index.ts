import {
  UserState as _UserState,
  UserActionTypes as _UserActionTypes
} from "./types";
import * as actions from "./actions";

export { default as userReducer } from "./reducer";
export type UserState = _UserState;
export type UserActionTypes = _UserActionTypes;
export const userActions = actions;
