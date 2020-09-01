import {getFromStorage, setToStorage} from '../../utils/utils';
import {LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT} from '../constants';

export function logIn(userInfo) {
  return dispatch => {
    let usersJson = getFromStorage('users');
    let users = usersJson ? JSON.parse(usersJson) : [];

    let foundUser = users.find((user) => {
      return user.login === userInfo.login;
    });

    if (!foundUser) {
      users = [...users, userInfo];
      setToStorage('users', JSON.stringify(users));
      setToStorage('currentUser', userInfo.login);
      dispatch(loginSuccess(userInfo.login));
    } else {
      if (userInfo.password !== foundUser.password) {
        dispatch(loginFailed());
      } else {
        setToStorage('currentUser', foundUser.login);
        dispatch(loginSuccess(foundUser.login));
      }
    }
  }
}

export function logOut() {
  setToStorage('currentUser', '');

  return {
    type: LOGOUT
  }
}

export function loginSuccess(userName) {
  return {
    type: LOGIN_SUCCESS,
    userName
  }
}

export function loginFailed() {
  return {
    type: LOGIN_FAILED
  }
}
