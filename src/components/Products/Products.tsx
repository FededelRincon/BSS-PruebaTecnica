// import React from 'react'

interface ProductsProps {
  picture: string;
  title: string;
}

export const Products: React.FC<ProductsProps> = ({ picture, title }) => {
  return (
    <>
      <div>{title}</div>
      <img src={picture} alt={title} />
    </>
  )
}
