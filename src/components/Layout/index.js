import React from "react"

import headerLogo from "../../images/hawkIcon.svg"
import profileIcon from "../../images/profileIcon.svg"
import cartIcon from "../../images/cartIcon.svg"
import searchIcon from "../../images/searchIcon.svg"

import footerLogo from "../../images/footerLogo.svg"
import paymentImage from "../../images/payment.svg"

import Header from "../Header/"
import Newsletter from "../Newsletter"
import Footer from "../Footer/"

import "./styles.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header
        headerLogo={headerLogo}
        profileIcon={profileIcon}
        cartIcon={cartIcon}
        searchIcon={searchIcon}
      />
      <main>{children}</main>
      <Newsletter />
      <Footer footerLogo={footerLogo} paymentImage={paymentImage} />
    </React.Fragment>
  )
}

export default Layout
