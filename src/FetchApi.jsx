import axios from "axios";

const token = localStorage.getItem("");

const FrontUrl = "http://localhost:5173/";

export const api = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

// Exemplo de requisição para obter todos os usuários
export const getUsers = async () => {
    try {
        const response = await api.get("/users");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    }
};

// Exemplo de requisição para criar um novo usuário
export const createUser = async (userData) => {
    try {
        const response = await api.post("/users", userData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
    }
};
