import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect, useParams} from 'react-router-dom';
import {onDeleteAd} from "../../redux/actions/adsActions";

const AdsViewPage = () => {
  const ads = useSelector(state => state.adsReducer.ads);
  const currentUser = useSelector(state => state.authReducer.currentUser);
  const dispatch = useDispatch();
  let {adId} = useParams();
  const currentAd = ads.find(ad => ad.id === adId);

  if (!currentAd) {
    return (
        <Redirect to="/" />
    )
  }

  let actionsBlock;

  if (currentUser === currentAd.authorName) {
    actionsBlock = (
        <div className="card__actions d-flex">
          <Link to={`/edit/${adId}`}>
            <button type="button" className="btn btn-outline-secondary btn-sm" style={{marginRight: '10px'}}>
              Изменить
            </button>
          </Link>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => dispatch(onDeleteAd(currentAd.id))}>Удалить</button>
        </div>
    )
  } else {
    actionsBlock = null;
  }

  return (
      <div className="container">
        <h1 className="text-center mt-3 mb-5">
          {currentAd.title}
        </h1>
        <p>{currentAd.description}</p>
        <span className="text-muted">{currentAd.authorName}</span>
        {actionsBlock}
      </div>
  )
};

export default AdsViewPage;
