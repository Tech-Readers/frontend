import React, { useState } from "react";
import { MenuContainer, MenuButton, MenuList, MenuItem } from "./DropdownMenu.styled";
import profileImg from "../../assets/profile.svg";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <MenuContainer>
            <MenuButton onClick={toggleMenu}>
                <img
                    src={profileImg}
                    alt="Perfil"
                    style={{ width: "35px", borderRadius: "50%" }}
                />
            </MenuButton>
            <MenuList $isOpen={isOpen}>
                <MenuItem href="#criar-anuncio" onClick={() => handleClick("/anuncio")}>
                    Criar Anúncio
                </MenuItem>
                <MenuItem href="#meu-perfil" onClick={() => handleClick("/perfil")}>
                    Meu perfil
                </MenuItem>
                <MenuItem
                    href="#editar-perfil"
                    onClick={() => handleClick("/perfil-edit")}
                >
                    Editar perfil
                </MenuItem>
                <MenuItem
                    href="#notificacoes"
                    onClick={() => handleClick("/notificacoes")}
                >
                    Notificações
                </MenuItem>
            </MenuList>
        </MenuContainer>
    );
};

export default DropdownMenu;
