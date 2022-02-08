import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter , Routes, Route, } from 'react-router-dom'
import Products from './Products';
import React from 'react'
import { CartContext } from './CartContext';
import Cart from './Cart';
import { SearchContext } from './SearchContext';

function App() {
  let [cart , setCart] = React.useState(null)
  let [search, setSearch] = React.useState('')
  console.log(cart)
  return (
    <BrowserRouter>
    <SearchContext.Provider value = {{search : search, setSearch : setSearch}}>
      <CartContext.Provider value =  {{'cart' : cart , 'setCart' : setCart} }>
        <Header />
          <Routes>
            <Route path = '/products/*' element = {<Products /> } />
            <Route path = '/cart' element = { <Cart />} />
          </Routes>

      </CartContext.Provider>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
