import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { retrieveSettings, insertSettings } from '../../actions/settings'

import SettingsPage from '../../components/settings/SettingsPageComponent'

class SettingsContainer extends Component {
  componentWillMount () {
    if (!Object.keys(this.props.settings).length) {
      this.props.retrieveSettings()
    }
  }

  render () {
    return <SettingsPage insertSettings={this.props.insertSettings}
                         isLoading={this.props.isLoading}/>
  }
}

function mapStateToProps (state) {
  return {
    isLoading: state.settings.is_loading,
    settings: state.settings.data
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { retrieveSettings, insertSettings }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
