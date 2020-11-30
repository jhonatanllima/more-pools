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
  top: 57vh;
  position: absolute;

  width: 97%;
  height: 40%;
  border-radius: 4px;
  box-shadow: 1px 1px 3px 1px ${colors.grey};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};

  @media (max-width: 1024px) {
    width: 100%;
    height: 42%;
    border-radius: 0;

    box-shadow: none;
  }
`
