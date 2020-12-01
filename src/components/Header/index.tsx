import React from 'react'

import BgHeader from '../../assets/images/backgroundHeader.jpg'

import { Container, Background, ContentSlider } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Background>
        <img src={BgHeader} alt="Background" />
      </Background>

      <ContentSlider>
        {/* <Card /> */}
      </ContentSlider>
    </Container>
  )
}

export default Header
