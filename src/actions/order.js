import { START_ORDER_CREATE,
         ORDER_CREATED_SUCCESSFULLY,
         ORDER_CREATE_FAILED } from '../constants/ActionTypes'

/**
* Create Order
**/

export function checkout (items, address, total) {
  return (dispatch) => {
    dispatch(startOrderCreate())
    setTimeout(() => {
      dispatch(orderCreatedSuccessFully(items, address, total))
     }, 1000)
  }
}

/**
* Order create actions
**/

function startOrderCreate () {
  return { type: START_ORDER_CREATE }
}

function orderCreatedSuccessFully (items, address, total) {
  return { type: ORDER_CREATED_SUCCESSFULLY, payload: {
    products: items,
    address: address,
    tax: 0,
    shipping: 0,
    discount: 0,
    subtotal: total,
    total: total
    }
  }
}

function orderCreateFailed () {
  return { type: ORDER_CREATE_FAILED }
}
