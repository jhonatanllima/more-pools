import styled from 'styled-components'

import colors from '../../themes/colors'

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const Background = styled.div`
  z-index: -4;
  position: absolute;

  width: 100%;
  height: 100%;

  background: ${colors.backGrey};

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    filter: grayscale(50%);
  }
`

export const Slogan = styled.div`
  top: 25%;
  position: absolute;

  width: 80%;
  height: 20%;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-right: 30px;

    font-size: 60px;
    font-weight: lighter;
    color: ${colors.white};
  }

  h3 {
    font-size: 50px;
    font-style: italic;
    text-align: end;
    color: ${colors.white};
  }

  @media (max-width: 1024px) {
    top: 17%;

    width: 100%;
    height: 40%;

    h1 {
      font-size: 30px;
    }

    h3 {
      font-size: 25px;
    }
  }
`

export const ContentSlider = styled.div`
  top: 60vh;
  position: absolute;

  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};

  @media (max-width: 1024px) {
    width: 100%;
    height: 44%;
  }
`
