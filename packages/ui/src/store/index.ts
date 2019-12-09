import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook
} from "react-redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { UserState, UserActionTypes, userReducer, userActions } from "./user";

export interface RootState {
  user: UserState;
}

export type ActionTypes = UserActionTypes;

export const actions = {
  user: userActions
};

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export type ReduxDispatch = ThunkDispatch<RootState, any, ActionTypes>;
export function useDispatch(): ReduxDispatch {
  return useReduxDispatch<ReduxDispatch>();
}

const reducer = combineReducers<RootState>({
  user: userReducer
});
const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
