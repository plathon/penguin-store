import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeAddress, findAddress } from '../../actions/address'

import AddressesPage from '../../components/address/AddressesPageComponent'

class AddressesContainer extends Component {
  componentWillMount () {
    if (!this.props.addresses.length)
      this.props.findAddress();
  }

  render () {
    return <AddressesPage addresses={this.props.addresses}
                          removeAddress={this.props.removeAddress}
                          isLoading={this.props.isLoading}/>
  }
}

function mapStateToProps (state) {
  return {
    addresses: state.address.items,
    isLoading: state.address.is_loading
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { removeAddress, findAddress }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressesContainer)
