import React from 'react'

import List from './List/index'

import {
  Container,
  ContentWrapper,
  ContentLeft,
  ContentRight,
  Logo
} from './styles'

import logoImg from '../../assets/images/logo.png'

import 'animate.css'

const Nav: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <ContentLeft>
          <Logo>
            <img
              src={logoImg}
              alt="Logo"
              className="animate__animated animate__bounceInDown"
            />
          </Logo>
        </ContentLeft>

        <ContentRight>
          <List />
        </ContentRight>
      </ContentWrapper>
    </Container>
  )
}

export default Nav
