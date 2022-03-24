import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

import Login from './pages/auth/login/login';
import Signup from './pages/auth/signup/signup';

import Product from './pages/product/product';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='products' element={<Product/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
