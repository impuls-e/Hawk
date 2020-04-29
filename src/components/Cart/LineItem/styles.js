import styled from '@emotion/styled'

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
    max-width: 260px;
    display: flex;
    margin: 2vh 0 5vh 0;
    align-items: center;
    justify-content: center;
    background: #000;
    padding: 2vh 3vw;
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    flex: 1;
  }
`
