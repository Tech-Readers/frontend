import styled from "styled-components";
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
