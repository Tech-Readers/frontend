import React, { useState } from 'react';
import MenuNav from '../../components/anuncios/MenuNav';
import AdCard from '../../components/anuncios/AdCard';
import { MainContent, Footer, FooterText, HighlightedAd, AdsList } from './VisualizarAnuncio.styled';

// Exemplo de anúncios estáticos para testar. Não esquever de remover os exemplos e consumir o endpoint GET exchanges/user/:anunciante_id para receber os dados reais.
const mockAds = [
  { id: 1, title: 'Título Livro 1', genre: 'Gênero', author: 'Autor', description: 'Descrição do Livro 1', isActive: true },
  { id: 2, title: 'Título Livro 2', genre: 'Gênero', author: 'Autor', description: 'Descrição do Livro 2', isActive: true },
  { id: 3, title: 'Título Livro 3', genre: 'Gênero', author: 'Autor', description: 'Descrição do Livro 3', isActive: true },
  { id: 4, title: 'Título Livro 4', genre: 'Gênero', author: 'Autor', description: 'Descrição do Livro 4', isActive: true },
];

const VisualizarAnuncio = () => {
  const [selectedAd, setSelectedAd] = useState(null); // estado para o anúncio selecionado

  const handleSelectAd = (ad) => {
    setSelectedAd(ad);
  };

  const handleToggleActive = () => {
    setSelectedAd(prevAd => ({
      ...prevAd,
      isActive: !prevAd.isActive,
    }));
  };

  const filteredAds = mockAds.filter(ad => !selectedAd || ad.id !== selectedAd.id);

  return (
    <>
      <MenuNav />
      <MainContent>
        {selectedAd && (
          <HighlightedAd>
            <AdCard
              id={selectedAd.id}
              title={selectedAd.title}
              genre={selectedAd.genre}
              author={selectedAd.author}
              description={selectedAd.description}
              isSelected={true}
              onToggle={handleToggleActive}
              isActive={selectedAd.isActive}
            />
          </HighlightedAd>
        )}
        <AdsList>
          {filteredAds.map(ad => (
            <AdCard
              key={ad.id}
              id={ad.id}
              title={ad.title}
              genre={ad.genre}
              author={ad.author}
              description={ad.description}
              isSelected={false}
              onSelect={() => handleSelectAd(ad)}
            />
          ))}
        </AdsList>
      </MainContent>
      <Footer>
        <FooterText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</FooterText>
        <FooterText>Lorem ipsum</FooterText>
        <FooterText>Lorem ipsum</FooterText>
        <FooterText>Lorem ipsum</FooterText>
      </Footer>
    </>
  );
};

export default VisualizarAnuncio;
