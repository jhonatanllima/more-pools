import React from 'react'

import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'

import {
  Social,
  Container,
  ContentLeft,
  ContentRight,
  ContentWrapper
} from './styles'

const Highlights: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <ContentLeft>
          <Social>
            <FaWhatsapp className="whatsApp" />
            <FiInstagram className="instagram" />
            <FaFacebookF className="facebook" />
          </Social>
        </ContentLeft>

        <ContentRight>
          <h1>
            S
            <br />
            i
            <br />
            g
            <br />
            a
            <br />
          </h1>
        </ContentRight>
      </ContentWrapper>
    </Container>
  )
}

export default Highlights
