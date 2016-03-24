import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { checkout } from '../../actions/order'

import CheckoutPage from '../../components/checkout/CheckoutPageComponent'

class CheckoutContainer extends Component {
  render () {
    return (
      <CheckoutPage addresses={this.props.addresses}
                    cartItems={this.props.cartItems}
                    cartTotal={this.props.cartTotal}
                    checkout={this.props.checkout}
                    isLoading={this.props.isLoading}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    addresses: state.address.items,
    cartItems: state.cart.items,
    cartTotal: state.cart.total,
    isLoading: state.order.isLoading
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { checkout }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)
