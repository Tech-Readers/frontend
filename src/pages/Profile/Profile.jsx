// src/pages/Prolife/Prolife.jsx:..
import React, { useState, useEffect } from "react";
import {
    Body,
    LoginContainer,
    ProfilePic,
    UserInfo,
    AdSection,
    AdCard,
    ProfileAnuncio,
} from "./Style";
import MenuNav from "../../components/menunav/MenuNav";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../services/userService";
import { getExchangesByUserId } from "../../services/exchangeService";

export const Profile = () => {
    const [user, setUser] = useState({});
    const [anuncios, setAnuncios] = useState([]);
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem("userId"); // Obtém o ID do usuário do localStorage
                const userData = await getUserById(userId); // Busca informações do usuário
                setUser(userData);

                const userExchanges = await getExchangesByUserId(); // Busca os anúncios do usuário
                setAnuncios(userExchanges);
            } catch (error) {
                console.error("Erro ao carregar os dados do perfil:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <Body>
            <MenuNav />
            <LoginContainer>
                <ProfilePic>
                    <img src={user.image || "/src/assets/perfil.jpeg"} alt="Profile" />
                </ProfilePic>
                <UserInfo>
                    <div>
                        <h2>{user.nome || "NOME PESSOA"}</h2>
                        <button onClick={() => handleClick("/perfil-edit")}>
                            Editar Perfil
                        </button>
                    </div>
                    <div className="bio">
                        <p>{user.bio || "Bio do usuário não disponível."}</p>
                    </div>
                </UserInfo>
            </LoginContainer>

            <AdSection>
                <h2>MEUS ANÚNCIOS</h2>
                <div>
                    {anuncios.map((anuncio) => (
                        <AdCard key={anuncio.id}>
                            <ProfileAnuncio>
                                <img src={user.image || "/src/assets/perfil.jpeg"} alt="perfil" />
                            </ProfileAnuncio>
                            <img src={anuncio.image || "/src/assets/livro.png"} alt="Anúncio" />
                            <h3>{anuncio.titulo_livro_oferecido}</h3>
                            <p>{`${anuncio.genero_livro_oferecido} | ${anuncio.autor_livro_oferecido}`}</p>
                            <p>{anuncio.descricao}</p>
                        </AdCard>
                    ))}
                </div>
            </AdSection>

            <AdSection>
                <h2>MEUS ANÚNCIOS AVALIADOS</h2>
                <div>
                    <AdCard>
                        <ProfileAnuncio style={{ left: "15px" }}>
                            <img src={user.image || "/src/assets/perfil.jpeg"} alt="perfil" />
                        </ProfileAnuncio>
                        <ProfileAnuncio style={{ left: "-15px", top: "-12px" }}>
                            <img src={user.image || "/src/assets/perfil.jpeg"} alt="perfil" />
                        </ProfileAnuncio>
                        <img src={Livro} alt="Anúncio Avaliado" />
                        <h3>Título Livro</h3>
                        <p>Gênero | Autor</p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Magnam optio amet sint quibusdam, eius natus? Ipsam, nulla
                            veritatis ipsum molestiae odio obcaecati corporis. Porro rem
                            placeat repellat dolore ipsam voluptas!
                        </p>
                        <div>★★★★★</div>
                    </AdCard>
                </div>
            </AdSection>

            <Footer />
        </Body>
    );
};

export default Profile;







