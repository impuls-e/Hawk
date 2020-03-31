import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header/header';
import './layout.css';

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
