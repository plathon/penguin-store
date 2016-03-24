import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertPaymentSettings } from '../../actions/payment'

import PaymentPage from '../../components/payment/PaymentPageComponent'

class PaymentManageContainer extends Component {
  render () {
    return <PaymentPage insertPaymentSettings={this.props.insertPaymentSettings}
                                isLoading={this.props.isLoading}/>
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { insertPaymentSettings }, dispatch )
}

function mapStateToProps (state) {
  return { isLoading: state.payment.is_loading }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentManageContainer)
