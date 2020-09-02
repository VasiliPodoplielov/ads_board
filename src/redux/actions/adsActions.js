import {SAVE_AD, CHANGE_SUCCESS_SAVE, DELETE_AD} from "../constants";
import {getFromStorage, setToStorage} from "../../utils/utils";

export function onSaveAd(adInfo) {
  return dispatch => {
    let allAdsJSON = getFromStorage('allAds');
    let allAds = allAdsJSON ? JSON.parse(allAdsJSON) : [];
    let foundAd = allAds.find(ad => ad.id === adInfo.id);

    if (foundAd) {
      allAds = allAds.map(ad => {
        if (ad.id === foundAd.id) {
          ad.title = adInfo.title;
          ad.description = adInfo.description;
        }

        return ad;
      });

      setToStorage('allAds', JSON.stringify(allAds));
    } else {
      setToStorage('allAds', JSON.stringify([...allAds, adInfo]));
    }

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

export function onDeleteAd(adId) {
  let allAdsJSON = getFromStorage('allAds');
  let allAds = JSON.parse(allAdsJSON);

  allAds = allAds.filter(ad => ad.id !== adId);

  setToStorage('allAds', JSON.stringify(allAds));

  return {
    type: DELETE_AD,
    ads: allAds
  }
}


function changeIsSuccessSave() {
  return {
    type: CHANGE_SUCCESS_SAVE
  }
}

