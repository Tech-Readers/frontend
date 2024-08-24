import React from "react";
import {
    Body,
    LoginContainer,
    ProfilePic,
    UserInfo,
    AdSection,
    AdCard,
    ProfileAnuncio,
} from "./Style";
import ImagemPerfil from "/src/assets/perfil.jpeg"; // remover (colocado apenas para teste)
import Livro from "/src/assets/livro.png"; // remover (colocado apenas para teste)
import MenuNav from "../../components/menunav/MenuNav";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    };
    return (
        <Body>
            <MenuNav />
            <LoginContainer>
                <ProfilePic>
                    <img src={ImagemPerfil} alt="Profile" />
                </ProfilePic>
                <UserInfo>
                    <div>
                        <h2>NOME PESSOA</h2>
                        <button onClick={() => handleClick("/perfil-edit")}>
                            Editar Perfil
                        </button>
                    </div>
                    <div className="bio">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                            ad eveniet quia, voluptatum sit amet perspiciatis voluptatibus
                            pariatur nisi. Consequatur dignissimos ea consectetur
                            doloribus. Nostrum quia dolore consequatur in esse?
                        </p>
                    </div>
                </UserInfo>
            </LoginContainer>

            <AdSection>
                <h2>MEUS ANÚNCIOS</h2>
                <div>
                    <AdCard>
                        <ProfileAnuncio>
                            <img src={ImagemPerfil} alt="perfil" />
                        </ProfileAnuncio>
                        <img src={Livro} alt="Anúncio" />
                        <h3>Título Livro</h3>
                        <p>Gênero | Autor</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                            repellendus accusamus reiciendis commodi reprehenderit tempora
                            quos explicabo. Repellat adipisci tenetur veritatis enim
                            distinctio minima nostrum debitis! Accusamus iste aliquid
                            accusantium.
                        </p>
                    </AdCard>
                </div>
            </AdSection>

            <AdSection>
                <h2>MEUS ANÚNCIOS AVALIADOS</h2>
                <div>
                    <AdCard>
                        <ProfileAnuncio style={{ left: "15px" }}>
                            <img src={ImagemPerfil} alt="perfil" />
                        </ProfileAnuncio>
                        <ProfileAnuncio style={{ left: "-15px", top: "-12px" }}>
                            <img src={ImagemPerfil} alt="perfil" />
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
