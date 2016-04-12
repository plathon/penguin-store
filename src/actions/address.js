import { hashHistory } from 'react-router'
import { START_ADDRESS_INSERT,
         ADDRESS_INSERTED_SUCCESSFULLY,
         ADDRESS_INSERT_FAILED,
         START_ADDRESS_REMOVE,
         ADDRESS_REMOVED_SUCCESSFULLY,
         ADDRESS_REMOVE_FAILED } from '../constants/ActionTypes'

 /**
 * Insert address
 **/

 export function insertAddress (address) {
  return (dispatch) => {
    dispatch(startAddressInsert())
    setTimeout(() => {
      dispatch(addressInsertedSuccessfully(address))
      hashHistory.push('/addresses')
     }, 1000)
  }
 }

 /**
 * remove address
 **/

 export function removeAddress (address) {
  return (dispatch) => {
    dispatch(startAddressRemove())
    setTimeout(() => {
      dispatch(addressRemovedSuccessfully(address))
     }, 1000)
  }
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
