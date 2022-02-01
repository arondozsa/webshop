import React from "react";
import Product from "./Product";

export default function Products() {
  let t = [
    {
      name : 'ez',
      price : 12
    }, 
    {
      name : 'az',
      price : 24
    }
  ]
  console.log(t)
  return (
   
    
    t.map((e, i ) =>  <Product key ={i} name = {e.name} price = {e.price} />)
 
  )
}