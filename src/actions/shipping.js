import { request } from '../api'
import alertify from 'alertify.js'
import LocalStore from 'local-store'
import { hashHistory } from 'react-router'
import { START_SHIPPING_OPTION_RETRIEVE,
         SHIPPING_OPTION_RETRIEVED_SUCCESSFULLY,
         SHIPPING_OPTION_RETRIEVE_FAILED,
         START_SHIPPING_OPTION_CREATE,
         SHIPPING_OPTION_CREATED_SUCCESSFULLY,
         SHIPPING_OPTION_CREATE_FAILED,
         START_SHIPPING_OPTION_REMOVE,
         SHIPPING_OPTION_REMOVED_SUCCESSFULLY,
         SHIPPING_OPTION_REMOVE_FAILED,
         LOAD_SHIPPING_OPTION,
         START_SHIPPING_OPTION_UPDATE,
         SHIPPING_OPTION_UPDATED_SUCCESSFULLY,
         SHIPPING_OPTION_UPDATE_FAILED } from '../constants/ActionTypes'

var localStore = LocalStore()

/**
* Retrieve shipping option
**/

export function retrieveShippingOptions () {
  return (dispatch) => {
    dispatch({ type: START_SHIPPING_OPTION_RETRIEVE });
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.get('shipping')
    .then(function (res) {
      var shipping = res.data.shipping;
      dispatch({ type: SHIPPING_OPTION_RETRIEVED_SUCCESSFULLY, payload: shipping });
    }).catch(function (err) {
      dispatch({ type: SHIPPING_OPTION_RETRIEVE_FAILED });
    })
  }
}

/**
* Create shipping option
**/

export function insertShippingOption (shippingOption) {
  return (dispatch) => {
    dispatch(startShippingOptionCreate())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.post('shipping', shippingOption)
    .then(function (res) {

      var message    = res.data.message
      var shipping   = res.data.shipping;
      dispatch(shippingOptionCreatedSuccessfully(shipping))
      alertify.logPosition("top right").success(message)
      hashHistory.push('/admin/settings/shipping-options')

    }).catch(function (err) {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(shippingOptionCreateFailed());

    });
  }
}

/**
* Remove shipping option
**/

export function removeShippingOption (index, shippingOption) {
  return (dispatch) => {
    dispatch(startShippingOptionRemove())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.delete(`shipping/${shippingOption}`)
    .then(function (res) {

      dispatch(shippingOptionRemovedSuccessfully(index))
      var message = res.data.message
      alertify.logPosition("top right").success(message)

    }).catch(function (err) {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(shippingOptionUpdateFailed());

    });
  }
}

/**
* Load shipping option
**/

export function loadShipping (shippingOption) {
  return (dispatch) => {
    dispatch( { type: LOAD_SHIPPING_OPTION, payload: shippingOption } )
  }
}

/**
* update shipping option
**/

export function updateShippingOption (shippingOption, index) {
  return (dispatch) => {
    dispatch(startShippingOptionUpdate())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.put('shipping', shippingOption)
    .then((res) => {
      dispatch(shippingOptionUpdatedSuccessfully(shippingOption, index))
      var message = res.data.message
      alertify.logPosition("top right").success(message)
      hashHistory.push('/admin/settings/shipping-options')
    }).catch((err) => {
      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(shippingOptionUpdateFailed())
    });
  }
}

/**
* Create shipping option actions
**/

function startShippingOptionCreate () {
  return { type: START_SHIPPING_OPTION_CREATE }
}

function shippingOptionCreatedSuccessfully (shippingOption) {
  return { type: SHIPPING_OPTION_CREATED_SUCCESSFULLY, payload: shippingOption }
}

function shippingOptionCreateFailed () {
  return { type: SHIPPING_OPTION_CREATE_FAILED }
}

/**
* remove shipping option actions
**/

function startShippingOptionRemove () {
  return { type: START_SHIPPING_OPTION_REMOVE }
}

function shippingOptionRemovedSuccessfully (index) {
  return { type: SHIPPING_OPTION_REMOVED_SUCCESSFULLY, payload: index }
}

function shippingOptionRemoveFailed () {
  return { type: SHIPPING_OPTION_REMOVE_FAILED }
}

/**
* update shipping option actions
**/

function startShippingOptionUpdate () {
  return { type: START_SHIPPING_OPTION_UPDATE }
}

function shippingOptionUpdatedSuccessfully (shippingOption, index) {
  return { type: SHIPPING_OPTION_UPDATED_SUCCESSFULLY,
           payload: {
             shippingOption: shippingOption,
             index: index
           }
         }
}

function shippingOptionUpdateFailed () {
  return { type: SHIPPING_OPTION_UPDATE_FAILED }
}
