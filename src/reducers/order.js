import { START_ORDER_CREATE,
         ORDER_CREATED_SUCCESSFULLY,
         ORDER_CREATE_FAILED } from '../constants/ActionTypes'

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

    default:
      return state
  }
}
