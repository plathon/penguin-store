import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertAddress } from '../actions/address'

import AddressesPage from '../components/address/AddressesPageComponent'

class AddressContainer extends Component {
  render () {
    return <AddressesPage addresses={this.props.addresses}/>
  }
}

function mapStateToProps (state) {
  return { addresses: state.address.items }
}

export default connect(mapStateToProps, null)(AddressContainer)
