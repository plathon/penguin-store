import { START_PAYMENT_SETTINGS_INSERT,
         PAYMENT_SETTINGS_INSERTED_SUCCESSFULLY,
         PAYMENT_SETTINGS_INSERT_FAILED,
         START_PAYMENT_SETTINGS_RETRIEVE,
         PAYMENT_SETTINGS_RETRIEVED_SUCCESSFULLY,
         PAYMENT_SETTINGS_RETRIEVE_FAILED } from '../constants/ActionTypes'

const initialState = {
  data: {},
  is_loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_PAYMENT_SETTINGS_INSERT:
      return { ...state, is_loading: true }

    case PAYMENT_SETTINGS_INSERTED_SUCCESSFULLY:
      return { ...state, data: payload, is_loading: false }

    case PAYMENT_SETTINGS_INSERT_FAILED:
      return { ...state, is_loading: false }

    case START_PAYMENT_SETTINGS_RETRIEVE:
      return { ...state, is_loading: true }

    case PAYMENT_SETTINGS_RETRIEVED_SUCCESSFULLY:
      return { ...state, data: payload, is_loading: false }

    case PAYMENT_SETTINGS_RETRIEVE_FAILED:
      return { ...state, is_loading: false }

    default:
      return state

  }
}
