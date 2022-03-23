
export function getFilterByPrizeRangeVal(listToBeFilter, filterVal) {
    let filterProductList = listToBeFilter.filter((product) => +product.discountedPrize <= filterVal)
    return filterProductList;
}

export function getFilterByRatings(listToBeFilter, filterVal) {
    let filterProductList = listToBeFilter.filter((product) => filterVal === product.ratings)
    return filterProductList;
}
export function getFilterByCateogry(listToBeFilter, listOfCateogry) {
    let filterProductList = listToBeFilter.filter((product) => listOfCateogry.includes(product.brandName))
    return filterProductList;
}

export function filterByHighLow(listToBeFilter) {
    let sortedList = listToBeFilter.sort((a, b) => {
        let val;
         +a.discountedPrize < +b.discountedPrize ? val = 1 : val = -1 
        return val
    })
    return sortedList
}
export function filterByLowHigh(listToBeFilter) {
    let sortedList = listToBeFilter.sort((a, b) => {
        let val;
         +a.discountedPrize > +b.discountedPrize ? val = 1 : val = -1 
        return val
    })
    return sortedList
}

