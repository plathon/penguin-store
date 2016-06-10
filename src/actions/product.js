import { request } from '../api'
import alertify from 'alertify.js'
import LocalStore from 'local-store'
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
         PRODUCT_REMOVE_FAILED,
         UPDATE_PRODUCT_SEARCH_PARAMS,
         START_PRODUCT_SEARCH,
         PRODUCT_SEARCH_RETRIEVED_SUCCESSFULLY,
         PRODUCT_SEARCH_FAILED,
         START_PRODUCTS_LOAD_MORE,
         PRODUCTS_LOAD_MORE_FAILED,
         PRODUCTS_LOAD_MORE_SUCCESS } from '../constants/ActionTypes'

var localStore = LocalStore()

/**
* Load more products
**/

export function loadMoreProducts (limit, offset, criteria = {}) {
  return (dispatch) => {
    dispatch({ type: START_PRODUCTS_LOAD_MORE })
    request.get('products', {
      params: {
        limit: limit,
        offset: offset,
        ...criteria
      }
    })
    .then(function (res) {
      var products = res.data.products;
      dispatch({ type: PRODUCTS_LOAD_MORE_SUCCESS, payload: {
          offset: offset,
          products: products
        }
      })
    }).catch(function (err) {
      console.log(err)
      dispatch({ type: PRODUCTS_LOAD_MORE_FAILED });
    })
  }
}

/**
* Search products
**/

export function searchProducts (criteria) {
  return (dispatch) => {
    hashHistory.push({ pathname: '/', query: criteria })
    dispatch({ type: UPDATE_PRODUCT_SEARCH_PARAMS, payload: criteria })
    dispatch({ type: START_PRODUCT_SEARCH })
    request.get('products', { params: criteria })
    .then((res) => {
      var products = res.data.products;
      dispatch({ type: PRODUCT_SEARCH_RETRIEVED_SUCCESSFULLY, payload: products })
    }).catch((err) => {
      dispatch({ type: PRODUCT_SEARCH_FAILED });
    })
  }
}

/**
* retrieve product
**/

export function retrieveProducts () {
  return (dispatch) => {
    dispatch({ type: START_PRODUCTS_RETRIEVE })
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.get('products')
    .then((res) => {

      var products = res.data.products;
      dispatch({ type: PRODUCTS_RETRIEVED_SUCCESSFULLY, payload: products })

    }).catch((err) => {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch({ type: PRODUCTS_RETRIEVE_FAILED });

    })
  }
}

/**
* Insert product
**/

export function insertProduct (product) {
  return (dispatch) => {
    dispatch(startProductInsert())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.post('products', product)
    .then((res) => {

      var message    = res.data.message
      var product    = res.data.product;
      dispatch(productInsertedSuccessfully(product))
      alertify.logPosition("top right").success(message)
      hashHistory.push('/')

    }).catch((err) => {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(productIsertFailed());

    })
  }
}

/**
* Update product
**/

export function updateProduct (product, index) {
  return (dispatch) => {
    dispatch(startProductUpdate())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.put('products', product)
    .then((res) => {

      var message = res.data.message
      dispatch(productUpdatedSuccessfully(product, index))
      alertify.logPosition("top right").success(message)
      hashHistory.push('/')

    }).catch((err) => {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(productUpdateFailed());

    });
  }
}

/**
* Remove product
**/

export function removeProduct (index, product) {
  return (dispatch) => {
    dispatch(startProductRemove())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.delete(`products/${product}`)
    .then((res) => {

      var message = res.data.message
      dispatch(productRemovedSuccessfully(index))
      alertify.logPosition("top right").success(message)

    }).catch((err) => {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(productRemoveFailed());

    });
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
