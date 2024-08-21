import React from 'react';

import { createGlobalStyle } from 'styled-components';

export const Theme = {
    colors: {
        BegeUm: '#D7C4B6',
        BegeDois: '#C8B4A6',
        BegeTres: '#B2A397',
        VerdeClaro: '#BED7B9',
        VerdeMedioUm: '#718174',
        VerdeMedioDois: '#5A645F',
        VerdeEscuro: '#18322E',
        Branco: '#FEFCFC',
        Preto: '#1F1F1F',
        CinzaUm: '#F8F8F8',
        CinzaDois: '#EEEEEE',
        CinzaTres: '#D9D9D9',
        CinzaQuatro: '#CCC8C8',
        CinzaCinco: '#8B8B8B',
    },
    fonts: ["Inter", "Irish Grover", "Koulen"]
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.Branco};
    color: ${({ theme }) => theme.colors.Preto};
    font-family: 'Inter', sans-serif;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  
  a:hover {
    color: #535bf2;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  
  button:hover {
    border-color: #646cff;
  }
  
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    
    a:hover {
      color: #747bff;
    }
    
    button {
      background-color: #f9f9f9;
    }
  }
`;
