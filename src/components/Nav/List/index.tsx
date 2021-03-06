import React from 'react'

import {
  FaFacebookF,
  FaInstagram,
  FaRegImages,
  FaShopify,
  FaSwimmingPool,
  FaWater,
  FaWhatsapp
} from 'react-icons/fa'

import logoImg from '../../../assets/images/logo.png'

import { Divider, ListOption, ListItem, LogoList } from './styles'

const List: React.FC = () => {
  return (
    <ListOption>
      <ListItem className="logoOption">
        <LogoList>
          <img src={logoImg} alt="Logo" />
        </LogoList>
      </ListItem>

      <Divider />

      <ListItem>
        <a href="teste" className="itemLink">
          <FaSwimmingPool className="icon faswimmingpool" />
          Empresa
        </a>
      </ListItem>

      <ListItem>
        <a href="teste" className="itemLink">
          <FaWater className="icon fawater" />
          Cátalogo
        </a>
      </ListItem>

      <ListItem>
        <a href="teste" className="itemLink">
          <FaShopify className="icon fashopfy" />
          Promoções
        </a>
      </ListItem>

      <ListItem>
        <a href="teste" className="itemLink">
          <FaRegImages className="icon faregimages" />
          Galeria
        </a>
      </ListItem>

      <Divider />

      <ListItem className="socialOption">
        <a href="teste" className="itemLink">
          <FaFacebookF className="icon facebook" />
          Facebook
        </a>
      </ListItem>

      <ListItem className="socialOption">
        <a href="teste" className="itemLink">
          <FaInstagram className="icon instagram" />
          Instagram
        </a>
      </ListItem>

      <ListItem className="socialOption">
        <a href="teste" className="itemLink">
          <FaWhatsapp className="icon whatsapp" />
          Whatsapp
        </a>
      </ListItem>

      <Divider />
    </ListOption>
  )
}

export default List
