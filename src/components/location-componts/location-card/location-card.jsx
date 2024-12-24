import React from 'react'

export const LocationCard = ({image_src, name, slug, text, created_at}) => {
  return (
    <div>
        <img src={`https://realauto.limsa.uz/api/uploads/images/${image_src}`} alt="img" />
        <h1>{name}</h1>
        <p>{slug}</p>
        <span>{text}</span>
        <span>{created_at}</span>
    </div>
  )
}
