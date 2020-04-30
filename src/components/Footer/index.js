import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import './styles.css'

import footerLogo from '../../images/footerLogo.svg'
import paymentImage from '../../images/payment.svg'

export default function Footer() {
  return (
    <footer
      className="footer"
      data-sal="slide-up"
      data-sal-delay="200"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <div className="wrap-footer">
        <div className="user-account">
          <h3>MINHA CONTA</h3>
          <h4>MEU PERFIL</h4>
          <h4>MEUS PEDIDOS</h4>
        </div>
        <div className="contact">
          <h3>CONTATO</h3>
          <div>
            <FaWhatsapp size={24} />
            <FaInstagram size={24} />
            <MdMailOutline size={24} />
          </div>
        </div>
        <div className="payment-method">
          <h3>FORMAS DE PAGAMENTO</h3>
          <img src={paymentImage} alt="Payment methods" />
        </div>
        <div className="footer-logo">
          <img src={footerLogo} alt="Hawk logo" />
        </div>
      </div>
    </footer>
  )
}
