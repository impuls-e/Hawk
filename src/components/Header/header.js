import React from 'react';
import './styles.css';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>{siteTitle}</h1>
    </div>
  </header>
);

export default Header;
