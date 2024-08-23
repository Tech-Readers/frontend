import styled from "styled-components";

export const MenuContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const MenuButton = styled.div`
    cursor: pointer;
`;

export const MenuList = styled.div`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    right: 0;
    top: 50px;
    background-color: ${({ theme }) => theme.colors.VerdeEscuro};
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    z-index: 1;
    border-radius: 5px;
`;

export const MenuItem = styled.a`
    color: ${({ theme }) => theme.colors.Branco};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-family: "Inter", sans-serif;

    &:hover {
        background-color: ${({ theme }) => theme.colors.VerdeMedioDois};
    }
`;
