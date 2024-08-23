// src/components/anuncios/OtherUserAdCard.styled.jsx

import styled from "styled-components";

export const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.CinzaDois};
    border: 1px solid ${({ theme }) => theme.colors.CinzaTres};
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
`;

export const ProfileCircle = styled.div`
    position: absolute;
    width: 86px;
    height: 86px;
    top: -43px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #d9d9d9;
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

export const SendMessageButton = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    background-color: #5a645f;
    color: ${({ theme }) => theme.colors.Branco};
    width: 100%;
    text-align: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.VerdeEscuro};
    }
`;
