import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertSettings } from '../../actions/settings'

import SettingsPage from '../../components/settings/SettingsPageComponent'

class SettingsContainer extends Component {
  render () {
    return <SettingsPage insertSettings={this.props.insertSettings}
                         isLoading={this.props.isLoading}/>
  }
}

function mapStateToProps (state) {
  return { isLoading: state.settings.is_loading }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { insertSettings }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
