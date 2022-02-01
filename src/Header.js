import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

export default function Header() {

  return (
    <header>
      <h1>Webshop</h1>
      <Search />
      <Link to = '/products'>Products</Link>
      <Link to ='/'>Home</Link>
      <Link to ='/cart'>Cart</Link>
    </header>
  )
}