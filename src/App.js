import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './pages/product/product';
import Login from './pages/auth/login/login';
import Signup from './pages/auth/signup/signup';
import Home from './pages/home/home';
import Wishlist from './pages/wishlist/wishlist';
import Cart from './pages/cart/cart.js'
import Footer from './components/footer'
import ProtechRoute from './components/ProtectedRoute';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route element={<ProtechRoute/>}>
            <Route path='wishlist' element={<Wishlist/> }/>
            <Route path='/cart' element={<Cart/> }/>
            <Route path='products' element={<Product/> }/>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
