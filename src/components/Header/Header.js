import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import './Header.css';
import {logOut} from "../../redux/actions/authActions";

const Header = () => {
  const currentUser = useSelector(state => state.authReducer.currentUser);
  const dispatch = useDispatch();


  let loggedUserBlock = (
      <React.Fragment>
        <div>
          <span className="header__user-name">{currentUser}</span>
        </div>
        <Link to='/edit'>
          <button type="button" className="btn btn-primary header__create-ad">Создать</button>
        </Link>
        <button
            type="button"
            className="btn btn-secondary"
            onClick={() => dispatch(logOut())}
        >Выйти</button>
      </React.Fragment>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <Link to='/' className="navbar-brand">
        Доска обьявлений
      </Link>
      <div className="header__user-block">
        {currentUser ? loggedUserBlock : ''}
      </div>
    </nav>
  );
};

export default Header;
