import React from 'react'
import { useParams } from 'react-router'
import products from './products.json'
import { CartContext } from './CartContext'

export default function ProductPage() {
  let { prod } = useParams()
  let currentProd = products.find(e => e.name === prod)
  let { cart, setCart } = React.useContext(CartContext)

  return (
    <div>
      <h2>{currentProd.name}</h2>
      <p>{currentProd.description}</p>
      <span>{currentProd.price}</span>
      <button onClick={() => cart !== null ?
        setCart([...cart, { [currentProd.name] : currentProd.price } ]) 
        : 
        setCart([{ [currentProd.name] : currentProd.price }])}>kosárba
      </button>
    </div>
  )
}