import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/cart-context'
import { useAuth } from '../../context/authContext'
function Navbar() {

  const navigate = useNavigate()
  const { cartItem, wishlist } = useCart()
  const { isAuth,setAuth } = useAuth()

  return (
    <nav className="navbar_std">
            <header className="d-flex justify-around align-center ">
                <div className="brandName" onClick={()=> navigate('/')}>Mobi-Mall</div>
                <div className="searchBar"><i className="fa fa-search"></i><input type="search" placeholder="search"/></div>
                <div id="hambar" className="hambar"><i className="fa fa-bars" aria-hidden="true"></i></div>
        <ul className="navbarOptions gap-1rem d-flex d-flex justify-space-bw align-center">
              {
            !isAuth ? <button id="login-btn" className="link-btn" onClick={() => navigate('/login')} >Login</button> :
            <button className="btn danger" onClick={()=> setAuth(false)} >Logout</button>
              }
                    
                    <div className="cart-badge cursor-pointer" onClick={()=> !isAuth ? navigate('/login') : navigate('/wishlist')}>
                            <i className="fa fa-heart-o fa-1x black-color" aria-hidden="true"></i>
                            <div className="notification-icon flex-center">
                              <span>{wishlist.length}</span>
                             </div>
                     </div>
                    <div className="d-flex gap-1rem cursor-pointer fx-1-25p cart-box" onClick={()=> !isAuth ? navigate('/login') : navigate('/cart')}>
                            <div className="cart-badge ">
                                <i className = "fa fa-cart-arrow-down fa-1x black-color"></i>
                                <div className="notification-icon flex-center">
                              <span>{cartItem.length}</span>
                                </div>
                             </div>
                             <h5 className="black-color">cart</h5>
                    </div>   
                    <div className="avatar sm m-5 cursor-pointer" onClick={()=> navigate('/profile')}>
                            <img src="../images/avatar-img.jpg" alt="avatar-img"/>
                    </div>
                </ul>
            </header>
        </nav>
  )
}

export default Navbar