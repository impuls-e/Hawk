import React from 'react';
import './styles.css';
import { isMobile } from 'react-device-detect';

import menuIcon from '../../images/menuIcon.svg';
import hawkLogo from '../../images/hawkIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
import cartIcon from '../../images/cartIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

export default function Header() {
  if (isMobile) {
    return (
      <React.Fragment>
        <header>
          <img src={menuIcon} alt="Hawk menu" />
          <img src={hawkLogo} alt="Hawk logo" />
          <div className="user-session">
            <img src={profileIcon} alt="Hawk profile" />
            <img src={cartIcon} alt="Hawk cart" />
          </div>
        </header>
        <div className="search-area">
          <p>O que você procura ?</p>
          <img src={searchIcon} alt="Hawk search" />
        </div>
      </React.Fragment>
    );
  }
  return (
    <header>
      <img src={menuIcon} alt="Hawk menu" />
      <img src={hawkLogo} alt="Hawk logo" />
      <div className="user-session">
        <img src={profileIcon} alt="Hawk profile" />
        <img src={cartIcon} alt="Hawk cart" />
      </div>
    </header>
  );
}
