import { START_SHIPPING_OPTION_CREATE,
         SHIPPING_OPTION_CREATED_SUCCESSFULLY,
         SHIPPING_OPTION_CREATE_FAILED,
         START_SHIPPING_OPTION_REMOVE,
         SHIPPING_OPTION_REMOVED_SUCCESSFULLY,
         SHIPPING_OPTION_REMOVE_FAILED,
         LOAD_SHIPPING_OPTION,
         START_SHIPPING_OPTION_UPDATE,
         SHIPPING_OPTION_UPDATED_SUCCESSFULLY,
         SHIPPING_OPTION_UPDATE_FAILED } from '../constants/ActionTypes'
import { hashHistory } from 'react-router'

/**
* Create shipping option
**/

export function insertShippingOption (shippingOption) {
  return (dispatch) => {
    dispatch(startShippingOptionCreate())
    setTimeout(() => {
      dispatch(shippingOptionCreatedSuccessfully(shippingOption))
      hashHistory.push('/admin/settings/shipping-options')
    }, 1000)
  }
}

/**
* Remove shipping option
**/

export function removeShippingOption (index) {
  return (dispatch) => {
    dispatch(startShippingOptionRemove())
    setTimeout(() => {
      dispatch(shippingOptionRemovedSuccessfully(index))
    }, 1000)
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
    setTimeout(() => {
      dispatch(shippingOptionUpdatedSuccessfully(shippingOption, index))
      hashHistory.push('/admin/settings/shipping-options')
    }, 1000)
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
