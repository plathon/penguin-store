import { START_ORDER_CREATE,
         ORDER_CREATED_SUCCESSFULLY,
         ORDER_CREATE_FAILED } from '../constants/ActionTypes'

/**
* Create Order
**/

export function checkout (items, address) {
  return (dispatch) => {
    dispatch(startOrderCreate())
    setTimeout(() => {
      dispatch(orderCreatedSuccessFully(items, address))
     }, 1000)
  }
}

/**
* Order create actions
**/

function startOrderCreate () {
  return { type: START_ORDER_CREATE }
}

function orderCreatedSuccessFully (items, address) {
  return { type: ORDER_CREATED_SUCCESSFULLY, payload: { items: items, address: address} }
}

function orderCreateFailed () {
  return { type: ORDER_CREATE_FAILED }
}
