import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/home/home';


import Product from './pages/product/product';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>

          <Route path='/home' element={<Home/>}/>
          <Route path='products' element={<Product/> }/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
