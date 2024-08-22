// src/pages/anuncios/OutrosAnuncios.styled.jsx
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Header = styled.div`
  margin-bottom: 20px;

  h1 {
    color: ${({ theme }) => theme.colors.Preto};
  }
`;

export const AdsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;


