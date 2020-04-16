import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import './styles.css';

export default function Footer({ footerLogo, paymentImage }) {
  return (
    <footer>
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
  );
}
