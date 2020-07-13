import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer } from './reducers/productReducers'

const initialState = {}
const rootReducer = combineReducers({ productList: productListReducer, })

// const composeEnhancer = (window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
let composeEnhancer = null;
if (process.env.NODE_ENV === 'development') {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancer = compose;
}

const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store