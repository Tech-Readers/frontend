import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    align-items: center;
    font-size: 1rem;
    background-color: ${(props) => props.theme.colors.Branco};
    min-height: 100vh;
    padding-top: 5rem; 

    @media (max-width: 768px) {
        padding-top: 6rem; 
    }
`;

export const ImagemLogo = styled.img`
    width: 10rem;

    @media (max-width: 768px) {
        width: 7rem;
    }
`;

export const Navigation = styled.div`
    background-color: ${(props) => props.theme.colors.BegeUm};
    color: ${(props) => props.theme.colors.VerdeEscuro};
    width: 100vw;
    height: 5rem;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    font-family: ${(props) => props.theme.fonts.Principal};
    margin: 0;
    justify-content: space-evenly;
    padding-top: 0.3rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 1rem;
    }
`;

export const ListStyle = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-left: 10rem;

    li {
        list-style: none;
        margin: 0 1rem;

        a {
            color: ${(props) => props.theme.colors.CinzaSeis};
            text-decoration: none;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        margin-left: 0;
        margin-top: 1rem;

        li {
            margin: 0.5rem 0;
        }
    }
`;

export const ProfileNavegation = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 2px;

    @media (max-width: 768px) {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;  
    margin-top: 8rem; 
    padding: 2rem;
    background-color: ${(props) => props.theme.colors.CinzaUm};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    flex-direction: row; 

    @media (max-width: 768px) {
        flex-direction: column;
        width: 95%;
        padding: 1rem;
        margin-top: 10rem; 
    }
`;

export const ProfilePic = styled.div`
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 2rem; 

    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        width: 12rem;
        height: 12rem;
        margin-right: 0;
        margin-bottom: 1rem;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.6rem; 

    div {
        display: flex;
        flex-direction: column;
    }

    h1 {
        margin: 0;
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors.Preto};
    }

    button {
        margin: 1.5rem 0;
        padding: 0.7rem 1.5rem;
        background-color: ${(props) => props.theme.colors.CinzaUm};
        color: ${(props) => props.theme.colors.Preto};
        border: 1px solid black;
        border-radius: 10px;
        cursor: pointer;
        font-size: 1rem;
    }

    .bio {
        width: 30rem;
        margin: 3rem;
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;

        .bio {
            width: 75%;
            margin: 1rem 0;
            font-size: 1rem;
        }
    }
`;

export const AdSection = styled.section`
    width: 90%;  
    margin: 2rem 0;

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: ${(props) => props.theme.colors.Preto};
    }

    div {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        width: 75%;
        margin: 1rem 0;

        div {
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const AdCard = styled.div`
    width: 18.75rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.CinzaDois};
    margin-top: 60px;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
        width: 15.06rem;
        height: 15.06rem;
        border-radius: 4px;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.12rem;
        margin: 0.5rem 0;
        color: ${(props) => props.theme.colors.Preto};
    }

    p {
        font-size: 0.9rem;
        color: grey;
    }

    div {
        margin-top: 0.5rem;
        font-size: 1.2rem;
        color: gold;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-top: 1rem;

        img {
            width: 100%;
            height: auto;
        }
    }
`;

export const ProfileAnuncio = styled.div`
    position: relative;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute; 
        top: -25px; 
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    @media (max-width: 768px) {
        img {
            width: 40px;
            height: 40px;
        }
    }
`;

export const Footer = styled.footer`
    width: 100vw;
    background-color: ${(props) => props.theme.colors.BegeUm};
    display: flex;
    justify-content: space-between;

    div {
        color: ${(props) => props.theme.colors.Preto};
        padding: 2rem;

        p {
            margin-right: 55px;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        div {
            padding: 1rem;
            text-align: center;
        }
    }
`;
