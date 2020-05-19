import React, { useContext, useState } from 'react'
import { Link } from 'gatsby'

import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import './styles.css'
import StoreContext from '~/context/StoreContext'
import { CartCounter, MenuLink } from './styles'
import headerLogo from '../../images/hawkIcon.svg'
// import profileIcon from "../../images/profileIcon.svg"
import { FiShoppingCart } from 'react-icons/fi'
import searchIcon from '../../images/searchIcon.svg'

const useQuantity = () => {
  const { store: { checkout } } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [ total !== 0, total ]
}

const Navigation = () => {
  const [ hasItems, quantity ] = useQuantity()
  const [ classOn, setClassOn ] = useState('')
  const [ show, setShow ] = useState(false)
  const menu = {
    links: [
      {
        id: 1,
        path: '/camisetas',
        text: 'camisetas'
      },
      {
        id: 2,
        path: '/moletons',
        text: 'moletons'
      },
      {
        id: 3,
        path: '/calcas',
        text: 'calças'
      }
      // {
      //   id: 4,
      //   path: '/acessorios',
      //   text: 'acessórios'
      // }
    ]
  }
  function handleMenu() {
    if (classOn) document.body.style.overflow = show ? 'initial' : 'hidden'
    show ? setClassOn('') : setClassOn('on')
    setShow(!show)
  }

  function handleNavigation() {
    if (classOn) {
      document.body.style.overflow = show ? 'initial' : 'hidden'
      show ? setClassOn('') : setClassOn('on')
      setShow(!show)
    }
  }

  return (
    <header>
      <div className="header-menu">
        <div className={`menu-section ${classOn}`}>
          <div onClick={handleMenu} className="menu-toggle">
            <div className="one" />
            <div className="two" />
            <div className="three" />
          </div>
        </div>

        <Link to="/" className="header-logo">
          <img src={headerLogo} alt="Hawk logo" />
        </Link>

        <nav>
          <ul>
            {menu.links.map((link) => (
              <li key={link.id}>
                <Link to={link.path} onClick={handleNavigation}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="user-session">
          {/* <img className="searchIcon" src={searchIcon} alt="Hawk search" />
          <img src={profileIcon} alt="Hawk profile" /> */}

          <MenuLink to="/cart">
            {hasItems && <CartCounter>{quantity}</CartCounter>}
            <FiShoppingCart size={20} />
          </MenuLink>
        </div>
      </div>
      <div className="search-area">
        <p>O que você procura ?</p>
        <img src={searchIcon} alt="Hawk search" />
      </div>
    </header>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string
}

Navigation.defaultProps = {
  siteTitle: ``
}

export default Navigation
