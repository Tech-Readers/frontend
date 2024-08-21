import React from "react";
import { Nav, NavLink, Subscribe } from "./style";
import ChatImage from "../src/assets/message.svg";
import LogoNavBar from "../src/assets/LOGO-TR.svg";

export const MenuNav = () => {
    return (
        <>
            <div>
                <Nav>
                    <ul>
                        <NavLink>
                            <a href="#">About</a>
                        </NavLink>
                        <NavLink>
                            <a href="#">Features</a>
                        </NavLink>
                        <NavLink>
                            <a href="#">Avaliações</a>
                        </NavLink>
                        <NavLink>
                            <Subscribe>Inscreva-se</Subscribe>
                        </NavLink>
                    </ul>
                </Nav>
            </div>
        </>
    );
};
