import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #fff; 
    padding: 10px;
`
export const NavLink = styled.li`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
`
export const Subscribe = styled.button`
background-color: ${props => props.theme.colors.VerdeEscuro};
`
