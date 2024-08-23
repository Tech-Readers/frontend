// src/components/anuncios/OtherUserAdCard.jsx
import React from 'react';
import { Card, ProfileCircle, AdImage, AdDetails, AdTitle, AdInfo, AdDescription, SendMessageButton } from './OtherUserAdCard.styled';

const OtherUserAdCard = ({ id, title, genre, author, description, profileImageUrl, bookImageUrl, onSendMessage }) => {
  return (
    <Card>
      <ProfileCircle>
        <img src={profileImageUrl} alt="Perfil do Anunciante" />
      </ProfileCircle>
      <AdImage>
        <img src={bookImageUrl} alt="Imagem do Livro" />
      </AdImage>
      <AdDetails>
        <AdTitle>{title}</AdTitle>
        <AdInfo>{genre} | {author}</AdInfo>
        <AdDescription>{description}</AdDescription>
        <SendMessageButton onClick={onSendMessage}>
          Enviar Mensagem
        </SendMessageButton>
      </AdDetails>
    </Card>
  );
};

export default OtherUserAdCard;

