import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistory, routeReducer, routeActions } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import { UserAuthWrapper } from 'redux-auth-wrapper'
import * as reducers from './reducers'

import App from './components/App'
import Home from './components/Home'
import Auth from './containers/auth/AuthContainer'
import Resgister from './containers/auth/RegisterContainer'
import ResetPassword from './containers/auth/ResetPasswordContainer'
import Products from './containers/product/ProductsContainer'
import Product from './containers/product/ProductContainer'
import User from './containers/user/UserContainer'
import Addresses from './containers/address/AddressesContainer'
import AddressManage from './containers/address/AddressManageContainer'
import Cart from './containers/cart/CartContainer'
import Orders from './containers/order/OrdersContainer'
import Checkout from './containers/checkout/CheckoutContainer'

import ProductManage from './containers/product/ProductManageContainer'
import CategoryManage from './containers/category/CategoryManageContainer'
import PaymentManage from './containers/payment/PaymentManageContainer'
import ShippingOptions from './containers/shipping/ShippingOptionsContainer'
import ShippingManage from './containers/shipping/ShippingManageContainer'
import Settings from './containers/settings/SettingsContainer'

const history = browserHistory
const synchronizedHistory = syncHistory(history)
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer,
  form: formReducer
})

const enhancer = compose(
 applyMiddleware(synchronizedHistory),
 applyMiddleware(thunk),
 window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, enhancer)
synchronizedHistory.listenForReplays(store)

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.data,
  redirectAction: routeActions.replace,
  failureRedirectPath: 'signin',
  wrapperDisplayName: 'UserIsAuthenticated'
})

const UserIsAdmin = UserAuthWrapper({
  authSelector: state => state.user.data,
  redirectAction: routeActions.replace,
  failureRedirectPath: 'signin',
  wrapperDisplayName: 'UserIsAdmin',
  predicate: user => user.type === 'admin',
  allowRedirectBack: false
})

render(
  <div>
    <Provider store={store}>
      <Router history={history}>

        <Route path="signin" component={Auth}/>
        <Route path="signup" component={Resgister}/>
        <Route path="reset-password" component={ResetPassword}/>

        <Route path="/" component={Home}>
          <IndexRoute component={Products}/>
        </Route>

        <Route path="/" component={App}>
          <Route path="product/:product" component={Product}/>
          <Route path="cart" component={Cart}/>
          <Route path="user" component={UserIsAuthenticated(User)}/>
          <Route path="addresses" component={UserIsAuthenticated(Addresses)}/>
          <Route path="address" component={UserIsAuthenticated(AddressManage)}/>
          <Route path="orders" component={UserIsAuthenticated(Orders)}/>
          <Route path="checkout" component={UserIsAuthenticated(Checkout)}/>
        </Route>

        <Route path="admin">

          <Route path="products/new" component={UserIsAuthenticated(UserIsAdmin(ProductManage))}/>
          <Route path="products/:product/edit" component={UserIsAuthenticated(UserIsAdmin(ProductManage))}/>
          <Route path="categories" component={UserIsAuthenticated(UserIsAdmin(CategoryManage))}/>

          <Route path="settings">
            <IndexRoute component={UserIsAuthenticated(UserIsAdmin(Settings))}/>
            <Route path="payment" component={UserIsAuthenticated(UserIsAdmin(PaymentManage))}/>
            <Route path="shipping-options" component={UserIsAuthenticated(UserIsAdmin(ShippingOptions))}/>
            <Route path="shipping-options/new" component={UserIsAuthenticated(UserIsAdmin(ShippingManage))}/>
            <Route path="shipping-options/:shipping/edit" component={UserIsAuthenticated(UserIsAdmin(ShippingManage))}/>
          </Route>

        </Route>

      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
)
