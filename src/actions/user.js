import { request } from '../api'
import jwt_decode from 'jwt-decode'
import alertify from 'alertify.js'
import LocalStore from 'local-store'
import { hashHistory } from 'react-router'
import { BASE_URL,
         USER_START_LOGIN,
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

var localStore = LocalStore()

/**
* OAUTH Data
**/
import { FACEBOOK_AUTH_DATA,
         TWITTER_AUTH_DATA } from '../constants/OAuth'

/**
* Send auth credentials to server
**/

export function authenticateUser (user = {}, redirect = null) {
  return (dispatch) => {
    dispatch(userStartLogin())
    request.post( 'users/auth', user )
      .then(function(res) {

        let token = res.data.token
        localStore.set( 'token', token )
        let user  = jwt_decode(token)
        dispatch(userSuccessfullyLogged(token, user))
        hashHistory.replace('/')

      }).catch(function (err) {

        let message = err.data.message
        alertify.logPosition("top right").error(message)
        dispatch(userLoginFailed(message))

      });
  }
}

/**
* Send auth request to facebook
**/

export function authenticateUserWithFacebook () {
  return (dispatch) => {
    dispatch({ type: USER_START_LOGIN })
    window.location.assign(`https://www.facebook.com/dialog/oauth?client_id=${FACEBOOK_AUTH_DATA.client_id}&redirect_uri=${encodeURI(FACEBOOK_AUTH_DATA.redirect_uri)}`)
  }
}

/**
* Send auth request to twitter
**/

export function authenticateUserWithTwitter () {
  return (dispatch) => {
    dispatch({ type: USER_START_LOGIN })
    request.post( 'users/oauth/twitter', TWITTER_AUTH_DATA )
      .then(function(res) {

        window.location.assign(`https://api.twitter.com/oauth/authenticate?oauth_token=${res.data.oauth_token}`)

      }).catch(function (err) {

        let message = err.data.message
        alertify.logPosition("top right").error(message)
        dispatch(userLoginFailed(message))
        hashHistory.replace('/signin')

      });

  }
}

/**
* receive oauth response
**/

export function oauthCallback (provider, params) {
  return (dispatch) => {
    if (provider === 'twitter') {

      request.post( 'users/oauth/twitter', params )
        .then(function(res) {

          let token = res.data.token
          localStore.set( 'token', token )
          let user  = jwt_decode(token)
          dispatch(userSuccessfullyLogged(token, user))
          hashHistory.replace('/')

        }).catch(function (err) {

          let message = err.data.message
          alertify.logPosition("top right").error(message)
          dispatch(userLoginFailed(message))
          hashHistory.replace('/signin')

        });

    } else if (provider === 'facebook') {

      request.post( 'users/oauth/facebook', Object.assign(params, FACEBOOK_AUTH_DATA) )
        .then(function(res) {

          let token = res.data.token
          localStore.set( 'token', token )
          let user  = jwt_decode(token)
          dispatch(userSuccessfullyLogged(token, user))
          hashHistory.replace('/')

        }).catch(function (err) {

          let message = err.data.message
          alertify.logPosition("top right").error(message)
          dispatch(userLoginFailed(message))
          hashHistory.replace('/signin')

        });

    }
  }
}

/**
* Send register request to server
**/

export function registerUser (user = {}) {
  return (dispatch) => {
    dispatch(userStartRegister())
    request.post( 'users', user )
      .then(function(res) {

        let token = res.data.token
        localStore.set( 'token', token )
        let user  = jwt_decode(token)
        dispatch(userRegisteredSuccessfully())
        dispatch(userSuccessfullyLogged(token, user))
        hashHistory.replace('/')

      }).catch(function (err) {

        let message = err.data.message
        alertify.logPosition("top right").error(message)
        dispatch(userLoginFailed(message))

      });
  }
}

/**
* logout user
**/

export function logoutUser () {
  return (dispatch) => {
    localStore.delete('token')
    dispatch({ type: USER_LOGGED_OUT })
  }
}

/**
* change user data
**/

export function changeUserData (userData) {
  return (dispatch) => {
    dispatch(userStartChangeData())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.put('users', userData )
    .then(function(res) {

      let message = res.data.message
      let token   = res.data.token
      localStore.set( 'token', token )
      let user    = jwt_decode(token)
      dispatch(userDataSuccessfullyChanged(userData))
      alertify.logPosition("top right").success(message)

    }).catch(function (err) {

      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(userPasswordUpdateFailed(message))

    });
  }
}

/**
* update user password
**/

export function updateUserPassword (passwordData) {
  return (dispatch) => {
    dispatch(userStartUpdatePassword())
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.put('users/password', passwordData)
    .then(function (res) {
      let message = res.data.message
      alertify.logPosition("top right").success(message)
      dispatch(userPasswordSuccessfullyUpdated())
    }).catch(function (err) {
      let message = err.data.message
      alertify.logPosition("top right").error(message)
      dispatch(userLoginFailed(message))

    })
  }
}

/**
* User register actions
**/

function userStartRegister () {
  return { type: USER_START_REGISTER }
}

function userRegisterFailed () {
  return { type: USER_REGISTER_FAILED }
}

function userRegisteredSuccessfully () {
  return { type: USER_REGISTERED_SUCCESSFULLY }
}

/**
* User authentication actions
**/

function userStartLogin () {
  return { type: USER_START_LOGIN }
}

function userLoginFailed (message) {
  return { type: USER_LOGIN_FAILED, payload: message }
}

function userSuccessfullyLogged (token = null, user = {}) {
  return { type: USER_SUCCESSFULLY_LOGGED, payload: { token: token, user: user } }
}

/**
* change user data actions
**/

function userStartChangeData () {
  return { type: USER_START_CHANGE_DATA }
}

function userDataChangeFailed () {
  return { type: USER_DATA_CHANGE_FAILED }
}

function userDataSuccessfullyChanged (userData = {}) {
  return { type: USER_DATA_SUCCESSFULLY_CHANGED, payload: userData }
}

/**
* change user password actions
**/

function userStartUpdatePassword () {
  return { type: USER_START_UPDATE_PASSWORD }
}

function userPasswordUpdateFailed () {
  return { type: USER_PASSWORD_UPDATE_FAILED }
}

function userPasswordSuccessfullyUpdated (userData = {}) {
  return { type: USER_PASSWORD_SUCCESSFULLY_UPDATE, payload: userData }
}
