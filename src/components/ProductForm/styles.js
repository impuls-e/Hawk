import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 3vh 0;
  border-bottom: 1px #000 solid;

  .lenght {
    display: flex;
    flex-direction: column;
  }
  .quantity {
    display: flex;
    flex-direction: column;
  }
`
export const Buttons = styled.div`
  display: flex;
  margin: 5vh 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    padding: 2vh 3vw;
    margin-bottom: 1vh;
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
    flex: 1;

    svg {
      margin-left: 2vh;
    }
    & + a {
      margin-left: 4vh;
    }
  }
`
