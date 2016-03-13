import { ADD_PRODUCT_TO_CART,
         REMOVE_PRODUCT_TO_CART,
         UPDATE_PRODUCT_QTY_ON_CART,
         EMPTY_CART } from '../constants/ActionTypes'

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
                        { name: payload.name, quantity: 1, price: payload.price }
                      ],
               subtotal: Number(state.subtotal) + Number(payload.price),
               total: Number(state.total) + Number(payload.price)
              }

    case REMOVE_PRODUCT_TO_CART:
      return { ...state,
               items: [ ...state.items.slice(0, payload),
                        ...state.items.slice(payload + 1)
                      ],
               subtotal: Number(state.subtotal - (state.items[payload].price * state.items[payload].quantity)),
               total: Number(state.total - (state.items[payload].price * state.items[payload].quantity))
              }

    case UPDATE_PRODUCT_QTY_ON_CART:
      const { index, qty } = payload
      return { ...state,
               items: [ ...state.items.slice(0, index),
                        { name: state.items[index].name, quantity: qty, price: state.items[index].price },
                        ...state.items.slice(index + 1)
                      ],
                subtotal: Number( (state.subtotal - (state.items[index].price * state.items[index].quantity)) + (state.items[index].price * qty) ),
                total: Number( (state.total - (state.items[index].price * state.items[index].quantity)) + (state.items[index].price * qty) )
              }

    case EMPTY_CART:
      return { items: [], subtotal: 0, total: 0 }

    default:
      return state
  }
}
