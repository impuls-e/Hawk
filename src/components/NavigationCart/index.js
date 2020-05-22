import React from 'react'
import { Link } from 'gatsby'

import { AiFillLock } from 'react-icons/ai'
import PropTypes from 'prop-types'
import './styles.css'
import HeaderLogo from '../../images/footerLogo.svg'

const NavigatioCart = () => {
  return (
    <header className="cart">
      <div className="cart-menu">
        <Link to="/" className="header-logo">
          <img src={HeaderLogo} alt="Hawk logo" />
        </Link>
        <div className="security-words">
          <AiFillLock />
          <div>
            <p>VOCÊ ESTÁ EM UM</p>
            <p>AMBIENTE SEGURO</p>
          </div>
        </div>
      </div>
    </header>
  )
}

NavigatioCart.propTypes = {
  siteTitle: PropTypes.string,
}

NavigatioCart.defaultProps = {
  siteTitle: ``,
}

export default NavigatioCart
