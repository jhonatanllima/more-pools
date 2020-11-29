import styled from 'styled-components'

import colors from '../../themes/colors'

export const Container = styled.section`
  width: 100vw;
  height: 60%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const Background = styled.div`
  z-index: -4;
  position: absolute;

  width: 100%;
  height: 80%;

  background: #e9e9e9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ContentSlider = styled.div`
  top: 30vh;
  position: relative;

  width: 90%;
  height: 70%;
  border-radius: 4px;
  box-shadow: 1px 1px 3px 1px ${colors.grey};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};
`
