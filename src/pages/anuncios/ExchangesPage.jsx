import React, { useEffect, useState } from 'react';
import { getAllExchanges } from '../../services/exchangeService';
import AdCard from '../../components/anuncios/AdCard';

const ExchangesPage = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const token = localStorage.getItem('token');  // recuperando o token armazenado
        const data = await getAllExchanges(token);
        setExchanges(data);
      } catch (error) {
        console.error('Erro ao carregar anúncios:', error);
      }
    };

    fetchExchanges();
  }, []);

  return (
    <div>
      {exchanges.map((exchange) => (
        <AdCard
          key={exchange.id}
          id={exchange.id}
          title={exchange.titulo}
          titleBookOffered={exchange.titulo_livro_oferecido}
          genreOffered={exchange.genero_livro_oferecido}
          authorOffered={exchange.autor_livro_oferecido}
          titleBookReceived={exchange.titulo_livro_solicitado}
          genreReceived={exchange.genero_livro_solicitado}
          authorReceived={exchange.autor_livro_solicitado}
          description={exchange.descricao}
          advertiser={exchange.anunciante_id}
          imageBook={exchange.image}
        />
      ))}
    </div>
  );
};

export default ExchangesPage;

