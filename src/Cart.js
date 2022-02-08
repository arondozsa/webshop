import React from "react";
import { CartContext } from "./CartContext";
import './Product.css'

export default function Cart() {
let { cart , setCart } = React.useContext(CartContext)
  return (
    <div className="cartWrapper">
   { cart && cart.map((e, i) => {
      return (<div className = 'cartCard' key ={i}>
        <h4>{Object.keys(e)}</h4>
        <span>{100* Object.values(e)} Ft</span>
        <button onClick ={() => {
          setCart(cart.filter((item, i) => cart.indexOf(e) !== i))
        }}>kivesz</button>
      </div>)
    })}
    </div>
  )

}