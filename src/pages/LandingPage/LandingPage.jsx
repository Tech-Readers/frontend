import React from "react";
import { NavLink, Subscribe } from "../../components/menunav/style";
import { Body, CardLandingPage, ListStyle, Navigation } from "./Style";
import Logomarca from "/src/assets/LOGO-TECH-READERS.svg";
import LandingPageHeader from "/src/assets/Landing-page.svg";
export const LandingPage = () => {
    return (
        <>
            <Body>
                <Navigation>
                    <img src={Logomarca} alt="LOGO" />
                    <ListStyle>
                        <NavLink>About</NavLink>
                        <NavLink>Features</NavLink>
                        <NavLink>Avaliações</NavLink>
                        <NavLink>
                            <Subscribe>
                                <button>Inscreva-se</button>
                            </Subscribe>
                        </NavLink>
                    </ListStyle>
                </Navigation>

                <header>
                    <img
                        src={LandingPageHeader}
                        alt="imagem de livros em um notebook"
                    />
                    <h2>Bem-vindo à Nossa Página</h2>
                    <p>
                        Aqui você encontra os melhores recursos e informações
                        sobre nosso produto.
                    </p>
                </header>

                <section class="cards">
                    <CardLandingPage>
                        <h2>ANUNCIE</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam eget ligula eu lectus lobortis
                            condimentum. Aliquam nonummy auctor massa.
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas.{" "}
                        </p>
                    </CardLandingPage>

                    <CardLandingPage>
                        <h2>CONVERSE</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam eget ligula eu lectus lobortis
                            condimentum. Aliquam nonummy auctor massa.
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas.{" "}
                        </p>
                    </CardLandingPage>
                    <CardLandingPage>
                        <h2>TROQUE</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam eget ligula eu lectus lobortis
                            condimentum. Aliquam nonummy auctor massa.
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas.{" "}
                        </p>
                    </CardLandingPage>
                </section>

                <section class="subscribe-section">
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
