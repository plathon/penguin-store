import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertAddress } from '../../actions/address'

import AddressPage from '../../components/address/AddressPageComponent'

class AddressManageContainer extends Component {
  render () {
    return <AddressPage insertAddress={this.props.insertAddress}
                        isLoading={this.props.isLoading}/>
  }
}

function mapStateToProps (state) {
  return {
    isLoading: state.address.is_loading,
    addresses: state.address.items
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { insertAddress }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressManageContainer)
