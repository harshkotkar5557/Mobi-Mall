

const addToList = (item, itemArray) => {
    let itemList = [...itemArray]
    if (itemArray.length) {
        let list = itemList.map((product) => product.id)
        !list.includes(item.id)  &&  itemList.push(item)
    } else {
        itemList.push(item)
    }
    return itemList;
}
export {addToList}