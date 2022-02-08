import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter , Routes, Route, } from 'react-router-dom'
import Products from './Products';
import React from 'react'
import { CartContext } from './CartContext';
import Cart from './Cart';

function App() {
  let [cart , setCart] = React.useState(null)
  console.log(cart)
  return (
    <BrowserRouter>
      <CartContext.Provider value =  {{'cart' : cart , 'setCart' : setCart} }>
        <Header />
          <Routes>
            <Route path = '/products/*' element = {<Products /> } />
            <Route path = '/cart' element = { <Cart />} />
          </Routes>

      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
