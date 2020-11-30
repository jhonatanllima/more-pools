import React from 'react'

import Nav from '../../components/Nav/index'
import Header from '../../components/Header/index'

import { Container } from './styles'

const Main: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Header />
      <Header />
    </Container>
  )
}

export default Main
