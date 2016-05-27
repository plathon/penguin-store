import 'whatwg-fetch'
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
    fetch(`${ BASE_URL }store/find`, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Authorization': `Bearer ${localStore.get('token')}`
      },
      method: 'GET'
    }).then((res) => {
      //handle response error
      if (!res.ok) {
        res.json().then((err) => {
          if (err.error) {
            let message = err.error.message
            alertify.logPosition("top right").error(message)
            dispatch(settingsRetrieveFailed())
          }
        })
      }
      return res.json()
    }).then((res) => {
      dispatch(settingsRetrievedSuccessfully(res))
    })

  }
}

/**
* Insert Settings data
**/

export function insertSettings (settings, token) {
  return (dispatch) => {
    dispatch(startSettingsInsert())
    fetch(`${ BASE_URL }store/update`, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Authorization': `Bearer ${localStore.get('token')}`
      },
      method: 'POST',
      body: JSON.stringify( settings )
    }).then((res) => {
      //handle response error
      if (!res.ok) {
        res.json().then((err) => {
          if (err.error) {
            let message = err.error.message
            alertify.logPosition("top right").error(message)
            dispatch(settingsInsertFailed(message))
          }
        })
      }
      return res.json()
    }).then((res) => {
      alertify.logPosition("top right").success(res.message)
      dispatch(settingsInsertedSuccessfully(settings))
      hashHistory.replace('/')
    })
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
