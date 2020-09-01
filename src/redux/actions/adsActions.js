import {SAVE_AD, CHANGE_SUCCESS_SAVE} from "../constants";
import {getFromStorage, setToStorage} from "../../utils/utils";

export function onSaveAd(adInfo) {
  return dispatch => {
    let allAdsJSON = getFromStorage('allAds');
    let allAds = allAdsJSON ? JSON.parse(allAdsJSON) : {};

    let currentUser = getFromStorage('currentUser');

    if (allAds[currentUser]) {
      allAds[currentUser].push(adInfo);


    } else {
      allAds[currentUser] = new Array(adInfo);
    }

    setToStorage('allAds', JSON.stringify(allAds));
    dispatch(changeIsSuccessSave());

    setTimeout(() => {
      dispatch(changeIsSuccessSave());
    }, 4000);

    dispatch({
      type: SAVE_AD,
      ads: allAds
    })
  };
}


function changeIsSuccessSave() {
  return {
    type: CHANGE_SUCCESS_SAVE
  }
}

