import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    align-items: center;
    font-size: 1rem;
    background-color: #FFFFFF;
    min-height: 100vh;
`;

export const ImagemLogo = styled.img`
    width: 10rem;
`;

export const Navigation = styled.div`
    background-color: ${(props) => props.theme.colors.BegeUm};
    color: ${(props) => props.theme.colors.VerdeEscuro};
    width: 100vw;
    height: 5rem;
    position: relative;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    font-family: ${(props) => props.theme.fonts.Principal};
    margin: 0;
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

    li {
      list-style: none;
      margin: 0 1rem;

      a {
        color: ${(props) => props.theme.colors.VerdeEscuro};
        text-decoration: none;
        font-weight: bold;
      }
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 6rem;
    padding: 2rem;
    background-color: ${(props) => props.theme.colors.BegeDois};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    align-items: center; /* Centralizar conteúdo verticalmente */
`;

export const ProfilePic = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
        margin: 0;
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.VerdeEscuro};
    }

    button {
        margin: 1rem 0;
        padding: 0.5rem 1rem;
        background-color: ${(props) => props.theme.colors.VerdeEscuro};
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    p {
        font-size: 1rem;
        color: grey;
    }
`;

export const AdSection = styled.section`
    width: 80%;
    margin: 2rem 0;

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: ${(props) => props.theme.colors.VerdeEscuro};
    }

    div {
        display: flex;
        justify-content: space-between;
    }
`;

export const AdCard = styled.div`
    width: 23%;
    background-color: ${(props) => props.theme.colors.BegeUm};
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
        width: 100%;
        border-radius: 4px;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1rem;
        margin: 0.5rem 0;
        color: ${(props) => props.theme.colors.VerdeEscuro};
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
`;

export const Footer = styled.footer`
    width: 100vw;
    background-color: ${(props) => props.theme.colors.BegeUm};
    display: flex;
    justify-content: space-between;

    div {
        color: ${(props) => props.theme.colors.VerdeEscuro};
        padding: 2rem;
    }
`;
