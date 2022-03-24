import { createContext, useState, useContext } from "react";
import { products } from "../data/product";
import { addToList } from "../utils";


const CartContext = createContext({})

const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([])
    const [wishlist, setWishlist] = useState([])

    function addTOCart(addProduct) {
        setCartItem(addToList(addProduct,cartItem))
    }

    function addWishList(addProduct) {
        setWishlist(addToList(addProduct,wishlist))
    }

    return <CartContext.Provider value={{cartItem, addTOCart, wishlist, addWishList, setWishlist}}>{ children }</CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }