import { request } from '../api'
import { hashHistory } from 'react-router'
import alertify from 'alertify.js'
import LocalStore from 'local-store'
import { START_ORDER_CREATE,
         ORDER_CREATED_SUCCESSFULLY,
         ORDER_CREATE_FAILED,
         START_ORDER_RETRIEVE,
         ORDER_RETRIEVED_SUCCESSFULLY,
         ORDER_RETRIEVE_FAILED } from '../constants/ActionTypes'

var localStore = LocalStore()

/**
* Retrive Orders
**/

export function retrieveOrders () {
  return (dispatch) => {
    dispatch({ type: START_ORDER_RETRIEVE })
    request.get('order')
    .then((res) => {
      let orders = res.data.orders
      dispatch({ type: ORDER_RETRIEVED_SUCCESSFULLY, payload: orders })
    }).catch((err) => {
      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch({ type: ORDER_RETRIEVE_FAILED })
    });
  }
}

/**
* Create Order
**/

export function checkout (items, address, total) {
  return (dispatch) => {
    dispatch(startOrderCreate())
    var order = {
      products: items,
      address: address,
      paymentId: '123',
      paymentService: '123',
      paymentMethod: '123',
      paymentStatus: '123',
    }
    request.post('order', order)
    .then((res) => {

      dispatch(orderCreatedSuccessFully(items, address, total))
      alertify.logPosition("top right").success('purchase completed successfully')
      hashHistory.push('/orders')

    }).catch((err) => {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(orderCreateFailed());

    });

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
