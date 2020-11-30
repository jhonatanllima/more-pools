import React from 'react'

import { FaBars } from 'react-icons/fa'
import logoImg from '../../assets/images/logo.png'

import {
  Container,
  ContentWrapper,
  List,
  Logo,
  Container,
  Content,
  Logo
} from './styles'
import 'animate.css'

const Nav: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Logo>
          <img
            src={logoImg}
            alt="logo"
            className="animate__animated animate__bounceInDown"
          />
        </Logo>

        <List>
          <ul>
            <li>Empresa</li>
            <li>Cátalogo</li>
            <li>Promoções</li>
            <li>Galeria</li>
            <li>Contato</li>
          </ul>
        </List>
        <FaBars />
      </ContentWrapper>
    </Container>
  )
}

export default Nav

const Nav: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img
            src={logoImg}
            alt="logo"
            className="animate__animated animate__bounceInDown"
          />
        </Logo>

        <ul className="nav-list">
          <li className="nav-list-link">
            <a href="teste">Empresa</a>
          </li>
          <li className="nav-list-link">
            <a href="teste">Catálogo</a>
          </li>
          <li className="nav-list-link">
            <a href="teste">Promoções</a>
          </li>
          <li className="nav-list-link">
            <a href="teste">Galeria</a>
          </li>
          <li className="nav-list-link">
            <a href="teste">Contato</a>
          </li>
        </ul>
      </Content>
    </Container>
  )
}

export default Nav

// ------------------------------

// import styled from 'styled-components'

// import colors from '../../themes/colors'

// export const Container = styled.div`
//   width: 100%;
// `
// export const Content = styled.nav`
//   width: 100%;
//   height: 50px;
//   display: flex;
//   padding: 5px;
//   align-items: center;
//   justify-content: space-around;

//   background: ${colors.darkWhite};

//   .nav-list {
//     display: flex;
//     justify-content: space-around;

//     list-style-type: none;
//   }

//   .nav-list .nav-list-link {
//     margin-left: 20px;
//   }

//   .nav-list .nav-list-link a {
//     color: ${colors.textGrey};
//     font-size: 16px;
//     transition: 0.5s;
//     cursor: pointer;
//     font-weight: 500;
//     text-decoration: none;
//   }

//   .nav-list .nav-list-link a:hover {
//     color: #333;
//   }
// `
// export const Logo = styled.div`
//   width: auto;
//   height: auto;

//   img {
//     width: 100%;
//     height: auto;
//     max-width: 120px;
//     margin-bottom: -40px;
//   }
// `
