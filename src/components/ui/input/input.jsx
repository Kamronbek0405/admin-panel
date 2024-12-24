import React from 'react';

export const Input = ({ type, placeholder, value, className, register, name }) => {
  return (
    <div>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        className={className} 
        {...register(name)} 
        required 
      />
    </div>
  );
};
