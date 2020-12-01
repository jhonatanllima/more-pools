import styled from 'styled-components'

import colors from '../../themes/colors'

export const Container = styled.div`
  width: 100%;
  height: 93vh;
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`

export const Social = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  div {
    width: 100%;
    height: auto;
    margin: 0px 10px;

    a {
      width: 100%;
      height: auto;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 30px;
      font-style: italic;
      text-decoration: none;
      color: ${colors.black};
      text-transform: uppercase;

      @media (max-width: 1024px) {
        margin-top: 10px;

        flex-direction: column;

        font-size: 20px;
      }
    }
  }

  .whatsApp {
    width: 50px;
    height: 50px;
    margin: 10px;

    color: ${colors.whatsApp};
  }

  .instagram {
    width: 50px;
    height: 50px;
    margin: 10px;

    color: ${colors.instagram};
  }

  .facebook {
    width: 50px;
    height: 50px;
    margin: 10px;

    color: ${colors.facebook};
  }
`

export const ContentLeft = styled.div`
  width: 90%;
  height: 100%;
  padding: 30px 30px;

  display: flex;
  align-items: center;
  justify-content: center;

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

export const ContentRight = styled.div`
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
    font-size: 45px;
    text-align: center;
    line-height: 1.2;
    font-style: italic;
  }

  p {
    font-weight: lighter;
  }
`
