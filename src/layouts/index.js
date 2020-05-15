import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import NavigationCart from '~/components/NavigationCart'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import FloatWhatsapp from '../components/FloatWhatsapp'

import './styles.css'

const Layout = ({ children }) => {
  const actualPath = children.props.path

  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <React.Fragment>
            {actualPath !== '/cart/' ? (
              <Navigation siteTitle={data.site.siteMetadata.title} />
            ) : (
              <NavigationCart />
            )}
            <main>{children}</main>
            {actualPath !== '/cart/' ? <Newsletter /> : null}
            <Footer />
            <FloatWhatsapp />
          </React.Fragment>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
