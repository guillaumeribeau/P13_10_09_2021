import { ACCES_PROFIL, SIGNIN_USER } from "../actions/signIn.action";
import { EDIT_NAME} from "../actions/editName.action";
import { SIGNOUT_USER} from "../actions/signOut.action";

const initialState = {};

export default function signInReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return action.payload;
      case ACCES_PROFIL:
        return action.payload
        case EDIT_NAME:
        return action.payload
        case SIGNOUT_USER:
        return action.type

    default:
      return state;
  }
}
