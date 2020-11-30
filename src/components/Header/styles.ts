import styled from 'styled-components'

import colors from '../../themes/colors'

export const Container = styled.section`
  width: 100vw;
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

  background: #e9e9e9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

export const Card = styled.div`
  width: 15%;
  height: 90%;
  margin-left: 15px;
  border-radius: 4px;
  border: 1px solid ${colors.fadedGrey};

  @media (max-width: 1024px) {
    width: 30%;
  }
`
