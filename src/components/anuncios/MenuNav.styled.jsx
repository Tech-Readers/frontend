// src/components/anuncios/MenuNav.styled.jsx:
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BeigeUm};  
  padding: 15px 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 40px;
  object-fit: contain;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.Branco};  
  padding: 8px 15px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.CinzaTres};
`;

export const SearchIcon = styled.img`
  height: 16px;
  margin-right: 10px;
`;

export const SearchBar = styled.input`
  border: none;
  outline: none;
  width: 300px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  color: #686868;  
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.VerdeEscuro};
  }

  img {
    height: 16px;
    margin-right: 8px;
  }
`;

export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 10px;
`;




