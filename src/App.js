import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './pages/product/product';



import Login from './pages/auth/login/login';
import Signup from './pages/auth/signup/signup';
import Home from './pages/home/home';


import Product from './pages/product/product';

import Wishlist from './pages/wishlist/wishlist';
import Cart from './pages/cart/cart.js'
import Home from './pages/home/home.js'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='products' element={<Product />} />
          <Route path='wishlist' element={<Wishlist/> }/>
          <Route path='/cart' element={<Cart/> }/>
          <Route path='/' element={<Home/>}/>
          <Route path='products' element={<Product/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
