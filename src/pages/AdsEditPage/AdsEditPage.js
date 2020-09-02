import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {generateId, getDate} from "../../utils/utils";
import {onSaveAd} from "../../redux/actions/adsActions";
import {Redirect, useParams, useHistory} from "react-router-dom";
import './AdsEditPage.css';

const AdsEditPage = () => {
  const currentUser = useSelector(state => state.authReducer.currentUser);
  const ads = useSelector(state => state.adsReducer.ads);
  const {adId} = useParams();
  const currentAd = adId ? ads.find(ad => ad.id === adId) : {};
  const [adTitle, setAdTitle] = useState(currentAd.title || '');
  const [adDescription, setAdDescription] = useState(currentAd.description || '');
  const dispatch = useDispatch();
  const [isAdTitleValid, setAdTitleValid] = useState(true);
  const [isDescriptionValid, setDescriptionValid] = useState(true);
  const history = useHistory();

  if (!currentUser) {
    return (
        <Redirect to="/" />
    )
  }

  function onSave() {
    if (!adTitle) {
      setAdTitleValid(false);
      return;
    }

    if (!adDescription) {
      setDescriptionValid(false);
      return;
    }

    let ad;

    if (Object.keys(currentAd).length) {
      ad = {
        title: adTitle,
        description: adDescription,
        authorName: currentUser,
        createdAt: currentAd.createdAt,
        id: currentAd.id
      }
    } else {
      ad = {
        title: adTitle,
        description: adDescription,
        authorName: currentUser,
        createdAt: getDate(),
        id: generateId('ad')
      };
    }

    dispatch(onSaveAd(ad));
    setAdTitle('');
    setAdDescription('');

    history.push(`/${ad.id}`);
  }


  return (
      <div>
        <h1>Создание обьявления</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Заголовок</label>
            <input
                type="text"
                className={`form-control border ${isAdTitleValid ? '' : 'border-danger'}`}
                placeholder="Введите заголовок обьявления"
                value={adTitle}
                onChange={(e) => setAdTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Описание</label>
            <textarea
                className={`form-control border ${isDescriptionValid ? '' : 'border-danger'}`}
                rows="3"
                placeholder="Введите описание обьявления"
                value={adDescription}
                onChange={(e) => setAdDescription(e.target.value)}
            />
          </div>
          <div className='d-flex align-items-center'>
            <button
                type="button"
                className="btn btn-success"
                onClick={onSave}
            >
              {`${adId ? 'Сохранить' : 'Создать'}`}
            </button>
          </div>
        </form>
      </div>
  );
};

export default AdsEditPage;
