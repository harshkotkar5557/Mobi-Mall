import React, { useReducer, useState } from 'react'
import { v4 as uuid } from 'uuid';
import PrizeDetailContainer from './components/PrizeDetailContainer';
import Product from './components/Product';

const ACTIONS = {
    INCREASE_QUANTITY: 'increase-quantity',
    DECREASE_QUANTITY:'decrease-quantity',
}

const gettingDataFromContext = [
    {
        id:uuid(),
        modelName: "Galaxy S22 ultra",
        brandName: "Samsung",
        description: "Dynamic AMOLED 2x display with up to 1750 nits in peak brightness.5G Ready powered by Galaxy’s first 4nm processor",
        avatar: "/images/s22-ultra.webp",
        originalPrize: "131999",
        discountedPrize: "109999",
        ratings: 4,
        memoryAndStorage:"8Gb ram & 128 stroage",
        colour: "black",
        quantity:1
    },
    {
        id:uuid(),
        modelName: "OnePlus 9 pro",
        brandName: "OnePlus",
        description: "Rear Quad Camera Co-Developed by Hasselblad.Qualcomm Snapdragon 888 Processor with Adreno 660 GPU",
        avatar: "/images/oneplus-9pro",
        originalPrize: "69999",
        discountedPrize: "62999",
        ratings: 4,
        memoryAndStorage:"8Gb ram & 128 stroage",
        colour: "grey",
        quantity:1
    },
]

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREASE_QUANTITY:
            return increaseQuantity(action.payload.id,state)
        case ACTIONS.DECREASE_QUANTITY:
            return decreaseQuantity(action.payload.id,state)
        default:
            return state;
    }
}

function increaseQuantity(id,list) {
    let productList = [...list]
    return productList.map((product) => {
        // eslint-disable-next-line no-unused-expressions
        product.id === id ? product.quantity = product.quantity + 1 : null;
        return product
    })
    
}

function decreaseQuantity(id,list) {
    let productList = [...list]
    return productList.map((product) => {
        // eslint-disable-next-line no-unused-expressions
        product.quantity !==1 && product.id === id ? product.quantity = product.quantity - 1 : null;
        return product
    })
    
}

const Cart = () => {
    const [productList, disptch] = useReducer(reducer, gettingDataFromContext)

    function handleIncrementEvent(id, type) {
        disptch({ type: type, payload:{id:id} })
    }
    

  return (
    <section className="middleSection" id='middleSection'>
        <div className="content-box p-1 ">
              <h3 className="text-center">My cart <span>({ productList.length})</span></h3>
            <div className="cart-main-conatiner flex-wrap">
                  <div className="cart-item-container">
                      {
                          productList && productList.map((product) => (
                              <Product key={product.id} product={product} handleIncrementEvent={handleIncrementEvent}/>
                          ))
                      }
                </div>
                <PrizeDetailContainer />
            </div>
        </div> 
    </section>
  )
}

export default Cart