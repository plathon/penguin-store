import { request } from '../api'
import alertify from 'alertify.js'
import LocalStore from 'local-store'
import { hashHistory } from 'react-router'
import { BASE_URL,
         START_PAYMENT_SETTINGS_INSERT,
         PAYMENT_SETTINGS_INSERTED_SUCCESSFULLY,
         PAYMENT_SETTINGS_INSERT_FAILED,
         START_PAYMENT_SETTINGS_RETRIEVE,
         PAYMENT_SETTINGS_RETRIEVED_SUCCESSFULLY,
         PAYMENT_SETTINGS_RETRIEVE_FAILED } from '../constants/ActionTypes'

var localStore = LocalStore()

/**
* Retrive payment data
**/

export function retrievePaymentSettings (paymentSettings) {
  return (dispatch) => {
    dispatch({ type: START_PAYMENT_SETTINGS_RETRIEVE })
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.get('payments')
    .then((res) => {
      var paymentSettings = res.data.payment;
      dispatch({ type: PAYMENT_SETTINGS_RETRIEVED_SUCCESSFULLY, payload: paymentSettings })
    })
    .catch((err) => {
      dispatch({ type: PAYMENT_SETTINGS_RETRIEVE_FAILED })
    })
  }
}

/**
* Insert payment data
**/

export function insertPaymentSettings (payment) {
  return ( dispatch ) => {
    dispatch(startPaymentSettingsInsert())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.post('payments', payment)
    .then((res) => {

      let message = res.data.message
      alertify.logPosition("top right").success(message)
      dispatch(paymentSettingsInsertedSuccessfully(res.data.payment))
      hashHistory.replace('/')

    }).catch((err) => {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(paymentSettingsInsertFailed())

    });
  }
}

/**
* Isert payment data actions
**/

function startPaymentSettingsInsert () {
  return { type: START_PAYMENT_SETTINGS_INSERT }
}

function paymentSettingsInsertedSuccessfully (payment) {
  return { type: PAYMENT_SETTINGS_INSERTED_SUCCESSFULLY, payload: payment }
}

function paymentSettingsInsertFailed () {
  return { type: PAYMENT_SETTINGS_INSERT_FAILED }
}
