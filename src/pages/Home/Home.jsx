// eslint-disable-next-line no-unused-vars
// src/pages/Home/Home.jsx:
import React, { useState, useEffect } from "react";
import "./style.css";
import BookCard from "./BookCard";
import { MenuNav } from "../../components/menunav/MenuNav";
import { DivColumn } from "../../AppStyle";
import { getAllExchanges } from "../../services/exchangeService";
import { getUserById } from "../../services/userService";

export const Home = () => {
    const [books, setBooks] = useState([]);

    // Função para buscar todos os anúncios ativos
    const fetchBooks = async () => {
        try {
            const exchanges = await getAllExchanges(); // Chama a função para obter todos os anúncios
            const activeExchanges = exchanges.filter(exchange => exchange.ativo); // Filtra apenas os anúncios ativos

            // Verifica se a propriedade existe e define um valor padrão caso contrário
            const booksWithUserProfiles = await Promise.all(
                activeExchanges.map(async (exchange) => {
                    const user = await getUserById(exchange.anunciante_id); // Busca informações do usuário anunciante
                    return {
                        ...exchange,
                        image: exchange.image || 'src/path/to/default-book-image.png', // Define uma imagem padrão se não houver
                        userProfile: user?.image || 'src/path/to/default-profile-image.png', // Define um perfil padrão se não houver
                    };
                })
            );


            setBooks(booksWithUserProfiles);
        } catch (error) {
            console.error("Erro ao carregar os anúncios:", error);
        }
    };

    useEffect(() => {
        fetchBooks(); // Chama a função ao carregar o componente
    }, []);

    return (
        <DivColumn>
            <MenuNav>
                <header className="header">
                    <div className="logo">
                        <img
                            src="src/assets/LOGO TECH READERS.svg"
                            alt="logo tech readers"
                            className="logotr"
                        />
                    </div>
                    <div className="placeholder">
                        <input
                            type="text"
                            className="search"
                            placeholder="Buscar livros"
                        />
                    </div>
                    <nav className="nav">
                        <a href="#chat">
                            <img
                                src="src/components/images/CHAT BUTTON.svg"
                                alt="chat"
                                className="chat"
                            />
                        </a>
                        <a href="#my-ads">
                            <img
                                src="src/components/images/MEUS ANUNCIOS.svg"
                                alt="meus anúncios"
                                className="anuncios"
                            />
                        </a>
                        <a href="#reviews">
                            <img
                                src="src/components/images/avaliações.svg"
                                alt="avaliações"
                                className="avali"
                            />
                        </a>
                    </nav>
                    <div className="profile">
                        <img
                            src="src/components/images/profile.png"
                            alt="Profile"
                            className="profile-img"
                        />
                    </div>
                </header>
            </MenuNav>
            <main>
                <div className="container-banner">
                    <img
                        src="src/components/images/HEADER.svg"
                        alt="header livros"
                        className="banner"
                    />
                </div>

                <div className="book-cards-container">
                    {books.map((book, index) => (
                        <BookCard
                        key={index}
                        image={book.image || 'src/path/to/default-book-image.png'} // Certifique-se de que image não seja null ou undefined
                        title={book.titulo}
                        author={book.autor_livro_oferecido}
                        genre={book.genero_livro_oferecido}
                        description={book.descricao}
                        userProfile={book.userProfile || 'src/path/to/default-profile-image.png'} // Certifique-se de que userProfile não seja null ou undefined
                        link={`/anuncio/${book.id}`} // Corrigido para o link da página do anúncio
                        />
                    
                    ))}
                </div>
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <div className="description">
                        <p>Trata-se de uma aplicação web que facilite a troca de livros entre leitores, </p>
                        <p>promovendo o compartilhamento de recursos literários </p>
                        <p>e a interação social dentro da comunidade de leitores.</p>
                    </div>
                    <div className="images">
                        <img
                            src="src/components/images/LogoAvanti.png"
                            alt="Imagem 1"
                            className="top-image"
                        />
                        <img
                            src="src/assets/LOGO TECH READERS.svg"
                            alt="Imagem 2"
                            className="bottom-image"
                        />
                    </div>
                </div>
                <div className="footer-text">
                    <p>© 2024. Tech Readers</p>
                </div>
            </footer>
        </DivColumn>
    );
};

export default Home;




