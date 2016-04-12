import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { oauthCallback } from '../../actions/user'

import OAuthCallbackPage from '../../components/auth/OAuthCallbackPageComponent'

class OAuthCallbackContainer extends Component {
  render () {
    return <OAuthCallbackPage provider={this.props.params.provider}
                              params={this.props.location.query}
                              oauthCallback={this.props.oauthCallback}/>
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { oauthCallback }, dispatch )
}

export default connect(null, mapDispatchToProps)(OAuthCallbackContainer)
