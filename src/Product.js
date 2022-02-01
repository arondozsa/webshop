import React from 'react'

export default function Product({name, price}) {

  return (
    <div>
      <h4>{name}</h4>
      <p>{price}</p>
    </div>
  )
}