import React from 'react';
import AdsItem from '../AdsItem/AdsItem';
import './AdsList-styles.css';
import {useDispatch, useSelector} from "react-redux";
import {onDeleteAd} from "../../../redux/actions/adsActions";
import Pagination from "../../Pagination/Pagination";
import {splittingArray} from "../../../utils/utils";
import {setPaginationPage} from "../../../redux/actions/appActions";

const AdsList = () => {
  const ads = useSelector(state => state.adsReducer.ads);
  const currentPaginationPage = useSelector(state => state.adsReducer.currentPaginationPage);
  const currentUser = useSelector(state => state.authReducer.currentUser);
  const dispatch = useDispatch();
  const AD_PER_PAGE = 5;

  let splittedAds = ads.length ? splittingArray(ads, AD_PER_PAGE) : [];

  function inDelete(adId) {
    dispatch(onDeleteAd(adId));
  }

  function onSetPaginationPage(pageNumber) {
    dispatch(setPaginationPage(pageNumber));
  }


  return (
    <div className='ads__list'>
      <p className='ads-list__title'>Список обьявлений</p>
      {ads.length ? renderAds(splittedAds[currentPaginationPage-1], currentUser, inDelete) : null}
      {
        ads.length > AD_PER_PAGE
          ? <Pagination ads={splittedAds} activePage={currentPaginationPage} setPaginationPageCallback={onSetPaginationPage} />
          : ''
      }
      {
        !ads.length ? <p className="text-center">В даный момент нет активных обьявлений</p> : ''
      }
    </div>
  );
};

function renderAds(ads, currentUser, onDeleteCallback) {
  return ads.map(ad => {
    return <AdsItem ad={ad} currentUser={currentUser} key={ad.id} onDeleteCallback={onDeleteCallback} />
  });
}


export default AdsList;
