import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/cart-context'
import { CateogryProvider } from './context/cateogryContext'

ReactDOM.render(
  <React.StrictMode>
    <CateogryProvider>
    <CartProvider>
      <App />
      </CartProvider>
    </CateogryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


