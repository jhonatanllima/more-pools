import styled from 'styled-components'

import colors from '../../themes/colors'

export const Container = styled.div`
  z-index: 5;
  position: fixed;

  width: 100vw;
  height: 8vh;
`
export const ContentWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 5vw;
  align-items: center;
  justify-content: space-between;

  background: ${colors.white};
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.5);
`
export const ContentLeft = styled.div`
  width: 20vw;
  height: 100%;
`

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;

  img {
    height: 80%;
    max-height: 60px;
  }
`

export const ContentRight = styled.div`
  width: 80vw;
  height: 100%;
`
