import React from 'react';

const Button = ({ startIcon, endIcon, children, onClick, type = "button", className }) => {
  return (
    <button
      type={type}   
      onClick={onClick}
      className={className}
    >
     
      {startIcon && <span className="start-icon">{startIcon}</span>}

   
      <span>{children}</span>

 
      {endIcon && <span className="end-icon">{endIcon}</span>}
    </button>
  );
};

export default Button;
