import React from "react";
import * as S from "./Style";
import Logomarca from "/src/assets/TECH-READER-copiar.svg";
import ReadingCat from "../../assets/book.svg";
import LandingPageHeader from "/src/assets/Landing-page.svg";
import LoginIcon from "@mui/icons-material/Login";
import GatoUm from "../../assets/bell.svg";
import GatoDois from "../../assets/Chat.svg";
import GatoTres from "../../assets/gifts.svg";
import ProfileCard from "../../components/Chat/ProfileCard";

export const LandingPage = () => {
    return (
        <S.Body>
            <S.Navigation>
                <S.ImagemLogo src={Logomarca} alt="LOGO" />
                <S.ListStyle>
                    <S.NavLink>
                        <S.Link href="#About">About</S.Link>
                    </S.NavLink>
                    <S.NavLink>
                        <S.Link href="#Features">Features</S.Link>
                    </S.NavLink>
                    <S.NavLink>
                        <S.Link href="#Avaliacoes">Avaliações</S.Link>
                    </S.NavLink>
                    <S.NavLink>
                        <S.Subscribe>Inscreva-se</S.Subscribe>
                    </S.NavLink>
                    <S.NavLink>
                        <S.LoginLandingPage>
                            Login <LoginIcon />
                        </S.LoginLandingPage>
                    </S.NavLink>
                </S.ListStyle>
            </S.Navigation>

            <S.About id="About">
                <S.ImagemHeader
                    src={LandingPageHeader}
                    alt="imagem de livros em um notebook"
                />
                <S.Título>TROQUE LIVROS COMPARTILHE HISTÓRIAS</S.Título>
                <S.ParagraphAbout>
                    Bem-vindo ao Tech Reader, a plataforma onde o amor pelos livros ganha
                    vida! Somos um ponto de encontro para leitores apaixonados que
                    acreditam no poder da partilha. Aqui, você pode trocar seus livros
                    favoritos, descobrir novas leituras e fazer parte de uma comunidade
                    que valoriza o conhecimento e a sustentabilidade. Nosso objetivo é
                    facilitar a circulação de livros entre leitores, permitindo que
                    histórias continuem a inspirar novas mentes. Se você tem livros
                    parados na estante ou está em busca de uma nova aventura literária,
                    aqui é o lugar ideal para você.
                    <br />
                    <br />
                    Junte-se a nós e ajude a criar um mundo onde todos têm acesso à
                    leitura e onde cada livro encontra um novo lar!
                </S.ParagraphAbout>
            </S.About>

            <section id="Features">
                <S.CardLandingPage>
                    <img src={GatoUm} alt="imagem de livros em um notebook"></img>
                    <S.CardText>
                        <S.Título>ANUNCIE</S.Título>
                        <p>
                            Aqui você pode anunciar seus livros de forma rápida e fácil.
                            Conecte-se com outros leitores, troque histórias e descubra
                            novas aventuras literárias. Anunciando seu livro você valoriza
                            a leitura e a troca de conhecimentos!
                        </p>
                    </S.CardText>
                </S.CardLandingPage>

                <S.CardLandingPage>
                    <S.CardText>
                        <S.Título>CONVERSE</S.Título>
                        <p>
                            No Tech Readers, você não apenas troca livros, mas também faz
                            novas conexões. Nosso site oferece um espaço para chat, onde
                            você pode se comunicar diretamente com outros leitores que
                            estão anunciando. Dessa forma, a troca de informações se torna
                            mais fluida e a comunidade fica ainda mais rica e envolvente!
                        </p>
                    </S.CardText>
                    <img src={GatoDois} alt="imagem de livros em um notebook"></img>
                </S.CardLandingPage>
                <S.CardLandingPage>
                    <img src={GatoTres} alt="imagem de livros em um notebook"></img>
                    <S.CardText>
                        <S.Título>TROQUE</S.Título>
                        <p>
                            A troca de livros vai além de um simples gesto, é uma
                            experiência de descoberta e conexão. Encontre novas leituras
                            ao compartilhar os livros que já leu, dando-lhes a chance de
                            inspirar outros. Com nosso sistema de troca, você renova sua
                            estante e, ao mesmo tempo, contribui para uma comunidade
                            literária vibrante e em constante crescimento!
                        </p>
                    </S.CardText>
                </S.CardLandingPage>
            </section>

            <section id="Avaliacoes">
                <S.DivRow>
                    <ProfileCard
                        style={S.customStyleUm}
                        name=""
                        photoUrl="ligeirinho.jpg"
                    />
                    <ProfileCard
                        style={S.customStyleDois}
                        name=""
                        photoUrl="ligeirinho.jpg"
                    />
                </S.DivRow>
                <S.CardAvaliacoes>
                    <p>
                        Acabei de descobrir o Tech Reader e estou completamente encantado!
                        Se você é apaixonado por livros este site é para você.
                    </p>
                </S.CardAvaliacoes>
                <S.DivRow>
                    <ProfileCard
                        style={S.customStyleUm}
                        name=""
                        photoUrl="ligeirinho.jpg"
                    />
                    <ProfileCard
                        style={S.customStyleDois}
                        name=""
                        photoUrl="ligeirinho.jpg"
                    />
                </S.DivRow>
                <S.CardAvaliacoes>
                    <p>
                        Se você é um amante de livros, não pode deixar de conhecer o Tech
                        Reader. Este site é uma verdadeira joia para quem adora trocar e
                        explorar novas leituras.
                    </p>
                </S.CardAvaliacoes>
            </section>

            <section id="subscribe">
                <S.DivRow>
                    <S.ImagemSubscribe
                        src={ReadingCat}
                        alt="imagem de livros em um notebook"
                    />
                    <S.DivColumn>
                        <S.CallForAction>Entre na comunidade</S.CallForAction>
                        <S.SubscribeButton>LEIA!</S.SubscribeButton>
                    </S.DivColumn>
                </S.DivRow>
            </section>

            <footer>
                <p>The MIT License (MIT)</p>
                <p>Copyright ©️ 2024 - Conectando Leitores</p>
            </footer>
        </S.Body>
    );
};
