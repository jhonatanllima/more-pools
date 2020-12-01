import React from 'react'
import TypeWriter from 'react-typewriter'

import BgHeader from '../../assets/images/backgroundHeader.jpg'

import { Container, Background, ContentSlider, Slogan } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Background>
        <img src={BgHeader} alt="Background" />
      </Background>

      <Slogan>
        <TypeWriter typing={1}>
          <h1>A primeira colocada em</h1>
          <h3>qualidade e confiança!</h3>
        </TypeWriter>
      </Slogan>

      <ContentSlider>{/* <Card /> */}</ContentSlider>
    </Container>
  )
}

export default Header
