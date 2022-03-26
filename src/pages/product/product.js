import React, { useEffect, useState } from 'react'
import { products } from '../../data/product.js'
import { useCart } from '../../context/cart-context'
import { Cateogery } from '../../data/cateogery'
import { filterByLowHigh, filterByHighLow, getFilterByPrizeRangeVal, getFilterByRatings, getFilterByCateogry } from './utils'
import { useNavigate } from 'react-router-dom'
import { useCateogry } from '../../context/cateogryContext'

const ACTION = {
    ADD_CATEOGRY: 'add-cateogry',
    REMOVE_CATEOGRY: 'remove-cateogry',
    CLEAR_ALL: 'clear-all'
}

function Product() {
    const { dispatch, cateogeryList } = useCateogry()
    const [productsList, setProductList] = useState([])
    const [ratingsFilter, setRatingFilter] = useState(null)
    const [prizeRangeFilter, setPrizeRangeFilter] = useState('High-Low')
    const [rangeVal, setRangeVal] = useState(120000)

    const { addTOCart, addWishList, cartItem, wishlist,removeFromWishlist } = useCart()
   

    const navigator = useNavigate()

    useEffect(() => {
        getFilterProductsList()
    }, [ratingsFilter, prizeRangeFilter, rangeVal,cateogeryList])


    function clearAllFilter() {
        dispatch({ type: ACTION.CLEAR_ALL})
        setRatingFilter(null)
        setRangeVal(120000)
    }

    function getFilterProductsList() {
        let productsList = getSortedList(prizeRangeFilter, products)
        let filterList1 = getFilterByPrizeRangeVal(productsList, rangeVal)
        if (ratingsFilter) { filterList1 = getFilterByRatings(filterList1, ratingsFilter) }
        if (cateogeryList.length !== 0) { filterList1 = getFilterByCateogry(filterList1, cateogeryList) }
        setProductList(filterList1)
    }

    function addCateogeryFilters(e, cateogry) {
        if (e.target.checked) {
            dispatch({ type: ACTION.ADD_CATEOGRY, payload: { cateogry: cateogry } })
        } else {
            dispatch({ type: ACTION.REMOVE_CATEOGRY, payload: { cateogry: cateogry } })
        }
    }

    function addRatingsFilter(e,value) {
       setRatingFilter(value)
    }

    function getSortedList(type, list) {
        let filterProductList = type === "High-Low" ? filterByHighLow(list) : filterByLowHigh(list);
        return filterProductList;
    }


  return (
    <section className="middleSection">
        <div className="sidebar">
            <div className="d-flex justify-around p-5">
                <h4 className="cursor-pointer">Filters</h4>
                <p className="border-b-2 cursor-pointer" onClick={clearAllFilter}>Clear</p>
            </div>
            <div className="prize-range">
                <div className="range" > 
                    <p>20000</p>
                    <p>50000</p>
                    <p>12000</p>
                </div>
                  <input className="input-progress" type="range" min="20000" max="120000" value={rangeVal} onChange={(e)=> setRangeVal(e.target.value)}/>
            </div>
            <div className="d-flex align-center flex-dr-col">
                <div className="filtering-option">
                      <h2 className="text-center m-5">Cateogry</h2>
                      {
                          Cateogery && Cateogery.map((item) => (
                            <label className="select-input m-5" key={item}>
                            <input type="checkbox" name="light" checked={cateogeryList.includes(item)} onChange={(e)=>addCateogeryFilters(e,item)}
                            className="checkbox-input" />
                            <span className="text m-5">{item}</span>
                        </label>
                          ))
                      }
                </div>
                <div className="filtering-option">
                    <h2 className="text-center m-5">Ratings</h2>
                    <label className="select-input m-5">
                        <input type="radio" name="light-1" checked={ratingsFilter? true : false} onChange={(e) => addRatingsFilter(e,4)}
                        className="radio-input" />
                        <span className="text m-5">4 star & above</span>
                    </label>
                    <label className="select-input m-5">
                        <input type="radio" name="light-1" checked={ratingsFilter? true : false} onChange={(e) => addRatingsFilter(e,3)}
                        className="radio-input" />
                        <span className="text m-5">3 star</span>
                    </label>
                    <label className="select-input m-5">
                        <input type="radio" name="light-1" checked={ratingsFilter? true : false} onChange={(e) => addRatingsFilter(e,2)}
                        className="radio-input" />
                        <span className="text m-5">2 star</span>
                    </label>
                    <label className="select-input m-5">
                        <input type="radio" name="light-1" checked={ratingsFilter? true : false} onChange={(e) => addRatingsFilter(e,1)}
                        className="radio-input" />
                        <span className="text m-5">1 star</span>
                    </label>
                </div>
                <div className="filtering-option ">
                    <h2 className="text-center m-5">Sorted by</h2>
                    <label className="select-input m-5">
                        <input type="radio" name="light" checked={prizeRangeFilter==="High-Low"} onChange={()=> setPrizeRangeFilter("High-Low")}
                        className="radio-input" />
                        <span className="text m-5">Prize-High to Low</span>
                    </label>
                    <label className="select-input m-5">
                        <input type="radio" name="light" checked={prizeRangeFilter==="Low-High"}  onChange={ ()=> setPrizeRangeFilter("Low-High")}
                        className="radio-input" />
                        <span className="text m-5">Prize-Low to High</span>
                    </label>
                </div>
            </div>
        </div>
        <div className="content-box">
              <h3 className="m-1">Showing all products</h3>
              <div className="product-container d-flex">
                  {
                      productsList.length === 0 && <span className='text-center'>No data to show</span>
                  }
                  {
                      productsList && productsList.map((product) => (
                        <div className="card shadow position-relative" key={product.id}>
                            <div className="card_img position-relative" >
                                <figure >
                                    <img src={product.avatar}  alt="tesla_logo" height={250}/>
                                </figure>
                                <div className="card_info">
                                    <h3>
                                        {product.modelName}
                                      </h3>
                                    <div>Raings: <h4 className='inline-block p-l-5'> {product.ratings} <i className="fa fa-star" aria-hidden="true"></i></h4> </div>
                                    <div className="p-t-5">Prize : <h4 className='line-through inline-block p-l-5'>${product.originalPrize}</h4></div>
                                    <div className="p-t-5">Deal prize : <h4 className="inline-block p-l-5">${product.discountedPrize}</h4></div>
                                  </div>
                                  {
                                      wishlist.some((item) => product.id === item.id ) ?
                                        <div className="wishlist-icon" onClick={()=>removeFromWishlist(product.id,wishlist)}><i style={{color:"red"}} className="fa fa-heart" aria-hidden="true"></i></div> :
                                        <div onClick={() => addWishList(product)} className="wishlist-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                                  }
                            </div>
                              <div className="d-flex align-center font_1r justify-around">
                                  {
                                       cartItem.some((item) => product.id === item.id ) ? 
                                          <button className="btn primary flex-1"  onClick={() => navigator('/cart')}>Go to cart</button> :
                                          <button className="btn primary flex-1" onClick={() => addTOCart(product)}>Add to cart</button>
                                      
                                  }                                
                            </div>
                      </div>
                      ))
                  }
                  
                </div>
        </div>
    </section>
  )
}

export default Product