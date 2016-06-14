import { START_ORDER_CREATE,
         ORDER_CREATED_SUCCESSFULLY,
         ORDER_CREATE_FAILED,
         START_ORDER_RETRIEVE,
         ORDER_RETRIEVED_SUCCESSFULLY,
         ORDER_RETRIEVE_FAILED } from '../constants/ActionTypes'

const initialState = {
  items: [],
  isLoading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_ORDER_CREATE:
      return { ...state, isLoading: true }

    case ORDER_CREATED_SUCCESSFULLY:
      return { ...state, isLoading: false, items: [ ...state.items, payload ] }

    case ORDER_CREATE_FAILED:
      return { ...state, isLoading: false }

    case START_ORDER_RETRIEVE:
      return { ...state, isLoading: true }

    case ORDER_RETRIEVED_SUCCESSFULLY:
      return { ...state, items: [ ...state, ...payload ], isLoading: false }

    case ORDER_RETRIEVE_FAILED:
      return { ...state, isLoading: false }

    default:
      return state
  }
}
