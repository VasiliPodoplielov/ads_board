import {INIT_APP, SET_PAGINATION_PAGE} from "../constants";
import {getFromStorage, setToStorage} from "../../utils/utils";

export function initApp() {
  let currentUser = getFromStorage('currentUser');
  let adsJson = getFromStorage('allAds');
  let ads = adsJson ? JSON.parse(adsJson) : [];
  let currentPaginationPage = getFromStorage('currentPaginationPage') || 1;

  return {
    type: INIT_APP,
    currentUser,
    ads,
    currentPaginationPage
  }
}

export function setPaginationPage(pageNumber) {
  setToStorage('currentPaginationPage', pageNumber);

  return {
    type: SET_PAGINATION_PAGE,
    currentPaginationPage: pageNumber
  }
}