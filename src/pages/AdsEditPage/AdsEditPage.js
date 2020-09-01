import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {generateId, getDate} from "../../utils/utils";
import {onSaveAd} from "../../redux/actions/adsActions";
import {Redirect} from "react-router-dom";
import './AdsEditPage.css';

const AdsEditPage = () => {
  const currentUser = useSelector(state => state.authReducer.currentUser);
  const isSuccessSave = useSelector(state => state.adsReducer.isSuccessSave);
  const [adTitle, setAdTitle] = useState('');
  const [adDescription, setAdDescription] = useState('');
  const dispatch = useDispatch();
  const [isAdTitleValid, setAdTitleValid] = useState(true);
  const [isDescriptionValid, setDescriptionValid] = useState(true);

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

    let ad = {
      title: adTitle,
      description: adDescription,
      authorName: currentUser,
      createdAt: getDate(),
      id: generateId('ad')
    };

    dispatch(onSaveAd(ad));
    setAdTitle('');
    setAdDescription('');
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
              Создать
            </button>
            {isSuccessSave ? <p className='text-success save__success'>Обьявление добавлено</p> : null}
          </div>
        </form>
      </div>
  );
};

export default AdsEditPage;
