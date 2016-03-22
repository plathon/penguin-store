import React from 'react'
import { Link } from 'react-router'

export default function TopBarMenuComponent (props) {
  if (Object.keys(props.user).length) {
    return (
      <div className="header-right header-menu">
        <span className="header-item">
          <Link to="/" className="is-active">Home</Link>
        </span>
        <span className="header-item">
          <Link to="cart" className="is-active">My Shopcart</Link>
        </span>
        <span className="header-item">
          <Link to="orders" className="is-active">My orders</Link>
        </span>
        <span className="header-item">
          <Link to="addresses" className="is-active">My Addresses</Link>
        </span>
        <span className="header-item">
          <Link to="user" className="is-active">My account</Link>
        </span>
        <span className="header-item">
          <Link to="admin/settings/payment" className="is-active">Payments</Link>
        </span>
        <span className="header-item">
          <Link to="admin/settings/shipping" className="is-active">Shipping</Link>
        </span>
        <span className="header-item"><a className="button is-primary is-inverted is-outlined" onClick={props.logoutUser}>Logout</a></span>
      </div>
    )
  } else {
    return (
      <div className="header-right header-menu">
        <span className="header-item">
          <Link to="cart" className="is-active">My Shopcart</Link>
        </span>
        <span className="header-item">
          <Link to="signin" className="button is-primary is-inverted">Sign In</Link>
        </span>
      </div>
    )
  }
}
