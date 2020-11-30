import styled from 'styled-components'

import colors from '../../themes/colors'

export const Container = styled.div`
  width: 100vw;
  height: 8vh;
`

export const ContentWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 10vw;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.darkWhite};
`

export const Logo = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    max-width: 100px;
  }
`

export const List = styled.div`
  width: auto;

  ul {
    display: flex;
    justify-content: space-around;

    list-style-type: none;
  }

  ul li {
    margin-left: 15px;
  }
`
