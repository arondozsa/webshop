import React from 'react'
import { CartContext } from './CartContext'

export default function Product({name, price, description}) {
  let cartContext = React.useContext(CartContext)
  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={() => cartContext.cart !== null ? cartContext.setCart([...cartContext.cart, { [name] : price } ]) : cartContext.setCart([{ [name] : price }])}>kosárba</button>
    </div>
  )
}