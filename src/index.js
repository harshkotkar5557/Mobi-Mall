import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/cart-context'
import { CateogryProvider } from './context/cateogryContext'
import { AuthProvider } from './context/authContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <CateogryProvider>
    <CartProvider>
      <App />
      </CartProvider>
      </CateogryProvider>
      </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


