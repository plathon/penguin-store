import { START_SHIPPING_OPTION_CREATE,
         SHIPPING_OPTION_CREATED_SUCCESSFULLY,
         SHIPPING_OPTION_CREATE_FAILED } from '../constants/ActionTypes'

const initialState = {
  items: [],
  data: {},
  isLoading: false
}

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case START_SHIPPING_OPTION_CREATE:
      return { ...state, isLoading: true }

    case SHIPPING_OPTION_CREATED_SUCCESSFULLY:
      return { ...state, item: [ ...state.items, payload ], isLoading: false }

    case SHIPPING_OPTION_CREATE_FAILED:
      return { ...state, isLoading: false }

    default:
      return state
  }
}
