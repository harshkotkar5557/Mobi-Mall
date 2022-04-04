import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/cart-context'
import axios from 'axios'

function Wishlist() {

    const { cartItem, wishlist, addTOCart, removeFromWishlist} = useCart()

    const navigator = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get('https://mobi-mall-api.herokuapp.com/users')
            console.log(res,'users')
            } catch (error) {
                console.log(error,'users')
            }
            
        })()
    })

    return ( 
        <section className="middleSection">
        <div className="content-box">
            <h3 className="text-center">My wishlist <span>( { wishlist.length} )</span></h3>
                <div className="product-container d-flex justify-center">
                    {
                        wishlist && wishlist.map((product) => (
                            <div className="card shadow" key={product.id}>
                                <div className="card_img position-relative" >
                                    <figure >
                                    <img src={product.avatar}  alt={product.modelName} />
                                    </figure>
                                <div className="card_info">
                                    <h3>
                                        {product.modelName}
                                    </h3>
                                    <span className="p-t-10">Prize : <span className="active_item">$140</span></span>
                                </div>
                                <div className="wishlist-icon" onClick={()=> removeFromWishlist(product.id,wishlist)}>
                                    <i className="fa fa-heart in-wishlist" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="d-flex align-center font_1r justify-around" onClick={ ()=> addTOCart(product)} >
                                
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