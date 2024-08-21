import styled from 'styled-components';


export const MainContent = styled.main`
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.CinzaUm};
`;

export const HighlightedAd = styled.div`
  margin-bottom: 30px;
`;

export const AdsList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.BeigeUm}; 
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
