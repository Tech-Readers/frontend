import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './GlobalStyle';
import VisualizarAnuncio from './pages/anuncios/VisualizarAnuncio';
// import CriarAnuncio from './pages/anuncios/CriarAnuncio';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <VisualizarAnuncio />
    </ThemeProvider>
  );
}

export default App;




