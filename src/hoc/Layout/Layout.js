import React from 'react';
import Header from '../../components/Header/Header';
import {useDispatch} from "react-redux";
import {initApp} from "../../redux/actions/appActions";

const Layout = props => {
  const dispatch = useDispatch();

  dispatch(initApp());

  return (
    <div>

      <Header />

      <main>
        <div className='container'>
          {props.children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
