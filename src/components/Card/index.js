import React from 'react'

function Card({imgSrc}) {
    return (
    <div class="card horizontal-card">
        <div class="d-flex justify-center">
             <div class="card_img">
                      <img class="h-full" src={imgSrc} alt="tesla_logo"/>
              </div>     
              <div class="card_info">
                      <h3>
                        Galaxy S22 Ultra
                      </h3>
                      <div class="d-flex flex-dr-col">
                        <span>by Samsung</span>
                        <span class="p-t-10">Prize: <span class="active_item">$140</span></span>
                      </div>
                  </div>    
         </div>
         <div class="d-flex align-center font_1r ">
                <div class="card_btn_box">
                      <button>Add to cart</button>
                      <button>Wishlist</button>
                  </div>      
          </div>
    </div>
     
  )
}

export default Card