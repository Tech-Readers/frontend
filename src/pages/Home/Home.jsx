// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.css";
import BookCard from "./BookCard";
import { MenuNav } from "../../components/menunav/MenuNav";
import { DivColumn } from "../../AppStyle";
import Hobbit from "../../assets/hobbit.png";
import Header from "../../assets/HEADER.svg";

export const Home = () => {
    const books = [
        {
            image: { Hobbit },
            title: "O Hobbit",
            author: "J. R. R. Tolkien",
            genre: "Fantasia/Literatura Infantil",
            description:
                "Bilbo Bolseiro é um hobbit que leva uma vida confortável e sem ambições. Mas seu contentamento é perturbado quando Gandalf, o mago, e uma companhia de anões batem à sua porta e levam-no para uma expedição. Eles têm um plano para roubar o tesouro guardado por Smaug, o Magnífico, um grande e perigoso dragão.",
        },
        {
            image: { Hobbit },
            title: "Título Livro 2",
            author: "Autor 2",
            genre: "Gênero 2",
            description: "Etiam eget ligula eu lectus lobortis condimentum.",
        },
        {
            image: { Hobbit },
            title: "Título Livro 2",
            author: "Autor 2",
            genre: "Gênero 2",
            description: "Etiam eget ligula eu lectus lobortis condimentum.",
        },
        {
            image: { Hobbit },
            title: "Título Livro 2",
            author: "Autor 2",
            genre: "Gênero 2",
            description: "Etiam eget ligula eu lectus lobortis condimentum.",
        },
        {
            image: { Hobbit },
            title: "Título Livro 2",
            author: "Autor 2",
            genre: "Gênero 2",
            description: "Etiam eget ligula eu lectus lobortis condimentum.",
        },
        {
            image: { Hobbit },
            title: "Título Livro 2",
            author: "Autor 2",
            genre: "Gênero 2",
            description: "Etiam eget ligula eu lectus lobortis condimentum.",
        },
        {
            image: { Hobbit },
            title: "Título Livro 2",
            author: "Autor 2",
            genre: "Gênero 2",
            description: "Etiam eget ligula eu lectus lobortis condimentum.",
        },
        {
            image: { Hobbit },
            title: "Título Livro 2",
            author: "Autor 2",
            genre: "Gênero 2",
            description: "Etiam eget ligula eu lectus lobortis condimentum.",
        },
        {
            image: { Hobbit },
            title: "Título Livro 2",
            author: "Autor 2",
            genre: "Gênero 2",
            description: "Etiam eget ligula eu lectus lobortis condimentum.",
        },
    ];

    return (
        <DivColumn>
            <MenuNav />
            <main>
                <div className="container-banner">
                    <img src={Header} alt="header livros" className="banner"></img>
                </div>

                <div className="book-cards-container">
                    {books.map((book, index) => (
                        <BookCard
                            key={index}
                            image={book.image}
                            title={book.title}
                            author={book.author}
                            genre={book.genre}
                            description={book.description}
                        />
                    ))}
                </div>
            </main>
            <footer className="footer">
                <div className="footer-content">
                    <div className="description">
                        <p>
                            Trata-se de uma aplicação web que facilite a troca de livros
                            entre leitores,{" "}
                        </p>
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
