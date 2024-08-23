// src/pages/anuncios/OutrosAnuncios.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getExchangesByUserId } from '../../services/exchangeService';
import AdCard from '../../components/anuncios/AdCard';
import Footer from '../../components/footer/footer';
import { Container, AdsContainer, Header } from './OtherUserAdCard.styled';

const OutrosAnuncios = () => {
  const [ads, setAds] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const { id: userId } = useParams();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const userAds = await getExchangesByUserId(userId);
        setAds(userAds);
      } catch (error) {
        console.error('Erro ao carregar os anúncios:', error);
      }
    };

    fetchAds();
  }, [userId]);

  const handleSelectAd = (ad) => {
    setSelectedAd(ad);
  };

  const handleSendMessage = () => {
    // Implementar a lógica para enviar mensagem --> chamar a tela que a Fran implementou
  };

  return (
    <Container>
      <Header>
        <h1>Anúncios de Outro Usuário</h1>
      </Header>

      {selectedAd && (
        <AdCard
          key={selectedAd.id}
          id={selectedAd.id}
          title={selectedAd.titulo}
          genre={selectedAd.genero_livro_oferecido}
          author={selectedAd.autor_livro_oferecido}
          description={selectedAd.descricao}
          profileImageUrl={selectedAd.profileImageUrl}
          bookImageUrl={selectedAd.bookImageUrl}
          isSelected={true}
          onSelect={() => setSelectedAd(null)}
          onSendMessage={handleSendMessage}
          isActive={selectedAd.ativo}
          canSendMessage={true}
        />
      )}

      <AdsContainer>
        {ads
          .filter(ad => !selectedAd || ad.id !== selectedAd.id)  // Filtra o anúncio selecionado
          .map(ad => (
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
              onSelect={() => handleSelectAd(ad)}
              isActive={ad.ativo}
              canSendMessage={false}
            />
          ))}
      </AdsContainer>
      <Footer />
    </Container>
  );
};

export default OutrosAnuncios;
