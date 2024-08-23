import React from "react";
import { Nav, NavLink } from "./style";


export const MenuNav = () => {
    return (
        <>
            <div>
                <Nav>
                    <ul>
                        {/* Falta adicionar os links de chamada as páginas */}
                        <NavLink>
                            <a href="#">Chat</a>
                        </NavLink>
                        <NavLink>
                            <a href="#">Meus Anúncios</a>
                        </NavLink>
                        <NavLink>
                            <a href="#">Avaliações</a>
                        </NavLink>
                        <NavLink>
                            <a>
                                <img src="" alt=""/> {/* Falta adicionar um ícone de perfil */}
                            </a>
                        </NavLink>
                    </ul>
                </Nav>
            </div>
        </>
    );
};