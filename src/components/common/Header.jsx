import React from 'react';
import PropTypes from 'prop-types';
import { headerDate } from 'utils/headerDate.js';
import icTopbarMenu from 'assets/images/ic_topbar_menu.png';
import 'assets/styles/Header.scss';

const Header = props => {
  const { logoClickHandler } = props;

  return (
    <div className="header">
      <div className="header-left">
        <img src={icTopbarMenu} alt="ic_topbar_menu.png" onClick={logoClickHandler} />
        <div className="header-left-service" onClick={logoClickHandler}>
          My Todo
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-date">{headerDate()}</div>
        <div className="header-right-btn">Sign up</div>
      </div>
    </div>
  );
};

Header.propTypes = {
  logoClickHandler: PropTypes.func,
};

export default Header;
