import { START_PAYMENT_SETTINGS_INSERT,
         PAYMENT_SETTINGS_INSERTED_SUCCESSFULLY,
         PAYMENT_SETTINGS_INSERT_FAILED } from '../constants/ActionTypes'
import alertify from 'alertify.js'
/**
* Insert payment data
**/

export function insertPaymentSettings (payment) {
  return ( dispatch ) => {
    dispatch(startPaymentSettingsInsert())
    setTimeout(() => {
      dispatch(paymentSettingsInsertedSuccessfully(payment))
      alertify.logPosition("top right").success('Payment settings successfully created')
    }, 1000)
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
