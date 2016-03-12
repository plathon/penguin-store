import { ADD_PRODUCT_TO_CART,
         REMOVE_PRODUCT_TO_CART,
         UPDATE_PRODUCT_QTY_ON_CART } from '../constants/ActionTypes'

/**
* add product to shop cart
**/

export function insertProductToCart (product) {
  return (dispatch) => {
    dispatch(addProductToCart(product))
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
