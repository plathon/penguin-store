import { request } from '../api'
import alertify from 'alertify.js'
import LocalStore from 'local-store'
import { hashHistory } from 'react-router'
import { BASE_URL,
         START_SETTINGS_INSERT,
         SETTINGS_INSERTED_SUCCESSFULLY,
         SETTINGS_INSERT_FAILED,
         START_SETTINGS_RETRIEVE,
         SETTINGS_RETRIEVED_SUCCESSFULLY,
         SETTINGS_RETRIEVE_FAILED } from '../constants/ActionTypes'

var localStore = LocalStore()

/**
* Find settings data
**/

export function retrieveSettings () {
  return (dispatch) => {
    dispatch(startSettingsRetrieve())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.get('store')
    .then((res) => {

      dispatch(settingsRetrievedSuccessfully(res.data.store))

    }).catch((err) => {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(settingsInsertFailed(message))

    });
  }
}

/**
* Insert Settings data
**/

export function insertSettings (settings) {
  return (dispatch) => {
    dispatch(startSettingsInsert())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.put('store', settings)
    .then((res) => {

      alertify.logPosition("top right").success(res.data.message)
      dispatch(settingsInsertedSuccessfully(settings))
      hashHistory.replace('/')

    }).catch((err) => {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(settingsInsertFailed(message))

    });
  }
}

/**
* Setting Actions
**/

function startSettingsInsert () {
  return { type: START_SETTINGS_INSERT }
}

function settingsInsertedSuccessfully (settings) {
  return { type: SETTINGS_INSERTED_SUCCESSFULLY, payload: settings }
}

function settingsInsertFailed () {
  return { type: SETTINGS_INSERT_FAILED }
}

function startSettingsRetrieve () {
  return { type: START_SETTINGS_RETRIEVE }
}

function settingsRetrievedSuccessfully (settings) {
  return { type: SETTINGS_RETRIEVED_SUCCESSFULLY, payload: settings }
}

function settingsRetrieveFailed () {
  return { type: SETTINGS_RETRIEVE_FAILED }
}
