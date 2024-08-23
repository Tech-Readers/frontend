import React from 'react';
import { Body, ImagemLogo, Navigation, ListStyle, ProfileNavegation, LoginContainer, ProfilePic, UserInfo, AdSection, AdCard, ProfileAnuncio, Footer } from './Style';
import Logomarca from "/src/assets/TECH-READER-copiar.svg";
import ImagemPerfil from '/src/assets/perfil.jpeg'; // remover (colocado apenas para teste)
import Livro from '/src/assets/livro.png' // remover (colocado apenas para teste)

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
        <ProfileNavegation src={ImagemPerfil} alt="Perfil" />
      </Navigation>
      
      <LoginContainer>
        <ProfilePic>
          <img src={ImagemPerfil} alt="Profile" />
        </ProfilePic>
        <UserInfo>
          <div>
            <h1>NOME PESSOA</h1>
            <button>Editar Perfil</button>
          </div>
          <div className="bio">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ad eveniet quia, voluptatum sit amet perspiciatis voluptatibus pariatur nisi. Consequatur dignissimos ea consectetur doloribus. Nostrum quia dolore consequatur in esse?</p>
            </div>
        </UserInfo>
      </LoginContainer>

      <AdSection>
        <h2>MEUS ANÚNCIOS</h2>
        <div>
          <AdCard>
            <ProfileAnuncio>
              <img src={ImagemPerfil} alt="perfil" />
            </ProfileAnuncio>
            <img src={Livro} alt="Anúncio" />
            <h3>Título Livro</h3>
            <p>Gênero | Autor</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus accusamus reiciendis commodi reprehenderit tempora quos explicabo. Repellat adipisci tenetur veritatis enim distinctio minima nostrum debitis! Accusamus iste aliquid accusantium.</p>
          </AdCard>
        </div>
      </AdSection>

      <AdSection>
        <h2>MEUS ANÚNCIOS AVALIADOS</h2>
        <div>
          <AdCard>
          <ProfileAnuncio style={{ left: '15px' }}>
              <img src={ImagemPerfil} alt="perfil" />
            </ProfileAnuncio>
            <ProfileAnuncio style={{ left: '-15px', top: '-12px'}}>
              <img src={ImagemPerfil} alt="perfil" />
            </ProfileAnuncio>
            <img src={Livro} alt="Anúncio Avaliado" />
            <h3>Título Livro</h3>
            <p>Gênero | Autor</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam optio amet sint quibusdam, eius natus? Ipsam, nulla veritatis ipsum molestiae odio obcaecati corporis. Porro rem placeat repellat dolore ipsam voluptas!</p>
            <div>★★★★★</div>
          </AdCard>
        </div>
      </AdSection>

      <Footer>
        <div>Lorem ipsum dolor sit amet...</div>
        <div>
          <p>link</p>
          <p>link</p>
          <p>link</p>
        </div>
      </Footer>
    </Body>
  );
};
