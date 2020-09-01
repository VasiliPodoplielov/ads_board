import {INIT_APP, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT} from '../constants';

const initialState = {
  currentUser: null,
  loginFailed: false
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, currentUser: action.userName, loginFailed: false}
    case LOGIN_FAILED:
      return {...state, loginFailed: true}
    case LOGOUT:
      return {...state, currentUser: ''}
    case INIT_APP:
      return {...state, currentUser: action.currentUser}
    default:
      return state;
  }
}
