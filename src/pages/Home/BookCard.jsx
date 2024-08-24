import PropTypes from "prop-types"; // Importa PropTypes
import React from "react";
import "./BookCard.css";

const BookCard = ({ image, title, author, genre, description, userProfile, link }) => {
    const handleClick = () => {
        window.location.href = link;
    };
    return (
        <div className="book-card" onClick={handleClick}>
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

//Definição de tipos e obrigatoriedade das props
BookCard.propTypes = {
    //image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    userProfile: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default BookCard;
