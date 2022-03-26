import { useContext, createContext, useReducer } from "react";

const CateogeryContext = createContext([])


const ACTION = {
    ADD_ONE_CATEOGRY: 'add-one-cateogry',
    ADD_CATEOGRY: 'add-cateogry',
    REMOVE_CATEOGRY: 'remove-cateogry',
    CLEAR_ALL: 'clear-all'
}

function reducer( state, action ) {
    
    switch (action.type) {
        case ACTION.ADD_ONE_CATEOGRY:
            return [action.payload.cateogry]
        case ACTION.ADD_CATEOGRY:
            return !state.includes(action.payload.cateogry)?[...state, action.payload.cateogry]: state
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