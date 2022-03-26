import React from 'react'
import { useCart } from '../../context/cart-context'

function Card({ product }) {
  
  const { addTOCart, addWishList, } = useCart()

    return (
    <div class="card horizontal-card">
        <div class="d-flex justify-center">
             <div class="card_img">
                      <img class="h-full" src={product.avatar} alt="tesla_logo"/>
              </div>     
              <div class="card_info">
                      <h3>
                        {product.modelName}
                      </h3>
                      <div class="d-flex flex-dr-col">
                        <span>by {product.brandName}</span>
              <span class="p-t-10">Prize: <i className="fa fa-inr" aria-hidden="true"></i><span class="active_item">{product.discountedPrize}</span></span>
                      </div>
                  </div>    
         </div>
     
                <div class="d-flex justify-center gap-1 m-5">
                      <button className="btn primary" onClick={()=> addTOCart(product)}>Add to cart</button>
                      <button className="btn primary" onClick={()=> addWishList(product)} >Wishlist</button>
                </div>      

    </div>
     
  )
}

export default Card