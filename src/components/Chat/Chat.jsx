// src/components/Chat/Chat.jsx:
// src/components/Chat/Chat.jsx:
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Chat.css";
import ProfileCard from "./ProfileCard";
import Footer from "../footer/Footer";
import { DivColumn } from "../../AppStyle";
import MenuNav from "../menunav/MenuNav";
import { getMessagesByExchangeId, createMessage } from "../../services/messageService"; // Importando funções do service

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    // Obtendo IDs de usuário e anúncio do localStorage
    const UserLogado = localStorage.getItem("userId"); // ID do usuário logado
    const ANUNCIO_ID = localStorage.getItem("anuncioId"); // ID do anúncio selecionado
    const UserRecebe = localStorage.getItem("userDestinatarioId"); // ID do usuário destinatário (obtido de outra forma)

    const { id } = useParams();
    const [formData, setFormData] = useState({
        id: "",
        usuario_remetente_id: "",
        usuario_destinatario_id: "",
        anuncio_id: "",
        texto: "",
        data_envio: "",
        lido: Boolean,
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const chat = await getExchangeById(id); // token  é obtido internamente
                setFormData({
                    id: chat.id,
                    usuario_remetente_id: chat.usuario_remetente_id,
                    usuario_destinatario_id: chat.usuario_destinatario_id,
                    anuncio_id: chat.anuncio_id,
                    texto: chat.texto,
                    data_envio: chat.data_envio,
                });
            } catch (error) {
                console.error("Erro ao carregar os dados do anúncio:", error);
            }
        };

        fetchData();
    }, [id]);

    // Função para buscar mensagens
    const fetchMessages = async () => {
        try {
            if (ANUNCIO_ID) {
                // Verifica se o ID do anúncio está definido
                const data = await getMessagesByExchangeId(ANUNCIO_ID);
                console.log(data);
                setMessages(data);
            } else {
                console.warn("ID do anúncio não encontrado.");
            }
        } catch (error) {
            console.error("Erro ao buscar mensagens:", error);
        }
    };

    // Função para enviar nova mensagem
    const handleSendMessage = async () => {
        console.log(newMessage);

        if (newMessage.trim()) {
            try {
                const messageData = {
                    texto: newMessage,
                    anuncio_id: ANUNCIO_ID,
                    usuario_destinatario_id: UserRecebe,
                    usuario_remetente_id: UserLogado,
                };

                await createMessage(messageData);

                const sentMessage = {
                    id: Date.now(),
                    usuario_remetente_id: UserLogado,
                    texto: newMessage,
                };
                setMessages([...messages, sentMessage]);
                setNewMessage("");
            } catch (error) {
                console.error("Erro ao enviar mensagem:", error);
            }
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <DivColumn style={{ alignContent: "center", justifyContent: "center" }}>
            <MenuNav />
            <div className="chat-user">
                <ProfileCard name="Nina" photoUrl="ligeirinho.jpg" />
                <div className="chat-container">
                    <div className="message-list">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`message ${
                                    message.usuario_remetente_id === UserLogado
                                        ? "sent"
                                        : "received"
                                }`}
                            >
                                {message.texto}
                            </div>
                        ))}
                    </div>
                    <div className="message-input">
                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Digite sua mensagem..."
                        />
                        <button onClick={handleSendMessage}>Enviar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </DivColumn>
    );
};
