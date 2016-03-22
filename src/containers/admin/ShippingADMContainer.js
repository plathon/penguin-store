import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShippingSettingsPage from '../../components/shipping/admin/ShippingSettingsPageComponent'

class ShippingADMContainer extends Component {
  render () {
    return <ShippingSettingsPage shippingOptions={this.props.shippingOptions}/>
  }
}

function mapStateToProps (state) {
  return { shippingOptions: state.shipping.items }
}

export default connect(mapStateToProps, null)(ShippingADMContainer)
