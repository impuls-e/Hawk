import styled from "@emotion/styled"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem 0 2rem 0;

  section {
    display: flex;
    align-items: center;
  }

  img {
    width: 200px;
    height: 200px;
  }
  p {
    margin: 1vh 0;
  }
  button {
    display: flex;
    margin: 2vh 0 5vh 0;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    width: 40vw;
    height: 8vh;
    border-radius: 50px;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    border: 2px solid #000;
    align-self: flex-start;
    cursor: pointer;
  }
`
