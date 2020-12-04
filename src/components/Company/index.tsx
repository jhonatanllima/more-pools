import React from 'react'

import BgCompany from '../../assets/images/backgroundCompany.jpg'

import { Container, ContentWrapper, ContentRight, ContentLeft } from './styles'

const Company: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <ContentLeft>
          <img src={BgCompany} alt="Background Company" />
        </ContentLeft>

        <ContentRight>
          <h1>Nossa História.</h1>

          <p>
            Fundado em março de 2014, na cidade de Itapetininga-SP, dois bons
            amigos, Thiago e Francisco resolvem trabalhar em conjunto na
            construção e elaboração de Piscinas. Desde então, ambos trabalham
            juntos e com o mesmo objetivo, levar aos seus clientes o conforto e
            a qualidade de seus produtos. Sua equipe trabalha com respeito e
            comprometimento, oferecendo o que há de melhor e mais moderno no
            mercado de piscinas, sempre priorizando a satisfação dos nossos
            clientes.
          </p>
        </ContentRight>
      </ContentWrapper>
    </Container>
  )
}

export default Company
