// src/services/userService.jsx:
import api from './api';

// usuários (users) possuem os seguintes atributos:
// {
//   "nome": "",
//   "email": "",
//   "senha": "",
//   "image": "",
//   "enderecos": {
//       "logradouro": "",
//       "numero": "",
//       "bairro": "",
//       "complemento": "",
//       "cep": "",
//       "municipio": "",
//       "uf": ""
//   },
//   "telefones": [
//       {
//           "contato": ""
//       }
//   ]
// }

// Retorna todos os usuários
export const getAllUsers = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    throw error;
  }
};

// Retorna um usuário específico por ID
export const getUserById = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter o usuário:', error);
    throw error;
  }
};

// Cria um novo usuário
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar o usuário:', error);
    throw error;
  }
};

// Autentica um usuário e retorna o token JWT
export const loginUser = async (loginData) => {
    try {
      const response = await api.post('/users/login', loginData);
      const { token, id } = response.data;
  
      if (token && id) {
        // Armazena o token e o ID do usuário no localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('userId', id);
      }
  
      return response.data;
    } catch (error) {
      console.error('Erro ao autenticar o usuário:', error);
      throw error;
    }
  };


// Atualiza os dados de um usuário específico por ID
export const updateUser = async (id, userData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.put(`/users/${id}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar o usuário:', error);
    throw error;
  }
};

// Deleta um usuário específico por ID
export const deleteUser = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar o usuário:', error);
    throw error;
  }
};






