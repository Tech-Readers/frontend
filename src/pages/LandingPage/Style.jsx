import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: Column;
    width: 100%;
    box-sizing: none;
    padding: none;
    margin: none;
    transition: all 0.5s;
    //    max-width: 1920px;
    align-items: center;
    background: rgb(254, 252, 252);
    background: linear-gradient(
        0deg,
        rgba(254, 252, 252, 1) 0%,
        rgba(178, 214, 183, 1) 70%,
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
    text-decoration: none !important;
`;
export const LinkNavBar = styled.li`
    margin: 0;
    padding: 0rem 0.4rem;
    display: flex;
    justify-content: center;
    font-family: ${(props) => props.theme.fonts.Principal};
    align-items: center;
`;
export const Subscribe = styled.button`
    background-color: ${(props) => props.theme.colors.VerdeMedioUm};
    color: ${(props) => props.theme.colors.Branco};
    font-size: 1.2rem;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.5s;
    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
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
    transition: all 0.5s;
    &:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 3px 10px 0px;
        background-color: ${(props) => props.theme.colors.Branco};
        color: ${(props) => props.theme.colors.VerdeEscuro};
    }
`;

//COMEÇO DO ABOUT

export const ImagemHeader = styled.img`
    width: 1000px;
    max-width: 3340px;
    height: auto;
    object-fit: cover;
    position: relative;
`;
export const About = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6rem;
`;
export const Título = styled.h2`
    font-size: 3rem;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.VerdeMedioUm};
    font-family: ${(props) => props.theme.fonts.Segunda};
`;
export const ParagraphAbout = styled.p`
    margin-top: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 1010px;
    font-size: 1.2rem;
    font-family: ${(props) => props.theme.fonts.Principal};
`;

//COMEÇO FEATURES

export const CardLandingPage = styled.div`
    display: flex;

    text-align: center;
    flex-direction: row;
    margin: 20px 0px;
    padding: 2rem 3rem;
    width: 1010px;
    height: 300px;
    border-radius: 10px;
    gap: 2rem;
    transition: all 0.5s;
    background-color: ${(props) => props.theme.colors.Branco};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 3px 10px 0px;
    &:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
`;
export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    margin: none;
    padding: none;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${(props) => props.theme.colors.Preto};
    font-family: ${(props) => props.theme.fonts.Principal};
`;

//COMEÇO AVALIAÇÕES
export const SectionAvaliacoes = styled.section`
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-top: 100px;
    margin-bottom: 100px;
    padding-bottom: 8rem;
    padding-top: 4rem;
    border-top: 1px solid ${(props) => props.theme.colors.CinzaQuatro};
    border-bottom: 1px solid ${(props) => props.theme.colors.CinzaQuatro};
`;

export const CardAvaliacoes = styled.div`
    background-color: ${(props) => props.theme.colors.CinzaUm};
    border-radius: 10px;
    height: 100px;
    width: 400px;
    padding: 4rem 3rem 1rem 3rem;
    text-align: center;
`;
export const customStyleUm = {
    transform: "translateY(40px)translateX(155px) ",
    opacity: 0.8,
};
export const customStyleDois = {
    transform: "translateY(40px) translateX(135px)",
};

//COMEÇO SUBSCRIBE
export const ImagemSubscribe = styled.img`
    width: 25rem;
`;

export const SubscribeButton = styled.button`
    background-color: ${(props) => props.theme.colors.VerdeEscuro};
    color: ${(props) => props.theme.colors.Branco};
    font-size: 60px;
    height: 7rem;
    border-radius: 10px;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.Segunda};
    width: 320px;
    border: none;
    transition: all 0.5s;
    &:hover {
        cursor: pointer;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 3px 10px 0px;
        background-color: ${(props) => props.theme.colors.VerdeMedioUm};
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
`;
export const CallForAction = styled.p`
    font-family: ${(props) => props.theme.fonts.Terceira};
    font-size: 40px;
    margin-bottom: 0;
    color: ${(props) => props.theme.colors.VerdeMedioUm};
`;
