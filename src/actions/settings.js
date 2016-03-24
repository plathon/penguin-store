import { START_SETTINGS_INSERT,
         SETTINGS_INSERTED_SUCCESSFULLY,
         SETTINGS_INSERT_FAILED } from '../constants/ActionTypes'

/**
* Insert Settings data
**/

export function insertSettings (settings) {
  return (dispatch) => {
    dispatch(startSettingsInsert())
    setTimeout(() => {
      dispatch(settingsInsertedSuccessfully(settings))
    }, 1000)
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
