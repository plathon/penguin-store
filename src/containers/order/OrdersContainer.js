import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { retrieveOrders } from '../../actions/order'

import OrdersPage from '../../components/order/OrdersPageComponent'

class OrdersComponent extends Component {
  componentWillMount () {
    if (!this.props.orders.length)
      this.props.retrieveOrders()
  }
  render () {
    return <OrdersPage orders={this.props.orders}/>
  }
}

function mapStateToProps (state) {
  return { orders: state.order.items }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ retrieveOrders }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersComponent)
