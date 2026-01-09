import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`
      bg-dark-100 border border-dark-300 rounded-2xl p-6
      ${hover ? 'transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;
