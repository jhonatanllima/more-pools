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

    object-fit: cover;
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
  }

  h1 {
    margin-bottom: 20px;

    font-size: 60px;
    font-style: italic;
  }

  p {
    font-weight: lighter;
  }
`
