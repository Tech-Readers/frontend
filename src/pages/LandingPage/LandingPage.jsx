import React from "react";
import {} from "../../components/menunav/style";
import * as S from "./Style";
import Logomarca from "/src/assets/TECH-READER-copiar.svg";
import ReadingCat from "../../assets/book.svg";
import LandingPageHeader from "/src/assets/Landing-page.svg";
import LoginIcon from "@mui/icons-material/Login";
import { DivColumn, DivRow } from "../../GlobalStyle";

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
                        <S.Link href="#Avaliações">Avaliações</S.Link>
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
                    <S.ImagemCard
                        src={LandingPageHeader}
                        alt="imagem de livros em um notebook"
                    ></S.ImagemCard>
                    <DivColumn>
                        <h2>ANUNCIE</h2>
                        <p>
                            Aqui você pode anunciar seus livros de forma rápida e fácil.
                            Conecte-se com outros leitores, troque histórias e descubra
                            novas aventuras literárias. Anunciando seu livro você valoriza
                            a leitura e a troca de conhecimentos!
                        </p>
                    </DivColumn>
                </S.CardLandingPage>

                <S.CardLandingPage>
                    <DivColumn>
                        <h2>CONVERSE</h2>
                        <p>
                            No Tech Readers, você não apenas troca livros, mas também faz
                            novas conexões. Nosso site oferece um espaço para chat, onde
                            você pode se comunicar diretamente com outros leitores que
                            estão anunciando. Dessa forma, a troca de informações se torna
                            mais fluida e a comunidade fica ainda mais rica e envolvente!
                        </p>
                    </DivColumn>
                    <S.ImagemCard
                        src={LandingPageHeader}
                        alt="imagem de livros em um notebook"
                    ></S.ImagemCard>
                </S.CardLandingPage>
                <S.CardLandingPage>
                    <S.ImagemCard
                        src={LandingPageHeader}
                        alt="imagem de livros em um notebook"
                    ></S.ImagemCard>
                    <DivColumn>
                        <h2>TROQUE</h2>
                        <p>
                            A troca de livros vai além de um simples gesto, é uma
                            experiência de descoberta e conexão. Encontre novas leituras
                            ao compartilhar os livros que já leu, dando-lhes a chance de
                            inspirar outros. Com nosso sistema de troca, você renova sua
                            estante e, ao mesmo tempo, contribui para uma comunidade
                            literária vibrante e em constante crescimento!
                        </p>
                    </DivColumn>
                </S.CardLandingPage>
            </section>

            <section>AQUI VÃO OS CARDS DE AVALIAÇÕES</section>

            <section id="subscribe">
                <DivRow>
                    <S.ImagemSubscribe
                        src={ReadingCat}
                        alt="imagem de livros em um notebook"
                    />
                    <DivColumn>
                        <S.CallForAction>Entre na comunidade</S.CallForAction>
                        <S.SubscribeButton>LEIA!</S.SubscribeButton>
                    </DivColumn>
                </DivRow>
            </section>

            <footer>
                <p>The MIT License (MIT)</p>
                <p>Copyright ©️ 2024 - Conectando Leitores</p>
            </footer>
        </S.Body>
    );
};
