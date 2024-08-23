import React, { useState, useEffect } from 'react';
import './Chat.css';
import ProfileCard from './ProfileCard';

const ANUNCIO_ID = 1;
const UserRecebe = 'b07a9e6d-c82d-4386-adfd-745c21986cb5';
const UserLogado = 'c59beb18-7c5d-43d0-aed2-ecd05db452ee';
const token = localStorage.getItem('token');
 
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const fetchMessages = async () => {
    try {
      const response = await fetch(`http://localhost:8000/messages/exchanges/${ANUNCIO_ID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Falha ao buscar mensagens');
      }
      const data = await response.json();
      console.log(data);
      setMessages(data);
    } catch (error) {
      console.error('Erro ao buscar mensagens:', error);
    }
  };

  const handleSendMessage = async () => {
    console.log(newMessage);

    if (newMessage.trim()) {
      try {
        
        const response = await fetch('http://localhost:8000/messages/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            texto: newMessage, anuncio_id: ANUNCIO_ID.toString(),
            usuario_destinatario_id: UserRecebe, usuario_remetente_id: UserLogado
          }),
        });


        // {
        //     "texto": "gostaria de realizar uma troca",
        //     "anuncio_id": "1",
        //     "usuario_destinatario_id": "c59beb18-7c5d-43d0-aed2-ecd05db452ee",
        //     "usuario_remetente_id": "b07a9e6d-c82d-4386-adfd-745c21986cb5"
        // }

        if (!response.ok) {
          throw new Error('Falha ao enviar mensagem' + error.message);
        }
        const sentMessage = { id: Date.now(), usuario_remetente_id: UserLogado, texto: newMessage };
        setMessages([...messages, sentMessage]);
        setNewMessage('');
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className='chat-user' >
        <ProfileCard
          name="Nina"
          photoUrl="ligeirinho.jpg" 
        />
      <div className="chat-container">
        <div className="message-list">
          {messages.map(message => (
            <div
              key={message.id}
              className={`message ${message.usuario_remetente_id == UserLogado ? 'sent' : 'received'}`}
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
  );
};

export default Chat;
