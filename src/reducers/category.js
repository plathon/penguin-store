import { START_CATEGORIES_RETRIEVE,
         CATEGORIES_RETRIEVED_SUCCESSFULLY,
         CATEGORIES_RETRIEVE_FAILED,
         START_CATEGORY_INSERT,
         CATEGORY_INSERTED_SUCCESSFULLY,
         CATEGORY_INSERT_FAILED,
         START_CATEGORY_REMOVE,
         CATEGORY_REMOVED_SUCCESSFULLY,
         CATEGORY_REMOVE_FAILED } from '../constants/ActionTypes'

const initialState = {
  items: [],
  is_loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_CATEGORY_INSERT:
      return { ...state, is_loading: true }

    case CATEGORY_INSERTED_SUCCESSFULLY:
      return { ...state,
               is_loading: false,
               items: [ ...state.items, payload ] }

    case CATEGORY_INSERT_FAILED:
      return { ...state, is_loading: false }

    case START_CATEGORY_REMOVE:
      return { ...state, is_loading: true }

    case CATEGORY_REMOVED_SUCCESSFULLY:
      return { ...state,
               items: [
                 ...state.items.slice(0, payload),
                 ...state.items.slice(payload + 1)
               ],
               is_loading: false }

    case CATEGORY_REMOVE_FAILED:
      return { ...state, is_loading: false }

    default:
      return state
  }
}
