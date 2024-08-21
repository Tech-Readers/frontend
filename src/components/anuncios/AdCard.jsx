import React from 'react';
import { Card, ProfileCircle, AdImage, AdDetails, AdTitle, AdInfo, AdDescription, ButtonGroup, Button, ToggleButton } from './AdCard.styled';
import profileImg from '../../assets/profile.svg';
import trashIcon from '../../assets/trash-icon.svg';
import bookImg from '../../assets/book-image.svg';
import toggleOnIcon from '../../assets/toggle-on.png';
import toggleOffIcon from '../../assets/toggle-off.png';

const AdCard = ({ id, title, genre, author, description, isSelected, onSelect, onToggle, isActive }) => {
  return (
    <Card onClick={onSelect} isSelected={isSelected}>
      <ProfileCircle isSelected={isSelected}>
        {/* ATENÇÃO: tenho que remover a imagem profile.svg do Perfil do Anunciante daqui e inserir a imagem real do usuario anunciante retornada pelo endpoints GET /users e GET /users/{id}*/}
        <img src={profileImg} alt="Perfil do Anunciante" /> 
      </ProfileCircle>
      <AdImage>
        {/* ATENÇÃO: tenho que remover a imagem book-image.svg dos cards de anuncios daqui e inserir a imagem real do livro oferecido retornada pelo endpoints GET /exchanges/{id}*/}
        <img src={bookImg} alt="Imagem do Livro" />
      </AdImage>
      <AdDetails>
        <AdTitle>{title}</AdTitle>
        <AdInfo>{genre} | {author}</AdInfo>
        <AdDescription>{description}</AdDescription>
        {isSelected && (
          <>
            <ButtonGroup>
              <Button className="edit">Editar anúncio</Button>
              <Button className="delete">
                <img src={trashIcon} alt="Excluir" />
                Excluir anúncio
              </Button>
            </ButtonGroup>
            <ToggleButton onClick={onToggle}>
              <img src={isActive ? toggleOnIcon : toggleOffIcon} alt="Toggle" />
            </ToggleButton>
          </>
        )}
      </AdDetails>
    </Card>
  );
};

export default AdCard;