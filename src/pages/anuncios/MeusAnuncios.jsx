// src/pages/anuncios/MeusAnuncios.jsx:
import React, { useEffect, useState } from 'react';
import { getExchangesByUserId } from '../../services/exchangeService';
import AdCard from '../../components/anuncios/AdCard';
import Footer from '../../components/footer/footer';
import { Container, AdsContainer, Header } from './MeusAnuncios.styled';

const MeusAnuncios = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        // Obtém o ID do usuário autenticado do localStorage
        const userId = localStorage.getItem('userId');
        if (userId) {
          const userAds = await getExchangesByUserId(userId); //  userId é obtido diretamente do localStorage
          setAds(userAds);
        } else {
          console.error('User ID não encontrado no localStorage.');
        }
      } catch (error) {
        console.error('Erro ao carregar os anúncios:', error);
      }
    };

    fetchAds();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Meus Anúncios</h1>
      </Header>
      <AdsContainer>
        {ads.map(ad => (
          <AdCard
            key={ad.id}
            id={ad.id}
            title={ad.titulo}
            genre={ad.genero_livro_oferecido}
            author={ad.autor_livro_oferecido}
            description={ad.descricao}
            profileImageUrl={ad.profileImageUrl}
            bookImageUrl={ad.bookImageUrl}
            isSelected={false}
            onSelect={() => {}}
            onToggle={() => {}}
            isActive={ad.ativo}
          />
        ))}
      </AdsContainer>
      <Footer />
    </Container>
  );
};

export default MeusAnuncios;
