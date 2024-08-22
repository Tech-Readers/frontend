// src/pages/anuncios/MeusAnuncios.jsx:
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getExchangesByUserId, deleteExchange, closeExchange } from '../../services/exchangeService';
import AdCard from '../../components/anuncios/AdCard';
import Footer from '../../components/footer/footer';
import { Container, AdsContainer, Header } from './MeusAnuncios.styled';

const MeusAnuncios = () => {
  const [ads, setAds] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const userAds = await getExchangesByUserId();
        setAds(userAds);
      } catch (error) {
        console.error('Erro ao carregar os anúncios:', error);
      }
    };

    fetchAds();
  }, []);

  const handleSelectAd = (ad) => {
    setSelectedAd(ad);
  };

  const handleDeleteAd = async (id) => {
    try {
      await deleteExchange(id); // exclui anuncio
      setAds(ads.filter(ad => ad.id !== id));
      setSelectedAd(null);  // Limpa a seleção se o anúncio selecionado for excluído
    } catch (error) {
      console.error('Erro ao excluir o anúncio:', error);
    }
  };

  const handleToggleAd = async (id) => {
    try {
      await closeExchange(id);
      setSelectedAd(prev => ({ ...prev, ativo: false }));  // Marca o anúncio como inativo
    } catch (error) {
      console.error('Erro ao desativar o anúncio:', error);
    }
  };

  // atualizar anuncio
  const handleEditAd = (id) => {
    history.push(`/anuncios/atualizar/${id}`);
  };

  return (
    <Container>
      <Header>
        <h1>Meus Anúncios</h1>
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
          onToggle={() => handleToggleAd(selectedAd.id)}
          onEdit={() => handleEditAd(selectedAd.id)}
          onDelete={() => handleDeleteAd(selectedAd.id)}
          isActive={selectedAd.ativo}
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
              onToggle={() => handleToggleAd(ad.id)}
              isActive={ad.ativo}
            />
          ))}
      </AdsContainer>
      <Footer />
    </Container>
  );
};

export default MeusAnuncios;




