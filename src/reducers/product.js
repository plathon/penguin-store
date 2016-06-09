import { START_PRODUCTS_RETRIEVE,
         PRODUCTS_RETRIEVED_SUCCESSFULLY,
         PRODUCTS_RETRIEVE_FAILED,
         START_PRODUCT_INSERT,
         PRODUCT_INSERTED_SUCCESSFULLY,
         PRODUCT_INSERT_FAILED,
         LOAD_PRODUCT,
         START_PRODUCT_UPDATE,
         PRODUCT_UPDATED_SUCCESSFULLY,
         PRODUCT_UPDATE_FAILED,
         START_PRODUCT_REMOVE,
         PRODUCT_REMOVED_SUCCESSFULLY,
         PRODUCT_REMOVE_FAILED,
         UPDATE_PRODUCT_SEARCH_PARAMS,
         START_PRODUCT_SEARCH,
         PRODUCT_SEARCH_RETRIEVED_SUCCESSFULLY,
         PRODUCT_SEARCH_FAILED } from '../constants/ActionTypes'

const initialState = {
  data: {},
  items: [],
  search: {},
  is_loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_PRODUCTS_RETRIEVE:
      return { ...state, is_loading: true }

    case PRODUCTS_RETRIEVED_SUCCESSFULLY:
      return { ...state,
               is_loading: false,
               items: [ ...state.items,
                        ...action.payload ] }

    case PRODUCTS_RETRIEVE_FAILED:
      return { ...state, is_loading: false }

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
      return { ...state,
               items: [
                 ...state.items.slice(0, action.payload.index),
                 action.payload.product,
                 ...state.items.slice(action.payload.index + 1)
               ],
               is_loading: false }

    case PRODUCT_UPDATE_FAILED:
      return { ...sate, is_loading: false }

    case START_PRODUCT_REMOVE:
      return { ...state, is_loading: true }

    case PRODUCT_REMOVED_SUCCESSFULLY:
      return { ...state,
               items: [
                 ...state.items.slice(0, action.payload),
                 ...state.items.slice(action.payload + 1)
               ],
               is_loading: false }

    case PRODUCT_REMOVE_FAILED:
      return { ...state, is_loading: false }

    case UPDATE_PRODUCT_SEARCH_PARAMS:
      return { ...state,
               search: {
                 searchTerm: action.payload.searchTerm
               }
             }

    case START_PRODUCT_SEARCH:
      return { ...state, is_loading: false }

    case PRODUCT_SEARCH_RETRIEVED_SUCCESSFULLY:
      return { ...state, items: action.payload, is_loading: true }

    case PRODUCT_SEARCH_FAILED:
      return { ...state, is_loading: false }

    default:
      return state
  }
}
