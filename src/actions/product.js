import { hashHistory } from 'react-router'
import { START_PRODUCTS_RETRIEVE,
         PRODUCTS_RETRIEVED_SUCCESSFULLY,
         PRODUCTS_RETRIEVE_FAILED,
         START_PRODUCT_INSERT,
         PRODUCT_INSERTED_SUCCESSFULLY,
         PRODUCT_INSERT_FAILED,
         LOAD_PRODUCT,
         START_PRODUCT_UPDATE,
         PRODUCT_UPDATED_SUCCESSFULLY,
         PRODUCT_UPDATE_FAILED,
         START_PRODUCT_REMOVE,
         PRODUCT_REMOVED_SUCCESSFULLY,
         PRODUCT_REMOVE_FAILED } from '../constants/ActionTypes'

/**
* Insert product
**/

export function insertProduct (product) {
  return (dispatch) => {
    dispatch(startProductInsert())
    setTimeout(() => {
      dispatch(productInsertedSuccessfully(product))
      hashHistory.push('/')
     }, 1000)
  }
}

/**
* Update product
**/

export function updateProduct (product, index) {
  return (dispatch) => {
    dispatch(startProductUpdate())
    setTimeout(() => {
      dispatch(productUpdatedSuccessfully(product, index))
      hashHistory.push('/')
     }, 1000)
  }
}

/**
* Remove product
**/

export function removeProduct (index) {
  return (dispatch) => {
    dispatch(startProductRemove())
    setTimeout(() => {
      dispatch(productRemovedSuccessfully(index))
    }, 1000)
  }
}

/**
* Load product
**/

export function loadProduct (product) {
  return (dispatch) => {
    dispatch({ type: LOAD_PRODUCT, payload: product })
  }
}

/**
* Product insert actions
**/

function startProductInsert () {
  return { type: START_PRODUCT_INSERT }
}

function productIsertFailed () {
  return { type: PRODUCT_INSERT_FAILED }
}

function productInsertedSuccessfully (product) {
  return { type: PRODUCT_INSERTED_SUCCESSFULLY, payload: product }
}

/**
* Product update actions
**/

function startProductUpdate () {
  return { type: START_PRODUCT_UPDATE }
}

function productUpdateFailed () {
  return { type: PRODUCT_UPDATE_FAILED }
}

function productUpdatedSuccessfully (product, index) {
  return { type: PRODUCT_UPDATED_SUCCESSFULLY, payload: { product: product, index: index } }
}

/**
* Remove product actions
**/

function startProductRemove () {
  return { type: START_PRODUCT_REMOVE }
}

function productRemovedSuccessfully (index) {
  return { type: PRODUCT_REMOVED_SUCCESSFULLY, payload: index }
}

function productRemoveFailed () {
  return { type: PRODUCT_REMOVE_FAILED }
}
