// src/components/anuncios/MenuNav.styled.jsx:
import React from 'react';
import {
  Nav,
  Logo,
  SearchBarContainer,
  SearchIcon,
  SearchBar,
  NavLinks,
  NavLink,
} from './MenuNav.styled';
import logoImg from '../../assets/LOGO TECH READERS.svg';
import searchIcon from '../../assets/search-icon.svg';
import chatIcon from '../../assets/chat-icon.svg';
import adIcon from '../../assets/ad-anuncio-icon.svg';
import starIcon from '../../assets/star-icon.svg';
import DropdownMenu from '../Dropdown/DropdownMenu';

const MenuNav = () => {
  return (
    <Nav>
      <Logo src={logoImg} alt="Logo" />
      <SearchBarContainer>
        <SearchIcon src={searchIcon} alt="Buscar" />
        <SearchBar placeholder="Buscar" />
      </SearchBarContainer>
      <NavLinks>
        <NavLink>
          <img src={chatIcon} alt="Chat" />
          Chat
        </NavLink>
        <NavLink>
          <img src={adIcon} alt="Meus Anúncios" />
          Meus Anúncios
        </NavLink>
        <NavLink>
          <img src={starIcon} alt="Avaliações" />
          Avaliações
        </NavLink>
        <DropdownMenu />  
      </NavLinks>
    </Nav>
  );
};

export default MenuNav;



