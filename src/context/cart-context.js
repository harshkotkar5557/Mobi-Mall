import { createContext, useState, useContext, useEffect } from "react";
import { products } from "../data/product";
import { addToList } from "../utils";


const CartContext = createContext({})

const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([])
    const [wishlist, setWishlist] = useState([])
    


    function addTOCart(addProduct) {
        let list = addToList(addProduct,cartItem)
        let cartProductList = list.map((product) => {
            let quantity = 1
            return {...product,quantity}
        })
        setCartItem(cartProductList)
    }

    function increaseQuantity(id,list) {
        let productList = list.map((product) => {
            // eslint-disable-next-line no-unused-expressions
            product.id === id ? product.quantity = product.quantity + 1 : null;
            return product
        })
        setCartItem(productList)
    }
    
    function decreaseQuantity(id,list) {
        let productList =list.map((product) => {
            // eslint-disable-next-line no-unused-expressions
            product.quantity !==1 && product.id === id ? product.quantity = product.quantity - 1 : null;
            return product
        })
        setCartItem(productList)
    }

    const removeFromCart = (id, list) => {
        let newList = list.filter((product) => product.id !== id)
        setCartItem(newList)
    }

    function addWishList(addProduct) {
        setWishlist(addToList(addProduct,wishlist))
    }



    return <CartContext.Provider value={{cartItem, addTOCart, wishlist, addWishList, setCartItem, increaseQuantity,decreaseQuantity,removeFromCart}}>{ children }</CartContext.Provider>

}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }