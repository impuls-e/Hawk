import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import './styles.css';

export default function FloatWhatsapp() {
  return (
    <div className="float">
      <a href="https://wa.me/554888394527" target="_blank">
        {' '}
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
}
