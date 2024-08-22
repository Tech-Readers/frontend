// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';  // Importa PropTypes
import './BookCard.css';
  
  const BookCard = ({ image, title, author, genre, description, userProfile}) => {
    return (
      <div className="book-card">
        <div className="profile-pic-container">
                <img src={userProfile} alt="Perfil do Usuário" className="profile-pic" />
            </div>
        <div className="book-card-header">
          <img src={image} alt={title} className="book-image" />
        </div>
        <div className="book-card-body">
          <h3 className="book-title">{title}</h3>
          <div className="book-details">
            <span className="book-genre">{genre}</span>
            <span className="book-author">{author}</span>
          </div>
          <p className="book-description">{description}</p>
        </div>
      </div>
    );
  };

    // Definição de tipos e obrigatoriedade das props
    BookCard.propTypes = {
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        userProfile: PropTypes.string.isRequired,
    };
    

  
  export default BookCard;