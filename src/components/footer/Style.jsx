// src/components/footer/footer.styled.jsx
import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${(props) => props.theme.colors.BegeUm};
    font-family: ${(props) => props.theme.fonts.Principal};
    width: 100%;
    height: 15rem;
    margin-top: 80px;
    gap: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FooterText = styled.p`
    font-family: ${(props) => props.theme.fonts.Principal};
`;
