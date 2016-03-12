import { ADD_PRODUCT_TO_CART,
         REMOVE_PRODUCT_TO_CART,
         UPDATE_PRODUCT_QTY_ON_CART } from '../constants/ActionTypes'

const initialState = {
  items: [],
  subtotal: 0,
  total: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state,
               items: [ ...state.items,
                        { name: payload.name, quantity: 1 }
                      ],
               subtotal: Number(state.subtotal) + Number(payload.price),
               total: Number(state.total) + Number(payload.price)
              }

    case REMOVE_PRODUCT_TO_CART:
      return state

    case UPDATE_PRODUCT_QTY_ON_CART:
      return state

    default:
      return state
  }
}
