import React, { useEffect, useState } from 'react'
import { products } from '../../data/product.js'
import { useCart } from '../../context/cart-context'
import { Cateogery } from '../../data/cateogery'

function Product() {
    const [ productsList, setProductList ] = useState([])
    const [cateogeryFilters, setCateogeryFilters] = useState([])
    const [ratingsFilter, setRatingFilter] = useState(null)
    const [prizeRangeFilter, setPrizeRangeFilter] = useState('High-Low')
    const [ rangeVal, setRangeVal ] = useState(120000)

    const { addTOCart, addWishList } = useCart()

    useEffect(() => {
        getFilterList()
    },[cateogeryFilters,ratingsFilter,prizeRangeFilter,rangeVal])

    function getFilterList() {
        let filterProductList = [];
        let productList = getSortedList(prizeRangeFilter, products)
        
        if (cateogeryFilters.length !== 0 && ratingsFilter && rangeVal) {
            productList.filter((product) => {
                cateogeryFilters.includes(product.brandName) && ratingsFilter === product.ratings && +product.discountedPrize <= rangeVal && filterProductList.push(product)
            })
        }else if (cateogeryFilters.length !== 0 && ratingsFilter) {
            productList.filter((product) => cateogeryFilters.includes(product.brandName) && ratingsFilter === product.ratings && filterProductList.push(product))
        } else if (cateogeryFilters.length !== 0) { 
            productList.filter((product) => cateogeryFilters.includes(product.brandName) && filterProductList.push(product))
        } else if (ratingsFilter) {
            productList.filter((product) => ratingsFilter === product.ratings && filterProductList.push(product) )
        } else if (rangeVal) { 
            productList.filter((product) => +product.discountedPrize <= rangeVal && filterProductList.push(product) )
        }else {
            filterProductList = [...productList]
        }
        setProductList(filterProductList)
    }

    function addCateogeryFilters(e, filterType) {
        let filterList = [...cateogeryFilters]
        if (e.target.checked) {
            setCateogeryFilters((filters) => filters.concat(filterType))
        } else {
            let removeItemList = filterList.filter((filter) => filter !== filterType)
            setCateogeryFilters(removeItemList)
        }
    }

    function addRatingsFilter(e,value) {
       setRatingFilter(value)
    }

    function getSortedList(type, list) {
        let sortedList = list.sort((a, b) => {
            let val;
            type === "Low-High" ? +a.discountedPrize > +b.discountedPrize ? val = 1 : val = -1 :
             +a.discountedPrize > +b.discountedPrize ? val= -1 : val=1
            return val
        })
        return sortedList
    }


  return (
    <section className="middleSection">
        <div className="sidebar">
            <div className="d-flex justify-around p-5">
                <h4 className="cursor-pointer">Filters</h4>
                <p className="border-b-2 cursor-pointer">Clear</p>
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
                            <input type="checkbox" name="light" onChange={(e)=>addCateogeryFilters(e,item)}
                            className="checkbox-input" />
                            <span className="text m-5">{item}</span>
                        </label>
                          ))
                      }
                </div>
                <div className="filtering-option">
                    <h2 className="text-center m-5">Ratings</h2>
                    <label className="select-input m-5">
                        <input type="radio" name="light" onChange={(e) => addRatingsFilter(e,4)}
                        className="radio-input" />
                        <span className="text m-5">4 star & above</span>
                    </label>
                    <label className="select-input m-5">
                        <input type="radio" name="light" onChange={(e) => addRatingsFilter(e,3)}
                        className="radio-input" />
                        <span className="text m-5">3 star</span>
                    </label>
                    <label className="select-input m-5">
                        <input type="radio" name="light" onChange={(e) => addRatingsFilter(e,2)}
                        className="radio-input" />
                        <span className="text m-5">2 star</span>
                    </label>
                    <label className="select-input m-5">
                        <input type="radio" name="light" onChange={(e) => addRatingsFilter(e,1)}
                        className="radio-input" />
                        <span className="text m-5">1 star</span>
                    </label>
                </div>
                <div className="filtering-option ">
                    <h2 className="text-center m-5">Sorted by</h2>
                    <label className="select-input m-5">
                        <input type="radio" name="light" onChange={()=> setPrizeRangeFilter("High-Low")}
                        className="radio-input" />
                        <span className="text m-5">Prize-High to Low</span>
                    </label>
                    <label className="select-input m-5">
                        <input type="radio" name="light"  onChange={ ()=> setPrizeRangeFilter("Low-High")}
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
                                    <img src="/images/galaxy-s21-5g_fe_color_img04.webp"  alt="tesla_logo" />
                                </figure>
                                <div className="card_info">
                                    <h3>
                                        {product.modelName}
                                      </h3>
                                    <div>Raings: <h4 className='inline-block p-l-5'> {product.ratings} <i className="fa fa-star" aria-hidden="true"></i></h4> </div>
                                    <div className="p-t-5">Prize : <h4 className='line-through inline-block p-l-5'>${product.originalPrize}</h4></div>
                                    <div className="p-t-5">Deal prize : <h4 className="inline-block p-l-5">${product.discountedPrize}</h4></div>
                                </div>
                                  <div onClick={() => addWishList(product)} className="wishlist-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                            </div>
                             <div className="d-flex align-center font_1r justify-around">
                                <button className="btn primary flex-1" onClick={()=> addTOCart(product)}>Add to cart</button>
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