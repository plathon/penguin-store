import 'whatwg-fetch'
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
         USER_DATA_CHANGE_FAILED } from '../constants/ActionTypes'
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
    fetch(`${ BASE_URL }signin`, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      method: 'POST',
      body: JSON.stringify( user )
    }).then((res) => {
      //handle response error
      if (!res.ok) {
        res.json().then((err) => {
          if (err.error) {
            let message = err.error.message
            alertify.logPosition("top right").error(message)
            dispatch(userLoginFailed(message))
          }
        })
      }
      //if everything is ok
      //return a response
      //in json format
      return res.json()
    }).then((res) => {
      let token = res.token
      localStore.set( 'token', token )
      let user  = jwt_decode(token)
      dispatch(userSuccessfullyLogged(token, user))
      if (redirect) hashHistory.replace(redirect)
      else hashHistory.replace('/')
    })
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
    fetch('http://localhost:3001/auth/twitter', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      method: 'POST',
      body: JSON.stringify( TWITTER_AUTH_DATA )
    }).then((res) => {
      if (!res.ok) {
        res.json().then((err) => {
          if (err.error) {
            let message = err.error.message
            alertify.logPosition("top right").error(message)
            dispatch(userLoginFailed(message))
          }
        })
      }
      return res.json()
    }).then((res) => {
      window.location.assign(`https://api.twitter.com/oauth/authenticate?oauth_token=${res.oauth_token}`)
    })
  }
}

/**
* receive oauth response
**/

export function oauthCallback (provider, params) {
  return (dispatch) => {
    if (provider === 'twitter') {

      fetch('http://localhost:3001/auth/twitter', {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        method: 'POST',
        body: JSON.stringify( params )
      }).then((res) => {
        if (!res.ok) {
          res.json().then((err) => {
            if (err.error) {
              let message = err.error.message
              alertify.logPosition("top right").error(message)
              dispatch(userLoginFailed(message))
            }
          })
        }
        return res.json()
      }).then((res) => {

        let token = res.token
        let user  = jwt_decode(token)
        dispatch(userSuccessfullyLogged(token, user))
        hashHistory.replace('/')

      })

    } else if (provider === 'facebook') {

      fetch('http://localhost:3001/auth/facebook', {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        method: 'POST',
        body: JSON.stringify(Object.assign(params, FACEBOOK_AUTH_DATA))
      }).then((res) => {
        if (!res.ok) {
          res.json().then((err) => {
            if (err.error) {
              let message = err.error.message
              alertify.logPosition("top right").error(message)
              dispatch(userLoginFailed(message))
            }
          })
        }
        return res.json()
      }).then((res) => {

        let token = res.token
        let user  = jwt_decode(token)
        dispatch(userSuccessfullyLogged(token, user))
        hashHistory.replace('/')

      })

    }
  }
}

/**
* Send register request to server
**/

export function registerUser (user = {}) {
  return (dispatch) => {
    dispatch(userStartRegister())
    fetch(`${ BASE_URL }signup`, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      method: 'POST',
      body: JSON.stringify(user)
    }).then((res) => {
      if (!res.ok) {
        res.json().then((err) => {
          if (err.error) {
            let message = err.error.message
            alertify.logPosition("top right").error(message)
            dispatch(userLoginFailed(message))
          }
        })
      }
      return res.json()
    }).then((res) => {

      dispatch(userRegisteredSuccessfully())
      let token = res.token
      let user  = jwt_decode(token)
      dispatch(userSuccessfullyLogged(token, user))
      hashHistory.replace('/')

    })
  }
}

/**
* logout user
**/

export function logoutUser () {
  return (dispatch) => {
    dispatch({ type: USER_LOGGED_OUT })
  }
}

/**
* change user data
**/

export function changeUserData (userData) {
  return (dispatch) => {
    dispatch(userStartChangeData())
    setTimeout(() => {
      alertify.logPosition("top right").success("User data successfully updated")
      dispatch(userDataSuccessfullyChanged(userData))
     }, 1000)
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
