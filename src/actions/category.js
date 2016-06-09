import { request } from '../api'
import alertify from 'alertify.js'
import LocalStore from 'local-store'
import { START_CATEGORIES_RETRIEVE,
         CATEGORIES_RETRIEVED_SUCCESSFULLY,
         CATEGORIES_RETRIEVE_FAILED,
         START_CATEGORY_INSERT,
         CATEGORY_INSERTED_SUCCESSFULLY,
         CATEGORY_INSERT_FAILED,
         START_CATEGORY_REMOVE,
         CATEGORY_REMOVED_SUCCESSFULLY,
         CATEGORY_REMOVE_FAILED } from '../constants/ActionTypes'

var localStore = LocalStore()

/**
* find categories
**/

export function retrieveCategories () {
  return (dispatch) => {
    dispatch({ type: START_CATEGORIES_RETRIEVE });
    request.defaults.headers['Authorization'] = localStore.get( 'token' )
    request.get('categories')
    .then((res) => {
      var categories = res.data.categories;
      dispatch({ type: CATEGORIES_RETRIEVED_SUCCESSFULLY, payload: categories });
    }).catch((err) => {
      dispatch({ type: CATEGORIES_RETRIEVE_FAILED });
    })
  }
}

/**
* Insert category
**/

export function insertCategory (category) {
 return (dispatch) => {
   dispatch(startCategoryInsert())
   request.defaults.headers['Authorization'] = localStore.get( 'token' )
   request.post('categories', category)
   .then((res) => {
     category = res.data.category;
     dispatch(categoryInsertedSuccessfully(category))
   })
   .catch((err) => {
     let message = err.data.message
     alertify.logPosition("top right").error(message)
     dispatch(categoryIsertFailed())
   });
 }
}

/**
* Delete category
**/

export function removeCategory (categoryIndex, categoryId) {
 return (dispatch) => {
   dispatch(startCategoryRemove())
   request.defaults.headers['Authorization'] = localStore.get( 'token' )
   request.delete(`categories/${categoryId}`)
   .then((res) => {
     dispatch(categoryRemovedSuccessfully(categoryIndex))
   })
   .catch((err) => {
     let message = err.data.message
     alertify.logPosition("top right").error(message)
     dispatch(categoryRemoveFailed())
   });
 }
}

/**
* Category insert actions
**/

function startCategoryInsert () {
  return { type: START_CATEGORY_INSERT }
}

function categoryIsertFailed () {
  return { type: CATEGORY_INSERT_FAILED }
}

function categoryInsertedSuccessfully (category) {
  return { type: CATEGORY_INSERTED_SUCCESSFULLY, payload: category }
}

/**
* Category remove actions
**/

function startCategoryRemove () {
  return { type: START_CATEGORY_REMOVE }
}

function categoryRemoveFailed () {
  return { type: CATEGORY_REMOVE_FAILED }
}

function categoryRemovedSuccessfully (categoryIndex) {
  return { type: CATEGORY_REMOVED_SUCCESSFULLY, payload: categoryIndex }
}
