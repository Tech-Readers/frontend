// eslint-disable-next-line no-unused-vars
// src/pages/Home/Home.jsx:
import React, { useState, useEffect } from "react";
import "./style.css";
import BookCard from "./BookCard";
import { MenuNav } from "../../components/menunav/MenuNav";
import { DivColumn } from "../../AppStyle";
import Hobbit from "../../assets/hobbit.png";
import Header from "../../assets/HEADER.svg";
import Footer from "../../components/footer/Footer";

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
                            image={book.image || "src/path/to/default-book-image.png"}
                            title={book.titulo}
                            author={book.autor_livro_oferecido}
                            genre={book.genero_livro_oferecido}
                            description={book.descricao}
                            userProfile={
                                book.userProfile ||
                                "src/path/to/default-profile-image.png"
                            }
                            link={`/anuncio/${book.id}`}
                        />
                    ))}
                </div>
            </main>
            <Footer></Footer>
        </DivColumn>
    );
};

export default Home;
