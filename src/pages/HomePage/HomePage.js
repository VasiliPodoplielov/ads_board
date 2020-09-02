import React from 'react';
import Auth from '../../components/Auth/Auth';
import AdsList from '../../components/Ads/AdsList/AdsList';
import {useSelector} from "react-redux";


const HomePage = () => {
  let currentUser = useSelector(state => state.authReducer.currentUser);

  return (
    <div className="mt-2">
      { currentUser ? '' : <Auth />}
      <AdsList />
    </div>
  );
};

export default HomePage;
