import { browserHistory } from 'react-router'

import { START_ADDRESS_INSERT,
         ADDRESS_INSERTED_SUCCESSFULLY,
         ADDRESS_INSERT_FAILED } from '../constants/ActionTypes'

 /**
 * Insert category
 **/

 export function insertAddress (address) {
  return (dispatch) => {
    dispatch(startAddressInsert())
    setTimeout(() => {
      dispatch(addressInsertedSuccessfully(address))
      browserHistory.push('/addresses')
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
