import React from 'react';
import './styles.css';

export default function Newsletter() {
  return (
    <section>
      <div className="top-line" />
      <div className="newsletter">
        <div className="text-newsletter">
          <p>CADASTRE-SE E RECEBA NOVIDADES</p>
          <span> NEWSLETTER </span>
        </div>
        <form
          className=""
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div style={{ display: 'none' }}>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </div>

          <div className="input-box">
            <input placeholder="Nome" type="text" name="name" id="name" required="{true}" />
          </div>

          <div className="input-box">
            <input placeholder="Email" type="email" name="email" />
          </div>

          <div className="button-box">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
