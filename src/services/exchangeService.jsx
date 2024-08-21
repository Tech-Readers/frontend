import api from './api';

// obtem todos os anuncios
export const getAllExchanges = async (token) => {
  try {
    const response = await api.get('/exchanges', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter anúncios:', error);
    throw error;
  }
};

// Fecha (desativa) um anuncio especifico
export const closeExchange = async (id, token) => {
  try {
    const response = await api.patch(`/exchanges/${id}/close`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao fechar o anúncio:', error);
    throw error;
  }
};

// Obtem um anuncio especifico por ID
export const getExchangeById = async (id, token) => {
  try {
    const response = await api.get(`/exchanges/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter o anúncio:', error);
    throw error;
  }
};

// Obtem todos os anuncios de um usuario especifico
export const getExchangesByUserId = async (userId, token) => {
  try {
    const response = await api.get(`/exchanges/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os anúncios do usuário:', error);
    throw error;
  }
};

// Cria um novo anuncio
export const createExchange = async (exchangeData, token) => {
  try {
    const response = await api.post('/exchanges', exchangeData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar o anúncio:', error);
    throw error;
  }
};

// Atualiza os dados de um anuncio especifico
export const updateExchange = async (id, exchangeData, token) => {
  try {
    const response = await api.put(`/exchanges/${id}`, exchangeData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar o anúncio:', error);
    throw error;
  }
};

// Deleta um anuncio especifico
export const deleteExchange = async (id, token) => {
  try {
    const response = await api.delete(`/exchanges/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar o anúncio:', error);
    throw error;
  }
};


