import React from 'react';
import AdsItem from '../AdsItem/AdsItem';
import './AdsList-styles.css';
import {useSelector} from "react-redux";

const AdsList = () => {
  const ads = useSelector(state => state.adsReducer.ads);

  return (
    <div className='ads__list'>
      <p className='ads-list__title'>Список обьявлений</p>
      {ads ? renderAds(ads) : null}
      <div className='ads__pagination'>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link">Предыдущая</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link">
                2
                <span className="sr-only">(current)</span>
              </span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">Следующая</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

function renderAds(ads) {
  return ads.map(ad => {
    return <AdsItem ad={ad} key={ad.id} />
  });
}


export default AdsList;
