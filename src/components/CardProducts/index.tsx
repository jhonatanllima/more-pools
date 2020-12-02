import React from 'react'

import data from './data.js'

import { Container, Card, TopContent, FooterContent } from './styles'

const CardProducts: React.FC = () => {
  return (
    <Container>
      {data.map(content => (
        <Card>
          <TopContent key={content.id}>
            <img src={content.img} alt={content.alt} />
          </TopContent>

          <FooterContent>
            <h4>{content.title}</h4>
            <div>
              <h3>{content.oldPrice}</h3>
              <h2>{content.newPrice}</h2>
            </div>
          </FooterContent>
        </Card>
      ))}
    </Container>
  )
}

export default CardProducts
