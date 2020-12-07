import React, { useState } from 'react'

import { FaBars } from 'react-icons/fa'

import List from './List/index'

import {
  Container,
  ContentWrapper,
  ContentLeft,
  ContentRight,
  Logo,
  ListWrapper,
  MenuHamburguer
} from './styles'

import logoImg from '../../assets/images/logo.png'

import 'animate.css'

const Nav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)

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
          <ListWrapper
            style={{
              transform: openMenu ? 'translateX(0px)' : ''
            }}
          >
            <List />
          </ListWrapper>
          <MenuHamburguer>
            <FaBars onClick={() => setOpenMenu(!openMenu)} />
          </MenuHamburguer>
        </ContentRight>
      </ContentWrapper>
    </Container>
  )
}

export default Nav
