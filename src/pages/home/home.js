import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCateogry } from '../../context/cateogryContext'
import Card from '../../components/Card'
import  {products}  from '../../data/product'


const ACTION = {
  ADD_CATEOGRY: 'add-cateogry',
  REMOVE_CATEOGRY: 'remove-cateogry',
  CLEAR_ALL: 'claer-all'
}

function Home() {
  
  const navigate = useNavigate()

  const { dispatch, cateogeryList } = useCateogry()

  function handleClick(cateogry) {
    navigate('/products')
    dispatch({ type: ACTION.ADD_CATEOGRY, payload:{ cateogry: cateogry}})
  }

  function clearAllFilter() {
    navigate('/products')
    dispatch({ type: ACTION.CLEAR_ALL})
  }

  return (
  <div>
      <section class="middle-section">
          <h1 class="text-center">Cateogry</h1>
        <div class="d-flex flex-wrap gap-1rem align-center justify-center">
          <div  class="round_img">
            <img onClick={()=>handleClick('Samsung')} src="./images/samung-logo.jpg" alt="samung-logo"/>
          </div>    
          <div  class="round_img">
            <img onClick={()=>handleClick('Iphone')} src="./images/iphone-logo.png" alt="phone-logo"/>
          </div>    
          <div  class="round_img">
            <img onClick={()=>handleClick('OnePlus')} src="./images/oneplus-logo.jpg" alt="oneplus-logo"/>
          </div>    
          <div  class="round_img">
            <img onClick={()=>handleClick('Oppo')} src="./images/oppo-logo.webp" alt="oppo-logo"/>
          </div>    
        </div>
        <div class="fluid_img home-page-img">
            <img src="images/buyback_offer_banner.png" alt=""/>
            <span><button class="link-btn outlined get-star-btn" onClick={()=>clearAllFilter() }>Shop now</button></span>        
        </div>
        <h1 class="text-center">New arrivals</h1>
        <div className='d-flex flex-wrap gap-1rem align-center justify-center'>
           <Card product={products[0]} />
           <Card product={products[5]} />
        </div>
          
              
        
      </section>
</div>
  )
}

export default Home