import React, { useEffect, useReducer, useState } from 'react'
import ValueContainer from './ValueContainer'
import { useCart } from '../../../context/cart-context'


function PrizeDetailContainer() {

  const { cartItem } = useCart()

  
  useEffect(() => {
    prizeOfItem(cartItem)
  },[cartItem])

  const [prizingDetail, setPrizingDetail] = useState(
    [
      {
          title: `prize (${cartItem.length ===0 ? 0 : cartItem.length} items) +`,
          value: 0,
          isBold: false
      },
      {
          title: "Disount",
          value: 0,
          isBold: false
      },
      {
          title: "Delivery Charges",
          value: 100,
          isBold: false
      },
      {
          title: "Total Amount",
          value: 0,
          isBold: true
      },
      
    ]
  )

  function prizeOfItem(list) {
    if (!list) return 
    let prizeOfitems = 0;
    let totalDiscount = 0;
    list.map((product) => {
        prizeOfitems = product.quantity * Number(product.discountedPrize) + totalDiscount
        totalDiscount = product.quantity * Number(product.originalPrize) + totalDiscount
    })
    let prizeDetailList = [...prizingDetail]
    prizeDetailList[0].value = prizeOfitems
    prizeDetailList[1].value = totalDiscount
    prizeDetailList[3].value = prizeOfitems + 100
    setPrizingDetail(prizeDetailList)
  }

  return (
        <div className="card cart-prize-details p-1 white-bg">
          <h3 className="p-b-10">Prize details</h3>
            {
              prizingDetail && prizingDetail.map((item) => (
                <ValueContainer key={item.title} title={item.title} value={item.value} isBold={item.isBold}/>
              ))
            }
            <p className="p-t-10">You will save <i className="fa fa-inr" aria-hidden="true"></i> {prizingDetail[1].value} on this order</p>
            <div className="w-full p-t-10">
                <button className="btn primary w-full">Place order</button>
            </div>
        </div>
  )
}

export default PrizeDetailContainer