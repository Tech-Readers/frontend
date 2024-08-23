import React, { useState } from "react";
import { MenuContainer, MenuButton, MenuList, MenuItem } from "./DropdownMenu.styled";
import profileImg from "../../assets/profile.svg";

const DropdownMenu = () => {
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
            <MenuList isOpen={isOpen}>
                <MenuItem href="#criar-anuncio">Criar Anúncio</MenuItem>
                <MenuItem href="#meu-perfil">Meu perfil</MenuItem>
                <MenuItem href="#editar-perfil">Editar perfil</MenuItem>
                <MenuItem href="#notificacoes">Notificações</MenuItem>
            </MenuList>
        </MenuContainer>
    );
};

export default DropdownMenu;
