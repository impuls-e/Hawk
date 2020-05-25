import React from 'react'

import './styles.css'

import jsonData from '../../data/faq.json'

export default function faq() {
  const politica_de_privacidade = jsonData.faq.politica_de_privacidade
  const logistica = jsonData.faq.logistica
  const financeiro = jsonData.faq.financeiro
  const operacao = jsonData.faq.operacao

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`
  }

  function handleClick(e) {
    if (e.target.nextSibling.style.display == 'block') {
      e.target.nextSibling.style.display = 'none'
    } else {
      e.target.nextSibling.style.display = 'block'
    }
  }

  return (
    <section className="faq">
      <h3>PERGUNTAS FREQUENTES</h3>
      <div className="content-subject">
        <h4>{politica_de_privacidade.titulo}</h4>
        <div
          className="politics-content"
          dangerouslySetInnerHTML={{ __html: politica_de_privacidade.conteudo }}
        />
      </div>
      <div className="content-subject">
        <h4>{operacao.titulo}</h4>
        {operacao.conteudo.map((operacaoEl) => (
          <li key={generateKey(operacaoEl.pergunta)}>
            <a onClick={handleClick} className="question-area">
              {operacaoEl.pergunta}
            </a>
            <div className="answer-area">
              <p className="">{operacaoEl.resposta} </p>
            </div>
          </li>
        ))}
      </div>
      <div className="content-subject">
        <h4>{logistica.titulo}</h4>
        {logistica.conteudo.map((logisticaEl) => (
          <li key={generateKey(logisticaEl.pergunta)}>
            <a onClick={handleClick} className="question-area">
              {logisticaEl.pergunta}
            </a>
            <div className="answer-area">
              <p className="">{logisticaEl.resposta} </p>
            </div>
          </li>
        ))}
      </div>
      <div className="content-subject">
        <h4>{financeiro.titulo}</h4>
        {financeiro.conteudo.map((financeiroEl) => (
          <li key={generateKey(financeiroEl.pergunta)}>
            <a onClick={handleClick} className="question-area">
              {financeiroEl.pergunta}
            </a>
            <div className="answer-area">
              <p className="">{financeiroEl.resposta} </p>
            </div>
          </li>
        ))}
      </div>
    </section>
  )
}
