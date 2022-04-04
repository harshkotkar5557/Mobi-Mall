import React from 'react'
import { useCart } from '../../context/cart-context'

function Card({ product }) {
  
  const { addTOCart, addWishList, } = useCart()

    return (
    <div className="card horizontal-card">
        <div className="d-flex justify-center">
             <div className="card_img">
                      <img className="h-full" src={product.avatar} alt="tesla_logo"/>
              </div>     
              <div className="card_info">
                      <h3>
                        {product.modelName}
                      </h3>
                      <div className="d-flex flex-dr-col">
                        <span>by {product.brandName}</span>
              <span className="p-t-10">Prize: <i className="fa fa-inr" aria-hidden="true"></i><span className="active_item">{product.discountedPrize}</span></span>
                      </div>
                  </div>    
         </div>
     
                <div className="d-flex justify-center gap-1 m-5">
                      <button className="btn primary" onClick={()=> addTOCart(product)}>Add to cart</button>
                      <button className="btn primary" onClick={()=> addWishList(product)} >Wishlist</button>
                </div>      

    </div>
     
  )
}

export default Card