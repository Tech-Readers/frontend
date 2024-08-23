// src/components/footer/footer.jsx:
import React from "react";
import { DivColumn, DivRow, FooterContainer, FooterText } from "./Style";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Conectando leitores desde 2024.</FooterText>
            <DivColumn style={{ gap: "10px" }}>
                <FooterText>The MIT License (MIT)</FooterText>
                <FooterText>Tech Reader</FooterText>
                <FooterText>Instituto Atlantico</FooterText>

                <FooterText>Avanti</FooterText>
            </DivColumn>
        </FooterContainer>
    );
};

export default Footer;
