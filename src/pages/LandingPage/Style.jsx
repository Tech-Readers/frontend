import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: Column;
    width: 100%;
    box-sizing: none;
    padding: none;
    margin: none;
    max-width: 1920px;
    align-items: center;
    font-size: 1rem;
    background: rgb(254, 252, 252);
    background: linear-gradient(
        0deg,
        rgba(254, 252, 252, 1) 0%,
        rgba(178, 214, 183, 1) 30%,
        rgba(178, 214, 183, 1) 100%
    );
`;

//COMEÇO NAVBAR

export const ImagemLogo = styled.img`
    width: 10rem;
`;
export const Navigation = styled.div`
    background-color: ${(props) => props.theme.colors.BegeUm};
    color: ${(props) => props.theme.colors.VerdeEscuro};
    width: 100%;
    height: 5rem;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;

    font: ${(props) => props.theme.fonts.Principal};
    margin: none;
    justify-content: space-evenly;
    padding-top: 0.3rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;
export const ListStyle = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-left: 20rem;
`;
export const Link = styled.a`
    color: ${(props) => props.theme.colors.VerdeEscuro};
    font-size: 1.1rem;
`;
export const NavLink = styled.li`
    list-style-type: none;
    margin: 0;
    padding: 0rem 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Subscribe = styled.button`
    background-color: ${(props) => props.theme.colors.VerdeMedioUm};
    color: ${(props) => props.theme.colors.Branco};
    font-size: 1.2rem;
    border: none;
    &:hover {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 3px 10px 0px;
        color: ${(props) => props.theme.colors.VerdeEscuro};
    }
`;
export const LoginLandingPage = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border: none;
    background-color: ${(props) => props.theme.colors.CinzaUm};
    color: ${(props) => props.theme.colors.VerdeMedioUm};
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 3px 10px 0px;
        background-color: ${(props) => props.theme.colors.Branco};
        color: ${(props) => props.theme.colors.VerdeEscuro};
    }
`;

//COMEÇO DO ABOUT

export const About = styled.section``;

export const Paragraph = styled.p``;

export const ImagemHeader = styled.img`
    width: 1000px;
    max-width: 3340px;
    height: auto;
    object-fit: cover;
    position: relative;
`;
//COMEÇO FEATURES

export const ImagemCard = styled.img``;

//COMEÇO SUBSCRIBE

export const ImagemSubscribe = styled.img`
    width: 25rem;
`;

export const CardLandingPage = styled.div``;
