import styled from 'styled-components'

import colors from '../../themes/colors'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    overflow-y: auto;
  }
`

export const Card = styled.div`
  width: 140px;
  height: 170px;
  margin: 8px 8px;
  border-radius: 2px;
  border: 1px solid ${colors.fadedGrey};

  @media (max-width: 1024px) {
    width: 122px;
    height: 175px;
  }
`
