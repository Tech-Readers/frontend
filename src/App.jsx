// src/app.jsx:
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from './GlobalStyle';
import {LandingPage} from './pages/LandingPage/LandingPage'


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;




