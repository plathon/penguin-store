import React, { Component } from 'react'
import { connect } from 'react-redux'

import OrdersPage from '../components/order/OrdersPageComponent'

class OrdersComponent extends Component {
  render () {
    return <OrdersPage orders={this.props.orders}/>
  }
}

function mapStateToProps (state) {
  return { orders: state.order.items }
}

export default connect(mapStateToProps, null)(OrdersComponent)
