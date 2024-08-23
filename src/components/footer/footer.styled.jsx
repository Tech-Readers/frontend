// src/components/footer/footer.styled.jsx
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.BeigeUm}; // #D7C4B6
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const FooterText = styled.p`
  color: #686868; // Cor das letras do footer
  font-family: 'Inter', sans-serif;
`;






