import { START_ADDRESS_INSERT,
         ADDRESS_INSERTED_SUCCESSFULLY,
         ADDRESS_INSERT_FAILED } from '../constants/ActionTypes'

const initialState = {
  items: [],
  is_loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_ADDRESS_INSERT:
      return { ...state, is_loading: true }

    case ADDRESS_INSERTED_SUCCESSFULLY:
      return { ...state,
               items: [ ...state.items, payload ],
               is_loading: false }

    case ADDRESS_INSERT_FAILED:
      return { ...state, is_loading: false }

    default:
      return state
  }
}
