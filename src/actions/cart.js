import alertify from 'alertify.js'
import { ADD_PRODUCT_TO_CART,
         REMOVE_PRODUCT_TO_CART,
         UPDATE_PRODUCT_QTY_ON_CART,
         EMPTY_CART } from '../constants/ActionTypes'

/**
* add product to shop cart
**/

export function insertProductToCart (product) {
  return (dispatch) => {
    alertify.logPosition("top right").success("Product was added successfully on cart")
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: product })
  }
}

/**
* remove product to shop cart
**/

export function removeCartProduct (productIndex) {
  return (dispatch) => {
    dispatch({ type: REMOVE_PRODUCT_TO_CART, payload: productIndex })
  }
}

/**
* update product to shop cart
**/

export function updateCartProduct (productIndex, quantity) {
  return (dispatch) => {
    if ( Number.isInteger( Number(quantity) ) && quantity > 0 )
      dispatch({ type: UPDATE_PRODUCT_QTY_ON_CART, payload: { index: productIndex, qty: quantity } })
    else
      alertify.logPosition("top right").error("Quantidade inválida.")
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
