import React from 'react'
import ValueContainer from './ValueContainer'

const prizeDetail = [
    {
        title: "Prize (2 items)",
        value: '2000',
        isBold: false
    },
    {
        title: "Disount",
        value: '1999',
        isBold: false
    },
    {
        title: "Delivery Charges",
        value: '100',
        isBold: false
    },
    {
        title: "Total Amount",
        value: '2000',
        isBold: true
    },
    
]

function PrizeDetailContainer() {
  return (
        <div className="card cart-prize-details p-1 white-bg">
          <h3 className="p-b-10">Prize details</h3>
            {
              prizeDetail && prizeDetail.map((item) => (
                <ValueContainer title={item.title} value={item.value} isBold={item.isBold}/>
              ))
            }
            <p className="p-t-10">You will save <i className="fa fa-inr" aria-hidden="true"></i> 1999 on this order</p>
            <div className="w-full p-t-10">
                <button className="btn primary w-full">Place order</button>
            </div>
        </div>
  )
}

export default PrizeDetailContainer