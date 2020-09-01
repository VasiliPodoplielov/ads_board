import React from 'react';
import Auth from '../../components/Auth/Auth';
import AdsList from '../../components/Ads/AdsList/AdsList';
import {useSelector} from "react-redux";

const HomePage = () => {
  let currentUser = useSelector(state => state.authReducer.currentUser);

  return (
    <div>
      <h1 className='text-center'>Главная страница</h1>
      { currentUser ? '' : <Auth />}
      <hr/>
      <AdsList />
    </div>
  );
};

export default HomePage;
