import React from 'react'

import Nav from '../../components/Nav/index'
import Header from '../../components/Header/index'
import Company from '../../components/Company/index'
import Highlights from '../../components/Highlights/index'

import { Container } from './styles'

const Main: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Header />
      <Company />
      <Highlights />
    </Container>
  )
}

export default Main
