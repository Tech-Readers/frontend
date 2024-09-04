import React from 'react';
import { StyledReviewStars } from './ReviewStars.styles';

const ReviewStars = ({ rating }) => {
  return (
    <StyledReviewStars>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>{index < rating ? '★' : '☆'}</span>
      ))}
    </StyledReviewStars>
  );
};

export default ReviewStars;



