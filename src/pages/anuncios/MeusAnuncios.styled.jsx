// src/pages/anuncios/MeusAnuncios.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.CinzaUm};
  min-height: 100vh;
`;

export const Header = styled.header`
  margin-bottom: 20px;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.VerdeEscuro};
  }
`;

export const AdsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;


