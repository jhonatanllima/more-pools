import React from 'react'

import logoImg from '../../assets/images/logo.png'

import { Content } from './styles'
import 'animate.css'

const Nav: React.FC = () => {
  return (
    <Content>
      <div className="logo">
        <img
          src={logoImg}
          alt="Logo Mais Piscinas"
          className="animate__animated animate__bounceInDown"
        />
      </div>

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
  )
}

export default Nav
