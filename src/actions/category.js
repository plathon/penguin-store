import { START_CATEGORIES_RETRIEVE,
         CATEGORIES_RETRIEVED_SUCCESSFULLY,
         CATEGORIES_RETRIEVE_FAILED,
         START_CATEGORY_INSERT,
         CATEGORY_INSERTED_SUCCESSFULLY,
         CATEGORY_INSERT_FAILED,
         START_CATEGORY_REMOVE,
         CATEGORY_REMOVED_SUCCESSFULLY,
         CATEGORY_REMOVE_FAILED } from '../constants/ActionTypes'

/**
* Insert category
**/

export function insertCategory (category) {
 return (dispatch) => {
   dispatch(startCategoryInsert())
   setTimeout(() => {
     dispatch(categoryInsertedSuccessfully(category))
    }, 1000)
 }
}

/**
* Delete category
**/

export function removeCategory (categoryIndex) {
 return (dispatch) => {
   dispatch(startCategoryRemove())
   setTimeout(() => {
     dispatch(categoryRemovedSuccessfully(categoryIndex))
    }, 1000)
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
