// src/components/anuncios/AdCard.styled.jsx:
import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.Branco : theme.colors.CinzaDois)};
  border: ${({ theme, isSelected }) => (isSelected ? `2px solid ${theme.colors.CinzaQuatro}` : `1px solid ${theme.colors.CinzaTres}`)};
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
`;

export const ProfileCircle = styled.div`
  position: absolute;
  width: 86px;
  height: 86px;
  top: -43px;
  left: ${({ isSelected }) => (isSelected ? '-43px' : '50%')};
  transform: ${({ isSelected }) => (isSelected ? 'none' : 'translateX(-50%)')};  
  background-color: #D9D9D9;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.Branco};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const AdImage = styled.div`
    background-color: ${({ theme }) => theme.colors.CinzaTres};
    height: 150px;
    border-radius: 8px;
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const AdDetails = styled.div`
    margin-top: 10px;
`;

export const AdTitle = styled.h3`
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.Preto};
`;

export const AdInfo = styled.p`
    color: ${({ theme }) => theme.colors.CinzaCinco};
    margin: 5px 0;
`;

export const AdDescription = styled.p`
    color: ${({ theme }) => theme.colors.CinzaCinco};
    margin: 10px 0;
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    transition: background-color 0.3s ease;

    &.edit {
        background-color: #5a645f;
        color: ${({ theme }) => theme.colors.Branco};
    }

    &.delete {
        background-color: ${({ theme }) => theme.colors.Branco};
        color: ${({ theme }) => theme.colors.Preto};
        border: 1px solid ${({ theme }) => theme.colors.CinzaQuatro};
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            margin-right: 8px;
            height: 16px;
        }
    }

    &:hover.edit {
        background-color: ${({ theme }) => theme.colors.VerdeEscuro};
    }

    &:hover.delete {
        background-color: ${({ theme }) => theme.colors.CinzaTres};
    }
`;

export const ToggleButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }
`;
<<<<<<< HEAD
=======




>>>>>>> origin/Anuncios-Francis
