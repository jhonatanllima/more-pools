import React, { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import logoImg from '../../assets/images/logo.png'

import { Container, ContentWrapper, List, Logo } from './styles'
import 'animate.css'

const Nav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Container>
      <ContentWrapper>
        <Logo className="logo">
          <img
            src={logoImg}
            alt="logo"
            className="animate__animated animate__bounceInDown"
          />
        </Logo>

        <List
          className="list"
          style={{
            transform: openMenu ? 'translateX(0px)' : ''
          }}
        >
          <ul>
            <li>Empresa</li>
            <li>Cátalogo</li>
            <li>Promoções</li>
            <li>Galeria</li>
            <li>Contato</li>
          </ul>
        </List>
        <FaBars onClick={() => setOpenMenu(!openMenu)} className="burguer" />
      </ContentWrapper>
    </Container>
  )
}

export default Nav
