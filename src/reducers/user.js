import { USER_START_LOGIN,
         USER_SUCCESSFULLY_LOGGED,
         USER_LOGIN_FAILED,
         USER_START_REGISTER,
         USER_REGISTERED_SUCCESSFULLY,
         USER_REGISTER_FAILED,
         USER_LOGGED_OUT,
         USER_START_CHANGE_DATA,
         USER_DATA_SUCCESSFULLY_CHANGED,
         USER_DATA_CHANGE_FAILED,
         USER_START_UPDATE_PASSWORD,
         USER_PASSWORD_SUCCESSFULLY_UPDATE,
         USER_PASSWORD_UPDATE_FAILED } from '../constants/ActionTypes'

const initialState = {
  data: {},
  token: '',
  is_loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case USER_START_LOGIN:
      return { ...state, is_loading: true }

    case USER_LOGIN_FAILED:
      return { ...state, is_loading: false }

    case USER_SUCCESSFULLY_LOGGED:
      return { ...state,
               token: action.payload.token,
               data: action.payload.user,
               is_loading: false }

    case USER_START_REGISTER:
      return { ...state, is_loading: true }

    case USER_REGISTERED_SUCCESSFULLY:
      return { ...state, is_loading: false }

    case USER_REGISTER_FAILED:
      return { ...state, is_loading: false }

    case USER_LOGGED_OUT:
      return { ...state, token: '', data: {} }

    case USER_START_CHANGE_DATA:
      return { ...state, is_loading: true }

    case USER_DATA_SUCCESSFULLY_CHANGED:
      return { ...state,
               data: { ...state.data, ...action.payload },
               is_loading: false }

    case USER_DATA_CHANGE_FAILED:
      return { ...state, is_loading: false }

    case USER_START_UPDATE_PASSWORD:
      return { ...state, is_loading: true }

    case USER_PASSWORD_SUCCESSFULLY_UPDATE:
      return { ...state, is_loading: false }

    case USER_PASSWORD_UPDATE_FAILED:
      return { ...state, is_loading: false }
    default:
      return state;
  }
}
