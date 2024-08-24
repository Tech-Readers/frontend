import React, { useState, useEffect } from "react";
import { AdCard, ProfileAnuncio } from "./style";

export const Cards = () => {
    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        fetch("ENDEREÇO DA API AQUI")
            .then((response) => response.json())
            .then((data) => {
                setCardData({
                    profileImg: data.profileImg,
                    anuncioImg: data.anuncioImg,
                    titulo: data.titulo,
                    genero: data.genero,
                    autor: data.autor,
                    descricao: data.descricao,
                    avaliacao: data.avaliacao,
                });
            })
            .catch((error) => {
                console.error("Erro ao buscar dados:", error);
            });
    }, []);

    if (!cardData) {
        return <div>Sem informações ainda...</div>;
    }

    return (
        <AdCard>
            <ProfileAnuncio style={{ left: "15px" }}>
                <img src={cardData.profileImg} alt="perfil" />
            </ProfileAnuncio>
            <ProfileAnuncio style={{ left: "-15px", top: "-12px" }}>
                <img src={cardData.profileImg} alt="perfil" />
            </ProfileAnuncio>
            <img src={cardData.anuncioImg} alt="Anúncio Avaliado" />
            <h3>{cardData.titulo}</h3>
            <p>
                {cardData.genero} | {cardData.autor}
            </p>
            <p>{cardData.descricao}</p>
            <div>{cardData.avaliacao}</div>
        </AdCard>
    );
};
