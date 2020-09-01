import {INIT_APP} from "../constants";
import {getFromStorage} from "../../utils/utils";

export function initApp() {
  let currentUser = getFromStorage('currentUser');
  let adsJson = getFromStorage('allAds');
  let ads = JSON.parse(adsJson)[currentUser];

  return {
    type: INIT_APP,
    currentUser,
    ads
  }
}