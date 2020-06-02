import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { Link } from 'gatsby'
import footerLogo from '../../images/footerLogo.svg'
import paymentImage from '../../images/payment.svg'
import Visa from '../../assets/payments/visa.svg'
import Amex from '../../assets/payments/amex.svg'
import Master from '../../assets/payments/master.svg'
import Dinners from '../../assets/payments/dinners.svg'
import Boleto from '../../assets/payments/boleto.svg'

import { FooterMenu, Container } from './styles'
// importação dos componentes criados no arquivo styles.js

export default function Footer() {
  return (
    <FooterMenu>
      <Container
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <h4>CONTATO</h4>
        <div>
          <a title="Enviar um whatsapp para a Hawk" href="https://wa.me/5548988394527">
            <FaWhatsapp size={24} />
          </a>

          <a title="Vai para o instagram da Hawk" href="https://www.instagram.com/hawk.br/">
            <FaInstagram size={24} />
          </a>
          <a title="Enviar um e-mail para a Hawk" href="mailto:muricristiano@gmail.com">
            <MdMailOutline size={24} />
          </a>
        </div>
      </Container>
      <Container>
        <Link title="Vai para a página de politica e privacidades" to="/faq">
          <h4>Politica&Privacidades</h4>
        </Link>
        <h4>FORMAS DE PAGAMENTO</h4>
        <div className="payments">
          <Visa />
          <Master />
          <Amex />
          <Dinners />
          <Boleto />
        </div>
      </Container>
      <Link title="Vai para o topo da página" to="#">
        <img src={footerLogo} alt="Hawk logo" />
      </Link>
    </FooterMenu>
  )
}
