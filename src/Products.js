import React from "react";
import Product from "./Product";
import products from "./products.json"

export default function Products() {
  
  return (
    products.map((e, i ) =>  <Product key ={i} name = {e.name} price = {e.price} description = {e.description} />)
 
  )
}