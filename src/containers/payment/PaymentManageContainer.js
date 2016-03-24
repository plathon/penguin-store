import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertPaymentSettings } from '../../actions/payment'

import PaymentSettingsPage from '../../components/payment/admin/PaymentSettingsPageComponent'

class PaymentManageContainer extends Component {
  render () {
    return <PaymentSettingsPage insertPaymentSettings={this.props.insertPaymentSettings}
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
