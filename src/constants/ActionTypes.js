/**
* API
**/
export const BASE_URL                               = 'http://localhost:3001/'
/**
* User Actions
**/
export const USER_START_LOGIN                       = 'USER_START_LOGIN'
export const USER_SUCCESSFULLY_LOGGED               = 'USER_SUCCESSFULLY_LOGGED'
export const USER_LOGIN_FAILED                      = 'USER_LOGIN_FAILED'
export const USER_START_REGISTER                    = 'USER_START_REGISTER'
export const USER_REGISTERED_SUCCESSFULLY           = 'USER_REGISTERED_SUCCESSFULLY'
export const USER_REGISTER_FAILED                   = 'USER_REGISTER_FAILED'
export const USER_LOGGED_OUT                        = 'USER_LOGGED_OUT'
export const USER_START_UPDATE_PASSWORD             = 'USER_START_UPDATE_PASSWORD'
export const USER_PASSWORD_SUCCESSFULLY_UPDATE      = 'USER_PASSWORD_SUCCESSFULLY_UPDATE'
export const USER_PASSWORD_UPDATE_FAILED            = 'USER_PASSWORD_UPDATE_FAILED'
export const USER_START_RESET_PASSWORD              = 'USER_START_RESET_PASSWORD'
export const USER_PASSWORD_SUCCESSFULLY_RESET       = 'USER_PASSWORD_SUCCESSFULLY_RESET'
export const USER_PASSWORD_RESET_FAILED             = 'USER_PASSWORD_RESET_FAILED'
export const USER_START_CHANGE_PASSWORD             = 'USER_START_CHANGE_PASSWORD'
export const USER_PASSWORD_SUCCESSFULLY_CHANGED     = 'USER_PASSWORD_SUCCESSFULLY_CHANGED'
export const USER_PASSWORD_CHANGE_FAILED            = 'USER_PASSWORD_CHANGE_FAILED'
export const USER_START_CHANGE_DATA                 = 'USER_START_CHANGE_DATA'
export const USER_DATA_SUCCESSFULLY_CHANGED         = 'USER_DATA_SUCCESSFULLY_CHANGED'
export const USER_DATA_CHANGE_FAILED                = 'USER_DATA_CHANGE_FAILED'
/**
* Products Actions
**/
export const START_PRODUCTS_RETRIEVE                = 'START_PRODUCTS_RETRIEVE'
export const PRODUCTS_RETRIEVED_SUCCESSFULLY        = 'PRODUCTS_RETRIEVED_SUCCESSFULLY'
export const PRODUCTS_RETRIEVE_FAILED               = 'PRODUCTS_RETRIEVE_FAILED'
export const START_PRODUCT_INSERT                   = 'START_PRODUCT_INSERT'
export const PRODUCT_INSERTED_SUCCESSFULLY          = 'PRODUCT_INSERTED_SUCCESSFULLY'
export const PRODUCT_INSERT_FAILED                  = 'PRODUCT_INSERT_FAILED'
export const LOAD_PRODUCT                           = 'LOAD_PRODUCT'
export const START_PRODUCT_UPDATE                   = 'START_PRODUCT_UPDATE'
export const PRODUCT_UPDATED_SUCCESSFULLY           = 'PRODUCT_UPDATED_SUCCESSFULLY'
export const PRODUCT_UPDATE_FAILED                  = 'PRODUCT_UPDATE_FAILED'
export const START_PRODUCT_REMOVE                   = 'START_PRODUCT_REMOVE'
export const PRODUCT_REMOVED_SUCCESSFULLY           = 'PRODUCT_REMOVED_SUCCESSFULLY'
export const PRODUCT_REMOVE_FAILED                  = 'PRODUCT_REMOVE_FAILED'
export const UPDATE_PRODUCT_SEARCH_PARAMS           = 'UPDATE_PRODUCT_SEARCH_PARAMS'
export const START_PRODUCT_SEARCH                   = 'START_PRODUCT_SEARCH'
export const PRODUCT_SEARCH_RETRIEVED_SUCCESSFULLY  = 'PRODUCT_SEARCH_RETRIEVED_SUCCESSFULLY'
export const PRODUCT_SEARCH_FAILED                  = 'PRODUCT_SEARCH_FAILED'
export const START_PRODUCTS_LOAD_MORE               = 'START_PRODUCTS_LOAD_MORE'
export const PRODUCTS_LOAD_MORE_FAILED              = 'PRODUCTS_LOAD_MORE_FAILED'
export const PRODUCTS_LOAD_MORE_SUCCESS             = 'PRODUCTS_LOAD_MORE_SUCCESS'
/**
* Categories Actions
**/
export const START_CATEGORIES_RETRIEVE              = 'START_CATEGORIES_RETRIEVE'
export const CATEGORIES_RETRIEVED_SUCCESSFULLY      = 'CATEGORIES_RETRIEVED_SUCCESSFULLY'
export const CATEGORIES_RETRIEVE_FAILED             = 'CATEGORIES_RETRIEVE_FAILED'
export const START_CATEGORY_INSERT                  = 'START_CATEGORY_INSERT'
export const CATEGORY_INSERTED_SUCCESSFULLY         = 'CATEGORY_INSERTED_SUCCESSFULLY'
export const CATEGORY_INSERT_FAILED                 = 'CATEGORY_INSERT_FAILED'
export const START_CATEGORY_REMOVE                  = 'START_CATEGORY_REMOVE'
export const CATEGORY_REMOVED_SUCCESSFULLY          = 'CATEGORY_REMOVED_SUCCESSFULLY'
export const CATEGORY_REMOVE_FAILED                 = 'CATEGORY_REMOVE_FAILED'
/**
* Address Actions
**/
export const START_ADDRESS_INSERT                   = 'START_ADDRESS_INSERT'
export const ADDRESS_INSERTED_SUCCESSFULLY          = 'ADDRESS_INSERTED_SUCCESSFULLY'
export const ADDRESS_INSERT_FAILED                  = 'ADDRESS_INSERT_FAILED'
export const START_ADDRESS_REMOVE                   = 'START_ADDRESS_REMOVE'
export const ADDRESS_REMOVED_SUCCESSFULLY           = 'ADDRESS_REMOVED_SUCCESSFULLY'
export const ADDRESS_REMOVE_FAILED                  = 'ADDRESS_REMOVE_FAILED'
export const START_ADDRESS_SELECT                   = 'START_ADDRESS_SELECT'
export const ADDRESS_SELECTED_SUCCESSFULLY          = 'ADDRESS_SELECTED_SUCCESSFULLY'
export const ADDRESS_SELEC_FAILED                   = 'ADDRESS_SELEC_FAILED'
/**
* Cart Actions
**/
export const ADD_PRODUCT_TO_CART                    = 'ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT_TO_CART                 = 'REMOVE_PRODUCT_TO_CART'
export const UPDATE_PRODUCT_QTY_ON_CART             = 'UPDATE_PRODUCT_QTY_ON_CART'
export const EMPTY_CART                             = 'EMPTY_CART'
/**
* Order Actions
**/
export const START_ORDER_RETRIEVE                   = 'START_ORDER_RETRIEVE'
export const ORDER_RETRIEVED_SUCCESSFULLY           = 'ORDER_RETRIEVED_SUCCESSFULLY'
export const ORDER_RETRIEVE_FAILED                  = 'ORDER_RETRIEVE_FAILED'
export const START_ORDER_CREATE                     = 'START_ORDER_CREATE'
export const ORDER_CREATED_SUCCESSFULLY             = 'ORDER_CREATED_SUCCESSFULLY'
export const ORDER_CREATE_FAILED                    = 'ORDER_CREATE_FAILED'
/**
* Payment Actions
**/
export const START_PAYMENT_SETTINGS_INSERT           = 'START_PAYMENT_SETTINGS_INSERT'
export const PAYMENT_SETTINGS_INSERTED_SUCCESSFULLY  = 'PAYMENT_SETTINGS_INSERTED_SUCCESSFULLY'
export const PAYMENT_SETTINGS_INSERT_FAILED          = 'PAYMENT_SETTINGS_INSERT_FAILED'
export const START_PAYMENT_SETTINGS_RETRIEVE         = 'START_PAYMENT_SETTINGS_RETRIEVE'
export const PAYMENT_SETTINGS_RETRIEVED_SUCCESSFULLY = 'PAYMENT_SETTINGS_RETRIEVED_SUCCESSFULLY'
export const PAYMENT_SETTINGS_RETRIEVE_FAILED        = 'PAYMENT_SETTINGS_RETRIEVE_FAILED'
/**
* Shipping Actions
**/
export const START_SHIPPING_OPTION_RETRIEVE         = 'START_SHIPPING_OPTION_RETRIEVE'
export const SHIPPING_OPTION_RETRIEVED_SUCCESSFULLY = 'SHIPPING_OPTION_RETRIEVED_SUCCESSFULLY'
export const SHIPPING_OPTION_RETRIEVE_FAILED        = 'SHIPPING_OPTION_RETRIEVE_FAILED'
export const START_SHIPPING_OPTION_CREATE           = 'START_SHIPPING_OPTION_CREATE'
export const SHIPPING_OPTION_CREATED_SUCCESSFULLY   = 'SHIPPING_OPTION_CREATED_SUCCESSFULLY'
export const SHIPPING_OPTION_CREATE_FAILED          = 'SHIPPING_OPTION_CREATE_FAILED'
export const START_SHIPPING_OPTION_REMOVE           = 'START_SHIPPING_OPTION_REMOVE'
export const SHIPPING_OPTION_REMOVED_SUCCESSFULLY   = 'SHIPPING_OPTION_REMOVED_SUCCESSFULLY'
export const SHIPPING_OPTION_REMOVE_FAILED          = 'SHIPPING_OPTION_REMOVE_FAILED'
export const LOAD_SHIPPING_OPTION                   = 'LOAD_SHIPPING_OPTION'
export const START_SHIPPING_OPTION_UPDATE           = 'START_SHIPPING_OPTION_UPDATE'
export const SHIPPING_OPTION_UPDATED_SUCCESSFULLY   = 'SHIPPING_OPTION_UPDATED_SUCCESSFULLY'
export const SHIPPING_OPTION_UPDATE_FAILED          = 'SHIPPING_OPTION_UPDATE_FAILED'
/**
* Settings Actions
**/
export const START_SETTINGS_INSERT                  = 'START_SETTINGS_INSERT'
export const SETTINGS_INSERTED_SUCCESSFULLY         = 'SETTINGS_INSERTED_SUCCESSFULLY'
export const SETTINGS_INSERT_FAILED                 = 'SETTINGS_INSERT_FAILED'
export const START_SETTINGS_RETRIEVE                = 'START_SETTINGS_RETRIEVE'
export const SETTINGS_RETRIEVED_SUCCESSFULLY        = 'SETTINGS_RETRIEVED_SUCCESSFULLY'
export const SETTINGS_RETRIEVE_FAILED               = 'SETTINGS_RETRIEVE_FAILED'
