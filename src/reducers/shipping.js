import { START_SHIPPING_OPTION_RETRIEVE,
         SHIPPING_OPTION_RETRIEVED_SUCCESSFULLY,
         SHIPPING_OPTION_RETRIEVE_FAILED,
         START_SHIPPING_OPTION_CREATE,
         SHIPPING_OPTION_CREATED_SUCCESSFULLY,
         SHIPPING_OPTION_CREATE_FAILED,
         START_SHIPPING_OPTION_REMOVE,
         SHIPPING_OPTION_REMOVED_SUCCESSFULLY,
         SHIPPING_OPTION_REMOVE_FAILED,
         LOAD_SHIPPING_OPTION,
         START_SHIPPING_OPTION_UPDATE,
         SHIPPING_OPTION_UPDATED_SUCCESSFULLY,
         SHIPPING_OPTION_UPDATE_FAILED } from '../constants/ActionTypes'

const initialState = {
  items: [],
  data: {},
  is_loading: false
}

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case START_SHIPPING_OPTION_RETRIEVE:
      return { ...state, is_loading: true }

    case SHIPPING_OPTION_RETRIEVED_SUCCESSFULLY:
      return { ...state,
               items: [ ...state.items, ...payload ],
               is_loading: false }

    case SHIPPING_OPTION_RETRIEVE_FAILED:
      return { ...state, is_loading: false }

    case START_SHIPPING_OPTION_CREATE:
      return { ...state, is_loading: true }

    case SHIPPING_OPTION_CREATED_SUCCESSFULLY:
      return { ...state, items: [ ...state.items, payload ], is_loading: false }

    case SHIPPING_OPTION_CREATE_FAILED:
      return { ...state, is_loading: false }

    case START_SHIPPING_OPTION_REMOVE:
      return { ...state, is_loading: true }

    case SHIPPING_OPTION_REMOVED_SUCCESSFULLY:
      return { ...state, items: [
        ...state.items.slice(0, payload),
        ...state.items.slice(payload + 1)
      ], is_loading: false }

    case SHIPPING_OPTION_REMOVE_FAILED:
      return { ...state, is_loading: false }

    case LOAD_SHIPPING_OPTION:
      return { ...state, data: state.items[ payload ] }

    case START_SHIPPING_OPTION_UPDATE:
      return { ...state, is_loading: true }

    case SHIPPING_OPTION_UPDATED_SUCCESSFULLY:
      return { ...state, items: [
        ...state.items.slice(0, payload.index),
        payload.shippingOption,
        ...state.items.slice(payload.index + 1)
      ], is_loading: false }

    case SHIPPING_OPTION_UPDATE_FAILED:
      return { ...state, is_loading: false }

    default:
      return state
  }
}
