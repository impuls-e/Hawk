import React from 'react';
import { Link } from 'gatsby';
import { isMobile } from 'react-device-detect';
import './styles.css';

import menuIcon from '../../images/menuIcon.svg';
import hawkLogo from '../../images/hawkIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
import cartIcon from '../../images/cartIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

export default function Header() {
  const state = {
    navbarOpen: false,
    links: [
      {
        id: 1,
        path: '/camisetas',
        text: 'camisetas'
      },
      {
        id: 2,
        path: '/shorts',
        text: 'shorts'
      },
      {
        id: 3,
        path: '/calças',
        text: 'calças'
      },
      {
        id: 4,
        path: '/acessorios',
        text: 'acessórios'
      }
    ]
  };

  if (isMobile) {
    return (
      <React.Fragment>
        <header className="header-mobile">
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
    <header className="header-desktop">
      <img src={hawkLogo} alt="Hawk logo" />
      <ul>
        {state.links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} className="">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="user-session">
        <img src={searchIcon} alt="Hawk search" />
        <img src={profileIcon} alt="Hawk profile" />
        <img src={cartIcon} alt="Hawk cart" />
      </div>
    </header>
  );
}
