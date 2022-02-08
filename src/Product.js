import React from 'react'
import { CartContext } from './CartContext'
import './Product.css'

export default function Product({name, price, description}) {
  let cartContext = React.useContext(CartContext)
  return (
    <div className='productCard'>
      <h4>{name}</h4>
      <p>{description}</p>
      <span>{100 * price} Ft</span>
      <button onClick={() => cartContext.cart !== null ? cartContext.setCart([...cartContext.cart, { [name] : price } ]) : cartContext.setCart([{ [name] : price }])}>kosárba</button>
    </div>
  )
}