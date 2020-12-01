import React from 'react'

import Card from '../CardProducts/index'

import { Container, ContentWrapper, ContentRight, ContentLeft } from './styles'

const Promotion: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <ContentLeft>
          <h1>Promoções</h1>
        </ContentLeft>

        <ContentRight>
          <Card />
        </ContentRight>
      </ContentWrapper>
    </Container>
  )
}

export default Promotion
