import React from 'react'

import { FaWhatsapp } from 'react-icons/fa'
import { FiInstagram, FiFacebook } from 'react-icons/fi'

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
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5515996752828&text=Ol%C3%A1%20mais%20piscinas!%20Vim%20atrav%C3%A9s%20do%20site!%20Gostaria%20de%20um%20or%C3%A7amento."
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="whatsApp" />
                (15) 99675-2828
              </a>
            </div>

            <div>
              <a
                href="https://www.instagram.com/maispiscinasitape/"
                target="_blank"
                rel="noreferrer"
              >
                <FiInstagram className="instagram" />
                @maispiscinasitape
              </a>
            </div>

            <div>
              <a
                href="https://www.facebook.com/maispiscinas"
                target="_blank"
                rel="noreferrer"
              >
                <FiFacebook className="facebook" />
                @maispiscinas
              </a>
            </div>
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
