// src/components/anuncios/AdCard/jsx:
// src/components/anuncios/AdCard.jsx
import React from 'react';
import { Card, ProfileCircle, AdImage, AdDetails, AdTitle, AdInfo, AdDescription, ButtonGroup, Button, ToggleButton } from './AdCard.styled';
import trashIcon from '../../assets/trash-icon.svg';
import toggleOnIcon from '../../assets/toggle-on.png';
import toggleOffIcon from '../../assets/toggle-off.png';

const AdCard = ({ id, title, genre, author, description, isSelected, onSelect, onToggle, onEdit, onDelete, isActive, profileImageUrl, bookImageUrl }) => {
  return (
    <Card onClick={onSelect} isSelected={isSelected}>
      <ProfileCircle isSelected={isSelected}>
        <img src={profileImageUrl} alt="Perfil do Anunciante" />
      </ProfileCircle>
      <AdImage>
        <img src={bookImageUrl} alt="Imagem do Livro" />
      </AdImage>
      <AdDetails>
        <AdTitle>{title}</AdTitle>
        <AdInfo>{genre} | {author}</AdInfo>
        <AdDescription>{description}</AdDescription>
        {isSelected && (
          <>
            <ButtonGroup>
              <Button className="edit" onClick={onEdit}>Editar anúncio</Button>
              <Button className="delete" onClick={onDelete}>
                <img src={trashIcon} alt="Excluir" />
                Excluir anúncio
              </Button>
            </ButtonGroup>
            <ToggleButton onClick={onToggle} disabled={!isActive}>
              <img src={isActive ? toggleOnIcon : toggleOffIcon} alt="Toggle" />
            </ToggleButton>
          </>
        )}
      </AdDetails>
    </Card>
  );
};

export default AdCard;
