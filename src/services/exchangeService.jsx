// src/services/exchangeService.jsx:
import api from "./api";

// Obtem todos os anuncios
export const getAllExchanges = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await api.get("/exchanges", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao obter anúncios:", error);
        throw error;
    }
};

// Fecha (desativa) um anuncio especifico
export const closeExchange = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const response = await api.patch(
            `/exchanges/${id}/close`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao fechar o anúncio:", error);
        throw error;
    }
};

// Obtem um anuncio especifico por ID
export const getExchangeById = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const response = await api.get(`/exchanges/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao obter o anúncio:", error);
        throw error;
    }
};

// Obtem todos os anuncios de um usuario especifico
export const getExchangesByUserId = async () => {
    try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId"); // Obtém o ID do usuário do localStorage

        const response = await api.get(`/exchanges/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao obter os anúncios do usuário:", error);
        throw error;
    }
};

// Cria um novo anuncio
export const createExchange = async (exchangeData) => {
    try {
        const token = localStorage.getItem("token");
        const response = await api.post("/exchanges", exchangeData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao criar o anúncio:", error);
        throw error;
    }
};

// Atualiza os dados de um anuncio especifico
export const updateExchange = async (id, exchangeData) => {
    try {
        const token = localStorage.getItem("token");
        const response = await api.put(`/exchanges/${id}`, exchangeData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar o anúncio:", error);
        throw error;
    }
};

// Deleta um anuncio especifico
export const deleteExchange = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const response = await api.delete(`/exchanges/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar o anúncio:", error);
        throw error;
    }
};




