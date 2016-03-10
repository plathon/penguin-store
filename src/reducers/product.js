import { START_PRODUCTS_RETRIEVE,
         PRODUCTS_RETRIEVED_SUCCESSFULLY,
         PRODUCTS_RETRIEVE_FAILED,
         START_PRODUCT_INSERT,
         PRODUCT_INSERTED_SUCCESSFULLY,
         PRODUCT_INSERT_FAILED,
         LOAD_PRODUCT,
         START_PRODUCT_UPDATE,
         PRODUCT_UPDATED_SUCCESSFULLY,
         PRODUCT_UPDATE_FAILED } from '../constants/ActionTypes'

const initialState = {
  data: {},
  items: [],
  is_loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_PRODUCT_INSERT:
      return { ...state, is_loading: true }

    case PRODUCT_INSERTED_SUCCESSFULLY:
      return { ...state,
               is_loading: false,
               items: [ ...state.items, action.payload ] }

    case PRODUCT_INSERT_FAILED:
      return { ...state, is_loading: false }

    case LOAD_PRODUCT:
      return { ...state, data: state.items[ action.payload ] }

    case START_PRODUCT_UPDATE:
      return { ...state, is_loading: true }

    case PRODUCT_UPDATED_SUCCESSFULLY:
      let productItems = state.items
      productItems[ action.payload.index ] = action.payload.product
      return { ...state,
               items: productItems,
               is_loading: false }

    case PRODUCT_UPDATE_FAILED:
      return { ...sate, is_loading: false }

    default:
      return state
  }
}