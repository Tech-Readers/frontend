import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuNav from "../../components/menunav/MenuNav";

import AtualizarAnuncio from "./AtualizarAnuncio";
import Footer from "../../components/footer/Footer";

export const Anuncios = () => {
    return (
        <>
            <MenuNav></MenuNav>
            <AtualizarAnuncio />
            <Footer></Footer>
        </>
    );
};
