import React from "react";
import { CartContext } from "./CartContext";
import './Product.css'
import { useNavigate } from "react-router";

export default function Cart() {
let { cart , setCart } = React.useContext(CartContext)
let navigate = useNavigate()
  return (
    <div className="cartWrapper">
    {cart && cart.map((e, i) => {
      return (
        <div className = 'cartCard' key ={i} onClick = {elm => {
          if (elm.target.nodeName === "BUTTON") return
          navigate(`/products/${Object.keys(e)}`)}}>
        <h4>{Object.keys(e)}</h4>
        <span>{100* Object.values(e)} Ft</span>
        <button onClick ={() => {
          setCart(cart.filter((item, i) => cart.indexOf(e) !== i))
        }}>kivesz</button>
      </div>)})
    }
    </div>
  )

}