import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {adsReducer} from "./adsReducer";

export default combineReducers({
  authReducer: authReducer,
  adsReducer: adsReducer
});
