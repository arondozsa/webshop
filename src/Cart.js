import React from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
let { cart , setCart } = React.useContext(CartContext)
  return (
    cart && cart.map((e, i) => {
      return (<div key ={i}>
        <h3>{Object.keys(e)}</h3>
        <p>{Object.values(e)}</p>
        <button onClick ={() => {
          setCart(cart.filter((item, i) => cart.indexOf(e) !== i))
        }}>kivesz</button>
      </div>)
    })
  )

}