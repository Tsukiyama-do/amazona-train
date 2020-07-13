import React from 'react'
import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE } from '../constants/productConstants'

function productListReducer( state = { products: []}, action ) {

  switch (action.type ) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading : true }
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading : false, products: action.payload }
    case PRODUCT_LIST_FAILURE:
      return { ...state, loading : false, error : action.payload }
    default :
      return state
  }  
}

export { productListReducer }