import React from "react";
import {} from "../../components/menunav/style";
import {
    About,
    Body,
    CardLandingPage,
    ImagemHeader,
    ImagemLogo,
    ImagemSubscribe,
    Link,
    ListStyle,
    LoginLandingPage,
    Navigation,
    NavLink,
    Subscribe,
} from "./Style";
import Logomarca from "/src/assets/TECH-READER-copiar.svg";
import ReadingCat from "../../assets/book.svg";
import LandingPageHeader from "/src/assets/Landing-page.svg";
import LoginIcon from "@mui/icons-material/Login";

export const LandingPage = () => {
    return (
        <>
            <Body>
                <Navigation>
                    <ImagemLogo src={Logomarca} alt="LOGO" />
                    <ListStyle>
                        <NavLink>
                            <Link href="#About">About</Link>
                        </NavLink>
                        <NavLink>
                            <Link href="#Features">Features</Link>
                        </NavLink>
                        <NavLink>
                            <Link href="#Avaliações">Avaliações</Link>
                        </NavLink>
                        <NavLink>
                            <Subscribe>Inscreva-se</Subscribe>
                        </NavLink>
                        <NavLink>
                            <LoginLandingPage>
                                Login <LoginIcon />
                            </LoginLandingPage>
                        </NavLink>
                    </ListStyle>
                </Navigation>

                <About id="About">
                    <ImagemHeader
                        src={LandingPageHeader}
                        alt="imagem de livros em um notebook"
                    />
                    <h2>Bem-vindo à Nossa Página</h2>
                    <p>
                        Aqui você encontra os melhores recursos e informações sobre nosso
                        produto.
                    </p>
                </About>

                <section id="Features">
                    <CardLandingPage>
                        <h2>ANUNCIE</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                            eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                            auctor massa. Pellentesque habitant morbi tristique senectus
                            et netus et malesuada fames ac turpis egestas.
                        </p>
                    </CardLandingPage>

                    <CardLandingPage>
                        <h2>CONVERSE</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                            eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                            auctor massa. Pellentesque habitant morbi tristique senectus
                            et netus et malesuada fames ac turpis egestas.
                        </p>
                    </CardLandingPage>
                    <CardLandingPage>
                        <h2>TROQUE</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                            eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                            auctor massa. Pellentesque habitant morbi tristique senectus
                            et netus et malesuada fames ac turpis egestas.
                        </p>
                    </CardLandingPage>
                </section>

                <section>Avaliações</section>

                <section id="subscribe">
                    <ImagemSubscribe
                        src={ReadingCat}
                        alt="imagem de livros em um notebook"
                    />
                    <button>Inscreva-se</button>
                </section>

                <footer>
                    <p>The MIT License (MIT)</p>
                    <p>Copyright ©️ 2024 - Conectando Leitores</p>
                </footer>
            </Body>
        </>
    );
};
