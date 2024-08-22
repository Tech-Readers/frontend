//src/pages/anuncios/MeusAnuncios.jsx:
import React, { useEffect, useState } from 'react';
import { getExchangesByUserId, deleteExchange, closeExchange } from '../../services/exchangeService';
import AdCard from '../../components/anuncios/AdCard';
import AtualizarAnuncio from './AtualizarAnuncio';
import Footer from '../../components/footer/footer';
import { Container, AdsContainer, Header } from './MeusAnuncios.styled';

const MeusAnuncios = () => {
  const [ads, setAds] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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

  // excluir anuncio
  const handleDeleteAd = async (id) => {
    try {
      await deleteExchange(id);
      setAds(ads.filter(ad => ad.id !== id));
      setSelectedAd(null);
    } catch (error) {
      console.error('Erro ao excluir o anúncio:', error);
    }
  };

  // fechar anuncio
  const handleToggleAd = async (id) => {
    try {
      await closeExchange(id);
      setSelectedAd(prev => ({ ...prev, ativo: false }));
    } catch (error) {
      console.error('Erro ao desativar o anúncio:', error);
    }
  };

  // atualizar anuncio
  const handleEditAd = () => {
    setIsEditing(true);
  };

  const handleUpdateSuccess = () => {
    setIsEditing(false);
    setSelectedAd(null);
    // Atualizar a lista de anúncios após a edição, se necessário
  };

  return (
    <Container>
      <Header>
        <h1>Meus Anúncios</h1>
      </Header>

      {isEditing && selectedAd ? (
        <AtualizarAnuncio id={selectedAd.id} onSuccess={handleUpdateSuccess} />
      ) : (
        <>
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
              onEdit={handleEditAd}
              onDelete={() => handleDeleteAd(selectedAd.id)}
              isActive={selectedAd.ativo}
            />
          )}

          <AdsContainer>
            {ads
              .filter(ad => !selectedAd || ad.id !== selectedAd.id)  // filtra o anúncio selecionado
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
        </>
      )}
      <Footer />
    </Container>
  );
};

export default MeusAnuncios;







