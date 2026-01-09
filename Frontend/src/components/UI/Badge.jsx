import React from 'react';

const Badge = ({ children, variant = 'default', size = 'md' }) => {
  const variants = {
    default: 'bg-dark-200 text-gray-300',
    primary: 'bg-primary/20 text-primary',
    gold: 'bg-gold/20 text-gold',
    success: 'bg-green-500/20 text-green-400',
    warning: 'bg-yellow-500/20 text-yellow-400',
    danger: 'bg-red-500/20 text-red-400',
    purple: 'bg-purple-500/20 text-purple-400',
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };
  
  return (
    <span className={`inline-flex items-center font-medium rounded-lg ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
};

export default Badge;
