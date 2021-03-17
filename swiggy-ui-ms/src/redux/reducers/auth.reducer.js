import { AuthConstants } from '../constants';

const initialState = { loggedIn: false, user: null }

export function authentication(state = initialState, action) {
  switch (action.type) {
    case AuthConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.data
      };
    case AuthConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        user: null
      };
    case AuthConstants.LOGOUT:
        return {
            loggedIn: false,
            user: null
          };
    default:
      return state
  }
}