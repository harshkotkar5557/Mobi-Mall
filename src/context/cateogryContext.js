import { useContext, createContext, useReducer } from "react";
import { Cateogery } from "../data/cateogery";

const CateogeryContext = createContext([])


const ACTION = {
    ADD_CATEOGRY: 'add-cateogry',
    REMOVE_CATEOGRY: 'remove-cateogry',
    CLEAR_ALL: 'claer-all'
}

function reducer( state, action ) {
    
    switch (action.type) {
        case ACTION.ADD_CATEOGRY:
            return [...state, action.payload.cateogry];
        case ACTION.REMOVE_CATEOGRY:
            return state.filter((cateogry) => cateogry !== action.payload.cateogry)
        case ACTION.CLEAR_ALL:
            return []
        default:
            return state;
    }
}

const CateogryProvider = ({ children }) => {

    const [ cateogeryList, dispatch ] = useReducer(reducer,[])

    return <CateogeryContext.Provider value={{dispatch,cateogeryList}}>{ children }</CateogeryContext.Provider>
}


const useCateogry = () => useContext(CateogeryContext)

export { CateogryProvider, useCateogry }