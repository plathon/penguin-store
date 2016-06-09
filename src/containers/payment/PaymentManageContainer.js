import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertPaymentSettings, retrievePaymentSettings } from '../../actions/payment'

import PaymentPage from '../../components/payment/PaymentPageComponent'

class PaymentManageContainer extends Component {
  componentWillMount () {
    if (!Object.keys(this.props.paymentSettings).length)
      this.props.retrievePaymentSettings();
  }

  render () {
    return <PaymentPage insertPaymentSettings={this.props.insertPaymentSettings}
                                isLoading={this.props.isLoading}/>
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { insertPaymentSettings, retrievePaymentSettings }, dispatch )
}

function mapStateToProps (state) {
  return {
    isLoading: state.payment.is_loading,
    paymentSettings: state.payment.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentManageContainer)
