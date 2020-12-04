import React, { useState } from 'react'

import {
  FaBars,
  FaShopify,
  FaRegImages,
  FaSwimmingPool,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa'
import { TiWaves } from 'react-icons/ti'
import logoImg from '../../assets/images/logo.png'

import {
  Container,
  ContentWrapper,
  Divider,
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
              <img src={logoImg} alt="logo" />
            </ListWrapperLogo>
            <Divider />
            <ul className="list-services">
              <li>
                <FaSwimmingPool className="icon faswimmingpool" />
                <a href="teste"> Empresa </a>
              </li>
              <li>
                <TiWaves className="icon tiwaves" />
                <a href="teste"> Cátalogo </a>
              </li>
              <li>
                <FaShopify className="icon fashopfy" />
                <a href="teste"> Promoções </a>
              </li>
              <li>
                <FaRegImages className="icon faregimages" />
                <a href="teste"> Galeria </a>
              </li>
            </ul>
            <Divider />
            <ul className="list-social">
              <li>
                <a href="teste" className="socialButton facebook">
                  <FaFacebookF className="socialIcon" />
                </a>
              </li>

              <li>
                <a href="teste" className="socialButton instagram">
                  <FaInstagram className="socialIcon" />
                </a>
              </li>

              <li>
                <a href="teste" className="socialButton whatsapp">
                  <FaWhatsapp className="socialIcon" />
                </a>
              </li>
            </ul>
          </ListWrapper>
        </List>
        <FaBars onClick={() => setOpenMenu(!openMenu)} className="burguer" />
      </ContentWrapper>
    </Container>
  )
}

export default Nav
