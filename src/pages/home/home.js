import React from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '../../components/Card'

function Home() {
  
  const navigate = useNavigate()

  return (
      <div>
          <section class="middle-section">
        <div class="fluid_img home-page-img">
            <img src="images/buyback_offer_banner.png" alt=""/>
            <span><button class="link-btn outlined get-star-btn" onClick={()=> navigate('/product')}>Shop now</button></span>        
        </div>
        <h1 class="text-center font-w-400">New arrivals</h1>
        <div class="d-flex flex-wrap gap-1rem align-center justify-center">
            <Card imgSrc={'images/Samsung-Galaxy-Z-Fold-3-vs-Fold-2-vs-Fold3-511.jpg'} />
            <Card imgSrc={'./images/galaxy-s22-ultra_highlights_kv_img.jpg'}/>
        </div>
    </section>
    </div>
  )
}

export default Home