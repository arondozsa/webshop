import React from 'react'
import { CartContext } from './CartContext'
import './Product.css'
import { useNavigate, useParams } from 'react-router'

export default function Product({name, price, description}) {
  let cartContext = React.useContext(CartContext)
  let navigate = useNavigate()
  let { prod } = useParams()
  return (
    <div className='productCard' onClick = {e => {
      if (e.target.nodeName === "BUTTON") return
      navigate(name)}}>
      <h4>{name}</h4>
      <p>{description}</p>
      <span>{100 * price} Ft</span>
      <button onClick={() => cartContext.cart !== null ? cartContext.setCart([...cartContext.cart, { [name] : price } ]) : cartContext.setCart([{ [name] : price }])}>kosárba</button>
    </div>
  )
}