import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertShippingOption, updateShippingOption } from '../../actions/shipping'

import ShippingPage from '../../components/shipping/admin/ShippingPageComponent'

class ShippingADMContainer extends Component {
  render () {
    return <ShippingPage updateShippingOption={this.props.updateShippingOption}
                         insertShippingOption={this.props.insertShippingOption}
                         shippingIndex={this.props.params.shipping}
                         isLoading={this.props.isLoading}/>
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( {
    insertShippingOption,
    updateShippingOption
  }, dispatch )
}

function mapStateToProps (state) {
  return { isLoading: state.shipping.is_loading }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShippingADMContainer)
