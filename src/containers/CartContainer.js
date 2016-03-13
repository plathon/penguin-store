import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeCartProduct, updateCartProduct, emptyCart } from '../actions/cart'

import CartPage from '../components/cart/CartPageComponent'

class CartComponent extends Component {
  render () {
    return (
      <CartPage cartItems={this.props.cartItems}
                cartTotal={this.props.cartTotal}
                removeCartProduct={this.props.removeCartProduct}
                updateCartProduct={this.props.updateCartProduct}
                emptyCart={this.props.emptyCart}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    cartItems: state.cart.items,
    cartTotal: state.cart.total
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { removeCartProduct, updateCartProduct, emptyCart }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent)
