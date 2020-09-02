import {SAVE_AD, INIT_APP, DELETE_AD, SET_PAGINATION_PAGE} from "../constants";

const initialState = {
  ads: [],
  currentPaginationPage: 1
};

export function adsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_AD:
      return {...state, ads: action.ads}
    case DELETE_AD:
      return {...state, ads: action.ads}
    case INIT_APP:
      return {...state, ads: action.ads, currentPaginationPage: action.currentPaginationPage}
    case SET_PAGINATION_PAGE:
      return {...state, currentPaginationPage: action.currentPaginationPage}
    default:
      return state;
  }
}
