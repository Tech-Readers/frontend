import styled from "styled-components";

export const Body = styled.div``;

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

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8rem !important;
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
    padding-left: 10rem;
    padding-right: 10rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
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
