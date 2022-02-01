import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter , Routes, Route, } from 'react-router-dom'
import Products from './Products';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path = '/products' element = {<Products /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
