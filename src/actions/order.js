import { START_ORDER_CREATE,
         ORDER_CREATED_SUCCESSFULLY,
         ORDER_CREATE_FAILED } from '../constants/ActionTypes'
import { browserHistory } from 'react-router'
import alertify from 'alertify.js'

/**
* Create Order
**/

export function checkout (items, address, total) {
  return (dispatch) => {
    dispatch(startOrderCreate())
    setTimeout(() => {
      dispatch(orderCreatedSuccessFully(items, address, total))
      alertify.logPosition("top right").success('purchase completed successfully')
      browserHistory.push('/orders')
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
