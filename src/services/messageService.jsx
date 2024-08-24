// src/services/messageService.jsx:
import api from './api';

// Retorna todas as mensagens de um anúncio específico
export const getMessagesByExchangeId = async (anuncio_id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.get(`/messages/exchanges/${anuncio_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter mensagens:', error);
    throw error;
  }
};

// Envia uma nova mensagem
export const createMessage = async (messageData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.post('/messages', messageData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    throw error;
  }
};

// Marca uma mensagem como lida
export const markMessageAsRead = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.patch(`/messages/${id}/read`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao marcar mensagem como lida:', error);
    throw error;
  }
};




