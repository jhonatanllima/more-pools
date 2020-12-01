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
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  .whatsApp {
    width: 50px;
    height: 50px;
    margin: 10px;

    color: ${colors.black};
  }

  .instagram {
    width: 50px;
    height: 50px;
    margin: 10px;

    color: ${colors.black};
  }

  .facebook {
    width: 50px;
    height: 50px;
    margin: 10px;

    color: ${colors.black};
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
