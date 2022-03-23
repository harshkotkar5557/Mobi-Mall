import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/cart/cart';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/cart' element={<Cart/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
