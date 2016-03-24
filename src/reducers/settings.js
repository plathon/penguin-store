import { START_SETTINGS_INSERT,
         SETTINGS_INSERTED_SUCCESSFULLY,
         SETTINGS_INSERT_FAILED } from '../constants/ActionTypes'

const initialState = {
  data: {},
  is_loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_SETTINGS_INSERT:
      return { ...state, is_loading: true }

    case SETTINGS_INSERTED_SUCCESSFULLY:
      return { ...state, data: payload, is_loading: false }

    case SETTINGS_INSERT_FAILED:
      return { ...state, is_loading: false }

    default:
      return state
  }
}
