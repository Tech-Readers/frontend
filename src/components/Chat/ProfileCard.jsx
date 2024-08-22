import React from 'react';
import './ProfileCard.css'; 

const ProfileCard = ({ name, photoUrl }) => {
  return (
  
      <div className="centered-box">
        <div className="profile-picture">
          <img src={photoUrl} alt={`${name}'s profile`} />
        </div>
        <div className="label">
          {name}
        </div>
      </div>
  
  );
};

export default ProfileCard;
