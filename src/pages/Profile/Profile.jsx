import React from 'react';
import { Body, ImagemLogo, Navigation, ListStyle, LoginContainer, ProfilePic, UserInfo, AdSection, AdCard, Footer } from './Style';
import Logomarca from "/src/assets/TECH-READER-copiar.svg";

export const Profile = () => {
  return (
    <Body>
      <Navigation>
        <ImagemLogo src={Logomarca} alt="Logo" />
        <ListStyle>
          <li><a href="#chat">Chat</a></li>
          <li><a href="#meus-anuncios">Meus Anúncios</a></li>
          <li><a href="#avaliacoes">Avaliações</a></li>
        </ListStyle>
      </Navigation>
      
      <LoginContainer>
        <ProfilePic>
          <img src="profile-placeholder.png" alt="Profile" />
        </ProfilePic>
        <UserInfo>
          <h1>NOME PESSOA</h1>
          <button>Editar Perfil</button>
          <p>BIO</p>
        </UserInfo>
      </LoginContainer>

      <AdSection>
        <h2>MEUS ANÚNCIOS</h2>
        <div>
          <AdCard>
            <img src="ad-placeholder.png" alt="Anúncio" />
            <h3>Título Livro</h3>
            <p>Gênero | Autor</p>
            <p>Descrição do anúncio</p>
          </AdCard>
        </div>
      </AdSection>

      <AdSection>
        <h2>MEUS ANÚNCIOS AVALIADOS</h2>
        <div>
          <AdCard>
            <img src="ad-placeholder.png" alt="Anúncio Avaliado" />
            <h3>Título Livro</h3>
            <p>Gênero | Autor</p>
            <p>Descrição do anúncio</p>
            <div>★★★★★</div>
          </AdCard>
        </div>
      </AdSection>

      <Footer>
        <div>Lorem ipsum dolor sit amet...</div>
        <div>Links</div>
      </Footer>
    </Body>
  );
};
