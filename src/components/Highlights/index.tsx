import React from 'react'

import Card from '../CardProducts/index'

import { Container, ContentWrapper, ContentRight, ContentLeft } from './styles'

const Highlights: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <ContentLeft>
          <h1>
            P
            <br />
            r
            <br />
            o
            <br />
            m
            <br />
            o
            <br />
            ç
            <br />
            õ
            <br />
            e
            <br />
            s
            <br />
          </h1>
        </ContentLeft>

        <ContentRight>
          <Card />
        </ContentRight>
      </ContentWrapper>
    </Container>
  )
}

export default Highlights
