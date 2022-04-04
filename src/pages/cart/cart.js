import React from 'react'
import Product from './components/Product';
import { useCart } from '../../context/cart-context'
import PrizeDetailContainer from './components/PrizeDetailContainer';

const Cart = () => {
    const { cartItem } = useCart()

  return (
    <section className="middleSection" id='middleSection'>
        <div className="content-box p-1 ">
              <h3 className="text-center p-t-15">My cart <span>({ cartItem.length})</span></h3>
            <div className="cart-main-conatiner flex-wrap">
                  <div className="cart-item-container">
                      {
                          cartItem && cartItem.map((product) => (
                              <Product key={product.id} product={product} />
                          ))
                      }
                </div>
                <PrizeDetailContainer/>
            </div>
        </div> 
    </section>
  )
}

export default Cart