import { START_SHIPPING_OPTION_CREATE,
         SHIPPING_OPTION_CREATED_SUCCESSFULLY,
         SHIPPING_OPTION_CREATE_FAILED } from '../constants/ActionTypes'

/**
* Create shipping option
**/

export function insertShippingOption (shippingOption) {
  return (dispatch) {
    dispatch(startShippingOptionCreate())
    setTimeout(() => {
      dispatch(shippingOptionCreatedSuccessfully(shippingOption))
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
