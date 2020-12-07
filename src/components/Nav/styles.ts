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

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    top: 0;
    left: 0;
    position: absolute;

    width: 50vw;
    height: 100vh;
    display: flex;
    max-width: 220px;
    transform: translateX(-55vw);
    transition: 0.8s ease-in-out;
    box-shadow: 9px -1px 15px -2px rgba(0, 0, 0, 0.65);
    align-items: center;
    justify-content: center;

    background: ${colors.white};
  }
`

export const MenuHamburguer = styled.div`
  display: none;

  @media (max-width: 768px) {
    top: 0;
    right: 0;
    position: fixed;

    width: 8vh;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
