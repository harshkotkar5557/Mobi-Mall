import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './pages/product/product';
import Wishlist from './pages/wishlist/wishlist';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='products' element={<Product />} />
          <Route path='wishlist' element={<Wishlist/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
