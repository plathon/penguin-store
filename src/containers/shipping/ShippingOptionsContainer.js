import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeShippingOption, retrieveShippingOptions } from '../../actions/shipping'

import ShippingOptionsPage from '../../components/shipping/ShippingOptionsPageComponent'

class ShippingOptionsContainer extends Component {
  componentWillMount () {
    if (!this.props.shippingOptions.length) {
      this.props.retrieveShippingOptions()
    }
  }

  render () {
    return <ShippingOptionsPage shippingOptions={this.props.shippingOptions}
                                removeShippingOption={this.props.removeShippingOption}
                                isLoading={this.props.isLoading}/>
  }
}

function mapStateToProps (state) {
  return {
    shippingOptions: state.shipping.items,
    isLoading: state.shipping.is_loading
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { removeShippingOption, retrieveShippingOptions }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShippingOptionsContainer)
