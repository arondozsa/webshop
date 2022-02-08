import React from "react";
import Product from "./Product";
import products from "./products.json"
import { SearchContext } from "./SearchContext";

export default function Products() {
  let { search } = React.useContext(SearchContext)
  let filteredProducts = products.filter(prod => prod.name.includes(search))
  return (
    filteredProducts.map((e, i ) =>  <Product key ={i} name = {e.name} price = {e.price} description = {e.description} />)
 
  )
}