import styled from 'styled-components'

import colors from '../../themes/colors'

export const Container = styled.div`
  width: 100%;
  height: 92vh;
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`

export const ContentLeft = styled.div`
  width: 50%;
  height: 100%;

  background: ${colors.backGrey};

  @media (max-width: 1024px) {
    width: 30%;
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
  width: 50%;
  height: 100%;
  padding: 50px;

  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;

  text-align: end;

  @media (max-width: 1024px) {
    width: 70%;
    padding: 25px;
  }

  h1 {
    margin-bottom: 20px;

    font-size: 60px;
    font-style: italic;

    @media (max-width: 1024px) {
      font-size: 55px;
    }
  }

  p {
    font-weight: lighter;
  }
`
