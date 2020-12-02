import React, { useState } from 'react'

import { FaBars, FaBookOpen, FaShopify, FaRegImages } from 'react-icons/fa'
import { MdPool } from 'react-icons/md'
import logoImg from '../../assets/images/logo.png'

import {
  Container,
  ContentWrapper,
  List,
  ListWrapper,
  ListWrapperLogo,
  Logo
} from './styles'
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
          <ListWrapper>
            <ListWrapperLogo>
              <img
                src={logoImg}
                alt="logo"
                className="animate__animated animate__bounceInDown"
              />
              <hr />
            </ListWrapperLogo>

            <ul className="list-services">
              <li>
                <MdPool />
                Empresa
              </li>
              <li>
                <FaBookOpen />
                Cátalogo
              </li>
              <li>
                <FaShopify />
                Promoções
              </li>
              <li>
                <FaRegImages />
                Galeria
              </li>
            </ul>

            <ul className="list-social">
              <li>Social Icon</li>
            </ul>
          </ListWrapper>
        </List>
        <FaBars onClick={() => setOpenMenu(!openMenu)} className="burguer" />
      </ContentWrapper>
    </Container>
  )
}

export default Nav
