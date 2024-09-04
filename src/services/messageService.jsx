import api from './api';	


// Adicione um novo serviço para obter mensagens entre dois usuários
export const getMessagesBetweenUsers = async (usuarioRemetenteId, usuarioDestinatarioId) => {
  try {
    const response = await api.get(`/messages/conversation/${usuarioRemetenteId}/${usuarioDestinatarioId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter mensagens entre usuários:', error);
    throw error;
  }
};


// Retorna todas as conversas do usuário
export const getAllChatsByUserId = async (userId) => {
  try {
    const response = await api.get(`/messages/all`, { params: { userId } });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter conversas:', error);
    throw error;
  }
};


// Retorna uma mensagem especifica 
export const getMessagesById = async (id) => {
  try {
    const response = await api.get(`/messages/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter mensagens:', error);
    throw error;
  }
};

// Envia uma nova mensagem
export const createMessage = async (messageData) => {
  try {
    const response = await api.post('/messages', messageData);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    throw error;
  }
};

// Marca uma mensagem como lida
export const markMessageAsRead = async (id) => {
  try {
    const response = await api.patch(`/messages/${id}/read`);
    return response.data;
  } catch (error) {
    console.error('Erro ao marcar mensagem como lida:', error);
    throw error;
  }
};


