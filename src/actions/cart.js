import { ADD_PRODUCT_TO_CART,
         REMOVE_PRODUCT_TO_CART,
         UPDATE_PRODUCT_QTY_ON_CART,
         EMPTY_CART } from '../constants/ActionTypes'

/**
* add product to shop cart
**/

export function insertProductToCart (product) {
  return (dispatch) => {
    dispatch(addProductToCart(product))
  }
}

/**
* remove product to shop cart
**/

export function removeCartProduct (productIndex) {
  return (dispatch) => {
    dispatch(removeProductToCart(productIndex))
  }
}

/**
* update product to shop cart
**/

export function updateCartProduct (productIndex, quantity) {
  return (dispatch) => {
    dispatch(updateProductQtyOnCart(productIndex, quantity))
  }
}

/**
* update product to shop cart
**/

export function emptyCart () {
  return (dispatch) => {
    dispatch( { type: EMPTY_CART } )
  }
}

/**
* ACTIONS
**/

function addProductToCart (product) {
  return { type: ADD_PRODUCT_TO_CART, payload: product }
}

function removeProductToCart (index) {
  return { type: REMOVE_PRODUCT_TO_CART, payload: index }
}

function updateProductQtyOnCart (index, qty) {
  return { type: UPDATE_PRODUCT_QTY_ON_CART, payload: { index: index, qty: qty } }
}
