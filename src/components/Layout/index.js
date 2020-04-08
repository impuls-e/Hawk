import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import headerLogo from '../../images/hawkIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
import cartIcon from '../../images/cartIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

import footerLogo from '../../images/footerLogo.svg';
import paymentImage from '../../images/payment.svg';

import Header from '../Header/';
import Footer from '../Footer/';

import './styles.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Header
        siteTitle={data.site.siteMetadata.title}
        headerLogo={headerLogo}
        profileIcon={profileIcon}
        cartIcon={cartIcon}
        searchIcon={searchIcon}
      />
      <main>{children}</main>
      <Footer footerLogo={footerLogo} paymentImage={paymentImage} />
    </React.Fragment>
  );
};

export default Layout;
