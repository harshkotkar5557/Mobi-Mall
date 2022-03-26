import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/cart-context'

function Wishlist() {

    const { cartItem, wishlist, addTOCart, removeFromWishlist} = useCart()

    const navigator = useNavigate()

   

    return ( 
        <section class="middleSection">
        <div class="content-box">
            <h3 class="text-center">My wishlist <span>( { wishlist.length} )</span></h3>
                <div class="product-container d-flex justify-center">
                    {
                        wishlist && wishlist.map((product) => (
                            <div class="card shadow" key={product.id}>
                                <div class="card_img position-relative" >
                                    <figure >
                                    <img src={product.avatar}  alt={product.modelName} />
                                    </figure>
                                <div class="card_info">
                                    <h3>
                                        {product.modelName}
                                    </h3>
                                    <span class="p-t-10">Prize : <span class="active_item">$140</span></span>
                                </div>
                                <div class="wishlist-icon" onClick={()=> removeFromWishlist(product.id,wishlist)}>
                                    <i class="fa fa-heart in-wishlist" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="d-flex align-center font_1r justify-around" onClick={ ()=> addTOCart(product)} >
                                
                                    {
                                         cartItem.some((elm) => product.id === elm.id) ?
                                         <button className="btn primary flex-1"  onClick={() => navigator('/cart')}>Go to cart</button> :
                                         <button className="btn primary flex-1" onClick={() => addTOCart(product)}>Add to cart</button>
                                    }
                                    
                                    
                            </div>
                        </div>
                        ))
                    }
               
               
            </div>
        </div>
    </section>
    )
}

export default Wishlist