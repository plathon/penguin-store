import React, { Component } from 'react'
import { connect } from 'react-redux'

import CheckoutPage from '../components/checkout/CheckoutPageComponent'

class CheckoutContainer extends Component {
  render () {
    return (
      <CheckoutPage addresses={this.props.addresses}
                    cartItems={this.props.cartItems}
                    cartTotal={this.props.cartTotal}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    addresses: state.address.items,
    cartItems: state.cart.items,
    cartTotal: state.cart.total
  }
}

export default connect(mapStateToProps, null)(CheckoutContainer)
