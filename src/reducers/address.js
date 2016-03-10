import { START_ADDRESS_INSERT,
         ADDRESS_INSERTED_SUCCESSFULLY,
         ADDRESS_INSERT_FAILED,
         START_ADDRESS_REMOVE,
         ADDRESS_REMOVED_SUCCESSFULLY,
         ADDRESS_REMOVE_FAILED } from '../constants/ActionTypes'

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

    case START_ADDRESS_REMOVE:
      return { ...state, is_loading: true }

    case ADDRESS_REMOVED_SUCCESSFULLY:
      return { ...state,
               items: [
                 ...state.items.slice(0, payload),
                 ...state.items.slice(payload + 1)
               ],
               is_loading: false }

    case ADDRESS_REMOVE_FAILED:
      return { ...state, is_loading: false }
    default:
      return state
  }
}
