import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { Link } from 'gatsby'
import footerLogo from '../../images/footerLogo.svg'
import paymentImage from '../../images/payment.svg'

import { FooterMenu, Container } from './styles'
// importação dos componentes criados no arquivo styles.js

export default function Footer() {
  return (
    <FooterMenu>
      <Container>
        <h4>CONTATO</h4>
        <div>
          <a title="Enviar um whatsapp para a Hawk" href="#">
            <FaWhatsapp size={24} />
          </a>

          <a
            title="Vai para o instagram da Hawk"
            href="https://www.instagram.com/hawk.br/"
          >
            <FaInstagram size={24} />
          </a>
          <a title="Enviar um e-mail para a Hawk" href="#">
            <MdMailOutline size={24} />
          </a>
        </div>
      </Container>
      <Container>
        <h4>FORMAS DE PAGAMENTO</h4>
        <img src={paymentImage} alt="Payment methods" />
      </Container>
      <Link title="Vai para o topo da página" to="#">
        <img src={footerLogo} alt="Hawk logo" />
      </Link>
    </FooterMenu>
  )
}
