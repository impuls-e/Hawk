import styled from 'styled-components'
//importando o styled-components

export const FooterMenu = styled.footer`
  /*criando o componente principal, styled.footer = (tag <footer>)*/

  display: flex;
  flex-direction: column;
  background: #000;
  justify-content: center;
  padding: 4vh 0;
  /* aplicando o estilo normalmente */

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 4vh 2vw;
  }
  /* adicionando o media querie no footer */

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    margin: 2vh 0;
  }
  /* estilizando os elementos dentro do footer */
`
export const Container = styled.div`
  /*criando um componente Container */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;

  h4,
  svg {
    color: #fff;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vh 0;
  }
  a + a {
    margin-left: 4vh;
  }
  /* estilizando os elementos dentro do footer */
`
