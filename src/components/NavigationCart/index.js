import React from 'react'
import { Link } from 'gatsby'

import { AiFillLock } from 'react-icons/ai'
import PropTypes from 'prop-types'
import './styles.css'
import headerLogo from '../../images/hawkIcon.svg'

const NavigatioCart = () => {
  return (
    <header>
      <div className="header-menu">
        <Link to="/" className="header-logo">
          <img src={headerLogo} alt="Hawk logo" />
        </Link>
        <div className="security-words">
          <AiFillLock />
          <div>
            <p>VOCÊ ESTÁ EM UM </p>
            <p>AMBIENTE SEGURO</p>
          </div>
        </div>
      </div>
    </header>
  )
}

NavigatioCart.propTypes = {
  siteTitle: PropTypes.string
}

NavigatioCart.defaultProps = {
  siteTitle: ``
}

export default NavigatioCart
