import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { retrieveSettings, insertSettings } from '../../actions/settings'

import SettingsPage from '../../components/settings/SettingsPageComponent'

class SettingsContainer extends Component {
  componentWillMount () {
    if (!this.props.retrieved)
      this.props.retrieveSettings()
  }

  render () {
    return <SettingsPage insertSettings={this.props.insertSettings}
                         isLoading={this.props.isLoading}/>
  }
}

function mapStateToProps (state) {
  return {
    isLoading: state.settings.is_loading,
    retrieved: state.settings.retrieved
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { retrieveSettings, insertSettings }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
