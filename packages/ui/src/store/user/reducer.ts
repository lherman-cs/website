import {
  LoginState,
  UserState,
  UserActionTypes,
  LOGIN,
  FETCH_USER,
  FetchUserState
} from "./types";

const initialState: UserState = {
  data: null,
  login: null,
  fetchUser: null
};

export default function(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case LOGIN:
      return { ...state, login: action.payload as LoginState };
    case FETCH_USER:
      const payload = action.payload;
      const newState = {
        ...state,
        fetchUser: action.payload as FetchUserState
      };

      if (payload.status === "success") {
        newState.data = payload.data;
      }
      return newState;
    default:
      return state;
  }
}
