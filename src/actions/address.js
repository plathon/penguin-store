import { request } from '../api'
import LocalStore from 'local-store'
import alertify from 'alertify.js'
import { hashHistory } from 'react-router'
import { START_ADDRESS_INSERT,
         ADDRESS_INSERTED_SUCCESSFULLY,
         ADDRESS_INSERT_FAILED,
         START_ADDRESS_REMOVE,
         ADDRESS_REMOVED_SUCCESSFULLY,
         ADDRESS_REMOVE_FAILED,
         START_ADDRESS_SELECT,
         ADDRESS_SELECTED_SUCCESSFULLY,
         ADDRESS_SELEC_FAILED } from '../constants/ActionTypes'

var localStore = LocalStore()

/**
* find address
**/

export function findAddress (limit = 10, offset = 0) {
  return (dispatch) => {
    dispatch(startAddressSelect())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.get('addresses', { params: { limit: limit, offset: offset } })
    .then((res) => {

      dispatch(addressSelectedSuccessfully(res.data))

    }).catch((err) => {

      let message = err.data.message
      alertify.logPosition("top right").error(message)

    })
  }
}

 /**
 * Insert address
 **/

 export function insertAddress (address) {
  return (dispatch) => {
    dispatch(startAddressInsert())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.post('addresses', address)
    .then((res) => {

      let resAddress = res.data.address
      dispatch(addressInsertedSuccessfully(resAddress))
      hashHistory.push('/addresses')

    }).catch((err) => {

      let message = err.data.message
      alertify.logPosition("top right").error(message)

    });
  }
 }

 /**
 * remove address
 **/

 export function removeAddress (i, address) {
  return (dispatch) => {
    dispatch(startAddressRemove())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.delete(`addresses/${address}`, address)
    .then((res) => {

      let message = res.data.message
      alertify.logPosition("top right").success(message)
      dispatch(addressRemovedSuccessfully(i))
      hashHistory.push('/addresses')

    }).catch((err) => {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(addressRemoveFailed())

    });
  }
 }

 /**
 * Address find actions
 **/

 function startAddressSelect () {
   return { type: START_ADDRESS_SELECT }
 }

 function addressSelectFailed () {
   return { type: ADDRESS_SELEC_FAILED }
 }

 function addressSelectedSuccessfully (address) {
   return { type: ADDRESS_SELECTED_SUCCESSFULLY, payload: address }
 }

 /**
 * Address insert actions
 **/

 function startAddressInsert () {
   return { type: START_ADDRESS_INSERT }
 }

 function addressIsertFailed () {
   return { type: ADDRESS_INSERT_FAILED }
 }

 function addressInsertedSuccessfully (address) {
   return { type: ADDRESS_INSERTED_SUCCESSFULLY, payload: address }
 }

 /**
 * Address remove actions
 **/

 function startAddressRemove () {
   return { type: START_ADDRESS_REMOVE }
 }

 function addressRemoveFailed () {
   return { type: ADDRESS_REMOVE_FAILED }
 }

 function addressRemovedSuccessfully (address) {
   return { type: ADDRESS_REMOVED_SUCCESSFULLY, payload: address }
 }
