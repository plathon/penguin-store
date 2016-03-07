import { request } from '../api'
import { makeUrl } from '../api'
import { browserHistory } from 'react-router'

import { START_PRODUCTS_RETRIEVE,
         PRODUCTS_RETRIEVED_SUCCESSFULLY,
         PRODUCTS_RETRIEVE_FAILED,
         START_PRODUCT_INSERT,
         PRODUCT_INSERTED_SUCCESSFULLY,
         PRODUCT_INSERT_FAILED,
         LOAD_PRODUCT,
         START_PRODUCT_UPDATE,
         PRODUCT_UPDATED_SUCCESSFULLY,
         PRODUCT_UPDATE_FAILED } from '../constants/ActionTypes'

/**
* Insert product
**/

export function insertProduct (product) {
  return (dispatch) => {
    dispatch(startProductInsert())
    setTimeout(() => {
      dispatch(productInsertedSuccessfully(product))
      browserHistory.push('/')
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
      browserHistory.push('/')
     }, 1000)
  }
}

/**
* Load product
**/

export function loadProduct (product) {
  return (dispatch) => {
    dispatch(productLoad(product))
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
* Product load actions
**/

function productLoad (product) {
  return { type: LOAD_PRODUCT, payload: product }
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
