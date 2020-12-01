import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 93vh;
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`

export const ContentLeft = styled.div`
  width: 10%;
  height: 100%;
  padding: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  text-align: end;

  @media (max-width: 1024px) {
    width: 15%;
    padding: 25px;
  }

  h1 {
    width: 5px;

    font-size: 40px;
    word-wrap: break-word;
    font-style: italic;
    text-align: center;
    white-space: pre-wrap;
    line-height: 1.2;
    font-family: monospace;
  }

  p {
    font-weight: lighter;
  }
`

export const ContentRight = styled.div`
  width: 90%;
  height: 100%;
  padding: 30px 30px;

  @media (max-width: 1024px) {
    width: 85%;
    padding: 50px 10px;
  }

  img {
    width: 100%;
    height: 100%;

    transition: 0.5s;
    object-fit: cover;
    filter: grayscale(25%);

    :hover {
      transition: 0.5s;
      filter: grayscale(0%);
      transform: scale(1.01);
    }
  }
`
