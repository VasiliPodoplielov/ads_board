import {SAVE_AD, CHANGE_SUCCESS_SAVE, INIT_APP} from "../constants";

const initialState = {
  ads: [],
  isSuccessSave: false
};

export function adsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_AD:
      return {...state, ads: action.ads}
    case CHANGE_SUCCESS_SAVE:
      return {...state, isSuccessSave: !state.isSuccessSave}
    case INIT_APP:
      return {...state, ads: action.ads}
    default:
      return state;
  }
}