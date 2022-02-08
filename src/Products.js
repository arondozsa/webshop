import React from "react";
import Product from "./Product";
import products from "./products.json"
import { SearchContext } from "./SearchContext";
import './Product.css'

export default function Products() {
  let { search } = React.useContext(SearchContext)
  let filteredProducts = products.filter(prod => prod.name.includes(search))
  return (
    <div className = 'productsWrapper'>
    {filteredProducts.map((e, i ) =>  <Product key ={i} name = {e.name} price = {e.price} description = {e.description} />)}
    </div>
  )
}