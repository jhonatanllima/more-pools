import React from 'react'

import Nav from '../../components/Nav/index'
import Header from '../../components/Header/index'
import Company from '../../components/Company/index'

import { Container } from './styles'

const Main: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Header />
      <Company />
    </Container>
  )
}

export default Main
