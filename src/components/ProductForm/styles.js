import styled from "styled-components"

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
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    width: 40vw;
    height: 8vh;
    border-radius: 50px;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    border: 2px solid #000;
    align-self: center;
    cursor: pointer;

    & + a {
      margin-left: 4vh;
    }
  }
`
