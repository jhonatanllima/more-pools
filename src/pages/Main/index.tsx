import React from 'react'

import Nav from '../../components/Nav/index'
import Header from '../../components/Header/index'
import Company from '../../components/Company/index'
import Contact from '../../components/Contact/index'
import Promotion from '../../components/Promotion/index'

import { Container } from './styles'

const Main: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Header />
      <Company />
      <Promotion />
      <Contact />
    </Container>
  )
}

export default Main
