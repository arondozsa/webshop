import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter , Routes, Route, } from 'react-router-dom'
import Products from './Products';
import React from 'react'
import { CartContext } from './CartContext';
import Cart from './Cart';
import { SearchContext } from './SearchContext';
import ProductPage from './ProductPage';
import Home from './Home';

function App() {
  let [cart , setCart] = React.useState(null)
  let [search, setSearch] = React.useState('')
  return (
    <BrowserRouter>
    <SearchContext.Provider value = {{search : search, setSearch : setSearch}}>
      <CartContext.Provider value =  {{'cart' : cart , 'setCart' : setCart} }>
        <Header />
          <Routes>
            <Route path = 'products' element = {<Products /> } />
            <Route path = 'products/:prod' element = {<ProductPage />} />
            <Route path = '/cart' element = {<Cart />} />
            <Route path = '/' element = {<Home />} />
          </Routes>

      </CartContext.Provider>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
