import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

  return (
    <nav class="navbar_std">
            <header class="d-flex justify-around align-center ">
                <div class="brandName" onClick={()=> navigate('/home')}>Mobi-Mall</div>
                <div class="searchBar"><i class="fa fa-search"></i><input type="search" placeholder="search"/></div>
                <div id="hambar" class="hambar"><i class="fa fa-bars" aria-hidden="true"></i></div>
                <ul class="navbarOptions gap-1rem d-flex d-flex justify-space-bw align-center">
                    <button id="login-btn" class="link-btn" onClick={()=> navigate('/login')} >Login</button>
                    <div class="cart-badge cursor-pointer" onClick={()=> navigate('/wishlist')}>
                            <i class="fa fa-heart-o fa-1x black-color" aria-hidden="true"></i>
                            <div class="notification-icon flex-center">
                                <span>1</span>
                             </div>
                     </div>
                    <div class="d-flex gap-1rem cursor-pointer fx-1-25p cart-box" onClick={()=> navigate('/cart')}>
                            <div class="cart-badge ">
                                <i class = "fa fa-cart-arrow-down fa-1x black-color"></i>
                                <div class="notification-icon flex-center">
                                   <span>1</span>
                                </div>
                             </div>
                             <h5 class="black-color">cart</h5>
                    </div>   
                    <div class="avatar sm m-5 cursor-pointer" onClick={()=> navigate('/profile')}>
                            <img src="../images/avatar-img.jpg" alt="avatar-img"/>
                    </div>
                </ul>
            </header>
        </nav>
  )
}

export default Navbar