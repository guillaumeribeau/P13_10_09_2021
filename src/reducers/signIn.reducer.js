import { SIGNIN_USER } from "../actions/signIn.action";

const initialState = {};

export default function signInReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return action.payload;

    default:
      return state;
  }
}
