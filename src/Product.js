import React from 'react'

export default function Product({name, price, description}) {

  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}