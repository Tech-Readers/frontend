// src/components/anuncios/MenuNav.styled.jsx:
import React from "react";
import {
    Nav,
    Logo,
    SearchBarContainer,
    SearchIcon,
    SearchBar,
    NavLinks,
    NavLink,
} from "./Style";
import logoImg from "../../assets/LOGO-TECH-READERS.svg";
import searchIcon from "../../assets/search-icon.svg";
import chatIcon from "../../assets/chat-icon.svg";
import adIcon from "../../assets/ad-anuncio-icon.svg";
import starIcon from "../../assets/star-icon.svg";
import DropdownMenu from "../Dropdown/DropdownMenu";
import { useNavigate } from "react-router-dom";

export const MenuNav = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <>
            <Nav>
                <Logo
                    style={{ cursor: "pointer" }}
                    src={logoImg}
                    alt="Logo"
                    onClick={() => handleClick("/home")}
                />
                <SearchBarContainer>
                    <SearchIcon src={searchIcon} alt="Buscar" />
                    <SearchBar placeholder="Buscar" />
                </SearchBarContainer>
                <NavLinks>
                    <NavLink onClick={() => handleClick("/chat")}>
                        <img src={chatIcon} alt="Chat" />
                        Chat
                    </NavLink>
                    <NavLink onClick={() => handleClick("/anuncios")}>
                        <img src={adIcon} alt="Meus Anúncios" />
                        Meus Anúncios
                    </NavLink>
                    <NavLink onClick={() => handleClick("/avaliacoes")}>
                        <img src={starIcon} alt="Avaliações" />
                        Avaliações
                    </NavLink>
                    <DropdownMenu />
                </NavLinks>
            </Nav>
        </>
    );
};
export default MenuNav;
