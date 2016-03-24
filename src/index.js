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
import Auth from './containers/AuthContainer'
import Resgister from './containers/RegisterContainer'
import ResetPassword from './containers/ResetPasswordContainer'
import Products from './containers/ProductsContainer'
import Product from './containers/ProductContainer'
import User from './containers/UserContainer'
import Addresses from './containers/AddressesContainer'
import Address from './containers/AddressContainer'
import Cart from './containers/CartContainer'
import Orders from './containers/OrdersContainer'
import Checkout from './containers/CheckoutContainer'

import ProductADM from './containers/admin/ProductADMContainer'
import CategoryADM from './containers/admin/CategoryADMContainer'
import PaymentADM from './containers/admin/PaymentADMContainer'
import ShippingOptionsADM from './containers/admin/ShippingOptionsADMContainer'
import ShippingADM from './containers/admin/ShippingADMContainer'
import Settings from './containers/admin/SettingsADMContainer'

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
          <Route path="address" component={UserIsAuthenticated(Address)}/>
          <Route path="orders" component={UserIsAuthenticated(Orders)}/>
          <Route path="checkout" component={UserIsAuthenticated(Checkout)}/>
        </Route>
        <Route path="admin">
          <Route path="products/new" component={UserIsAuthenticated(UserIsAdmin(ProductADM))}/>
          <Route path="products/:product/edit" component={UserIsAuthenticated(UserIsAdmin(ProductADM))}/>
          <Route path="categories" component={UserIsAuthenticated(UserIsAdmin(CategoryADM))}/>
          <Route path="settings">
            <IndexRoute component={UserIsAuthenticated(UserIsAdmin(Settings))}/>
            <Route path="payment" component={UserIsAuthenticated(UserIsAdmin(PaymentADM))}/>
            <Route path="shipping-options" component={UserIsAuthenticated(UserIsAdmin(ShippingOptionsADM))}/>
            <Route path="shipping-options/new" component={UserIsAuthenticated(UserIsAdmin(ShippingADM))}/>
            <Route path="shipping-options/:shipping/edit" component={UserIsAuthenticated(UserIsAdmin(ShippingADM))}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
)
