import React from 'react';
import './styles.css';

import menuIcon from '../../images/menu.svg';
import hawkLogo from '../../images/hawk.svg';
import profileIcon from '../../images/profile.svg';
import cartIcon from '../../images/cart.svg';

const Header = ({ siteTitle }) => (
  <header>
    <img src={menuIcon} alt="Hawk menu" />
    <img src={hawkLogo} alt="Hawk logo" />
    <img src={profileIcon} alt="Hawk profile" />
    <img src={cartIcon} alt="Hawk cart" />
  </header>
);

export default Header;
