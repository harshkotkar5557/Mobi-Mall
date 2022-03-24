import React from 'react'

const ACTIONS = {
    INCREASE_QUANTITY: 'increase-quantity',
    DECREASE_QUANTITY:'decrease-quantity',
}

function Product({ product, handleIncrementEvent }) {
  return (
    <div className="card horizontal-card cart-item-card white-bg">
        <div className="d-flex">
            <div className="w-60p">
                <img className="h-full object-cover" src={product.avatar} alt={product.modelName}/>
            </div>     
                <div className="card_info p-1">
                    <h4 className="font_1r">{product.modelName}</h4>
                    <div className="cart-car-prize d-flex align-center gap-1rem">
                        <h4 className="offer-prize"><i className="fa fa-inr" aria-hidden="true"></i>{product.discountedPrize}</h4> 
                        <span className="main-prize"><i className="fa fa-inr" aria-hidden="true"></i>{product.originalPrize}</span>
                    </div> 
                    <span id="cart-card-discount-tag">50% off</span>
                    <div className="cart-quantity-box d-flex align-center gap-1">
                        <p className="font_1r">Quantity: </p>
                        <div className='d-flex align-center gap-1'>
                            <button className='btn default increment'  onClick={() => handleIncrementEvent(product.id,ACTIONS.DECREASE_QUANTITY)}>-</button>
                            <span>{ product.quantity }</span>
                            <button className='btn default'  onClick={() => handleIncrementEvent(product.id,ACTIONS.INCREASE_QUANTITY)}>+</button>
                        </div>
                                            
                    </div>
                    <div className="cart-card-btn">
                        <button className="btn default w-full">Remove from cart</button>
                        <button className="btn outlined-default w-full">Add to wishlist</button>
                    </div>
                </div>    
        </div>
    </div>
  )
}

export default Product